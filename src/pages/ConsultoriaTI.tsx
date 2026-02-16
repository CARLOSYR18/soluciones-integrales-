import React from "react";
import fondoN from "../assets/fondoN.jpg"; 
import { motion } from "framer-motion";
import TextType from "../components/animacion"; // asegúrate que exporte default
import ScrollButton from "../components/ScrollButton";

const ConsultoriaTI = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* Sección con fondo */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Texto animado */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-sky-400 relative z-10"
          
        >
          <TextType
            text={["Consultoría en TI"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={["#38bdf8"]}
          />
        </motion.h1>
      </div>

      {/* Contenido principal */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex items-center mt-8 flex-wrap">
          {/* Imagen animada */}
          <motion.div
            className="flex-1 pr-12 min-w-[300px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/11/qe0pwt6j.png"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </motion.div>

          {/* Texto animado */}
          <motion.div
            className="flex-1 min-w-[300px]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-justify p-6 bg-white rounded-lg shadow-md">
              <motion.h2
                className="text-sky-400 mb-5 text-2xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Tecnologías de la Información (TI)
              </motion.h2>

              <motion.p
                className="text-[#34495e] text-base leading-relaxed mb-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Mi misión es ayudarte a transformar tu empresa con soluciones
                tecnológicas efectivas y a medida. Con años de experiencia en el
                mundo de la TI, estoy aquí para apoyarte en cada paso de tu
                transformación digital.
              </motion.p>

              <motion.h3
                className="text-[#2c3e50] mb-4 text-xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Te ofrezco:
              </motion.h3>

              <motion.ul
                className="text-[#34495e] text-base leading-7 list-disc pl-6 mb-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <li>
                  <strong>Mejora de procesos internos:</strong> para que tu
                  equipo sea más eficiente.
                </li>
                <li>
                  <strong>Seguridad informática:</strong> protejo tus datos como
                  si fueran los míos.
                </li>
                <li>
                  <strong>Implementación de software:</strong> encuentro las
                  herramientas ideales para tu negocio.
                </li>
                <li>
                  <strong>Migración a la nube:</strong> doy el salto contigo
                  hacia tecnologías modernas.
                </li>
              </motion.ul>

              <motion.p
                className="text-[#34495e] text-base leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                ¿Listo para llevar tu empresa al siguiente nivel? <br />
                Contáctame y hablemos de cómo puedo ayudarte.
              </motion.p>
            </div>
          </motion.div>
        </div>
        <ScrollButton />
      </div>
    </div>
  );
};

export default ConsultoriaTI;
