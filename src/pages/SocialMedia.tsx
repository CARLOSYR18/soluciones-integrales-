
import React from "react";
import { motion } from "framer-motion";
import fondoN from "../assets/fondoN.jpg";
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";
import TestimoniosCarousel from "../components/TestimoniosCarousel";

const CYAN = "#06b6d4";

interface ServiceSectionProps {
  title: string;
  badge: string;
  paragraphs: string[];
  pills: string[];
  images: {
    src: string;
    alt: string;
  }[];
  dark?: boolean;
  reverse?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  badge,
  paragraphs,
  pills,
  images,
  dark = false,
  reverse = false,
}) => {
  const sectionBg = dark ? "bg-black text-white" : "bg-white text-slate-900";

  const textCard = dark
    ? "border-white/10 bg-zinc-950 text-slate-200 shadow-[0_22px_70px_rgba(0,0,0,0.45)]"
    : "border-slate-200 bg-white text-slate-700 shadow-[0_18px_55px_rgba(15,23,42,0.10)]";

  const imageCard = dark
    ? "border-white/10 bg-zinc-950 shadow-[0_22px_70px_rgba(0,0,0,0.45)]"
    : "border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.10)]";

  return (
    <section className={`relative overflow-hidden px-5 py-16 md:px-10 lg:px-16 md:py-20 ${sectionBg}`}>
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div
        className={[
          "relative mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12",
          reverse ? "lg:[&>div:first-child]:order-2" : "",
        ].join(" ")}
      >
        {/* Card de texto */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -6 }}
          className={`group flex h-full min-h-[420px] flex-col justify-center rounded-3xl border p-6 transition-all duration-500 md:p-8 ${textCard}`}
        >
          <div
            className={[
              "mb-5 inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] shadow-sm",
              dark
                ? "border-white/15 bg-white/5 text-cyan-500"
                : "border-slate-200 bg-white text-cyan-500",
            ].join(" ")}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            {badge}
          </div>

          <h2 className="mb-6 text-center text-3xl font-extrabold tracking-wide text-cyan-500 md:text-4xl">
            {title}
          </h2>

          <div className="space-y-4 text-left text-[15px] leading-7 md:text-base">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={dark ? "text-slate-200" : "text-slate-700"}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pills.map((pill, index) => (
              <span
                key={`${pill}-${index}`}
                className={[
                  "inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300",
                  dark
                    ? "border-white/15 bg-white/5 text-slate-100 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-[0_10px_28px_rgba(6,182,212,0.22)]"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-[0_10px_28px_rgba(6,182,212,0.22)]",
                ].join(" ")}
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-7 h-[3px] w-14 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-24" />
        </motion.div>

        {/* Card de imágenes */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -6 }}
          className={`group flex h-full min-h-[420px] items-center justify-center rounded-3xl border p-4 transition-all duration-500 ${imageCard}`}
        >
          <div
            className={[
              "grid h-full w-full gap-4",
              images.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1",
            ].join(" ")}
          >
            {images.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="relative min-h-[330px] overflow-hidden rounded-2xl md:min-h-[420px]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    Soluciones Integrales JB
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialMedia: React.FC = () => {
  return (
    <div className="font-sans">
      {/* ====================== HERO PRINCIPAL ====================== */}
      <div
        className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${fondoN})`,
          backgroundSize: "120%",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative z-10 px-4 text-center text-4xl font-bold text-cyan-500 md:text-5xl">
          <TextType
            text={["Social Media"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={[CYAN]}
          />
        </h1>
      </div>

      <ServiceSection
        title="Potencia Tu Presencia en Redes Sociales"
        badge="Social Media"
        paragraphs={[
          "En Soluciones Integrales JB gestionamos redes sociales con una estrategia clara, profesional y orientada a fortalecer la presencia digital de tu marca. Creamos contenido para plataformas clave como Facebook, Instagram y LinkedIn, cuidando el mensaje, diseño y tono de comunicación.",
          "Optimizamos cada publicación para mejorar el alcance, aumentar la interacción y generar oportunidades reales de conexión con tu audiencia. Además, monitoreamos el rendimiento y gestionamos interacciones para mantener una comunicación activa, ordenada y efectiva.",
        ]}
        pills={[
          "Gestión de redes",
          "Contenido estratégico",
          "Mayor interacción",
          "Marca digital",
        ]}
        images={[
          {
            src: "https://i.postimg.cc/wxkJbFpK/gestionar-redes-sociales-desde-computadora-o-celular.png",
            alt: "Gestión profesional de redes sociales",
          },
        ]}
      />

      <ServiceSection
        dark
        reverse
        title="Estrategia Digital para Conectar con tu Audiencia"
        badge="Comunicación Digital"
        paragraphs={[
          "Las redes sociales son una herramienta clave para comunicar, posicionar y fortalecer la relación entre tu empresa y sus clientes. Por ello, desarrollamos publicaciones alineadas con tus objetivos, cuidando la identidad visual y el valor del contenido.",
          "Nuestro enfoque combina planificación, creatividad y análisis para que cada acción tenga un propósito. Buscamos que tu marca gane visibilidad, genere confianza y mantenga una presencia constante en los canales digitales más importantes.",
        ]}
        pills={[
          "Planificación mensual",
          "Diseño de contenido",
          "Análisis de métricas",
          "Comunicación efectiva",
        ]}
        images={[
          {
            src: "https://i.postimg.cc/wxkJbFpK/gestionar-redes-sociales-desde-computadora-o-celular.png",
            alt: "Estrategia digital en redes sociales",
          },
        ]}
      />

      {/* ====================== TESTIMONIOS REUTILIZABLES ====================== */}
      <TestimoniosCarousel />

      <ScrollButton />
    </div>
  );
};

export default SocialMedia;
