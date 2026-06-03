
import React from "react";
import { motion } from "framer-motion";
import TextType from "../components/animacion";
import ScrollButton from "../components/ScrollButton";
import TestimoniosCarousel from "../components/TestimoniosCarousel";
import fondoN from "../assets/fondoN.jpg";

const ConsultoriaTI: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* ====================== BANNER PRINCIPAL ====================== */}
      <header
        className="relative w-full h-64 md:h-80 flex flex-col items-center justify-center text-white bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Texto animado */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-500">
            <TextType
              text={["Consultoría en TI"]}
              typingSpeed={70}
              pauseDuration={2000}
              loop={false}
              showCursor={false}
            />
          </h1>
        </div>
      </header>

      {/* ====================== CONTENIDO PRINCIPAL ====================== */}
      <section className="relative overflow-hidden bg-white py-14 md:py-20 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group h-full rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
          >
            <div className="relative h-full min-h-[320px] md:min-h-[420px] overflow-hidden rounded-2xl">
              <img
                src="https://i.postimg.cc/nLVG05Xg/qe0pwt6j.png"
                alt="Consultoría en Tecnologías de la Información"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group h-full rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-500 mb-6 text-center tracking-wide">
              Tecnologías de la Información
            </h2>

            <div className="space-y-4 text-slate-700 text-[15px] md:text-base leading-7 text-left">
              <p>
                Brindamos consultoría en TI para ayudar a las empresas a mejorar sus procesos, fortalecer su seguridad digital y adoptar soluciones tecnológicas alineadas con sus objetivos. Analizamos cada necesidad para proponer estrategias claras, eficientes y sostenibles.
              </p>

              <p>
                Nuestro enfoque integra mejora de procesos, implementación de software, seguridad informática y migración a la nube. Acompañamos cada etapa de la transformación digital con asesoría profesional, ordenada y orientada a resultados.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Mejora de procesos",
                "Seguridad informática",
                "Implementación de software",
                "Migración a la nube",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-center text-xs sm:text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-[0_10px_28px_rgba(6,182,212,0.22)]"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <ScrollButton />
      </section>

      {/* ====================== TESTIMONIOS / OPINIONES ====================== */}
      <TestimoniosCarousel />
    </div>
  );
};

export default ConsultoriaTI;