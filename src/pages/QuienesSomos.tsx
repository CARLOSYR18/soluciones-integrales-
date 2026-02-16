import React from "react";
import quienes from '../assets/quienes.jpg';
import { FaChartLine, FaEye } from "react-icons/fa";
import { FaShieldAlt, FaClock, FaKey, FaLightbulb, FaUsers, FaHeart } from "react-icons/fa";
import ScrollButton from "../components/ScrollButton";

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
  { label: "Velocidad", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Calidad", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Seguridad", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Soporte", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
  { label: "Personalizado", icon: "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/icons8-done-1-1.svg" },
];

const hero3 = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/Frame-911-1.png"
const hero2 = "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-926.png"
const heroImage = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/Frame-907-1.png";
const heroImageAlt = "Soluciones Integrales JB para impulsar tu negocio";
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
      "Nuestro objetivo es la protección de la información porque es un activo importante dentro de la organización, y se requiere de una protección adecuada; implementando un conjunto de políticas y controles de seguridad para la preservación de su confidencialidad, integridad y disponibilidad.",
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
      "Nuestro objetivo es la protección de la información porque es un activo importante dentro de la organización, y se requiere de una protección adecuada; implementando un conjunto de políticas y controles de seguridad para la preservación de su confidencialidad, integridad y disponibilidad.",
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
    src="https://solucionesintegralesjb.com/wp-content/uploads/2024/06/Frame-916-1.png"
    alt="Quiénes somos"
    className="absolute w-full h-full object-cover object-center"
  />

  {/* Capa oscura encima de la imagen */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Contenido centrado en móvil y alineado a la derecha en pantallas grandes */}
  <div className="absolute inset-0 flex flex-col justify-center items-center md:items-end px-4 sm:px-8 md:pr-12 text-center md:text-right">
    <div className="bg-black bg-opacity-40 px-6 sm:px-8 md:px-12 py-8 rounded-lg border-2 border-gray-300 text-justify max-w-[90%] sm:max-w-md md:w-[450px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
        ¿Quiénes Somos?
      </h2>
      <p className="text-white text-sm sm:text-base mb-6">
        Quiénes Somos y Hacia Dónde Vamos
      </p>
      <a
        href="https://solucionesintegralesjb.com/#services"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="cta cta-large">
          <span className="span">
            Descubre
            <br />
            nuestros servicios
          </span>
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
        </button>
      </a>
    </div>
  </div>
</div>


<div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
  <div className="grid grid-cols-2 gap-4">
    <img
      src={hero2}
      alt="Imagen 1"
      className="w-full h-72 object-cover rounded-lg shadow-md"
    />
    <img
      src={hero3}
      alt="Imagen 2"
      className="w-full h-72 object-cover rounded-lg shadow-md"
    />
  </div>

  <div className="space-y-4">
    <p className="text-sm uppercase tracking-wider text-gray-500">
      Innovación y tecnología para tu crecimiento
    </p>
    <h2 className="text-3xl font-bold text-cyan-500">Quiénes Somos</h2>
    <p className="text-gray-700 leading-relaxed">
      Somos una empresa de tecnología especializada en automatizar procesos de 
      negocio para mejorar la eficiencia y resultados en diversas áreas de 
      producción. Nos enfocamos en la Gestión de Servicios de TI, ofreciendo 
      soluciones basadas en ITSM e ITIL. 
    </p>
    <p className="text-gray-700 leading-relaxed">
      Contamos con un equipo de profesionales que optimizan tanto el tiempo 
      como los recursos económicos de nuestros clientes, garantizando un 
      servicio de alta calidad.
    </p>
  </div>
</div>

      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8">
        <div className="custom-card">
          <div className="custom-card__icon">
            <FaChartLine />
            <p className="custom-card__text">MISIÓN</p>
          </div>
          <div className="custom-card__content">
            <p className="custom-card__title">Misión</p>
            <p className="custom-card__description">
              Trabajamos en el desarrollo e integración de múltiples soluciones
              basadas en la tecnología, con un equipo de profesionales altamente
              calificados para cumplir los requerimientos de nuestros clientes,
              aplicando los estándares de calidad, seguridad, y responsabilidad
              social, dentro del costo y plazo previsto.
            </p>
          </div>
        </div>

        <div className="custom-card light">
          <div className="custom-card__icon">
            <FaEye />
            <p className="custom-card__text">VISIÓN</p>
          </div>
          <div className="custom-card__content">
            <p className="custom-card__title">Visión</p>
            <p className="custom-card__description">
              Ser una empresa líder, en el desarrollo de soluciones de forma
              integral en la Tecnología de Información, formando alianzas
              estratégicas con la innovación tecnológica, para lograr los
              objetivos de nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full bg-[#007BFF] py-16 flex justify-center items-center">
        <div className="max-w-3xl w-full text-center px-4">
          <h2 className="text-white text-3xl font-bold mb-6">OBJETIVOS</h2>
          <p className="text-white mb-8">
            La empresa se centra en reforzar la gestión de servicios de TI,
            desarrollando soluciones que respondan a las necesidades de los
            clientes mediante el uso de tecnología avanzada. Buscamos mejorar
            nuestras operaciones y proyectos, fortaleciendo nuestras habilidades
            para enfrentar los retos digitales actuales, promoviendo la seguridad
            y la productividad.
          </p>

          <div className="flex justify-center">
            <a href="#contact" target="_blank" rel="noopener noreferrer">
              <button className="cta cta-large">
                <span className="span">CONTACTANOS</span>
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
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valores.map((valor, index) => (
            <div key={index} className="group w-full h-64 [perspective:1000px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                <div className="absolute inset-0 bg-[#1c1c1c] text-white flex flex-col items-center justify-center p-6 rounded-lg [backface-visibility:hidden]">
                  <div className="text-5xl">{valor.icon}</div>
                  <h3 className="mt-4 font-bold text-lg">{valor.titulo}</h3>
                </div>
                
                <div className="absolute inset-0 bg-black text-white flex flex-col items-center justify-center p-6 rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-sm text-center">{valor.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wider text-gray-500">Quienes somos</p>
          <h2 className="text-3xl font-bold">Somos tus aliados Digitales.</h2>
          <p>
            Somos una empresa dedicada a ofrecer servicios digitales personalizados, desde el desarrollo de software y sitios web con diseño gráfico. entre mas servicios. Transformamos sus ideas en soluciones que impulsan su negocio hacia el éxito corporativo con Soluciones Integrales.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Características de Nuestros Servicios:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caracteristicas.map((valor, index) => (
            <div key={index} className="group w-full h-64 [perspective:1000px]">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                <div className="absolute inset-0 bg-[#1c1c1c] text-white flex flex-col items-center justify-center p-6 rounded-lg [backface-visibility:hidden]">
                  <div className="text-5xl">{valor.icon}</div>
                  <h3 className="mt-4 font-bold text-lg">{valor.titulo}</h3>
                </div>
                
                <div className="absolute inset-0 bg-black text-white flex flex-col items-center justify-center p-6 rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-sm text-center">{valor.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ScrollButton />
      </section>

      <style>{`
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
          margin-right: 45px;
        }

        .span {
          transform: skewX(15deg);
          font-weight: 600;
        }

        .second {
          width: 20px;
          margin-left: 30px;
          position: relative;
          top: 12%;
        }

        .one {
          transition: 0.4s;
          transform: translateX(-60%);
        }

        .two {
          transition: 0.5s;
          transform: translateX(-30%);
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
      `}</style>
    </section>
  );
};

export default SolucionesIntegralesJBSection;
