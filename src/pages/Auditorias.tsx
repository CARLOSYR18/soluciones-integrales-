
import React from "react";
import fondoN from "../assets/fondoN.jpg";
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";
import TestimoniosCarousel from "../components/TestimoniosCarousel";
import { motion } from "framer-motion";

const CYAN = "#06b6d4";

interface PillProps {
  children: React.ReactNode;
}

const Pill: React.FC<PillProps> = ({ children }) => {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-[0_10px_28px_rgba(6,182,212,0.22)]">
      {children}
    </span>
  );
};

const Auditorias: React.FC = () => {
  return (
    <div className="font-sans">
      {/* ====================== HERO PRINCIPAL ====================== */}
      <div
        className="relative flex h-[300px] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.h1 className="relative z-10 text-center text-4xl font-bold text-cyan-500 md:text-5xl">
          <TextType
            text={["Auditorías Profesionales"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={[CYAN]}
          />
        </motion.h1>
      </div>

      {/* ====================== CONTENIDO PRINCIPAL ====================== */}
      <section className="relative overflow-hidden bg-white px-4 py-14 md:px-8 md:py-20">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Card de imagen */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group h-full rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
          >
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl md:min-h-[420px]">
              <img
                src="https://i.postimg.cc/DZv3FwnW/dd8.jpg"
                alt="Auditorías profesionales"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
            </div>
          </motion.div>

          {/* Card de texto */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group flex h-full flex-col justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)] md:p-8"
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-cyan-500 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Auditoría
            </div>

            <h2 className="mb-6 text-center text-3xl font-extrabold tracking-wide text-cyan-500 md:text-4xl">
              Consultoría en Auditorías
            </h2>

            <div className="space-y-4 text-left text-[15px] leading-7 text-slate-700 md:text-base">
              <p>
                Te ayudamos a fortalecer la transparencia, eficiencia y cumplimiento
                normativo de tu organización mediante auditorías profesionales,
                ordenadas y orientadas a resultados. Revisamos procesos, registros
                y controles internos para identificar riesgos, oportunidades de
                mejora y acciones correctivas claras.
              </p>

              <p>
                Nuestro enfoque combina análisis técnico, asesoría especializada y
                acompañamiento posterior a la auditoría, permitiendo que cada
                evaluación aporte valor real a la gestión de tu negocio y contribuya
                a una toma de decisiones más segura.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Pill>Auditorías financieras</Pill>
              <Pill>Auditorías internas</Pill>
              <Pill>Cumplimiento normativo</Pill>
              <Pill>Asesoría post-auditoría</Pill>
            </div>

            <div className="mt-7 h-[3px] w-14 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-24" />
          </motion.div>
        </div>

        <ScrollButton />
      </section>

      {/* ====================== TESTIMONIOS ====================== */}
      <TestimoniosCarousel />
    </div>
  );
};

export default Auditorias;
