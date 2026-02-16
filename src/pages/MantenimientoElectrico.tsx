import React from 'react';
import fondoN from '../assets/fondoN.jpg';
import ScrollButton from "../components/ScrollButton";
import { motion } from "framer-motion";
import TextType from "../components/animacion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const MantenimientoElectrico: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">

      {/* Banner Superior */}
      <motion.div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-cyan bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-sky-400 text-center z-10">
          <TextType
            text={['Mantenimiento Eléctrico']}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={['#38bdf8']}
          />
        </h1>
      </motion.div>

      {/* Sección de Hosting y Dominio */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-gray-800"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">   
              Servicios de Mantenimiento
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, ofrecemos servicios de mantenimiento eléctrico preventivo especializados para empresas que buscan asegurar la fiabilidad y eficiencia de sus sistemas. Nuestro enfoque se centra en la detección proactiva de problemas, mediante inspecciones regulares y pruebas de funcionamiento. Esto no solo minimiza riesgos de averías costosas, sino que también mejora la durabilidad de las instalaciones eléctricas, beneficiando así el rendimiento operativo y reduciendo tiempos de inactividad imprevistos.
            </p>
            <a href="/contacto">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                CONTACTAR
              </button>
            </a>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/15085.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Segunda sección */}
      <section className="bg-neutral-800 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
          {/* Imágenes a la izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col gap-6"
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/5077.jpg"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          {/* Texto a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Reparaciones y Soluciones Rápidas
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, ofrecemos servicios de mantenimiento eléctrico preventivo especializados para empresas que buscan asegurar la fiabilidad y eficiencia de sus sistemas. Nuestro enfoque se centra en la detección proactiva de problemas, mediante inspecciones regulares y pruebas de funcionamiento. Esto no solo minimiza riesgos de averías costosas, sino que también mejora la durabilidad de las instalaciones eléctricas, beneficiando así el rendimiento operativo y reduciendo tiempos de inactividad imprevistos.
            </p>
            <a href="/contacto">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                CONTÁCTANOS
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tercera sección */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-gray-800"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Cumplimiento Normativo y Seguridad
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nos comprometemos a cumplir con las normativas eléctricas vigentes, garantizando que todas las actividades de mantenimiento estén alineadas con los estándares de seguridad. Esto no solo protege tus activos y personal, sino que también refuerza la reputación de tu empresa como operador comprometido con prácticas seguras y responsables. Además, la transparencia en el cumplimiento normativo fortalece la credibilidad online, mejorando la percepción de marca y atrayendo a clientes que valoran la seguridad y el cumplimiento legal.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/6115.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[3000px] h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ====================== SECCIÓN DE OPINIONES CON CARRUSEL MEJORADO ====================== */}
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
              Opiniones de Nuestro <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Servicio Digital</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-base text-slate-600 mt-4 max-w-2xl mx-auto text-justify"
            >
              Descubre cómo nuestros servicios de mantenimiento eléctrico han mejorado la eficiencia de empresas
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
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 h-full flex flex-col group border border-slate-100 hover:border-cyan-200 hover:-translate-y-3"
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
                  <div className="text-5xl text-cyan-400/20 mb-3 leading-none">
                    "
                  </div>

                  {/* Texto del testimonio */}
                  <p className="text-slate-700 text-base leading-relaxed mb-8 flex-grow font-medium text-justify">
                    {testimonio.opinion}
                  </p>

                  {/* Separador */}
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full"></div>

                  {/* Avatar y nombre */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={testimonio.imagen}
                        alt={testimonio.nombre}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-sm">
                        {testimonio.nombre}
                      </p>
                      <p className="text-cyan-500 text-xs font-semibold">Cliente satisfecho</p>
                    </div>
                  </div>
                </div>
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
      </section>
      <ScrollButton />
    </div>
  );
};

export default MantenimientoElectrico;