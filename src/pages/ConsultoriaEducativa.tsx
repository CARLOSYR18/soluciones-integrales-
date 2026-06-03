
 import React from "react";
import { motion } from "framer-motion";
import fondoN from "../assets/fondoN.jpg";
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";
import TestimoniosCarousel from "../components/TestimoniosCarousel";

const ConsultoriaEducativa = () => {
  return (
    <div className="font-sans">
      {/* Hero con fondo */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.h1 className="relative z-10 text-center text-4xl md:text-5xl font-bold text-cyan-500">
          <TextType
            text={["Consultoría Educativa"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
          />
        </motion.h1>
      </div>

      {/* Contenido principal */}
      <section className="relative overflow-hidden bg-white py-14 md:py-20 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Card de imagen */}
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
                src="https://i.postimg.cc/vZYnsnGr/educativa.jpg"
                alt="Consultoría Educativa"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />
            </div>
          </motion.div>

          {/* Card de texto */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
            className="group h-full rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-cyan-500 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Educación
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-500 mb-6 text-center tracking-wide">
              Consultoría Educativa
            </h2>

            <div className="space-y-4 text-slate-700 text-[15px] md:text-base leading-7 text-left">
              <p>
                Brindamos asesoría educativa para instituciones, docentes y estudiantes que buscan mejorar sus procesos académicos, fortalecer la calidad formativa y responder a los desafíos actuales de la educación moderna.
              </p>

              <p>
                Nuestro enfoque integra diseño curricular, formación docente, tecnología educativa y evaluación de programas. Trabajamos de manera cercana y estratégica para crear soluciones aplicadas que generen impacto real en la comunidad educativa.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Diseño curricular",
                "Formación docente",
                "Tecnología educativa",
                "Evaluación de programas",
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

            <div className="mt-7 h-[3px] w-14 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-24" />
          </motion.div>
        </div>

        <ScrollButton />
      </section>

      {/* Carrusel de opiniones */}
      <TestimoniosCarousel />
    </div>
  );
};

export default ConsultoriaEducativa;



