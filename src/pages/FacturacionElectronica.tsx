import React from 'react';
import fondoN from '../assets/fondoN.jpg';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/pagination';
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";
import { motion } from "framer-motion";
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

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const FacturacionElectronica: React.FC = () => {
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
            text={['Facturación Electrónica']}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={['#38bdf8']}
          />
        </h1>
      </div>

      {/* Sección 1 */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 text-gray-800"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Automatiza tu Proceso de Facturación
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nuestro servicio de Facturación Electrónica te permite automatizar todo el proceso de facturación, desde la emisión hasta el almacenamiento de documentos, simplificando así la gestión financiera de tu empresa. Este sistema no solo optimiza el tiempo y reduce errores, sino que también garantiza la seguridad y confidencialidad de la información.
            </p>
            <p className="leading-relaxed text-justify">
              Con integración directa a SUNAT, nuestro software asegura que todas tus facturas cumplan con las regulaciones fiscales vigentes en Perú, facilitando el cumplimiento de tus obligaciones tributarias. Además, el sistema está diseñado para adaptarse a las necesidades de empresas de diversos tamaños, brindándote flexibilidad y escalabilidad a medida que tu negocio crece.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/2150062347.jpg"
              alt="Automatización"
              className="w-full max-w-[500px] h-auto rounded-lg shadow-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Sección 2 */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/2148938351.jpg"
              alt="Integración 1"
              className="rounded-lg shadow-md w-full max-w-[450px] mx-auto"
            />
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/personnel-officer-2-450x253-1.jpg"
              alt="Integración 2"
              className="rounded-lg shadow-md w-full max-w-[450px] mx-auto"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 text-gray-800"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Integración Fácil y Rápida
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nuestro sistema de Facturación Electrónica se integra fácilmente con tus sistemas existentes, facilitando una transición sin problemas. Ya sea que utilices un ERP, un sistema de contabilidad específico o cualquier otra plataforma, nuestra solución se adapta a tus necesidades.
            </p>
            <p className="leading-relaxed text-justify mb-6">
              La integración es rápida y sencilla, permitiéndote comenzar a emitir facturas electrónicas en poco tiempo. Además, ofrecemos soporte técnico para garantizar una implementación exitosa y sin complicaciones.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              CONTÁCTANOS
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sección 3 */}
<section className="bg-neutral-900 py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
    
    {/* Texto */}
    <motion.div
      className="md:w-1/2 text-white"
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6"> Acceso y Control desde Cualquier Lugar </h2>

      <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
        Con nuestro software, puedes acceder a tus facturas electrónicas y gestionar tus operaciones 
        desde cualquier lugar y en cualquier momento, garantizando la seguridad de tus datos. 
        La plataforma en la nube te permite monitorear y controlar tus facturas en tiempo real 
        desde cualquier dispositivo: computadora, tablet o smartphone.
      </p>

      <p className="text-lg md:text-xl leading-relaxed text-gray-300">
        Esto no solo aumenta la eficiencia, sino que también te brinda la flexibilidad necesaria 
        para adaptarte rápidamente a las necesidades de tu negocio. Además, las actualizaciones 
        automáticas aseguran que siempre cuentes con la última tecnología sin complicaciones.
      </p>

      <div className="separator"></div>
    </motion.div>

    {/* Imagen */}
    <motion.div
      className="md:w-1/2 flex justify-center"
      variants={fadeInRight}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img
        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/700a3e638490cb4d215f4b94405c40d1.jpg"
        alt="Acceso remoto"
        className="w-full max-w-[550px] h-auto rounded-2xl shadow-2xl border-4 border-blue-600"
      />
    </motion.div>
  </div>
</section>

      {/* Sección 4 */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/El-nuevo-programa-cooperativo-de-cumplimiento-fiscal-en-Ecuador.jpg"
              alt="Cumplimiento fiscal"
              className="rounded-lg shadow-md w-full max-w-[500px] mx-auto"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 text-gray-800"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Cumplimiento Fiscal Garantizado
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Por eso, nuestro software de Facturación Electrónica está meticulosamente diseñado para garantizar que todas tus transacciones sean registradas y reportadas conforme a los estrictos requerimientos de la SUNAT.
            </p>
            <p className="leading-relaxed text-justify mb-6">
              Con actualizaciones automáticas que incorporan los últimos cambios en las normativas fiscales, puedes estar seguro de que siempre cumplirás con la ley sin necesidad de preocuparte por ajustes manuales o errores. Nuestra plataforma te permite mantener tu negocio al día con total confianza, ofreciendo soluciones confiables y seguras que no solo protegen la integridad de tus operaciones, sino que también te ayudan a evitar sanciones innecesarias. Al optar por nuestras soluciones, te aseguras de que tu negocio esté siempre en plena conformidad, permitiéndote concentrarte en lo que realmente importa: el crecimiento y éxito de tu empresa.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              CONTACTAR
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sección Testimonios - CARRUSEL MEJORADO */}
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
              Opiniones de Nuestros <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Clientes</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-base text-slate-600 mt-4 max-w-2xl mx-auto"
            >
              Descubre cómo nuestro servicio de facturación electrónica ha transformado negocios
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
                  <p className="text-slate-700 text-base leading-relaxed mb-8 flex-grow font-medium">
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

export default FacturacionElectronica;