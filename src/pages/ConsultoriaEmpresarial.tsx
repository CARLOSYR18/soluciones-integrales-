
import React from "react";
import fondoN from "../assets/fondoN.jpg";
import { motion } from "framer-motion";
import TextType from "../components/animacion";
import ScrollButton from "../components/ScrollButton";
import TestimoniosCarousel from "../components/TestimoniosCarousel";

const ConsultoriaEmpresarial = () => {
  return (
    <div className="font-sans bg-white">
      {/* Hero con fondoN.jpg */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Texto animado */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-cyan-500 relative z-10 text-center px-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <TextType
            text={["Consultoría Empresarial"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
          />
        </motion.h1>
      </div>

      {/* Contenido principal */}
      <section className="relative overflow-hidden bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Card de imagen */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="group h-full"
            >
              <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(6,182,212,0.18)]">
                <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl" />

                <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
                  <img
                    src="https://i.postimg.cc/XJqNzY5H/empresarial.jpg"
                    alt="Consultoría Empresarial"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/20 group-hover:text-cyan-200">
                      Estrategia Empresarial
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card de texto */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="group h-full"
            >
              <div className="flex h-full flex-col justify-center rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_24px_70px_rgba(6,182,212,0.18)]">
                <motion.h2
                  className="text-center text-3xl md:text-4xl font-extrabold text-cyan-500 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  Consultoría Empresarial
                </motion.h2>

                <div className="mt-6 space-y-4 text-left">
                  <motion.p
                    className="text-slate-700 text-[15px] md:text-base leading-7 text-justify"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    Te ayudamos a impulsar el crecimiento de tu negocio mediante un acompañamiento estratégico, cercano y orientado a resultados. Analizamos tus procesos, identificamos oportunidades de mejora y diseñamos soluciones sostenibles que se ajusten a la realidad de tu empresa.
                  </motion.p>

                  <motion.p
                    className="text-slate-700 text-[15px] md:text-base leading-7 text-justify"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    viewport={{ once: true }}
                  >
                    Nuestro enfoque integra planificación, eficiencia operativa y gestión del cambio para fortalecer la toma de decisiones, optimizar recursos y preparar a tu organización para nuevos retos comerciales y tecnológicos.
                  </motion.p>
                </div>

                <motion.div
                  className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  viewport={{ once: true }}
                >
                  {[
                    "Análisis estratégico",
                    "Optimización de procesos",
                    "Gestión del cambio",
                    "Planificación financiera",
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-center text-xs sm:text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-[0_10px_25px_rgba(6,182,212,0.25)]"
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          <ScrollButton />
        </div>
      </section>

      {/* Carrusel de opiniones */}
      <TestimoniosCarousel />
    </div>
  );
};

export default ConsultoriaEmpresarial;
