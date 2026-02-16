import React from "react";
import { motion } from "framer-motion";
import fondoN from "../assets/fondoN.jpg"; 
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";

const Merchandising = () => {
  return (
    <div className="font-sans">
      {/* Hero con fondoN */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-cyan bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-sky-400 text-center z-10">
                            <TextType
                                                                                     text={['Merchandising']}
                                                                                     typingSpeed={70}
                                                                                     pauseDuration={2000}
                                                                                     loop={false}
                                                                                     showCursor={false}
                                                                                     textColors={['#38bdf8']}
                                                                                   />
                                                </h1>
      </div>

      {/* Contenido principal */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex items-center flex-wrap mt-8 gap-10 justify-center">
          
          {/* Imágenes a la izquierda */}
          <motion.div
            className="flex-1 pr-6 min-w-[280px] flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/merchandising-2.jpg"
              alt="Merchandising"
              className="w-full max-w-md h-[250px] object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/SERIGRAFIA-2.jpg"
              alt="Serigrafía"
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
            <div className="text-center p-6 bg-[#f4f9ff] rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-5 text-sky-400">
                Productos Personalizados de Calidad
              </h2>

              <p className="text-[#34495e] text-base leading-relaxed mb-5 text-justify">
                En Soluciones Integrales JB, ofrecemos productos de merchandising personalizados que destacan la identidad de tu marca. 
                Desde artículos promocionales como bolígrafos y llaveros hasta prendas de vestir y accesorios, 
                nos aseguramos de que cada producto refleje tus valores y mensajes corporativos de manera efectiva. 
                Utilizamos materiales de alta calidad y técnicas de impresión avanzadas para garantizar resultados duraderos y memorables.
              </p>

              <motion.a
                href="/contacto"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#3498db] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-[#2980b9] transition duration-300 inline-block"
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

export default Merchandising;