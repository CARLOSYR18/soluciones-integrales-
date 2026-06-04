
import React from 'react';
import fondoN from '../assets/fondoN.jpg';
import ScrollButton from "../components/ScrollButton";
import TestimoniosCarousel from "../components/TestimoniosCarousel";
import { motion } from "framer-motion";
import TextType from "../components/animacion";

const CYAN = "#06b6d4";

interface SectionBlockProps {
  title: string;
  badge: string;
  paragraphs: string[];
  pills: string[];
  image: {
    src: string;
    alt: string;
  };
  dark?: boolean;
  reverse?: boolean;
}

const SectionBlock: React.FC<SectionBlockProps> = ({
  title,
  badge,
  paragraphs,
  pills,
  image,
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

        {/* Card de imagen */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -6 }}
          className={`group flex h-full min-h-[420px] items-center justify-center rounded-3xl border p-4 transition-all duration-500 ${imageCard}`}
        >
          <div className="relative h-full min-h-[340px] w-full overflow-hidden rounded-2xl md:min-h-[420px]">
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
        </motion.div>
      </div>
    </section>
  );
};

const PosicionamientoSEO: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* ====================== BANNER SUPERIOR ====================== */}
      <div
        className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative z-10 px-4 text-center text-4xl font-bold text-cyan-500 md:text-5xl">
          <TextType
            text={['Posicionamiento SEO']}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={[CYAN]}
          />
        </h1>
      </div>

      <SectionBlock
        title="Optimización SEO Fundamental"
        badge="SEO Técnico"
        paragraphs={[
          "En Soluciones Integrales JB desarrollamos estrategias de SEO orientadas a mejorar la visibilidad orgánica de tu sitio web. Realizamos investigación de palabras clave, optimización de títulos, meta descripciones y elementos técnicos que ayudan a los motores de búsqueda a comprender mejor tu contenido.",
          "Nuestro trabajo busca que tu página tenga una base sólida para posicionarse de forma progresiva, siguiendo buenas prácticas de indexación, estructura y rendimiento. Así, tu negocio puede ganar mayor presencia digital y atraer usuarios realmente interesados en tus servicios.",
        ]}
        pills={[
          "Palabras clave",
          "Meta etiquetas",
          "Indexación efectiva",
          "Visibilidad orgánica",
        ]}
        image={{
          src: "https://i.postimg.cc/5y8rCcxT/dd10.jpg",
          alt: "Optimización SEO fundamental",
        }}
      />

      <SectionBlock
        dark
        reverse
        title="Mejora de la Estructura del Sitio"
        badge="Arquitectura Web"
        paragraphs={[
          "Optimizamos la estructura interna del sitio para mejorar la navegación, la accesibilidad y la lectura del contenido por parte de los motores de búsqueda. Ordenamos secciones, enlaces internos y jerarquías para que cada página cumpla una función clara dentro de la estrategia digital.",
          "Una arquitectura web bien organizada facilita que los usuarios encuentren información relevante y que Google comprenda la importancia de cada contenido. Esto mejora la experiencia de navegación y fortalece las posibilidades de posicionamiento.",
        ]}
        pills={[
          "Enlaces internos",
          "Navegación clara",
          "Jerarquía de páginas",
          "Experiencia de usuario",
        ]}
        image={{
          src: "https://i.postimg.cc/ncg8844k/disenadora-web-femenina-papeles-notas-oficina-23-2149749879.jpg",
          alt: "Mejora de la estructura del sitio",
        }}
      />

      <SectionBlock
        title="Contenido Optimizado"
        badge="Estrategia de Contenido"
        paragraphs={[
          "Creamos y optimizamos contenido orientado a conectar con tu audiencia objetivo y mejorar el posicionamiento en buscadores. Cada texto se trabaja con palabras clave relevantes, intención de búsqueda clara y una redacción útil para los usuarios.",
          "El contenido de calidad permite fortalecer la autoridad de tu marca, generar confianza y aumentar el tiempo de permanencia en el sitio. Nuestro enfoque combina valor informativo, estructura profesional y optimización SEO.",
        ]}
        pills={[
          "Contenido estratégico",
          "Intención de búsqueda",
          "Autoridad de marca",
          "Mayor permanencia",
        ]}
        image={{
          src: "https://i.postimg.cc/nc6WSHZZ/medium.avif",
          alt: "Contenido optimizado para SEO",
        }}
      />

      <SectionBlock
        dark
        reverse
        title="Reportes y Seguimiento de Resultados"
        badge="Medición SEO"
        paragraphs={[
          "Realizamos seguimiento de los resultados para evaluar el impacto de las acciones SEO implementadas. Monitoreamos métricas clave como tráfico orgánico, posiciones de palabras clave, comportamiento de usuarios y oportunidades de mejora.",
          "Con reportes claros y recomendaciones prácticas, puedes tomar decisiones informadas para ajustar tu estrategia digital. Nuestro objetivo es que cada acción esté alineada con tus metas comerciales y contribuya al crecimiento sostenible de tu presencia online.",
        ]}
        pills={[
          "Tráfico orgánico",
          "Seguimiento de keywords",
          "Reportes claros",
          "Mejora continua",
        ]}
        image={{
          src: "https://i.postimg.cc/m2FXH098/optimizacion-motores-busqueda-seo-concepto-digital-internet-53876-138498.avif",
          alt: "Reportes y seguimiento SEO",
        }}
      />

      {/* ====================== TESTIMONIOS REUTILIZABLES ====================== */}
      <TestimoniosCarousel />

      <ScrollButton />
    </div>
  );
};

export default PosicionamientoSEO;
