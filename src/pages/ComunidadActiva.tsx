import React, { Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import '../comunidad.css';
import '../boton.css';
import ScrollButton from "../components/ScrollButton";
import videoSoledad from "../assets/fc-soledad.mp4.mp4";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import Modelo from "./modelo";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

const ComunidadActiva: React.FC = () => {
  return (
    <div className="font-sans">
      {/* ====================== HERO ESTILO CONVENIOS (adaptado a Comunidad Activa) ====================== */}
      <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px] overflow-hidden flex items-center justify-center bg-gray-900">
        <img
          src="https://i.postimg.cc/BQNNW42d/Fomentar-la-participacion-activa-en-tus-alumnos-1024x683-1.jpg"
          alt="Comunidad Activa"
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
            {/* Fondo animado de brillo */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 
                         rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />

            <div className="relative z-10">
              {/* Título con colores: "Comunidad" blanco, "Activa" cyan */}
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
              >
                <span>
                  <span className="text-white drop-shadow-lg">Comunidad</span>{' '}
                  <span className="text-cyan-400 drop-shadow-lg">Activa</span>
                </span>
              </motion.h2>

              {/* Subtítulo */}
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-cyan-300 text-base sm:text-lg font-semibold mb-6"
              >
                Participación y Colaboración
              </motion.p>

              {/* Botón idéntico al de Quiénes Somos (Convenios) */}
              <a
                href="https://wa.me/51996720630"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
                  }}
                  whileTap={{ scale: 0.92 }}
                  className="cta cta-large transition-all duration-300"
                  type="button"
                >
                  <span className="span">Información</span>
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
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ====================== SECCIÓN PRINCIPAL ====================== */}
      <div>
        <section className="bg-[#111] text-white py-7 px-6 text-center">
          <h1 className="text-4xl font-bold text-cyan-500 mb-4">
            ¿Qué es una comunidad activa?
          </h1>
          <p className="max-w-2xl mx-auto mb-0 text-lg leading-relaxed">
            Una comunidad activa se construye con <b>Progreso</b>,{" "}
            <b>Participación</b> y <b>Colaboración</b>. Aquí mostramos una
            representación visual de esos valores.
          </p>

          {/* Contenedor cubo + libro */}
          <div className="flex justify-between items-center max-w-4xl mx-auto px-4">
            <div className="book">
              <div className="cover">
                <p className="text">Comunidad</p>
              </div>
              <div className="inner">
                <p className="text">Activa</p>
              </div>
            </div>

            {/* Canvas */}
            <section className="bg-[#111] text-white py-0 px-4 text-center max-w-xl w-full">
              <div className="h-[400px] rounded-md overflow-hidden shadow-lg">
                <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[5, 5, 5]} />
                  <OrbitControls enablePan={false} enableZoom={false} />
                  <Suspense fallback={null}>
                    <Modelo />
                  </Suspense>
                </Canvas>
              </div>
            </section>
          </div>
        </section>

        {/* Sección de Comunidad (Cards) */}
        <div className="max-w-6xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://i.postimg.cc/kXS8cwDm/algo.jpg"
                alt="Comunidad 1"
                className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Nuestra Comunidad
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  Nuestra comunidad deportiva es un pilar esencial para apoyar a los niños
                  en su crecimiento. Nos enfocamos en brindarles un espacio donde puedan
                  mejorar sus habilidades deportivas y aprender valores fundamentales.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://i.postimg.cc/YSdm9syH/que.jpg"
                alt="Comunidad 2"
                className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Nuestra Comunidad
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  Con nosotros, los niños no solo aprenden y mejoran sus habilidades, sino
                  que también se divierten y crecen juntos. Esta experiencia les permite
                  formar lazos y recuerdos que llevarán consigo en su vida.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://i.postimg.cc/C1WHNKT4/chamba.jpg"
                alt="Comunidad 3"
                className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Nuestra Comunidad
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  Creemos en la importancia de valores como el trabajo en equipo y la
                  perseverancia. Celebramos cada logro y transformamos cada desafío en
                  una oportunidad de aprendizaje, fortaleciendo su confianza.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://i.postimg.cc/Jz13Kggg/sera.jpg"
                alt="Comunidad 4"
                className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Nuestra Comunidad
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  Además, promovemos hábitos saludables que impactan positivamente en su
                  bienestar general. Fomentamos un ambiente seguro y positivo donde los
                  niños puedan desarrollarse plenamente.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-6 w-full bg-white rounded-md my-4"></div>

        {/* Sección F.C Soledad */}
        <section className="bg-[#1a1a1a] py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            {/* Texto */}
            <div>
              <h2 className="text-3xl font-bold text-cyan-500 mb-4">
                F.C Soledad 2016
              </h2>
              <hr className="border-gray-600 w-32 mb-6" />
              <p className="text-gray-200 leading-relaxed text-lg">
                Formando un ambiente tranquilo y seguro, para que nuestros niños
                puedan experimentar el deporte y puedan mejorar sus habilidades
                deportivas.
              </p>
            </div>

            {/* Video */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg aspect-video rounded-lg overflow-hidden shadow-lg">
                <video className="w-full h-full object-cover" controls>
                  <source src={videoSoledad} type="video/mp4" />
                  Tu navegador no soporta videos en HTML5.
                </video>
              </div>
            </div>
          </div>
        </section>

        <ScrollButton />
      </div>

      {/* ====================== ESTILOS UNIFICADOS (CONVENIOS / QUIÉNES SOMOS) ====================== */}
      <style>{`
        /* Estilos del botón exactamente como en Convenios y Quiénes Somos */
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
          width: 330px;
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
        }

        .second {
          width: 20px;
          margin-left: 26px;
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

        @media (max-width: 640px) {
          .cta {
            padding: 14px 28px;
            font-size: 17px;
          }
          .cta.cta-large {
            width: 280px;
            max-width: calc(100vw - 70px);
          }
          .second {
            margin-left: 18px;
          }
          .span {
            white-space: normal;
            line-height: 1.2;
          }
        }
      `}</style>
    </div>
  );
};

export default ComunidadActiva;