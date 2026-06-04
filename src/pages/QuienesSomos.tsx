
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
const hero2 = "https://i.postimg.cc/mZqzXj1f/IMG-20260603-WA0010.jpg"
const hero3 = "https://i.postimg.cc/66S2jc4x/IMG-20260603-WA0012.jpg"
const heroImage = "https://i.postimg.cc/zfGKDvWg/image.png";
const heroImageAlt = "";
const uiImage = "https://solucionesintegralesjb.com/wp-content/uploads/elementor/thumbs/Frame-932-qqow7tfd3r2zohqj4jx9yf23tmjv30p5niiolmvipc.png";
const mockupImage = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/MacBook-Pro-and-iPhone-15-Pro-Mockup-768x787.png";
const videoUrl = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/ES-1.mp4";

const Badge: React.FC<{ label: string; icon: string }>
  = ({ label, icon }) => (
  <div className="flex items-center gap-2 py-1">
    <img src={icon} alt="check icon" className="h-6 w-6" />
    <span className="text-sm sm:text-base">{label}</span>
  </div>
);

const valores = [
  {
    icon: <FaShieldAlt className="fa-3x" />,
    titulo: "SEGURIDAD",
    descripcion:
      "Nuestro objetivo es proteger la información como un activo clave de la organización, mediante la implementación de políticas y controles que garanticen su confidencialidad, integridad y disponibilidad.",
  },
  {
    icon: <FaClock className="fa-3x" />,
    titulo: "EXPERIENCIA",
    descripcion:
      "La calidad de nuestros servicios y soluciones garantizan experiencias basadas en la responsabilidad, el trabajo en equipo y la comunicación con nuestros clientes para lograr los objetivos establecidos.",
  },
  {
    icon: <FaKey className="fa-3x" />,
    titulo: "CONFIANZA",
    descripcion:
      "Utilizamos la tecnología como socio estratégico, aplicándola como solución de negocio para mantener y aumentar la competitividad de nuestros clientes.",
  },
  {
    icon: <FaLightbulb className="fa-3x" />,
    titulo: "INNOVACIÓN",
    descripcion:
      "Nuestros equipos están en la continua búsqueda de nuevas soluciones tecnológicas, para integrarlas en los procesos de una organización.",
  },
  {
    icon: <FaUsers className="fa-3x" />,
    titulo: "EQUIPO",
    descripcion:
      "Somos ágiles, sabemos escuchar, trabajamos de forma rigurosa y transparente con un alto sentido del servicio, buscando siempre satisfacer las expectativas de nuestros clientes.",
  },
  {
    icon: <FaHeart className="fa-3x" />,
    titulo: "VOCACIÓN",
    descripcion:
      "Nuestra principal motivación es conocer y satisfacer las necesidades, dando respuestas rápidas y eficaces a los desafíos tecnológicos de nuestros clientes.",
  },
];

const caracteristicas = [
  {
    icon: <FaLock className="fa-3x"/>,
    titulo: "CONFIANZA",
    descripcion:
      "El objetivo es proteger la información como un activo esencial de la organización, mediante la aplicación de políticas y controles de seguridad que garanticen su confidencialidad, integridad y disponibilidad de forma adecuada y continua.  ",
  },
  {
    icon: <FaCheckCircle className="fa-3x" />,
    titulo: "CALIDAD",
    descripcion:
      "La calidad de nuestros servicios y soluciones garantizan experiencias basadas en la responsabilidad, el trabajo en equipo y la comunicación con nuestros clientes para lograr los objetivos establecidos.",
  },
  {
    icon: <FaRocket className="fa-3x " />,
    titulo: "VELOCIDAD",
    descripcion:
      "Utilizamos la tecnología como socio estratégico, aplicándola como solución de negocio para mantener y aumentar la competitividad de nuestros clientes.",
  },
  {
    icon: <FaShieldVirus className="fa-3x" />,
    titulo: "SEGURIDAD",
    descripcion:
      "Nuestros equipos están en la continua búsqueda de nuevas soluciones tecnológicas, para integrarlas en los procesos de una organización.",
  },
  {
    icon: <FaHandsHelping className="fa-3x" />,
    titulo: "SOPORTE",
    descripcion:
      "Somos ágiles, sabemos escuchar, trabajamos de forma rigurosa y transparente con un alto sentido del servicio, buscando siempre satisfacer las expectativas de nuestros clientes.",
  },
  {
    icon: <FaUserTie className="fa-3x " />,
    titulo: "PERSONALIZADO",
    descripcion:
      "Nuestra principal motivación es conocer y satisfacer las necesidades, dando respuestas rápidas y eficaces a los desafíos tecnológicos de nuestros clientes.",
  },
];

