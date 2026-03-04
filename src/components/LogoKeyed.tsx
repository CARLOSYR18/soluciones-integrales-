import React, { useEffect, useMemo, useState } from "react";

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

type Props = {
  src: string;
  alt: string;
  className?: string;
  threshold?: number; // 0..255 (más alto = quita más negro)
  softness?: number;  // 0..1   (suaviza bordes)
};

export default function LogoKeyed({
  src,
  alt,
  className = "",
  threshold = 55,
  softness = 0.22,
}: Props) {
  const [outSrc, setOutSrc] = useState<string>(src);

  const cacheKey = useMemo(
    () => `keyed:${src}:t${threshold}:s${softness}`,
    [src, threshold, softness]
  );

  useEffect(() => {
    let cancelled = false;

    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      setOutSrc(cached);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous"; // ⚠️ si no hay CORS, fallará y usamos src normal

    img.onload = () => {
      if (cancelled) return;

      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;

      for (let i = 0; i < d.length; i += 4) {
        const r = d[i];
        const g = d[i + 1];
        const b = d[i + 2];

        const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        if (lum <= threshold) {
          d[i + 3] = 0;
        } else if (softness > 0) {
          const t = (lum - threshold) / (255 - threshold);
          const a = clamp01(t / softness);
          d[i + 3] = Math.round(d[i + 3] * a);
        }
      }

      ctx.putImageData(imageData, 0, 0);

      const dataUrl = canvas.toDataURL("image/png");
      sessionStorage.setItem(cacheKey, dataUrl);
      setOutSrc(dataUrl);
    };

    img.onerror = () => {
      // Si CORS falla, no rompemos: dejamos el logo normal
      if (!cancelled) setOutSrc(src);
    };

    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [src, threshold, softness, cacheKey]);

  return <img src={outSrc} alt={alt} className={className} draggable={false} loading="lazy" />;
}