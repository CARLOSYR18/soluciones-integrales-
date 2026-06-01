import React from "react";
import fondoN from "../assets/fondoN.jpg"; 
import { motion } from "framer-motion";
import TextType from "../components/animacion"; // asegúrate que sea default export

import ScrollButton from "../components/ScrollButton";



const ConsultoriaEmpresarial = () => {
  return (
    <div className="font-sans">
      {/* Hero con fondoN.jpg */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Texto animado */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-cyan-500 relative z-10"
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
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex items-center flex-wrap mt-8">
          {/* Imagen a la izquierda */}
          <motion.div
            className="flex-1 pr-12 min-w-[300px]"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://i.postimg.cc/XJqNzY5H/empresarial.jpg"
              alt="Consultoría Empresarial"
              className="w-full max-w-[3000px] h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Información a la derecha */}
          <motion.div
            className="flex-1 min-w-[300px]"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <motion.h2
                className="text-2xl font-semibold mb-5 text-[#2c3e50]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-cyan-500">Consultoría Empresarial</span>
              </motion.h2>

              <motion.p
                className="text-[#34495e] text-base leading-relaxed mb-5 text-justify"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Mi objetivo es ayudarte a llevar tu negocio al siguiente nivel,
                identificando oportunidades, resolviendo desafíos y optimizando
                cada aspecto de tu empresa. Con años de experiencia en el mundo
                empresarial, estoy aquí para trabajar contigo y construir
                soluciones efectivas y sostenibles.
              </motion.p>

              <motion.ul
                className="text-[#34495e] text-base leading-7 list-disc pl-6 text-left inline-block mb-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <li className="text-justify">
                  <strong>Análisis estratégico:</strong> para identificar y
                  aprovechar tus ventajas competitivas.
                </li>
                <li className="text-justify">
                  <strong>Optimización de procesos:</strong> hago que tus
                  operaciones sean más ágiles y eficientes.
                </li>
                <li className="text-justify">
                  <strong>Gestión del cambio:</strong> acompaño a tu equipo en
                  las transiciones necesarias para crecer.
                </li>
                <li className="text-justify">
                  <strong>Planificación financiera:</strong> maximizo el uso de
                  tus recursos para alcanzar tus objetivos.
                </li>
              </motion.ul>

              <motion.p
                className="text-[#34495e] text-base leading-relaxed mb-6 text-justify"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Creo en un enfoque cercano y personalizado. Trabajo contigo como
                si fuera parte de tu equipo, escuchando tus necesidades y
                diseñando soluciones únicas para tu negocio.
              </motion.p>

              <motion.a
                href="/contacto"
                className="bg-[#007BFF] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#0056b3] transition duration-300 inline-block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                ¡Hablemos!
              </motion.a>
            </div>
          </motion.div>

          
        </div>
        <ScrollButton />
      </div>
    </div>
  );
};

export default ConsultoriaEmpresarial;