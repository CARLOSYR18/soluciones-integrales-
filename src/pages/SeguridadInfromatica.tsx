import React from "react";
import fondoN from "../assets/fondoN.jpg"; // 👈 asegúrate de que la ruta sea correcta
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";
import { motion } from "framer-motion";

const SeguridadInformatica = () => {
  return (
    <div className="font-sans">
      {/* Hero con fondo */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Título animado */}
        <motion.h1
          className="relative text-4xl md:text-5xl font-bold text-cyan-500 text-center z-10"
        
        >
          <TextType
            text={["Seguridad Informática"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
          />
        </motion.h1>
      </div>

      {/* Contenido principal */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex items-center flex-wrap mt-8">
          {/* Imagen a la izquierda */}
          <motion.div
            className="flex-1 pr-12 min-w-[300px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://i.postimg.cc/k4KG8Mnq/seguridad-informatuca.jpg"
              alt="Consultoría en Seguridad Informática"
              className="w-full max-w-[3000px] h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Información a la derecha */}
          <motion.div
            className="flex-1 min-w-[300px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-5 text-[#2c3e50]">
                <span className="text-cyan-500">
                  Consultoría en Seguridad Informática
                </span>
              </h2>

              <p className="text-[#34495e] text-base leading-relaxed mb-5 text-justify">
                Protege tu empresa de amenazas digitales con soluciones
                avanzadas y personalizadas. Mi compromiso es garantizar la
                integridad, disponibilidad y confidencialidad de tus datos,
                ayudándote a prevenir riesgos y fortalecer tus sistemas.
              </p>

              {/* Lista animada */}
              <motion.ul
                className="text-[#34495e] text-base leading-7 list-disc pl-6 text-left inline-block mb-5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <li className="text-justify">
                  <strong>Análisis de vulnerabilidades:</strong> identifico y
                  elimino puntos débiles en tus sistemas.
                </li>
                <li className="text-justify">
                  <strong>Implementación de medidas de seguridad:</strong> diseño
                  soluciones adaptadas a tus necesidades.
                </li>
                <li className="text-justify">
                  <strong>Respaldo y recuperación:</strong> garantizo la
                  protección y recuperación de tu información crítica.
                </li>
                <li className="text-justify">
                  <strong>Capacitación en ciberseguridad:</strong> preparo a tu
                  equipo para enfrentar amenazas digitales.
                </li>
              </motion.ul>

              <p className="text-[#34495e] text-base leading-relaxed mb-6 text-justify">
                Mi enfoque es cercano y profesional, trabajando contigo para
                implementar estrategias de seguridad que mantengan tu negocio
                protegido en todo momento.
              </p>

              {/* Botón con animación interactiva */}
              <motion.a
                href="/contacto"
                className="bg-[#3498db] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#2980b9] transition duration-300 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ¡Protejamos tu empresa!
              </motion.a>
            </div>
          </motion.div>
        </div>
        <ScrollButton />
      </div>
    </div>
  );
};

export default SeguridadInformatica;