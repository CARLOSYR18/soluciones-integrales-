import React from "react";
import { motion } from "framer-motion";
import fondoN from "../assets/fondoN.jpg"; 
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";

const SocialMedia = () => {
  return (
    <div className="font-sans">
      {/* Hero con fondoN */}
      <div
        className="w-full h-[300px] bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${fondoN})`,
          backgroundSize: "120%", // Puedes ajustar este valor: 100% = normal, <100% = alejar
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-cyan bg-opacity-50"></div>
        {/* Texto centrado encima del fondo */}
         <h1 className="relative text-4xl md:text-5xl font-bold text-cyan-500 text-center z-10">
            <TextType
            text={['Social Media'] }
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
              showCursor={false}
                />
          </h1>
      </div>

      {/* Contenido principal */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex items-center flex-wrap mt-8 gap-10 justify-center">
          {/* Imagen a la izquierda */}
          <motion.div
            className="flex-1 min-w-[280px] flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://i.postimg.cc/wxkJbFpK/gestionar-redes-sociales-desde-computadora-o-celular.png"
              alt="Social Media"
              className="w-full max-w-md h-[250px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Información a la derecha */}
          <motion.div
            className="flex-1 min-w-[300px]"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-5 text-cyan-500">
                Potencia Tu Presencia en Redes Sociales
              </h2>

              <p className="text-[#34495e] text-base leading-relaxed mb-5 text-justify">
                Potencia tu presencia en redes sociales con nuestro servicio de
                gestión eficaz. Creamos y publicamos contenido estratégico en
                plataformas clave como Facebook, Instagram y LinkedIn,
                optimizando cada publicación para aumentar el engagement y las
                conversiones. Monitorizamos el rendimiento en tiempo real y
                gestionamos interacciones con tu audiencia para asegurar una
                comunicación efectiva. Confía en nosotros para fortalecer tu
                marca digital y alcanzar tus objetivos de negocio a través de
                redes sociales.
              </p>

              {/* Botón de Contacto */}
              <motion.a
                href="/Contacto"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-500 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="inline-block mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m0 0l4-4m-4 4l4 4"
                  />
                </svg>
                CONTACTAR
              </motion.a>
            </div>
          </motion.div>
        </div>
        <ScrollButton />
      </div>
    </div>
  );
};

export default SocialMedia;