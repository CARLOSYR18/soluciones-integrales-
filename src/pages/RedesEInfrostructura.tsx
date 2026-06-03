
import React from "react";
import fondoN from "../assets/fondoN.jpg";
import { motion } from "framer-motion";
import TextType from "../components/animacion";
import TestimoniosCarousel from "../components/TestimoniosCarousel";

const fadeInUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -45 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 45 },
  visible: { opacity: 1, x: 0 },
};

const pillBase =
  "inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-default";

const RedesEinfroestructura: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans text-slate-800">
      {/* ====================== BANNER SUPERIOR ====================== */}
      <motion.header
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <h1 className="relative z-10 text-center text-4xl md:text-5xl font-extrabold text-cyan-500 tracking-tight px-4">
          <TextType
            text={["Redes e Infraestructura"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
          />
        </h1>
      </motion.header>

      {/* ====================== DISEÑO E IMPLEMENTACIÓN DE REDES ====================== */}
      <section className="relative bg-white py-16 md:py-20 px-5 md:px-10 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Texto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInLeft}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 md:p-9 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)]">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Infraestructura TI
              </div>

              <motion.h2
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
                className="text-2xl md:text-4xl font-extrabold text-cyan-500 mb-5 leading-tight"
              >
                Diseño e Implementación de Redes
              </motion.h2>

              <div className="space-y-4 text-[15px] md:text-base leading-7 text-slate-700 text-justify">
                <p>
                  En Soluciones Integrales JB diseñamos e implementamos redes
                  seguras, eficientes y adaptadas a las necesidades operativas de
                  cada empresa. Desarrollamos soluciones para oficinas, sedes
                  conectadas e infraestructuras avanzadas, priorizando estabilidad,
                  rendimiento y continuidad del servicio.
                </p>

                <p>
                  Nuestro trabajo abarca desde la planificación técnica y la
                  configuración inicial hasta la puesta en marcha y el mantenimiento
                  preventivo. Aplicamos buenas prácticas de seguridad para proteger
                  la información y asegurar una comunicación confiable dentro de la
                  organización.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["Redes seguras", "Alto rendimiento", "Escalabilidad"].map((item) => (
                  <span
                    key={item}
                    className={`${pillBase} border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInRight}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_75px_rgba(15,23,42,0.16)]">
              <div className="relative h-full min-h-[330px] overflow-hidden rounded-2xl">
                <img
                  src="https://i.postimg.cc/FsncgRjB/ingenieros-redes-tableta-tiro-medio-23-2148323447.jpg"
                  alt="Diseño e implementación de redes"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== OPTIMIZACIÓN Y MANTENIMIENTO ====================== */}
      <section className="relative bg-black py-16 md:py-20 px-5 md:px-10 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Imágenes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInLeft}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <div className="group h-full rounded-3xl border border-white/10 bg-neutral-950 p-4 shadow-[0_18px_65px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/45 hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]">
              <div className="grid h-full grid-cols-1 gap-4">
                <div className="relative min-h-[170px] overflow-hidden rounded-2xl">
                  <img
                    src="https://i.postimg.cc/TYh5w6zT/Mantenimiento-de-redes.jpg"
                    alt="Mantenimiento de redes"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                </div>

                <div className="relative min-h-[170px] overflow-hidden rounded-2xl">
                  <img
                    src="https://i.postimg.cc/C1mdhP79/joven-sosteniendo-interruptores-ethernet-cables-23-2148323476.jpg"
                    alt="Optimización de infraestructura de red"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInRight}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <div className="group h-full rounded-3xl border border-white/10 bg-neutral-950 p-7 md:p-9 shadow-[0_18px_65px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/45 hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/75">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Soporte continuo
              </div>

              <motion.h2
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
                className="text-2xl md:text-4xl font-extrabold text-cyan-500 mb-5 leading-tight"
              >
                Optimización y Mantenimiento de Redes
              </motion.h2>

              <div className="space-y-4 text-[15px] md:text-base leading-7 text-white/80 text-justify">
                <p>
                  Brindamos optimización y mantenimiento de redes para mantener
                  la infraestructura operativa, estable y segura. Realizamos
                  monitoreo, revisión técnica y detección temprana de incidencias
                  para reducir riesgos antes de que afecten la productividad.
                </p>

                <p>
                  Aplicamos mantenimiento preventivo, actualizaciones y mejoras
                  continuas que permiten sostener un rendimiento confiable. De
                  esta manera, tu empresa puede trabajar con mayor continuidad y
                  enfocarse en su crecimiento sin interrupciones innecesarias.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["Monitoreo", "Prevención", "Continuidad"].map((item) => (
                  <span
                    key={item}
                    className={`${pillBase} border-white/10 bg-white/5 text-white/80 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== SEGURIDAD EN REDES ====================== */}
      <section className="relative bg-white py-16 md:py-20 px-5 md:px-10 overflow-hidden">
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Texto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInLeft}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 md:p-9 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)]">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Protección digital
              </div>

              <motion.h2
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
                className="text-2xl md:text-4xl font-extrabold text-cyan-500 mb-5 leading-tight"
              >
                Seguridad en Redes
              </motion.h2>

              <div className="space-y-4 text-[15px] md:text-base leading-7 text-slate-700 text-justify">
                <p>
                  La seguridad de la red es un punto clave para proteger la
                  información y la operación diaria de una empresa. Implementamos
                  buenas prácticas, controles técnicos y herramientas de protección
                  para reducir la exposición ante amenazas internas y externas.
                </p>

                <p>
                  Trabajamos con firewalls, detección de intrusos, segmentación y
                  medidas de cifrado para fortalecer la confidencialidad e
                  integridad de los datos. Nuestro enfoque busca una protección
                  continua, ordenada y alineada a las necesidades reales del negocio.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["Firewall", "Cifrado", "Control de accesos"].map((item) => (
                  <span
                    key={item}
                    className={`${pillBase} border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInRight}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_75px_rgba(15,23,42,0.16)]">
              <div className="relative h-full min-h-[330px] overflow-hidden rounded-2xl">
                <img
                  src="https://i.postimg.cc/dV2sQNVv/images-2.jpg"
                  alt="Seguridad en redes"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== CONSULTORÍA EN INFRAESTRUCTURA ====================== */}
      <section className="relative bg-black py-16 md:py-20 px-5 md:px-10 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Imagen */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInLeft}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <div className="group h-full rounded-3xl border border-white/10 bg-neutral-950 p-4 shadow-[0_18px_65px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/45 hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]">
              <div className="relative h-full min-h-[330px] overflow-hidden rounded-2xl">
                <img
                  src="https://i.postimg.cc/Y99M3pfw/diversos-ingenieros-hombres-mujeres-discutiendo-sobre-tableta-digital-sala-servidores-computadoras-c.jpg"
                  alt="Consultoría en infraestructura"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInRight}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <div className="group h-full rounded-3xl border border-white/10 bg-neutral-950 p-7 md:p-9 shadow-[0_18px_65px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/45 hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/75">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Planificación estratégica
              </div>

              <motion.h2
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
                className="text-2xl md:text-4xl font-extrabold text-cyan-500 mb-5 leading-tight"
              >
                Consultoría en Infraestructura
              </motion.h2>

              <div className="space-y-4 text-[15px] md:text-base leading-7 text-white/80 text-justify">
                <p>
                  Nuestro servicio de consultoría en infraestructura está orientado
                  a planificar y ejecutar proyectos de redes con mayor orden,
                  eficiencia y visión de crecimiento. Analizamos el estado actual
                  de tu entorno tecnológico para identificar oportunidades de mejora.
                </p>

                <p>
                  Proponemos soluciones personalizadas que optimizan la
                  infraestructura existente y preparan la red para nuevas demandas.
                  Con este enfoque, tu empresa cuenta con una base tecnológica
                  robusta, escalable y alineada a sus objetivos operativos.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["Diagnóstico", "Mejora continua", "Crecimiento"].map((item) => (
                  <span
                    key={item}
                    className={`${pillBase} border-white/10 bg-white/5 text-white/80 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TestimoniosCarousel />
    </div>
  );
};

export default RedesEinfroestructura;
