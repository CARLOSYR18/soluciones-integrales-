
import React from "react";
import { motion } from "framer-motion";
import TextType from "../components/animacion";
import ScrollButton from "../components/ScrollButton";
import TestimoniosCarousel from "../components/TestimoniosCarousel";

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
    <section className={`relative overflow-hidden px-4 py-14 md:px-8 md:py-20 ${sectionBg}`}>
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div
        className={[
          "relative mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10",
          reverse ? "lg:[&>div:first-child]:order-2" : "",
        ].join(" ")}
      >
        {/* Card de texto */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 35 : -35 }}
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
          initial={{ opacity: 0, x: reverse ? -35 : 35 }}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const DesarrolloWebBanner: React.FC = () => {
  return (
    <div className="font-sans">
      {/* ====================== BANNER PRINCIPAL ====================== */}
      <header className="relative flex h-64 w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center md:h-80">
        <img
          src="https://i.postimg.cc/HxBxQNQF/fondo-N.jpg"
          alt="Fondo desarrollo de sitio web"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-cyan-500 md:text-6xl">
            <TextType
              text={["Desarrollo de Sitio Web"]}
              typingSpeed={70}
              pauseDuration={2000}
              loop={false}
              showCursor={false}
              textColors={[CYAN]}
            />
          </h1>
        </div>
      </header>

      <SectionBlock
        title="Desarrollo Web Personalizado"
        badge="Diseño Web"
        paragraphs={[
          "Diseñamos sitios web únicos, modernos y funcionales, alineados con las necesidades específicas de tu negocio. Nuestro equipo analiza tus objetivos para convertirlos en una plataforma digital profesional que fortalezca tu identidad de marca y mejore la experiencia de tus usuarios.",
          "Implementamos tecnologías actuales para garantizar velocidad, accesibilidad, diseño responsive y navegación intuitiva en computadoras, tablets y dispositivos móviles. Cada proyecto se desarrolla con enfoque en rendimiento, posicionamiento y conversión.",
        ]}
        pills={[
          "Diseño responsive",
          "Identidad digital",
          "Optimización web",
          "Experiencia de usuario",
        ]}
        image={{
          src: "https://i.postimg.cc/gc81zB8N/Desarrollo-de-un-sitio-web-Como-es-el-proceso.jpg",
          alt: "Desarrollo Web Personalizado",
        }}
      />

      <SectionBlock
        dark
        reverse
        title="Mantenimiento y Soporte"
        badge="Soporte Web"
        paragraphs={[
          "Ofrecemos mantenimiento continuo y soporte técnico para que tu sitio web se mantenga actualizado, seguro y operativo. Gestionamos actualizaciones, copias de seguridad, monitoreo de seguridad y corrección de incidencias para proteger tu plataforma digital.",
          "Nuestro enfoque preventivo reduce riesgos, evita interrupciones y asegura una experiencia estable para tus usuarios. Con nuestro acompañamiento, puedes concentrarte en hacer crecer tu negocio mientras tu sitio permanece en buenas manos.",
        ]}
        pills={[
          "Mantenimiento continuo",
          "Copias de seguridad",
          "Monitoreo de seguridad",
          "Soporte técnico",
        ]}
        image={{
          src: "https://i.postimg.cc/1XVFSqfj/soporte-web-agradable.jpg",
          alt: "Mantenimiento y Soporte",
        }}
      />

      <SectionBlock
        title="Diseño UX/UI"
        badge="Experiencia Digital"
        paragraphs={[
          "Creamos interfaces intuitivas, atractivas y fáciles de usar, equilibrando estética, funcionalidad y claridad visual. Nuestro trabajo en UX/UI busca que cada usuario encuentre rápidamente lo que necesita y disfrute una navegación fluida.",
          "Cuidamos la estructura de la información, velocidad de carga, jerarquía visual y accesibilidad para proyectar profesionalismo. Una buena experiencia digital mejora la satisfacción del cliente, fortalece la confianza y aumenta las oportunidades de conversión.",
        ]}
        pills={[
          "Interfaces intuitivas",
          "Diseño funcional",
          "Mayor conversión",
          "Navegación fluida",
        ]}
        image={{
          src: "https://i.postimg.cc/9FTZ0KBg/2149749873-1.jpg",
          alt: "Diseño UX/UI",
        }}
      />

      <SectionBlock
        dark
        reverse
        title="Integración de Funcionalidades"
        badge="Soluciones Digitales"
        paragraphs={[
          "Incorporamos funcionalidades que optimizan los procesos de tu negocio, desde formularios de contacto y chatbots hasta sistemas de gestión de contenido, CRM e integraciones personalizadas. Cada herramienta se adapta a tus necesidades reales.",
          "Nuestras soluciones permiten mejorar la eficiencia operativa, simplificar la gestión y ofrecer una experiencia más completa a tus usuarios. Convertimos tu sitio web en una herramienta activa para impulsar el crecimiento de tu empresa.",
        ]}
        pills={[
          "Formularios inteligentes",
          "Chatbots",
          "CRM y gestión",
          "Integraciones web",
        ]}
        image={{
          src: "https://i.postimg.cc/zvwDZCn7/Ventajas-de-la-Integracion-de-Sistemas-y-Datos-scaled-1-2048x1018.webp",
          alt: "Integración de Funcionalidades",
        }}
      />

      {/* ====================== TESTIMONIOS ====================== */}
      <TestimoniosCarousel />

      <ScrollButton />
    </div>
  );
};

export default DesarrolloWebBanner;
