import React from 'react';
import fondoN from '../assets/fondoN.jpg';
import { motion } from 'framer-motion';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";

const testimonios = [
  {
    nombre: 'Maria Torres',
    imagen: 'https://randomuser.me/api/portraits/women/44.jpg',
    opinion: 'Muy profesionalismo y rapidez nos impresionaron. El nuevo diseño ha atraído más clientes.',
  },
  {
    nombre: 'Carlos Gómez',
    imagen: 'https://randomuser.me/api/portraits/men/32.jpg',
    opinion: 'La integración fue muy sencilla. En pocos días ya estábamos facturando sin problemas.',
  },
  {
    nombre: 'Laura Ramírez',
    imagen: 'https://randomuser.me/api/portraits/women/55.jpg',
    opinion: 'El soporte técnico es excelente. Siempre disponibles para ayudarnos cuando lo necesitamos.',
  },
];

const Soporte: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">

      {/* Banner Superior */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-sky-400 text-center z-10">
          <TextType
            text={['Soporte Técnico']}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={['#38bdf8']}
          />
        </h1>
      </div>

      {/* Sección de Hosting y Dominio */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Asistencia Técnica Integral
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En <strong>Soluciones Integrales JB</strong>, brindamos un soporte técnico integral para garantizar el óptimo funcionamiento de tus sistemas. Nuestro equipo de expertos está disponible para resolver cualquier inconveniente técnico, ya sea relacionado con hardware o software, proporcionando soluciones rápidas y efectivas que minimizan el tiempo de inactividad. 
            </p>
            <p className="leading-relaxed text-justify">
              Nos comprometemos a mantener la continuidad operativa de tus sistemas tecnológicos, asegurando que tu negocio siga funcionando sin interrupciones. Confía en nosotros para gestionar y mantener tus infraestructuras tecnológicas de manera eficiente.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/800_imagen-1.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[500px] h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Sección Monitoreo */}
      <section className="bg-neutral-800 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Imágenes */}
          <motion.div
            className="md:w-1/2 flex flex-col gap-6 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/4051.jpg"
              alt="Imagen 1"
              className="rounded-lg shadow-md w-full max-w-[350px] mx-auto"
            />
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/images-4.jpg"
              alt="Imagen 2"
              className="rounded-lg shadow-md w-full max-w-[350px] mx-auto"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-white flex flex-col"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Monitoreo y Mantenimiento Proactivo
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nuestro servicio de soporte técnico va más allá de la simple resolución de problemas; incluye monitoreo y mantenimiento proactivo para anticiparnos a posibles fallos. Utilizamos herramientas avanzadas para supervisar tus sistemas en tiempo real, detectando cualquier irregularidad y aplicando ajustes preventivos para evitar interrupciones.
            </p>
            <p className="mb-6 leading-relaxed text-justify">
              Nos comprometemos a mantener tu infraestructura tecnológica en su mejor estado, asegurando un rendimiento óptimo y prolongando la vida útil de tus equipos, lo que se traduce en una mayor eficiencia operativa para tu negocio.
            </p>
            <div className="separator"></div>
            <a href="/contacto">
              <button className="solutions-contact-btn">CONTACTANOS</button>
            </a>
          </motion.div>
          
        </div>

      </section>


      {/* Sección Remoto y On-Site */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Soporte Remoto y On-Site
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Ofrecemos soporte técnico tanto remoto como on-site, adaptándonos a las necesidades específicas de tu negocio. A través de nuestro soporte remoto, utilizamos herramientas avanzadas de acceso y diagnóstico en línea para resolver problemas de manera rápida y eficiente.
            </p>
            <p className="leading-relaxed text-justify">
              Cuando es necesario, enviamos técnicos calificados a tus instalaciones para realizar mantenimiento de computadoras de escritorio, portátiles, impresoras y otros equipos tecnológicos. Con nosotros, tienes la flexibilidad de recibir el soporte que necesitas, ya sea para solucionar problemas complejos o realizar mantenimientos programados.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/retrato-hombre-negocios-atractivo-30s-vistiendo-traje-telefono-movil-mientras-trabaja-computadora-oficina_171337-57902.jpg"
              alt="Soporte remoto"
              className="w-full max-w-[500px] h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Sección Consultoría */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Imagen */}
          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-934.png"
              alt="Consultoría tecnológica"
              className="rounded-lg shadow-md w-full max-w-[500px]"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Consultoría y Asesoramiento Tecnológico
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Además de resolver problemas técnicos, proporcionamos consultoría y asesoramiento para optimizar tu infraestructura tecnológica. Evaluamos tus necesidades actuales y futuras, recomendando mejoras y actualizaciones que aumenten la eficiencia y la seguridad de tus sistemas. 
            </p>
            <p className="mb-6 leading-relaxed text-justify">
              Nuestro objetivo es ayudarte a tomar decisiones informadas sobre tus inversiones tecnológicas, asegurando que tu negocio esté preparado para crecer y adaptarse a las nuevas demandas del mercado.
            </p>
            <a href="/contacto">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                CONTACTAR
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ====================== SECCIÓN DE OPINIONES CON CARRUSEL MEJORADA ====================== */}
      <section className="bg-white py-16 px-4 md:px-8 relative overflow-hidden">
        {/* Decorativos de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Encabezado mejorado */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-cyan-400 text-sm font-black tracking-[0.2em] uppercase inline-block px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5 mb-4"
            >
              Testimonios
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight"
            >
              La voz de nuestros <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">clientes</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-base text-slate-600 mt-4 max-w-2xl mx-auto"
            >
              Descubre cómo hemos transformado negocios y generado resultados tangibles
            </motion.p>
          </motion.div>

          {/* Carrusel de testimonios mejorado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <Carousel
              responsive={{
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
                tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
                mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
              }}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              arrows={true}
              showDots={true}
              dotListClass="custom-testimonial-dots"
              itemClass="px-3 md:px-4"
              containerClass="pb-12"
            >
              {testimonios.map((testimonio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: 80 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "backOut" }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.04,
                    transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 10 }
                  }}
                  style={{
                    perspective: "1200px",
                    transformStyle: "preserve-3d"
                  }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col group border border-slate-100 hover:border-cyan-200"
                >
                  {/* Estrellas animadas */}
                  <div className="flex gap-2 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.4, 
                          rotateZ: 360,
                          y: -10,
                          transition: { duration: 0.5 } 
                        }}
                        className="w-6 h-6 fill-yellow-400 cursor-pointer"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </motion.svg>
                    ))}
                  </div>

                  {/* Icono de comilla */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-5xl text-cyan-400/20 mb-3 leading-none"
                  >
                    "
                  </motion.div>

                  {/* Texto del testimonio */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    viewport={{ once: true }}
                    className="text-slate-700 text-base leading-relaxed mb-8 flex-grow font-medium"
                  >
                    {testimonio.opinion}
                  </motion.p>

                  {/* Separador */}
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full"></div>

                  {/* Avatar y nombre */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <img
                        src={testimonio.imagen}
                        alt={testimonio.nombre}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-sm">
                        {testimonio.nombre}
                      </p>
                      <p className="text-cyan-500 text-xs font-semibold">Cliente satisfecho</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </Carousel>
          </motion.div>

          {/* Estilos personalizados */}
          <style jsx>{`
            .custom-testimonial-dots {
              display: flex;
              justify-content: center;
              gap: 0.75rem;
              list-style: none;
              padding: 2rem 0 0 0;
              margin: 0;
            }

            .custom-testimonial-dots li {
              cursor: pointer;
              transition: all 0.3s ease;
            }

            .custom-testimonial-dots li.react-multi-carousel-dot {
              background: rgba(148, 163, 184, 0.5);
              height: 0.6rem;
              width: 0.8rem;
              border-radius: 9999px;
              transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            .custom-testimonial-dots li.react-multi-carousel-dot:hover {
              background: rgba(34, 211, 238, 0.8);
              transform: scale(1.2);
            }

            .custom-testimonial-dots li.react-multi-carousel-dot.active {
              background: linear-gradient(90deg, #22d3ee, #3b82f6);
              width: 2rem;
              box-shadow: 0 0 15px rgba(34, 211, 238, 0.6);
            }
          `}</style>
        </div>
        <ScrollButton />
      </section>

    </div>
  );
};

export default Soporte;