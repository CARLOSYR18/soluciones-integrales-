import React from "react";
import { motion } from "framer-motion";
import fondoN from "../assets/fondoN.jpg"; // 👈 asegúrate de que la ruta sea correcta
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";

const ConsultoriaEducativa = () => {
  return (
    <div className="font-sans">
      {/* Hero con fondo */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1
          
          className="relative text-4xl md:text-5xl font-bold text-sky-400 text-center z-10"
        >
          <TextType
            text={["Consultoría Educativa"]}
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
        <div className="flex items-center flex-wrap mt-8">
          {/* Imagen a la izquierda */}
          <motion.div
            className="flex-1 pr-12 min-w-[300px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/12/educativa.jpg"
              alt="Consultoría Educativa"
              className="w-full max-w-[3000px] h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Información a la derecha */}
          <motion.div
            className="flex-1 min-w-[300px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <motion.h2
                className="text-2xl font-semibold mb-5 text-[#2c3e50]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-[#3498db]">Consultoría Educativa</span>
              </motion.h2>

              <motion.p
                className="text-[#34495e] text-base leading-relaxed mb-5 text-justify"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Mi misión es apoyar a instituciones, docentes y estudiantes en
                la mejora de sus procesos educativos. Con experiencia en el
                sector, estoy aquí para ayudarte a enfrentar los desafíos de la
                educación moderna y aprovechar cada oportunidad para crecer.
              </motion.p>

              <motion.ul
                className="text-[#34495e] text-base leading-7 list-disc pl-6 text-left inline-block mb-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                {[
                  "Diseño curricular: desarrollo programas educativos a medida para tus necesidades.",
                  "Formación docente: capacito a tu equipo para que brinden lo mejor a sus estudiantes.",
                  "Tecnología educativa: implemento herramientas digitales para mejorar el aprendizaje.",
                  "Evaluación de programas: analizo y optimizo tus proyectos educativos existentes.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-justify"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <strong>{item.split(":")[0]}:</strong>
                    {item.split(":")[1]}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p
                className="text-[#34495e] text-base leading-relaxed mb-6 text-justify"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Trabajo contigo de forma cercana y personalizada, diseñando
                estrategias educativas que realmente marquen la diferencia.
                Estoy comprometido con el éxito de tu comunidad educativa.
              </motion.p>

              <motion.a
                href="/contacto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-[#3498db] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#2980b9] transition duration-300 inline-block"
              >
                ¡Conversemos!
              </motion.a>
            </div>
          </motion.div>
        </div>
        <ScrollButton />
      </div>
    </div>
  );
};

export default ConsultoriaEducativa;