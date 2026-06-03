
import React from "react";
import { motion } from "framer-motion";
import TextType from "../components/animacion";
import TestimoniosCarousel from "../components/TestimoniosCarousel";
import fondoN from "../assets/fondoN.jpg";

const DesarrolloWebBanner: React.FC = () => {
  return (
    <div id="desarrollo-software" className="font-sans">
      {/* ====================== BANNER PRINCIPAL ====================== */}
      <header
        className="relative w-full h-64 md:h-80 flex flex-col items-center justify-center text-white bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-sky-400">
            <TextType
              text={["Desarrollo de Software"]}
              typingSpeed={70}
              pauseDuration={2000}
              loop={false}
              showCursor={false}
            />
          </h1>
        </div>
      </header>

      {/* ====================== SECCIÓN DE CONTENIDO - DESARROLLO WEB ====================== */}
      <section className="relative overflow-hidden bg-white py-14 md:py-20 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Texto descriptivo */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group h-full rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-500 mb-6 text-center tracking-wide">
              Desarrollo Web Personalizado
            </h2>

            <div className="space-y-4 text-slate-700 text-[15px] md:text-base leading-7 text-left">
              <p>
                Diseñamos sitios web únicos, funcionales y alineados con los objetivos de cada negocio. Analizamos tus necesidades para convertirlas en una plataforma digital clara, moderna y coherente con la identidad de tu marca.
              </p>

              <p>
                Implementamos tecnologías actuales para ofrecer velocidad, seguridad, diseño responsive y una navegación intuitiva en móviles, tabletas y computadoras. Nuestro enfoque mejora la experiencia del usuario, fortalece la presencia digital y favorece la conversión de visitantes en clientes.
              </p>
            </div>
          </motion.div>

          {/* Imagen descriptiva */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group h-full rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
          >
            <div className="relative h-full min-h-[320px] md:min-h-[380px] overflow-hidden rounded-2xl">
              <img
                src="https://i.postimg.cc/gc81zB8N/Desarrollo-de-un-sitio-web-Como-es-el-proceso.jpg"
                alt="Desarrollo Web Personalizado"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== SECCIÓN DE MANTENIMIENTO Y SOPORTE ====================== */}
      <section className="relative overflow-hidden bg-black text-white py-14 md:py-20 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Imagen de Mantenimiento y Soporte */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group h-full rounded-3xl border border-white/10 bg-neutral-950 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_24px_75px_rgba(6,182,212,0.14)]"
          >
            <div className="relative h-full min-h-[320px] md:min-h-[380px] overflow-hidden rounded-2xl">
              <img
                src="https://i.postimg.cc/1XVFSqfj/soporte-web-agradable.jpg"
                alt="Mantenimiento y Soporte"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
          </motion.div>

          {/* Texto de Mantenimiento y Soporte */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group h-full rounded-3xl border border-white/10 bg-neutral-950 p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_24px_75px_rgba(6,182,212,0.14)]"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-6 text-center tracking-wide">
              Mantenimiento y Soporte
            </h2>

            <div className="space-y-4 text-white/85 text-[15px] md:text-base leading-7 text-left">
              <p>
                Brindamos mantenimiento continuo y soporte técnico para que tu sitio web se mantenga actualizado, seguro y estable. Gestionamos mejoras, copias de seguridad, revisión de funcionamiento y monitoreo preventivo para proteger tu plataforma.
              </p>

              <p>
                Nuestro enfoque proactivo permite detectar incidencias antes de que afecten la experiencia del usuario. Atendemos los requerimientos técnicos con orden y rapidez, reduciendo interrupciones y asegurando que tu negocio mantenga una presencia digital confiable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== SECCIÓN DE DISEÑO UX/UI ====================== */}
      <section className="relative overflow-hidden bg-white py-14 md:py-20 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Texto Descriptivo UX/UI */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group h-full rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-500 mb-6 text-center tracking-wide">
              Diseño UX/UI
            </h2>

            <div className="space-y-4 text-slate-700 text-[15px] md:text-base leading-7 text-left">
              <p>
                Creamos interfaces intuitivas, modernas y visualmente atractivas que facilitan la interacción del usuario. Nuestro diseño combina estética, funcionalidad y claridad para que cada sección del sitio tenga un propósito definido.
              </p>

              <p>
                Organizamos la información de forma estratégica, cuidando detalles como navegación, estructura, velocidad y accesibilidad. Así logramos una experiencia profesional, fluida y orientada a generar confianza, satisfacción y mejores resultados comerciales.
              </p>
            </div>
          </motion.div>

          {/* Imagen Descriptiva UX/UI */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group h-full rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
          >
            <div className="relative h-full min-h-[320px] md:min-h-[380px] overflow-hidden rounded-2xl">
              <img
                src="https://i.postimg.cc/9FTZ0KBg/2149749873-1.jpg"
                alt="Diseño UX/UI"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== SECCIÓN DE INTEGRACIÓN DE FUNCIONALIDADES ====================== */}
      <section className="relative overflow-hidden bg-black text-white py-14 md:py-20 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Imagen de Integración */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group h-full rounded-3xl border border-white/10 bg-neutral-950 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_24px_75px_rgba(6,182,212,0.14)]"
          >
            <div className="relative h-full min-h-[320px] md:min-h-[380px] overflow-hidden rounded-2xl">
              <img
                src="https://i.postimg.cc/zvwDZCn7/Ventajas-de-la-Integracion-de-Sistemas-y-Datos-scaled-1-2048x1018.webp"
                alt="Integración de Funcionalidades"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
          </motion.div>

          {/* Texto de Integración */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group h-full rounded-3xl border border-white/10 bg-neutral-950 p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_24px_75px_rgba(6,182,212,0.14)]"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-6 text-center tracking-wide">
              Integración de Funcionalidades
            </h2>

            <div className="space-y-4 text-white/85 text-[15px] md:text-base leading-7 text-left">
              <p>
                Integramos funcionalidades que optimizan la operación de tu negocio, como formularios de contacto, chatbots, gestores de contenido, CRM y herramientas de automatización. Cada solución se adapta a tus procesos y objetivos digitales.
              </p>

              <p>
                Priorizamos compatibilidad, rendimiento y facilidad de uso en todos los dispositivos. Con estas integraciones, tu sitio web deja de ser solo una vitrina y se convierte en una herramienta activa para mejorar la gestión, la atención y el crecimiento de tu empresa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Carrusel de clientes al final */}
      <TestimoniosCarousel />
    </div>
  );
};

export default DesarrolloWebBanner;
