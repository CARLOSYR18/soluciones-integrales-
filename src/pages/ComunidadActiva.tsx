import React from "react";
import '../comunidad.css';
import '../boton.css'
import ScrollButton from "../components/ScrollButton";

import Reactt, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei"
import Modelo from "./modelo"
import { useFrame } from "@react-three/fiber"
import { Group } from "three"
import Reacttt, { useEffect, useRef } from "react"

const ComunidadActiva = () => {
  return (
    <div className="font-sans">
      {/* Portada estilo Hero */}
      <div className="relative w-full h-[500px]">
        {/* Imagen de portada */}
        <img
          src="https://solucionesintegralesjb.com/wp-content/uploads/2024/10/Fomentar-la-participacion-activa-en-tus-alumnos-1024x683-1.jpg"
          alt="Comunidad Activa"
          className="w-full h-full object-cover"
        />

        {/* Contenido encima de la imagen */}
        <div className="absolute inset-0 flex flex-col justify-center items-end pr-12">
          <div className="bg-black bg-opacity-40 px-6 py-4 rounded-lg text-right">
            <h1 className="text-3xl font-bold text-white mb-4">
              Comunidad Activa
            </h1>

            {/* Botón de información - NUEVO ESTILO ROJO */}
            <a
              href="https://solucionesintegralesjb.com/comunidad2/#id-activa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cta-rojo">
                <span className="span-rojo">Información</span>
                <span className="second-rojo">
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
      
      <div>
         <section className="bg-[#111] text-white py-7 px-6 text-center">
  <h1 className="text-4xl font-bold text-[#4f7fff] mb-4">
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
{/* Sección de Comunidad */}
<div className="max-w-6xl mx-auto px-4 mt-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Card 1 */}
    <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
      <img
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/11/algo.jpg"
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
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/11/que.jpg"
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
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/11/chamba.jpg"
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
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/11/sera.jpg"
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



<div>

</div>
       {/* Sección F.C Soledad */}
<section className="bg-[#1a1a1a] py-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
    
    {/* Texto */}
    <div>
      <h2 className="text-3xl font-bold text-blue-500 mb-4">
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
        <video
          className="w-full h-full object-cover"
          controls
        >
          <source
            src="https://solucionesintegralesjb.com/wp-content/uploads/2024/11/Grabacion-de-pantalla-2024-11-24-181258-1.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta videos en HTML5.
        </video>
      </div>
    </div>
  </div>
</section>
<ScrollButton />


      </div>

      <style>{`
        /* Estilos del botón rojo tipo "Nuestra Historia" */
        .cta-rojo {
          display: flex;
          align-items: center;
          padding: 12px 40px;
          text-decoration: none;
          font-size: 18px;
          color: #ffffff;
          background: #ff0000;
          transition: 1s;
          box-shadow: 6px 6px 0 black;
          transform: skewX(-15deg);
          border: none;
          cursor: pointer;
          font-weight: 600;
        }

        .cta-rojo:focus {
          outline: none;
        }

        .cta-rojo:hover {
          transition: 0.5s;
          box-shadow: 10px 10px 0 #ffffff;
        }

        .span-rojo {
          transform: skewX(15deg);
          font-weight: 600;
        }

        .second-rojo {
          width: 20px;
          margin-left: 30px;
          position: relative;
          top: 12%;
          transition: 0.5s;
          margin-right: 0px;
        }

        .cta-rojo:hover .second-rojo {
          transition: 0.5s;
          margin-right: 45px;
        }

        .cta-rojo .one {
          transition: 0.4s;
          transform: translateX(-60%);
        }

        .cta-rojo .two {
          transition: 0.5s;
          transform: translateX(-30%);
        }

        .cta-rojo:hover .three {
          animation: color_anim 1s infinite 0.2s;
        }

        .cta-rojo:hover .one {
          transform: translateX(0%);
          animation: color_anim 1s infinite 0.6s;
        }

        .cta-rojo:hover .two {
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
    </div>
  );
};

export default ComunidadActiva;