import React from "react";
import fondoN from "../assets/fondoN.jpg"; 
import { motion } from "framer-motion";
import TextType from "../components/animacion"; // asegúrate que exporte default
import ScrollButton from "../components/ScrollButton";

const PoliticadePrivacidad = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* Sección con fondo */}
      <section className="page-header">
              <div className="rrelative z-20 flex flex-col items-center justify-center text-center px-4">
                      
                <span className="text-3xl md:text-5xl font-bold text-sky-400">
                <TextType
                  text={['Politica de Privacidad']}
                  typingSpeed={70}
                  pauseDuration={2000}
                  loop={false}
                  showCursor={false}
                  textColors={['#38bdf8']}
                />
                </span>
              
              </div>
            </section>

      {/* Contenido principal */}
      <div className="px-4 py-12">
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
              src="https://i.postimg.cc/GpFCSYts/Politica-De-Privacidad.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </motion.div>

          {/* Texto animado */}
          <motion.div
            className="flex-1 min-w-[300px]"

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
                Politica de Privacidad
              </motion.h2>

              <motion.p
                className="text-[#34495e] text-base leading-relaxed mb-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                En Soluciones Integrales JB S.A.C., la protección de su privacidad es nuestra
                prioridad. Esta política detalla cómo recopilamos, usamos y protegemos su
                información personal.
              </motion.p>

              <motion.h3
                className="text-[#2c3e50] mb-4 text-xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Datos que Recopilamos
                
              </motion.h3>

              <motion.p
              className="text-[#34495e] text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              >
              Podemos recopilar los siguientes datos:
              </motion.p>
              <motion.ul
                className="text-[#34495e] text-base leading-7 list-disc pl-6 mb-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <li>Nombre, correo electrónico y número de contacto.</li>
                <li>Preferencias sobre nuestros servicios.</li>
              </motion.ul>
              {/* Parte 2 */}
              <motion.h3
                className="text-[#2c3e50] mb-4 text-xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Uso de la Información
                
              </motion.h3>

              <motion.p
              className="text-[#34495e] text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              >
              Utilizamos la información para:
              </motion.p>
              <motion.ul
                className="text-[#34495e] text-base leading-7 list-disc pl-6 mb-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <li>Procesar solicitudes de cotización.</li>
                <li>Mejorar nuestros servicios.</li>
                <li>Enviar información relevante sobre promociones o actualizaciones.</li>
              </motion.ul>
              {/* Parte 3 */}
              <motion.h3
                className="text-[#2c3e50] mb-4 text-xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Protección de Datos
                
              </motion.h3>
              <motion.p
              className="text-[#34495e] text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              >
              Implementamos medidas de seguridad técnicas y organizativas para proteger su
              información. No compartimos sus datos con terceros sin su consentimiento
              explícito, salvo que sea requerido por la ley.
              </motion.p>
              {/* Parte 4 */}
              <motion.h3
                className="text-[#2c3e50] mb-4 text-xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Cookies
                
              </motion.h3>
              <motion.p
              className="text-[#34495e] text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              >
              Nuestro sitio utiliza cookies para mejorar su experiencia. Usted puede
              desactivarlas en la configuración de su navegador
              </motion.p>
              {/* Parte 5 */}
              <motion.h3
                className="text-[#2c3e50] mb-4 text-xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Derechos del Usuario
                
              </motion.h3>
              <motion.p
              className="text-[#34495e] text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              >
              Usted tiene derecho a acceder, rectificar o eliminar su información personal. Para
              ejercer estos derechos, escríbanos a consultas@solucionesintegralesjb.com
              </motion.p>
              {/* Parte 6 */}
              <motion.h3
                className="text-[#2c3e50] mb-4 text-xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Cambios en la Política
                
              </motion.h3>
              <motion.p
              className="text-[#34495e] text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              >
              Nos reservamos el derecho de actualizar esta política. La última actualización fue
              el 26 agosto, 2025.
              </motion.p>
            </div>
          </motion.div>
        </div>
        <ScrollButton />
      </div>
    </div>
  );
};

export default PoliticadePrivacidad;
