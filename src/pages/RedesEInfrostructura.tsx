import React from "react";
import fondoN from "../assets/fondoN.jpg";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";

// Variantes para animaciones
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const testimonios = [
  {
    nombre: "Maria Torres",
    imagen: "https://randomuser.me/api/portraits/women/44.jpg",
    opinion:
      "Muy profesionalismo y rapidez nos impresionaron. El nuevo diseño ha atraído más clientes.",
  },
  {
    nombre: "Carlos Gómez",
    imagen: "https://randomuser.me/api/portraits/men/32.jpg",
    opinion:
      "La integración fue muy sencilla. En pocos días ya estábamos facturando sin problemas.",
  },
  {
    nombre: "Laura Ramírez",
    imagen: "https://randomuser.me/api/portraits/women/55.jpg",
    opinion:
      "El soporte técnico es excelente. Siempre disponibles para ayudarnos cuando lo necesitamos.",
  },
];

const RedesEinfroestructura: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* Banner Superior */}
      <motion.div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-sky-400 text-center z-10">
          <TextType
            text={["Redes e Infraestructura"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={["#38bdf8"]}
          />
        </h1>
      </motion.div>

      {/* Sección de Hosting y Dominio */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Diseño e Implementación de Redes
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, nos especializamos en el diseño e
              implementación de redes que priorizan tanto la eficiencia como la
              seguridad. Ya sea que necesites una red local para tu oficina o
              una infraestructura avanzada que conecte múltiples ubicaciones,
              nuestro equipo de expertos posee la experiencia y el conocimiento
              para desarrollar soluciones personalizadas que se ajusten a tus
              necesidades específicas.
            </p>
            <p className="mb-4 leading-relaxed text-justify">
              Nos enfocamos en cada detalle, desde la planificación y
              configuración inicial hasta el mantenimiento continuo,
              garantizando que tu red esté optimizada para ofrecer un
              rendimiento máximo. Además, implementamos las mejores prácticas en
              seguridad para proteger tus datos y mantener la integridad de la
              comunicación dentro de tu organización.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/ingenieros-redes-tableta-tiro-medio_23-2148323447.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[600px] rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Optimización y Mantenimiento */}
      <section className="bg-neutral-800 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Imágenes */}
          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/Mantenimiento-de-redes.jpg"
              alt="Imagen 1"
              className="rounded-lg shadow-md w-full"
            />
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/joven-sosteniendo-interruptores-ethernet-cables_23-2148323476.jpg"
              alt="Imagen 2"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Optimización y Mantenimiento de Redes
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, ofrecemos servicios de optimización y mantenimiento de redes diseñados para garantizar que tu infraestructura opere de manera eficiente en todo momento. Nuestro equipo de expertos realiza un monitoreo continuo de tu red, detectando y solucionando posibles problemas antes de que impacten en tus operaciones.
            </p>
            <p className="mb-4 leading-relaxed text-justify">
              Implementamos un enfoque proactivo con mantenimiento preventivo y actualizaciones regulares, asegurando que tu red se mantenga en su mejor estado y funcione de manera óptima. De esta manera, puedes concentrarte en el crecimiento de tu negocio sin preocuparte por interrupciones o problemas técnicos. Con nuestra gestión integral, tu red estará siempre al máximo rendimiento, ofreciendo una experiencia fluida y confiable.
            </p>
            <a href="/contacto">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                CONTÁCTANOS
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Seguridad en Redes */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Seguridad en Redes
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, la seguridad de tu red es nuestra máxima prioridad. Implementamos las mejores prácticas y tecnologías avanzadas para proteger tu infraestructura contra amenazas externas e internas. Utilizamos firewalls de última generación, sistemas de detección de intrusos y soluciones de cifrado de datos para asegurar que tu red permanezca segura en todo momento. Nuestro enfoque integral te brinda tranquilidad al garantizar la integridad y confidencialidad de tu información. Confía en nosotros para mantener la protección continua de tus activos digitales.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/09/images-2.jpg"
              alt="Seguridad"
              className="w-full max-w-[600px] rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Consultoría */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <img
              src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/diversos-ingenieros-hombres-mujeres-discutiendo-sobre-tableta-digital-sala-servidores-computadoras-concepto-gestion-mantenimiento-servidor-bases-datos_13339-326644.jpg"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Consultoría en Infraestructura
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nuestro servicio de consultoría en infraestructura está diseñado para asistirte en la planificación y ejecución de proyectos de redes con la máxima eficiencia y efectividad.
            </p>
            <p className="mb-4 leading-relaxed text-justify">
              Realizamos un análisis detallado de tus necesidades específicas y te ofrecemos soluciones personalizadas que optimizan tu infraestructura actual mientras preparan tu red para futuros crecimientos. Con Soluciones Integrales JB, contarás con una infraestructura robusta y escalable, capaz de soportar las demandas actuales y futuras de tu negocio, asegurando que estés siempre un paso adelante en el desarrollo tecnológico.
            </p>
            <a href="/contacto">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                CONTACTAR
              </button>
            </a>
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
              Descubre cómo nuestros servicios de redes e infraestructura han transformado negocios
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
        <ScrollButton />
      </section>
    </div>
  );
};

export default RedesEinfroestructura;