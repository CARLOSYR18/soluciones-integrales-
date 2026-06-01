import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import '../components/animacion'
import TextType from "../components/animacion";
import ScrollButton from "../components/ScrollButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DesarrolloWebBanner: React.FC = () => {
  // Datos para el carrusel de testimonios
  const testimonials = [
    {
      quote: "La experiencia de usuario mejoró significativamente desde que rediseñaron nuestro sitio. Excelente trabajo.",
      name: "Naomi Sifuentes",
      avatar: "https://i.postimg.cc/90hKzpFq/imagen-2024-06-23-215557883-removebg-preview-1-1.png"
    },
    {
      quote: "El equipo entendió perfectamente nuestras necesidades y creó un sitio web funcional y atractivo. ¡Estamos encantados!",
      name: "Lonardo",
      avatar: "https://i.postimg.cc/qMC4NmLz/Frame-918.png"
    },
    {
      quote: "Muy profesionalismo y rapidez nos impresionaron. El nuevo diseño ha atraído más clientes.",
      name: "Maria Torres",
      avatar: "https://i.postimg.cc/Dw6XNyXV/Frame-919.png"
    },
    {
      quote: "La integración de las nuevas funcionalidades ha optimizado nuestros procesos internos de manera increíble. ¡Gran solución!",
      name: "juana deprado",
      avatar: "https://i.postimg.cc/SKjJtL48/Frame-921-1.png"
    }
  ];

  return (
    <div className="font-sans">
      {/* ====================== BANNER PRINCIPAL ====================== */}
      <header className="relative w-full h-64 md:h-80 flex flex-col items-center justify-center overflow-hidden">

  <img
    src="https://i.postimg.cc/HxBxQNQF/fondo-N.jpg"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-20 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-cyan-500">
          <TextType
            text={['Desarrollo de Sitio Web']}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}

          />
          </h1>

         <span className="mt-2 text-sm md:text-base font-semibold tracking-wider text-gray-300">
                   
                  </span>
        </div>

      </header>

      {/* ====================== SECCIÓN DE CONTENIDO - DESARROLLO WEB ====================== */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto descriptivo */}
          <div className="text-gray-800">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-cyan-500 mb-6"
            >
              Desarrollo Web Personalizado
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg md:text-base leading-relaxed mb-6 text-justify"
            >
              Diseñamos sitios web únicos y funcionales, perfectamente alineados
              con las necesidades específicas de tu negocio. Nuestro equipo se
              dedica a comprender a fondo tus objetivos para transformarlos en
              una plataforma digital que potencie tu identidad de marca.
              Implementamos las tecnologías más avanzadas para garantizar un
              rendimiento rápido y fluido, lo que no solo optimiza la
              experiencia del usuario, sino que también disminuye las tasas de
              rebote, prolonga el tiempo de permanencia en el sitio y favorece
              el posicionamiento en motores de búsqueda. Nos aseguramos de que
              tu sitio sea completamente responsive, adaptándose sin esfuerzo a
              cualquier dispositivo para ofrecer una experiencia homogénea y de
              alta calidad en móviles, tabletas o computadoras de escritorio.
              Con un enfoque sólido en la optimización y la accesibilidad,
              garantizamos que la navegación sea intuitiva y accesible para
              todos los usuarios, independientemente de su nivel técnico,
              mejorando así la interacción y la conversión.
            </motion.p>
          </div>

          {/* Imagen descriptiva */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="https://i.postimg.cc/gc81zB8N/Desarrollo-de-un-sitio-web-Como-es-el-proceso.jpg"
              alt="Desarrollo Web Personalizado"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ====================== SECCIÓN DE MANTENIMIENTO Y SOPORTE ====================== */}
      <section className="bg-neutral-800 text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen de Mantenimiento y Soporte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src="https://i.postimg.cc/1XVFSqfj/soporte-web-agradable.jpg"
              alt="Mantenimiento y Soporte"
              className="rounded-lg shadow-xl w-full max-w-lg h-auto"
            />
          </motion.div>

          {/* Texto de Mantenimiento y Soporte */}
          <div className="text-gray-300">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-cyan-500 mb-6"
            >
              Mantenimiento y Soporte
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg md:text-base leading-relaxed mb-6 text-justify"
            >
              Ofrecemos mantenimiento continuo y soporte técnico para que tu
              sitio web esté siempre actualizado y seguro. Nos encargamos de
              actualizaciones regulares, copias de seguridad automáticas y
              monitoreo de seguridad para proteger tu plataforma. Con un equipo
              de soporte disponible en todo momento, solucionamos rápidamente
              cualquier problema técnico, minimizando el tiempo de inactividad
              y garantizando la confiabilidad de tu sitio.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg md:text-base leading-relaxed mb-8 text-justify"
            >
              Nuestro enfoque proactivo previene problemas antes de que
              ocurran, asegurando un funcionamiento fluido y una experiencia
              consistente para los usuarios. Con nuestro soporte, puedes
              concentrarte en hacer crecer tu negocio, sabiendo que tu sitio
              está en buenas manos.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
             <a href="/contacto" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                  CONTACTANOS
                </a>
            </motion.button>
          </div>
        </div>
      </section>

      {/* ====================== SECCIÓN DE DISEÑO UX/UI ====================== */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto Descriptivo UX/UI */}
          <div className="text-gray-800">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-cyan-500 mb-6"
            >
              Diseño UX/UI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg md:text-base leading-relaxed mb-6 text-justify"
            >
              Desarrollamos interfaces intuitivas y visualmente atractivas que
              optimizan la experiencia del usuario. Nuestro enfoque en diseño
              UX/UI equilibra estética, funcionalidad y facilidad de uso.
              Mediante investigaciones y pruebas con usuarios, perfeccionamos
              cada elemento de la interfaz para garantizar una navegación fluida
              y sin obstáculos. Una excelente UX/UI no solo fideliza a los
              visitantes, sino que también mejora la satisfacción del cliente y
              aumenta las tasas de conversión.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg md:text-base leading-relaxed text-justify"
            >
              Prestamos especial atención a detalles como la velocidad de carga
              y la estructura de la información, creando un entorno digital que
              proyecta profesionalismo y cuidado al cliente. Nuestra misión es
              transformar cada visita en una experiencia positiva que no solo
              impulse la interacción, sino que también motive a los usuarios a
              regresar.
            </motion.p>
          </div>

          {/* Imagen Descriptiva UX/UI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="https://i.postimg.cc/9FTZ0KBg/2149749873-1.jpg"
              alt="Diseño UX/UI"
              className="rounded-lg shadow-xl w-full max-w-lg h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ====================== SECCIÓN DE INTEGRACIÓN DE FUNCIONALIDADES ====================== */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen de Integración */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src="https://i.postimg.cc/zvwDZCn7/Ventajas-de-la-Integracion-de-Sistemas-y-Datos-scaled-1-2048x1018.webp"
              alt="Integración de Funcionalidades"
              className="rounded-lg shadow-xl w-full max-w-lg h-auto"
            />
          </motion.div>

          {/* Texto de Integración */}
          <div className="text-gray-800">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-cyan-500 mb-6"
            >
              Integración de Funcionalidades
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg md:text-base leading-relaxed mb-6 text-justify"
            >
              Incorporamos las funcionalidades necesarias para optimizar los procesos
              de tu negocio. Desde formularios de contacto y chatbots hasta sistemas
              de gestión de contenido y CRM, nuestras soluciones están diseñadas
              para aumentar la eficiencia operativa. Garantizamos que todas las
              integraciones sean compatibles con dispositivos móviles, mejorando el
              acceso y la usabilidad.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg md:text-base leading-relaxed mb-8 text-justify"
            >
              Con nuestras soluciones, no solo simplificas la gestión, sino que también
              ofreces una experiencia más completa y satisfactoria a tus usuarios.
              Además, personalizamos cada funcionalidad para que se alinee
              perfectamente con tus necesidades específicas, asegurando que tu sitio
              web no solo sea una herramienta, sino una extensión efectiva de tu
              estrategia de negocio. Esto te permite concentrarte en lo más importante:
              expandir y mejorar tu empresa.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <a href="/contacto" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                CONTACTAR
              </a>
            </motion.button>
          </div>
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
              Descubre cómo nuestros servicios de desarrollo web han transformado negocios
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
              {testimonials.map((testimonial, index) => (
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
                    {testimonial.quote}
                  </p>

                  {/* Separador */}
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full"></div>

                  {/* Avatar y nombre */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-sm">
                        {testimonial.name}
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

export default DesarrolloWebBanner;