import React from "react";
import quienes from '../assets/quienes.jpg';
import { FaChartLine, FaEye } from "react-icons/fa";
import { FaShieldAlt, FaClock, FaKey, FaLightbulb, FaUsers, FaHeart } from "react-icons/fa";
import ScrollButton from "../components/ScrollButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLock,
  FaCheckCircle,
  FaRocket,
  FaShieldVirus,
  FaHandsHelping,
  FaUserTie,
} from "react-icons/fa";

interface Feature {
  title: string;
  text: string;
  as?: "h3" | "h4";
}

interface Props {
  className?: string;
  heroImage?: string;
  heroImageAlt?: string;
  badges?: { label: string; icon: React.ReactNode }[];
  quienes?: string;
}

const badges = [
  { label: "Confianza", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Velocidad", icon: "" },
  { label: "Calidad", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Seguridad", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Soporte", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Personalizado", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
];

const hero3 = "https://i.postimg.cc/3xpmd24k/image.png"
const hero2 = "https://i.postimg.cc/NjwLCSFn/image.png"
const heroImage = "https://i.postimg.cc/zfGKDvWg/image.png";
const heroImageAlt = "";
const uiImage = "https://solucionesintegralesjb.com/wp-content/uploads/elementor/thumbs/Frame-932-qqow7tfd3r2zohqj4jx9yf23tmjv30p5niiolmvipc.png";
const mockupImage = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/MacBook-Pro-and-iPhone-15-Pro-Mockup-768x787.png";
const videoUrl = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/ES-1.mp4";

const Badge: React.FC<{ label: string; icon: string }> = ({ label, icon }) => (
  <div className="flex items-center gap-2 py-1">
    <img src={icon} alt="check icon" className="h-6 w-6" />
    <span className="text-sm sm:text-base">{label}</span>
  </div>
);

const valores = [
  {
    icon: <FaShieldAlt className="fa-3x" />,
    titulo: "SEGURIDAD",
    descripcion: "Nuestro objetivo es proteger la información como un activo clave de la organización, mediante la implementación de políticas y controles que garanticen su confidencialidad, integridad y disponibilidad.",
  },
  {
    icon: <FaClock className="fa-3x" />,
    titulo: "EXPERIENCIA",
    descripcion: "La calidad de nuestros servicios y soluciones garantizan experiencias basadas en la responsabilidad, el trabajo en equipo y la comunicación con nuestros clientes para lograr los objetivos establecidos.",
  },
  {
    icon: <FaKey className="fa-3x" />,
    titulo: "CONFIANZA",
    descripcion: "Utilizamos la tecnología como socio estratégico, aplicándola como solución de negocio para mantener y aumentar la competitividad de nuestros clientes.",
  },
  {
    icon: <FaLightbulb className="fa-3x" />,
    titulo: "INNOVACIÓN",
    descripcion: "Nuestros equipos están en la continua búsqueda de nuevas soluciones tecnológicas, para integrarlas en los procesos de una organización.",
  },
  {
    icon: <FaUsers className="fa-3x" />,
    titulo: "EQUIPO",
    descripcion: "Somos ágiles, sabemos escuchar, trabajamos de forma rigurosa y transparente con un alto sentido del servicio, buscando siempre satisfacer las expectativas de nuestros clientes.",
  },
  {
    icon: <FaHeart className="fa-3x" />,
    titulo: "VOCACIÓN",
    descripcion: "Nuestra principal motivación es conocer y satisfacer las necesidades, dando respuestas rápidas y eficaces a los desafíos tecnológicos de nuestros clientes.",
  },
];

const caracteristicas = [
  {
    icon: <FaLock className="fa-3x"/>,
    titulo: "CONFIANZA",
    descripcion: "El objetivo es proteger la información como un activo esencial de la organización, mediante la aplicación de políticas y controles de seguridad que garanticen su confidencialidad, integridad y disponibilidad de forma adecuada y continua.",
  },
  {
    icon: <FaCheckCircle className="fa-3x" />,
    titulo: "CALIDAD",
    descripcion: "La calidad de nuestros servicios y soluciones garantizan experiencias basadas en la responsabilidad, el trabajo en equipo y la comunicación con nuestros clientes para lograr los objetivos establecidos.",
  },
  {
    icon: <FaRocket className="fa-3x " />,
    titulo: "VELOCIDAD",
    descripcion: "Utilizamos la tecnología como socio estratégico, aplicándola como solución de negocio para mantener y aumentar la competitividad de nuestros clientes.",
  },
  {
    icon: <FaShieldVirus className="fa-3x" />,
    titulo: "SEGURIDAD",
    descripcion: "Nuestros equipos están en la continua búsqueda de nuevas soluciones tecnológicas, para integrarlas en los procesos de una organización.",
  },
  {
    icon: <FaHandsHelping className="fa-3x" />,
    titulo: "SOPORTE",
    descripcion: "Somos ágiles, sabemos escuchar, trabajamos de forma rigurosa y transparente con un alto sentido del servicio, buscando siempre satisfacer las expectativas de nuestros clientes.",
  },
  {
    icon: <FaUserTie className="fa-3x " />,
    titulo: "PERSONALIZADO",
    descripcion: "Nuestra principal motivación es conocer y satisfacer las necesidades, dando respuestas rápidas y eficaces a los desafíos tecnológicos de nuestros clientes.",
  },
];

const SolucionesIntegralesJBSection: React.FC<Props> = ({ className }) => {
  return (
    <section className={"w-full " + (className || "")}>

      {/* ====================== HERO CON BOTÓN ESTILO C ====================== */}
      <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px] overflow-hidden flex items-center justify-center bg-gray-900">
        <img
          src="https://i.postimg.cc/j58sskRM/Frame-916-1.png"
          alt="Quiénes somos"
          className="absolute w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-end px-4 sm:px-8 md:pr-12">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              y: -8,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            className="bg-gradient-to-br from-black/75 to-black/90 
                      px-6 sm:px-8 md:px-12 py-8 rounded-2xl border-2 border-cyan-500 
                      w-[90%] sm:w-[480px] shadow-2xl hover:shadow-cyan-500/60 
                      transition-shadow duration-300 group relative overflow-hidden
                      text-center md:text-right"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 
                        rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
              >
                <span>
                  <span className="text-white drop-shadow-lg">¿Quiénes</span>{' '}
                  <span className="text-cyan-400 drop-shadow-lg">Somos?</span>
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-cyan-300 text-base sm:text-lg font-semibold mb-6"
              >
                Quiénes Somos y Hacia Dónde Vamos
              </motion.p>

              <Link to="/DesarrolloDeSitiosWeb">
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
                  }}
                  whileTap={{ scale: 0.92 }}
                  className="cta cta-large transition-all duration-300"
                  type="button"
                >
                  <span className="span">Descubre nuestros servicios</span>

                  <span className="second">
                    <svg
                      width="50px"
                      height="20px"
                      viewBox="0 0 66 43"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="arrow" fill="none" fillRule="evenodd">
                        <path
                          className="one"
                          d="M40.15 3.89L43.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L44.67 42.86a.5.5 0 01-.7 0L40.15 39.1a.5.5 0 01.01-.71L56.99 21.86a.5.5 0 000-.71L40.15 3.9z"
                          fill="#fff"
                        />
                        <path
                          className="two"
                          d="M20.15 3.89L23.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L24.67 42.86a.5.5 0 01-.7 0L20.15 39.1a.5.5 0 01.01-.71L36.99 21.86a.5.5 0 000-.71L20.15 3.9z"
                          fill="#fff"
                        />
                        <path
                          className="three"
                          d="M0.15 3.89L3.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L4.67 42.86a.5.5 0 01-.7 0L0.15 39.1a.5.5 0 01.01-.71L16.99 21.86a.5.5 0 000-.71L0.15 3.9z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ====================== RESTO DEL COMPONENTE ====================== */}
      {/* Sección Quiénes Somos - texto e imágenes */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Imágenes */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6"
              >
                <img src={hero2} alt="Automatización" className="w-full rounded-xl object-cover" />
                <div className="mt-4 text-center">
                  <span className="inline-block bg-slate-100 text-slate-700 text-sm px-5 py-2 rounded-full shadow-sm">
                    Automatización • ITSM • ITIL
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6"
              >
                <img src={hero3} alt="Innovación" className="w-full rounded-xl object-cover" />
                <div className="mt-4 text-center">
                  <span className="inline-block bg-slate-100 text-slate-700 text-sm px-5 py-2 rounded-full shadow-sm">
                    Innovación en procesos
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-semibold text-slate-600 shadow-sm w-fit">
                <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                INNOVACIÓN Y TECNOLOGÍA PARA TU CRECIMIENTO
              </div>
              <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-cyan-500">Quiénes Somos</h2>
              <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-xl p-8">
                <p className="text-slate-700 leading-relaxed text-[15px] md:text-base">
                  Somos una empresa de tecnología especializada en automatizar procesos de negocio para mejorar la eficiencia y resultados en diversas áreas de producción. Nos enfocamos en la Gestión de Servicios de TI, ofreciendo soluciones basadas en ITSM e ITIL.
                </p>
                <p className="mt-6 text-slate-700 leading-relaxed text-[15px] md:text-base">
                  Contamos con un equipo de profesionales que optimizan tanto el tiempo como los recursos económicos de nuestros clientes, garantizando un servicio de alta calidad.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 bg-cyan-500 rounded-2xl p-6 text-white shadow-lg"
              >
                <h3 className="text-lg font-semibold">Impulsamos la transformación digital de tu empresa</h3>
                <p className="text-sm mt-2 opacity-90">
                  Implementamos soluciones tecnológicas alineadas a tus objetivos estratégicos, optimizando procesos y garantizando resultados medibles.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================== MISIÓN / VISIÓN (FLIP PRO) ====================== */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="flip-wrap"
          >
            <div className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <div className="front-ring" />
                  <div className="front-content">
                    <div className="front-icon"><FaChartLine /></div>
                    <p className="front-title">MISIÓN</p>
                    <p className="front-subtitle">Pasa el mouse para ver más</p>
                  </div>
                </div>
                <div className="flip-back">
                  <div className="back-glow back-glow-right" />
                  <div className="back-topbar" />
                  <div className="back-content">
                    <div className="back-head">
                      <div className="back-icon"><FaChartLine /></div>
                      <div>
                        <p className="back-kicker">MISIÓN</p>
                        <p className="back-mini">Enfoque, calidad y resultados</p>
                      </div>
                    </div>
                    <div className="back-divider" />
                    <p className="back-text">
                      Trabajamos en el desarrollo e integración de múltiples soluciones basadas en la tecnología, con un equipo de profesionales altamente calificados para cumplir los requerimientos de nuestros clientes, aplicando estándares de calidad, seguridad y responsabilidad social, dentro del costo y plazo previsto.
                    </p>
                    <div className="back-tags">
                      <span className="tag">Calidad</span>
                      <span className="tag">Seguridad</span>
                      <span className="tag">Responsabilidad</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
            className="flip-wrap"
          >
            <div className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <div className="front-ring" />
                  <div className="front-content">
                    <div className="front-icon"><FaEye /></div>
                    <p className="front-title">VISIÓN</p>
                    <p className="front-subtitle">Pasa el mouse para ver más</p>
                  </div>
                </div>
                <div className="flip-back">
                  <div className="back-glow back-glow-left" />
                  <div className="back-topbar" />
                  <div className="back-content">
                    <div className="back-head">
                      <div className="back-icon"><FaEye /></div>
                      <div>
                        <p className="back-kicker">VISIÓN</p>
                        <p className="back-mini">Innovación continua y liderazgo</p>
                      </div>
                    </div>
                    <div className="back-divider" />
                    <p className="back-text">
                      Ser una empresa líder en el desarrollo de soluciones integrales de Tecnología de Información, formando alianzas estratégicas con la innovación tecnológica para lograr los objetivos de nuestros clientes.
                    </p>
                    <div className="back-tags">
                      <span className="tag">Alianzas</span>
                      <span className="tag">Innovación</span>
                      <span className="tag">Liderazgo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Estilos para las tarjetas flip (se mantienen igual) */}
        <style>{`
          .flip-wrap { width: 100%; }
          .flip-card { width: 100%; height: 340px; perspective: 1200px; }
          .flip-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.15); }
          .flip-card:hover .flip-inner { transform: rotateY(180deg); }
          .flip-front, .flip-back { position: absolute; inset: 0; border-radius: 26px; overflow: hidden; backface-visibility: hidden; -webkit-backface-visibility: hidden; border: 4px solid #1e88e5; box-shadow: 0 18px 45px rgba(0,0,0,0.12); }
          .flip-front { background: #000; display: grid; place-items: center; }
          .front-ring { position: absolute; inset: 18px; border-radius: 22px; border: 1px solid rgba(255,255,255,0.08); }
          .front-content { position: relative; text-align: center; padding: 24px; }
          .front-icon { width: 72px; height: 72px; border-radius: 18px; display: grid; place-items: center; margin: 0 auto 14px auto; color: #fff; background: rgba(255,255,255,0.08); font-size: 34px; transition: transform .35s ease; }
          .flip-card:hover .front-icon { transform: translateY(-2px) scale(1.03); }
          .front-title { margin: 0; font-weight: 900; letter-spacing: 0.06em; font-size: 22px; color: #fff; }
          .front-subtitle { margin-top: 10px; font-size: 12px; color: rgba(255,255,255,0.65); }
          .flip-back { background: #ffffff; transform: rotateY(180deg); }
          .back-topbar { position: absolute; inset: 0 0 auto 0; height: 5px; background: #06b6d4; }
          .back-glow { position: absolute; width: 260px; height: 260px; border-radius: 999px; background: rgba(6,182,212,0.18); filter: blur(40px); }
          .back-glow-right { top: -120px; right: -120px; }
          .back-glow-left { bottom: -120px; left: -120px; }
          .back-content { position: relative; height: 100%; padding: 28px 28px 22px 28px; display: flex; flex-direction: column; }
          .back-head { display: flex; gap: 14px; align-items: center; margin-top: 10px; }
          .back-icon { width: 54px; height: 54px; border-radius: 16px; display: grid; place-items: center; background: rgba(6,182,212,0.12); color: #06b6d4; font-size: 26px; box-shadow: 0 10px 20px rgba(0,0,0,0.06); }
          .back-kicker { margin: 0; font-weight: 900; letter-spacing: 0.05em; color: #06b6d4; font-size: 18px; text-transform: uppercase; }
          .back-mini { margin: 2px 0 0 0; font-size: 12px; color: rgba(15,23,42,0.6); font-weight: 600; }
          .back-divider { margin: 16px 0 14px 0; height: 1px; width: 100%; background: rgba(15,23,42,0.12); }
          .back-text { margin: 0; color: #334155; line-height: 1.65; font-size: 14.5px; flex: 1; }
          .back-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
          .tag { font-size: 12px; font-weight: 700; padding: 8px 12px; border-radius: 999px; border: 1px solid rgba(15,23,42,0.12); background: rgba(248,250,252,1); color: rgba(15,23,42,0.70); }
          @media (max-width: 768px) { .flip-card { height: 320px; } .back-content { padding: 24px; } }
        `}</style>
      </section>

      {/* ====================== OBJETIVOS ====================== */}
      <section className="w-full bg-[#007BFF] py-16 flex justify-center items-center">
        <div className="max-w-3xl w-full text-center px-4">
          <h2 className="text-white text-3xl font-bold mb-6">OBJETIVOS</h2>
          <p className="text-white mb-8">
            La empresa se centra en reforzar la gestión de servicios de TI, desarrollando soluciones que respondan a las necesidades de los clientes mediante el uso de tecnología avanzada. Buscamos mejorar nuestras operaciones y proyectos, fortaleciendo nuestras habilidades para enfrentar los retos digitales actuales, promoviendo la seguridad y la productividad.
          </p>
          <div className="flex justify-center">
            <Link to="/contacto">
              <button className="cta cta-large">
                <span className="span">CONTACTANOS</span>
                <span className="second">
                  <svg width="50px" height="20px" viewBox="0 0 66 43" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <path className="one" d="M40.15 3.89L43.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L44.67 42.86a.5.5 0 01-.7 0L40.15 39.1a.5.5 0 01.01-.71L56.99 21.86a.5.5 0 000-.71L40.15 3.9z" fill="#fff" />
                      <path className="two" d="M20.15 3.89L23.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L24.67 42.86a.5.5 0 01-.7 0L20.15 39.1a.5.5 0 01.01-.71L36.99 21.86a.5.5 0 000-.71L20.15 3.9z" fill="#fff" />
                    </g>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== NUESTROS VALORES (FLIP PRO) ====================== */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-500">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valores.map((valor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flip-wrap"
            >
              <div className="flip-card flip-card-sm">
                <div className="flip-inner">
                  <div className="flip-front">
                    <div className="front-ring" />
                    <div className="front-content">
                      <div className="front-icon">{valor.icon}</div>
                      <p className="front-title">{valor.titulo}</p>
                      <p className="front-subtitle">Pasa el mouse para ver más</p>
                    </div>
                  </div>
                  <div className="flip-back">
                    <div className="back-glow back-glow-right" />
                    <div className="back-topbar" />
                    <div className="back-content">
                      <div className="back-head">
                        <div className="back-icon">{valor.icon}</div>
                        <div>
                          <p className="back-kicker">{valor.titulo}</p>
                          <p className="back-mini">Valor que nos define</p>
                        </div>
                      </div>
                      <div className="back-divider" />
                      <p className="back-text">{valor.descripcion}</p>
                      <div className="back-tags">
                        <span className="tag">Compromiso</span>
                        <span className="tag">Excelencia</span>
                        <span className="tag">Resultados</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <style>{`
          .flip-wrap { width: 100%; }
          .flip-card { width: 100%; height: 340px; perspective: 1200px; }
          .flip-card-sm { height: 300px; }
          .flip-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.15); }
          .flip-card:hover .flip-inner { transform: rotateY(180deg); }
          .flip-front, .flip-back { position: absolute; inset: 0; border-radius: 26px; overflow: hidden; backface-visibility: hidden; -webkit-backface-visibility: hidden; border: 4px solid #1e88e5; box-shadow: 0 18px 45px rgba(0,0,0,0.12); }
          .flip-front { background: #000; display: grid; place-items: center; }
          .front-ring { position: absolute; inset: 18px; border-radius: 22px; border: 1px solid rgba(255,255,255,0.08); }
          .front-content { position: relative; text-align: center; padding: 24px; }
          .front-icon { width: 72px; height: 72px; border-radius: 18px; display: grid; place-items: center; margin: 0 auto 14px auto; color: #fff; background: rgba(255,255,255,0.08); font-size: 34px; transition: transform .35s ease; }
          .front-icon svg { width: 34px; height: 34px; }
          .flip-card:hover .front-icon { transform: translateY(-2px) scale(1.03); }
          .front-title { margin: 0; font-weight: 900; letter-spacing: 0.06em; font-size: 18px; color: #fff; text-transform: uppercase; }
          .front-subtitle { margin-top: 10px; font-size: 12px; color: rgba(255,255,255,0.65); }
          .flip-back { background: #ffffff; transform: rotateY(180deg); }
          .back-topbar { position: absolute; inset: 0 0 auto 0; height: 5px; background: #06b6d4; }
          .back-glow { position: absolute; width: 260px; height: 260px; border-radius: 999px; background: rgba(6,182,212,0.18); filter: blur(40px); }
          .back-glow-right { top: -120px; right: -120px; }
          .back-content { position: relative; height: 100%; padding: 22px 22px 18px 22px; display: flex; flex-direction: column; }
          .back-head { display: flex; gap: 12px; align-items: center; margin-top: 8px; }
          .back-icon { width: 52px; height: 52px; border-radius: 16px; display: grid; place-items: center; background: rgba(6,182,212,0.12); color: #06b6d4; box-shadow: 0 10px 20px rgba(0,0,0,0.06); }
          .back-icon svg { width: 24px; height: 24px; }
          .back-kicker { margin: 0; font-weight: 900; letter-spacing: 0.05em; color: #06b6d4; font-size: 15px; text-transform: uppercase; }
          .back-mini { margin: 2px 0 0 0; font-size: 12px; color: rgba(15,23,42,0.6); font-weight: 600; }
          .back-divider { margin: 14px 0 12px 0; height: 1px; width: 100%; background: rgba(15,23,42,0.12); }
          .back-text { margin: 0; color: #334155; line-height: 1.6; font-size: 13.5px; flex: 1; }
          .back-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
          .tag { font-size: 12px; font-weight: 700; padding: 8px 12px; border-radius: 999px; border: 1px solid rgba(15,23,42,0.12); background: rgba(248,250,252,1); color: rgba(15,23,42,0.70); }
          @media (max-width: 768px) { .flip-card-sm { height: 300px; } .back-content { padding: 20px; } }
        `}</style>
      </section>

      {/* ====================== CARACTERÍSTICAS DE NUESTROS SERVICIOS (FLIP PRO) ====================== */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-500">Características de Nuestros Servicios:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caracteristicas.map((valor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flip-wrap"
            >
              <div className="flip-card flip-card-sm">
                <div className="flip-inner">
                  <div className="flip-front">
                    <div className="front-ring" />
                    <div className="front-content">
                      <div className="front-icon">{valor.icon}</div>
                      <p className="front-title">{valor.titulo}</p>
                      <p className="front-subtitle">Pasa el mouse para ver más</p>
                    </div>
                  </div>
                  <div className="flip-back">
                    <div className="back-glow back-glow-right" />
                    <div className="back-topbar" />
                    <div className="back-content">
                      <div className="back-head">
                        <div className="back-icon">{valor.icon}</div>
                        <div>
                          <p className="back-kicker">{valor.titulo}</p>
                          <p className="back-mini">Lo que te ofrecemos</p>
                        </div>
                      </div>
                      <div className="back-divider" />
                      <p className="back-text">{valor.descripcion}</p>
                      <div className="back-tags">
                        <span className="tag">Eficiencia</span>
                        <span className="tag">Innovación</span>
                        <span className="tag">Resultados</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <ScrollButton />
      </section>

      {/* Estilo*/}
      <style>{`
        .cta {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 42px;
          text-decoration: none;
          font-size: 24px;
          color: #ffffff;
          background: #ff0000;
          transition: 1s;
          box-shadow: 6px 6px 0 black;
          transform: skewX(-15deg);
          border: none;
          cursor: pointer;
          margin: 0 auto;
        }

        .cta.cta-large {
          width: 380px;          /* suficiente para el texto más largo */
          max-width: calc(100vw - 80px);
        }

        .cta:hover {
          transition: 0.5s;
          box-shadow: 10px 10px 0 #ffffff;
        }

        .cta .second {
          transition: 0.5s;
          margin-right: 0px;
        }

        .cta:hover .second {
          transition: 0.5s;
          margin-right: 28px;
        }

        .span {
          transform: skewX(15deg);
          font-weight: 700;
          letter-spacing: 0.2px;
          white-space: nowrap;
          font-size: 18px;
        }

        .second {
          width: 20px;
          margin-left: 12px;
          position: relative;
          top: 12%;
          transform: skewX(15deg);
        }

        .one {
          transition: 0.4s;
          transform: translateX(-60%);
        }

        .two {
          transition: 0.5s;
          transform: translateX(-30%);
        }

        .three {
          transition: 0.5s;
        }

        .cta:hover .three {
          animation: color_anim 1s infinite 0.2s;
        }

        .cta:hover .one {
          transform: translateX(0%);
          animation: color_anim 1s infinite 0.6s;
        }

        .cta:hover .two {
          transform: translateX(0%);
          animation: color_anim 1s infinite 0.4s;
        }

        @keyframes color_anim {
          0% { fill: #fff; }
          50% { fill: #000; }
          100% { fill: #fff; }
        }

        /* Ajustes para móviles */
        @media (max-width: 640px) {
          .cta {
            padding: 14px 28px;
            font-size: 17px;
          }
          .cta.cta-large {
            width: 300px;
            max-width: calc(100vw - 70px);
          }
          .second {
            margin-left: 8px;  /* Espacio más reducido en móvil */
          }
          .span {
            font-size: 14px;   /* Texto más pequeño en móvil */
            white-space: normal;
            line-height: 1.2;
          }
          .second svg {
            width: 32px;
            height: 14px;
          }
        }

        /* Botón "CONTACTANOS" de la sección Objetivos (usa la misma clase .cta) */
        /* No se modifica, solo se aplican las reglas anteriores */

        /* Texto justificado global */
        section p, section span, section li, section a {
          text-align: justify;
          font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
          line-height: 1.7;
          letter-spacing: 0.2px;
        }
      `}</style>
      
    </section>
  );
};

export default SolucionesIntegralesJBSection;