const SolucionesIntegralesJBSection: React.FC<Props> = ({ className }) => {
  return (
  <section className={"w-full " + (className || "")}>
  <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px] overflow-hidden flex items-center justify-center bg-gray-900">
  <img
    src="https://i.postimg.cc/QNP94mKD/IMG-20260603-WA0011.jpg"
    alt="Quiénes somos"
    className="absolute w-full h-full object-cover object-center"
  />

  {/* Capa oscura encima de la imagen */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Contenido centrado en móvil y ubicado abajo a la derecha en pantallas grandes */}
  <div className="absolute inset-0 flex flex-col justify-center items-center md:justify-end md:items-end px-4 sm:px-8 md:pr-16 lg:pr-24 pb-8 md:pb-14 text-center">
    <div className="hero-glass-card text-center max-w-[94%] sm:max-w-[500px] md:w-[500px]">
      <h2 className="hero-glass-title">
        ¿Quiénes Somos?
      </h2>
      <p className="hero-glass-subtitle">
        Destino e Innovación
      </p>
      <Link to="/DesarrolloDeSitiosWeb" className="inline-flex">
        <button className="cta cta-large">
          <span className="span">
            Descubre
            <br />
            nuestros servicios
          </span>

          <span className="second">
            <svg
              width="58px"
              height="24px"
              viewBox="0 0 86 43"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  className="three"
                  d="M0.15 3.89L3.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L4.67 42.86a.5.5 0 01-.7 0L0.15 39.1a.5.5 0 01.01-.71L16.99 21.86a.5.5 0 000-.71L0.15 3.9z"
                  fill="#fff"
                />
                <path
                  className="two"
                  d="M20.15 3.89L23.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L24.67 42.86a.5.5 0 01-.7 0L20.15 39.1a.5.5 0 01.01-.71L36.99 21.86a.5.5 0 000-.71L20.15 3.9z"
                  fill="#fff"
                />
                <path
                  className="one"
                  d="M40.15 3.89L43.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L44.67 42.86a.5.5 0 01-.7 0L40.15 39.1a.5.5 0 01.01-.71L56.99 21.86a.5.5 0 000-.71L40.15 3.9z"
                  fill="#fff"
                />
              </g>
            </svg>
          </span>
        </button>
      </Link>
    </div>   {/* cierra el cuadro negro */}
</div>   {/* cierra el contenedor del hero */}
</div>   {/* cierra el hero principal */}
     
        

{/* ====================== QUIÉNES SOMOS - SECCIÓN MEJORADA ====================== */}
<section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
  <div className="mx-auto max-w-5xl px-4 py-10 md:py-12">

    {/* Etiqueta centrada entre los cards de imagen y texto */}
    <div className="mb-6 flex justify-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-[10px] md:text-[11px] font-semibold text-slate-600 shadow-sm whitespace-nowrap">
        <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
        INNOVACIÓN Y TECNOLOGÍA PARA TU CRECIMIENTO
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

      {/* ================= IMÁGENES ================= */}
      <div className="grid grid-cols-1 gap-6 h-full">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="group bg-white rounded-2xl shadow-xl border border-slate-200 p-4 h-[270px] md:h-[285px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-400"
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={hero2}
              alt="Automatización de procesos tecnológicos"
              className="w-full h-[195px] md:h-[205px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="mt-2 flex justify-center">
            <span className="inline-flex items-center justify-center bg-slate-100 text-slate-700 text-sm px-6 py-2 rounded-full shadow-sm min-w-[230px] text-center transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-md">
              Automatización • ITSM • ITIL
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="group bg-white rounded-2xl shadow-xl border border-slate-200 p-4 h-[270px] md:h-[285px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-400"
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={hero3}
              alt="Innovación tecnológica en procesos"
              className="w-full h-[195px] md:h-[205px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="mt-2 flex justify-center">
            <span className="inline-flex items-center justify-center bg-slate-100 text-slate-700 text-sm px-6 py-2 rounded-full shadow-sm min-w-[230px] text-center transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-md">
              Innovación en procesos
            </span>
          </div>
        </motion.div>

      </div>

      {/* ================= TEXTO ================= */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 h-full"
      >

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 md:p-7 h-[270px] md:h-[285px] flex flex-col justify-start pt-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-400 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 text-center leading-tight">
            Quiénes Somos
          </h2>

          <div className="mt-3 space-y-2 text-left">
            <p className="text-slate-700 leading-relaxed text-[13px] md:text-[14px]">
              Somos una empresa especializada en soluciones tecnológicas orientadas a automatizar, optimizar y mejorar de forma continua los procesos empresariales, integrando servicios basados en ITSM, ITIL e innovación aplicada.
            </p>

            <p className="text-slate-700 leading-relaxed text-[13px] md:text-[14px]">
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-5 md:p-7 h-[270px] md:h-[285px] text-white shadow-xl bg-gradient-to-r from-cyan-500 to-cyan-600 flex flex-col justify-start pt-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white text-center leading-snug">
            Impulsamos la transformación digital de tu empresa
          </h3>

          <div className="mt-3 space-y-2 text-left">
            <p className="text-[13px] md:text-[14px] text-white/95 leading-relaxed">
              Implementamos soluciones tecnológicas alineadas a tus objetivos estratégicos, fortaleciendo la productividad, la seguridad y la gestión diaria de tus procesos.
            </p>

            <p className="text-[13px] md:text-[14px] text-white/95 leading-relaxed">
              Integramos análisis, automatización, soporte y mejora continua para que cada proyecto avance con orden, resultados medibles y crecimiento sostenible.
            </p>
          </div>
        </motion.div>

      </motion.div>

    </div>
  </div>
</section>
      {/* ====================== MISIÓN / VISIÓN (FLIP PRO - MISMO COLOR EN FRENTE) ====================== */}
<section className="mx-auto max-w-6xl px-4 py-16">
  <div className="grid md:grid-cols-2 gap-8">

    {/* ====================== MISIÓN ====================== */}
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="flip-wrap"
    >
      <div className="flip-card">
        <div className="flip-inner">

          {/* ---- FRENTE (SIMPLE) ---- */}
          <div className="flip-front">
            <div className="front-ring" />
            <div className="front-content">
              <div className="front-icon">
                <FaChartLine />
              </div>
              <p className="front-title text-center">MISIÓN</p>
              <p className="front-subtitle">Pasa el mouse para ver más</p>
            </div>
          </div>

          {/* ---- REVERSO (PRO) ---- */}
          <div className="flip-back">
            <div className="back-glow back-glow-right" />
            <div className="back-topbar" />

            <div className="back-content">
              <div className="back-head">
                <div className="back-icon">
                  <FaChartLine />
                </div>
                <div>
                  <p className="back-kicker">MISIÓN</p>
                  <p className="back-mini">Enfoque, calidad y resultados</p>
                </div>
              </div>

              <div className="back-divider" />

              <p className="back-text">
                Trabajamos en el desarrollo e integración de múltiples soluciones
                basadas en la tecnología, con un equipo de profesionales altamente
                calificados para cumplir los requerimientos de nuestros clientes,
                aplicando estándares de calidad, seguridad y responsabilidad social,
                dentro del costo y plazo previsto.
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

    {/* ====================== VISIÓN ====================== */}
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
      viewport={{ once: true, amount: 0.25 }}
      className="flip-wrap"
    >
      <div className="flip-card">
        <div className="flip-inner">

          {/* ---- FRENTE (SIMPLE - IGUAL QUE MISIÓN) ---- */}
          <div className="flip-front">
            <div className="front-ring" />
            <div className="front-content">
              <div className="front-icon">
                <FaEye />
              </div>
              <p className="front-title text-center">VISIÓN</p>
              <p className="front-subtitle">Pasa el mouse para ver más</p>
            </div>
          </div>

          {/* ---- REVERSO (PRO) ---- */}
          <div className="flip-back">
            <div className="back-glow back-glow-left" />
            <div className="back-topbar" />

            <div className="back-content">
              <div className="back-head">
                <div className="back-icon">
                  <FaEye />
                </div>
                <div>
                  <p className="back-kicker ">VISIÓN</p>
                  <p className="back-mini">Innovación continua y liderazgo</p>
                </div>
              </div>

              <div className="back-divider" />

              <p className="back-text">
                Ser una empresa líder en el desarrollo de soluciones integrales de
                Tecnología de Información, formando alianzas estratégicas con la
                innovación tecnológica para lograr los objetivos de nuestros clientes.
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

  {/* ====================== CSS ====================== */}
  <style>{`
    .flip-wrap { width: 100%; }

    .flip-card {
      width: 100%;
      height: 340px;
      perspective: 1200px;
    }

    .flip-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.15);
    }

    .flip-card:hover .flip-inner {
      transform: rotateY(180deg);
    }

    .flip-front,
    .flip-back {
      position: absolute;
      inset: 0;
      border-radius: 26px;
      overflow: hidden;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      border: 4px solid #1e88e5;
      box-shadow: 0 18px 45px rgba(0,0,0,0.12);
    }

    /* ================= FRONT (SIMPLE - NEGRO) ================= */
    .flip-front {
      background: #000;
      display: grid;
      place-items: center;
    }

    .front-ring {
      position: absolute;
      inset: 18px;
      border-radius: 22px;
      border: 1px solid rgba(255,255,255,0.08);
    }

    .front-content {
      position: relative;
      text-align: center;
      padding: 24px;
    }

    .front-icon {
      width: 72px;
      height: 72px;
      border-radius: 18px;
      display: grid;
      place-items: center;
      margin: 0 auto 14px auto;
      color: #fff;
      background: rgba(255,255,255,0.08);
      font-size: 34px;
      transition: transform .35s ease;
    }

    .flip-card:hover .front-icon { transform: translateY(-2px) scale(1.03); }

    .front-title {
      margin: 0;
      font-weight: 900;
      letter-spacing: 0.06em;
      font-size: 22px;
      color: #fff;
    }

    .front-subtitle {
      margin-top: 10px;
      font-size: 12px;
      color: rgba(255,255,255,0.65);
    }

    /* ================= BACK (PRO) ================= */
    .flip-back {
      background: #ffffff;
      transform: rotateY(180deg);
      position: absolute;
    }

    .back-topbar {
      position: absolute;
      inset: 0 0 auto 0;
      height: 5px;
      background: #06b6d4;
    }

    .back-glow {
      position: absolute;
      width: 260px;
      height: 260px;
      border-radius: 999px;
      background: rgba(6,182,212,0.18);
      filter: blur(40px);
    }
    .back-glow-right { top: -120px; right: -120px; }
    .back-glow-left { bottom: -120px; left: -120px; }

    .back-content {
      position: relative;
      height: 100%;
      padding: 28px 28px 22px 28px;
      display: flex;
      flex-direction: column;
    }

    .back-head {
      display: flex;
      gap: 14px;
      align-items: center;
      margin-top: 10px;
    }

    .back-icon {
      width: 54px;
      height: 54px;
      border-radius: 16px;
      display: grid;
      place-items: center;
      background: rgba(6,182,212,0.12);
      color: #06b6d4;
      font-size: 26px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.06);
    }

    .back-kicker {
      margin: 0;
      font-weight: 900;
      letter-spacing: 0.05em;
      color: #06b6d4;
      font-size: 18px;
      text-transform: uppercase;
    }

    .back-mini {
      margin: 2px 0 0 0;
      font-size: 12px;
      color: rgba(15,23,42,0.6);
      font-weight: 600;
    }

    .back-divider {
      margin: 16px 0 14px 0;
      height: 1px;
      width: 100%;
      background: rgba(15,23,42,0.12);
    }

    .back-text {
      margin: 0;
      color: #334155;
      line-height: 1.65;
      font-size: 14.5px;
      flex: 1;
    }

    .back-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }

    .tag {
      font-size: 12px;
      font-weight: 700;
      padding: 8px 12px;
      border-radius: 999px;
      border: 1px solid rgba(15,23,42,0.12);
      background: rgba(248,250,252,1);
      color: rgba(15,23,42,0.70);
    }

    @media (max-width: 768px) {
      .flip-card { height: 320px; }
      .back-content { padding: 24px; }
    }
  `}</style>
</section>

      {/* ====================== OBJETIVOS ====================== */}
<section className="w-full bg-black py-16 md:py-20 flex justify-center items-center">
  <div className="max-w-4xl w-full text-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-3xl border border-white/15 bg-white/5 px-6 md:px-10 py-10 shadow-2xl"
    >
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">OBJETIVOS</h2>

      <p className="text-white/90 mb-9 text-[15px] md:text-base leading-relaxed text-center md:text-justify">
        La empresa se centra en reforzar la gestión de servicios de TI, desarrollando soluciones que respondan
        a las necesidades de los clientes mediante el uso de tecnología avanzada. Buscamos mejorar nuestras
        operaciones y proyectos, fortaleciendo nuestras capacidades para enfrentar los retos digitales actuales,
        promoviendo la seguridad, la productividad y la mejora continua.
      </p>

      <div className="flex justify-center">
        <Link to="/contacto" className="inline-flex">
          <button className="cta cta-large cta-contact">
            <span className="span">CONTÁCTANOS</span>

            <span className="second">
              <svg
                width="58px"
                height="24px"
                viewBox="0 0 86 43"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    className="three"
                    d="M0.15 3.89L3.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L4.67 42.86a.5.5 0 01-.7 0L0.15 39.1a.5.5 0 01.01-.71L16.99 21.86a.5.5 0 000-.71L0.15 3.9z"
                    fill="#fff"
                  />
                  <path
                    className="two"
                    d="M20.15 3.89L23.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L24.67 42.86a.5.5 0 01-.7 0L20.15 39.1a.5.5 0 01.01-.71L36.99 21.86a.5.5 0 000-.71L20.15 3.9z"
                    fill="#fff"
                  />
                  <path
                    className="one"
                    d="M40.15 3.89L43.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L44.67 42.86a.5.5 0 01-.7 0L40.15 39.1a.5.5 0 01.01-.71L56.99 21.86a.5.5 0 000-.71L40.15 3.9z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </motion.div>
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

            {/* ================= FRONT (NEGRO) ================= */}
            <div className="flip-front">
              <div className="front-ring" />
              <div className="front-content">
                <div className="front-icon">
                  {valor.icon}
                </div>
                <p className="front-title text-center">{valor.titulo}</p>
                <p className="front-subtitle">Pasa el mouse para ver más</p>
              </div>
            </div>

            {/* ================= BACK (PRO) ================= */}
            <div className="flip-back">
              <div className="back-glow back-glow-right" />
              <div className="back-topbar" />

              <div className="back-content">
                <div className="back-head">
                  <div className="back-icon">
                    {valor.icon}
                  </div>
                  <div>
                    <p className="back-kicker">{valor.titulo}</p>
                    <p className="back-mini">Valor que nos define</p>
                  </div>
                </div>

                <div className="back-divider" />

                <p className="back-text">
                  {valor.descripcion}
                </p>

                {/* tags simples (opcional) */}
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

  {/* ====================== CSS FLIP PRO (incluido para que funcione) ====================== */}
  <style>{`
    .flip-wrap { width: 100%; }

    .flip-card {
      width: 100%;
      height: 340px;
      perspective: 1200px;
    }

    /* tamaño un poco menor para valores */
    .flip-card-sm { height: 300px; }

    .flip-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.15);
    }

    .flip-card:hover .flip-inner {
      transform: rotateY(180deg);
    }

    .flip-front,
    .flip-back {
      position: absolute;
      inset: 0;
      border-radius: 26px;
      overflow: hidden;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      border: 4px solid #1e88e5;
      box-shadow: 0 18px 45px rgba(0,0,0,0.12);
    }

    /* ================= FRONT ================= */
    .flip-front {
      background: #000;
      display: grid;
      place-items: center;
    }

    .front-ring {
      position: absolute;
      inset: 18px;
      border-radius: 22px;
      border: 1px solid rgba(255,255,255,0.08);
    }

    .front-content {
      position: relative;
      text-align: center;
      padding: 24px;
    }

    .front-icon {
      width: 72px;
      height: 72px;
      border-radius: 18px;
      display: grid;
      place-items: center;
      margin: 0 auto 14px auto;
      color: #fff;
      background: rgba(255,255,255,0.08);
      font-size: 34px;
      transition: transform .35s ease;
    }

    /* Para que los react-icons dentro no hereden tamaños raros */
    .front-icon svg { width: 34px; height: 34px; }

    .flip-card:hover .front-icon {
      transform: translateY(-2px) scale(1.03);
    }

    .front-title {
      margin: 0;
      font-weight: 900;
      letter-spacing: 0.06em;
      font-size: 18px;
      color: #fff;
      text-transform: uppercase;
    }

    .front-subtitle {
      margin-top: 10px;
      font-size: 12px;
      color: rgba(255,255,255,0.65);
    }

    /* ================= BACK ================= */
    .flip-back {
      background: #ffffff;
      transform: rotateY(180deg);
      position: absolute;
    }

    .back-topbar {
      position: absolute;
      inset: 0 0 auto 0;
      height: 5px;
      background: #06b6d4;
    }

    .back-glow {
      position: absolute;
      width: 260px;
      height: 260px;
      border-radius: 999px;
      background: rgba(6,182,212,0.18);
      filter: blur(40px);
    }

    .back-glow-right { top: -120px; right: -120px; }

    .back-content {
      position: relative;
      height: 100%;
      padding: 22px 22px 18px 22px;
      display: flex;
      flex-direction: column;
    }

    .back-head {
      display: flex;
      gap: 12px;
      align-items: center;
      margin-top: 8px;
    }

    .back-icon {
      width: 52px;
      height: 52px;
      border-radius: 16px;
      display: grid;
      place-items: center;
      background: rgba(6,182,212,0.12);
      color: #06b6d4;
      box-shadow: 0 10px 20px rgba(0,0,0,0.06);
    }
    .back-icon svg { width: 24px; height: 24px; }

    .back-kicker {
      margin: 0;
      font-weight: 900;
      letter-spacing: 0.05em;
      color: #06b6d4;
      font-size: 15px;
      text-transform: uppercase;
    }

    .back-mini {
      margin: 2px 0 0 0;
      font-size: 12px;
      color: rgba(15,23,42,0.6);
      font-weight: 600;
    }

    .back-divider {
      margin: 14px 0 12px 0;
      height: 1px;
      width: 100%;
      background: rgba(15,23,42,0.12);
    }

    .back-text {
      margin: 0;
      color: #334155;
      line-height: 1.6;
      font-size: 13.5px;
      flex: 1;
    }

    .back-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 14px;
    }

    .tag {
      font-size: 12px;
      font-weight: 700;
      padding: 8px 12px;
      border-radius: 999px;
      border: 1px solid rgba(15,23,42,0.12);
      background: rgba(248,250,252,1);
      color: rgba(15,23,42,0.70);
    }

    @media (max-width: 768px) {
      .flip-card-sm { height: 300px; }
      .back-content { padding: 20px; }
    }
  `}</style>
</section>

{/* ====================== CARACTERÍSTICAS DE NUESTROS SERVICIOS (FLIP PRO) ====================== */}
<section className="mx-auto max-w-6xl px-4 py-16">
  <h2 className="text-3xl font-bold text-center mb-12 text-cyan-500">
    Características de Nuestros Servicios:
  </h2>

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

            {/* ================= FRONT (NEGRO) ================= */}
            <div className="flip-front">
              <div className="front-ring" />
              <div className="front-content">
                <div className="front-icon">
                  {valor.icon}
                </div>
                <p className="front-title text-center">{valor.titulo}</p>
                <p className="front-subtitle">Pasa el mouse para ver más</p>
              </div>
            </div>

            {/* ================= BACK (PRO) ================= */}
            <div className="flip-back">
              <div className="back-glow back-glow-right" />
              <div className="back-topbar" />

              <div className="back-content">
                <div className="back-head">
                  <div className="back-icon">
                    {valor.icon}
                  </div>
                  <div>
                    <p className="back-kicker">{valor.titulo}</p>
                    <p className="back-mini">Lo que te ofrecemos</p>
                  </div>
                </div>

                <div className="back-divider" />

                <p className="back-text">
                  {valor.descripcion}
                </p>

                {/* tags decorativos */}
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

  <style>{`
    .flip-wrap { width: 100%; }

    .flip-card {
      width: 100%;
      height: 340px;
      perspective: 1200px;
    }

    .flip-card-sm { height: 300px; }

    .flip-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.15);
    }

    .flip-card:hover .flip-inner {
      transform: rotateY(180deg);
    }

    .flip-front,
    .flip-back {
      position: absolute;
      inset: 0;
      border-radius: 26px;
      overflow: hidden;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      border: 4px solid #1e88e5;
      box-shadow: 0 18px 45px rgba(0,0,0,0.12);
    }

    /* ================= FRONT ================= */
    .flip-front {
      background: #000;
      display: grid;
      place-items: center;
    }

    .front-ring {
      position: absolute;
      inset: 18px;
      border-radius: 22px;
      border: 1px solid rgba(255,255,255,0.08);
    }

    .front-content {
      position: relative;
      text-align: center;
      padding: 24px;
    }

    .front-icon {
      width: 72px;
      height: 72px;
      border-radius: 18px;
      display: grid;
      place-items: center;
      margin: 0 auto 14px auto;
      color: #fff;
      background: rgba(255,255,255,0.08);
      font-size: 34px;
      transition: transform .35s ease;
    }

    .front-icon svg { width: 34px; height: 34px; }

    .flip-card:hover .front-icon {
      transform: translateY(-2px) scale(1.03);
    }

    .front-title {
      margin: 0;
      font-weight: 900;
      letter-spacing: 0.06em;
      font-size: 18px;
      color: #fff;
      text-transform: uppercase;
    }

    .front-subtitle {
      margin-top: 10px;
      font-size: 12px;
      color: rgba(255,255,255,0.65);
    }

    /* ================= BACK ================= */
    .flip-back {
      background: #ffffff;
      transform: rotateY(180deg);
      position: absolute;
    }

    .back-topbar {
      position: absolute;
      inset: 0 0 auto 0;
      height: 5px;
      background: #06b6d4;
    }

    .back-glow {
      position: absolute;
      width: 260px;
      height: 260px;
      border-radius: 999px;
      background: rgba(6,182,212,0.18);
      filter: blur(40px);
    }

    .back-glow-right { top: -120px; right: -120px; }

    .back-content {
      position: relative;
      height: 100%;
      padding: 22px 22px 18px 22px;
      display: flex;
      flex-direction: column;
    }

    .back-head {
      display: flex;
      gap: 12px;
      align-items: center;
      margin-top: 8px;
    }

    .back-icon {
      width: 52px;
      height: 52px;
      border-radius: 16px;
      display: grid;
      place-items: center;
      background: rgba(6,182,212,0.12);
      color: #06b6d4;
      box-shadow: 0 10px 20px rgba(0,0,0,0.06);
    }
    .back-icon svg { width: 24px; height: 24px; }

    .back-kicker {
      margin: 0;
      font-weight: 900;
      letter-spacing: 0.05em;
      color: #06b6d4;
      font-size: 15px;
      text-transform: uppercase;
    }

    .back-mini {
      margin: 2px 0 0 0;
      font-size: 12px;
      color: rgba(15,23,42,0.6);
      font-weight: 600;
    }

    .back-divider {
      margin: 14px 0 12px 0;
      height: 1px;
      width: 100%;
      background: rgba(15,23,42,0.12);
    }

    .back-text {
      margin: 0;
      color: #334155;
      line-height: 1.6;
      font-size: 13.5px;
      flex: 1;
    }

    .back-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 14px;
    }

    .tag {
      font-size: 12px;
      font-weight: 700;
      padding: 8px 12px;
      border-radius: 999px;
      border: 1px solid rgba(15,23,42,0.12);
      background: rgba(248,250,252,1);
      color: rgba(15,23,42,0.70);
    }

    @media (max-width: 768px) {
      .flip-card-sm { height: 300px; }
      .back-content { padding: 20px; }
    }
  `}</style>
</section>
      <style>{`

        .hero-glass-card {
          background: rgba(0,0,0,0.48);
          padding: 38px 28px;
          border-radius: 14px;
          border: 2px solid rgba(255,255,255,0.82);
          box-shadow: 0 20px 55px rgba(0,0,0,0.35);
          backdrop-filter: blur(5px);
          transition: transform 0.55s ease, box-shadow 0.55s ease, border-color 0.55s ease, background 0.55s ease;
        }

        .hero-glass-card:hover {
          transform: translateY(-6px) scale(1.015);
          border-color: #ffffff;
          background: rgba(0,0,0,0.62);
          box-shadow: 0 28px 70px rgba(0,0,0,0.55), 0 0 28px rgba(255,255,255,0.16);
        }

        .hero-glass-title {
          color: #fff;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.1;
          font-weight: 900;
          margin-bottom: 18px;
          text-align: center;
          white-space: nowrap;
          text-shadow: 0 8px 18px rgba(0,0,0,0.45);
        }

        .hero-glass-subtitle {
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 22px;
          text-align: center !important;
        }

        @media (max-width: 480px) {
          .hero-glass-card { padding: 30px 18px; }
          .hero-glass-title { font-size: 28px; }
          .cta.cta-large { min-width: 245px; padding: 12px 26px; font-size: 16px; }
        }
        .custom-card {
          position: relative;
          width: 100%;
          min-height: 300px;
          background-color: #000000;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          perspective: 1000px;
          box-shadow: 0 0 0 5px #1E88E5;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          color: white;
        }
        .custom-card.light {
          background-color: #f2f2f2;
          color: #000;
        }
        .custom-card__icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 64px;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .custom-card.light .custom-card__icon {
          color: #1E88E5;
        }
        .custom-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        .custom-card__content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 25px;
          box-sizing: border-box;
          transform: rotateX(-90deg);
          transform-origin: bottom;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .custom-card:hover .custom-card__content {
          transform: rotateX(0deg);
        }
        .custom-card__title {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
        }
        .custom-card:hover .custom-card__icon {
          transform: scale(0);
        }
        .custom-card__description {
          margin: 15px 0 0;
          font-size: 16px;
          line-height: 1.6;
        }
        .custom-card__text {
          margin-top: 10px;
          font-size: 20px;
          font-weight: bold;
        }

        .cta {
          display: flex;
          padding: 16px 50px;
          text-decoration: none;
          font-size: 24px;
          color: #ffffff;
          background: #ff0000;
          transition: 1s;
          box-shadow: 6px 6px 0 black;
          transform: skewX(-15deg);
          border: none;
          cursor: pointer;
        }

        .cta.cta-large {
          padding: 12px 40px;
          font-size: 18px;
          min-width: 280px;
        }

        .cta:focus {
          outline: none;
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
          margin-right: 48px;
        }

        .span {
          transform: skewX(15deg);
          font-weight: 600;
        }

        .second {
          width: 58px;
          margin-left: 28px;
          position: relative;
          top: 12%;
          transform: skewX(15deg);
        }

        .one {
          transition: 0.4s;
          transform: translateX(-70%);
        }

        .two {
          transition: 0.5s;
          transform: translateX(-45%);
        }

        .three {
          transition: 0.6s;
          transform: translateX(-20%);
        }

        .cta:hover .three {
          transform: translateX(0%);
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
          0% {
            fill: #fff;
          }
          50% {
            fill: #000;
          }
          100% {
            fill: #fff;
          }
        }
          /* ================= TIPOGRAFÍA GENERAL ================= */
section p,
section li {
  font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.7;
  letter-spacing: 0.2px;
}
      `}</style>
      
    </section>
  );
};

export default SolucionesIntegralesJBSection;