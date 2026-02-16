import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../tecnologia.css';
import { motion } from "framer-motion";
import ScrollButton from "../components/ScrollButton";
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

const TecnologiaEnSeguridad: React.FC = () => {
  
  useEffect(() => {
    // Cleanup effect if needed
  }, [testimonios.length]);

  return (
    <div className="tecnologia-seguridad-page">
      <section className="page-header">
        <div className="rrelative z-20 flex flex-col items-center justify-center text-center px-4">
                
                  <h1 className="text-4xl md:text-6xl font-bold text-sky-400">
                  <TextType
                    text={['Tecnología en Seguridad']}
                    typingSpeed={70}
                    pauseDuration={2000}
                    loop={false}
                    showCursor={false}
                    textColors={['#38bdf8']}
                  />
                  </h1>
                
                
                 <span className="mt-2 text-sm md:text-base font-semibold tracking-wider text-gray-300">
                            Inicio / Tecnología en Seguridad
                          </span>
                </div>
      </section>

      <section className="protection-section">
        <div className="container">
          <div className="protection-content">
            <div className="protection-text-container">
              <div className="protection-text">
                <h2 className="protection-title" style={{ color: '#38bdf8' }}>Protección Total para tu Hogar y Negocio</h2>
                <p className="protection-description">
                  En nuestro servicio de <strong>Tecnología en Seguridad</strong>, ofrecemos <strong>soluciones integrales</strong> para proteger lo que más te importa. Contamos con una amplia gama de productos de última generación, que incluyen:
                </p>
                
                <p className="protection-features">
                  <strong>Cámaras de vigilancia de alta definición</strong>: Para una supervisión detallada de cada rincón de tu propiedad. <strong>Sistemas avanzados de monitoreo</strong>: Diseñados para ofrecer seguridad constante y cobertura total, las 24 horas del día, los 7 días de la semana.
                </p>
                
                <p className="protection-trust">
                  Confía en nosotros para mantener lo que más valoras seguro.
                </p>
              </div>
            </div>
            
            <div className="protection-image">
              <img 
                src="https://i.postimg.cc/jj5zw3TN/primera.jpg" 
                alt="Profesional de seguridad trabajando" 
                className="person-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container">
          <div className="solutions-content">
            <div className="solutions-image">
              <img 
                src="https://i.postimg.cc/sD6JsGbw/image2.jpg" 
                alt="Soluciones personalizadas de seguridad" 
                className="solutions-img"
              />
            </div>
            
            <div className="solutions-text-container">
              <div className="solutions-text">
                <h2 className="solutions-title" style={{ color: '#38bdf8' }}>Soluciones Personalizadas para Cada Cliente</h2>
                <p className="solutions-description">
                  Entendemos que cada cliente tiene necesidades de seguridad únicas. Por eso, ofrecemos soluciones personalizadas que se adaptan a tus requisitos específicos. Ya sea que necesites un sistema de vigilancia para tu hogar, una solución integral para tu negocio o seguridad para un evento especial, estamos aquí para diseñar y entregar la mejor opción para ti.  
                  Nuestro equipo de expertos trabajará contigo para evaluar tus necesidades y proporcionarte un sistema de seguridad que te brinde tranquilidad y protección efectiva.
                </p>
                
                <div className="separator"></div>
                
                <button className="solutions-contact-btn">CONTACTANOS</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="technology-section">
        <div className="container">
          <div className="technology-content">
            <div className="technology-text">
              <h2 style={{ color: '#38bdf8' }}>Tecnología de Vanguardia en Seguridad</h2>
              <p className="technology-description">
                Nos mantenemos a la vanguardia en tecnología de seguridad para ofrecerte las soluciones más avanzadas del mercado. Contamos con una amplia gama de productos de última generación, como las <strong>cámaras Hikvision ColorVu Bullet FULL HD</strong>, que proporcionan una vigilancia de alta calidad con características avanzadas, incluyendo:
              </p>
              
              <p className="technology-feature">
                <strong>Tipo de tarjeta:</strong> Asegúrate de que tu tarjeta BCCP sea una tarjeta de crédito o débito internacional (Visa o Mastercard), ya que Discord generalmente acepta estas tarjetas.
              </p>
              
              <p className="technology-feature">
                <strong>Restricciones del banco:</strong> Algunos bancos tienen restricciones para transacciones internacionales o en línea. Puedes verificar con el BCCP si tu tarjeta está habilitada para compras internacionales y en línea.
              </p>
            </div>
            
            <div className="technology-image">
              <img 
                src="https://i.postimg.cc/HLrqm73g/image3.jpg" 
                alt="Cámara de seguridad de vanguardia" 
                className="camera-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="service-content">
            <div className="service-images">
              <img 
                src="https://i.postimg.cc/d18SQRyz/image4.jpg" 
                alt="Servicio técnico especializado" 
                className="service-image-top"
              />
              <img 
                src="https://i.postimg.cc/Wbt6X64T/image5.jpg" 
                alt="Soporte técnico 24/7" 
                className="service-image-bottom"
              />
            </div>
            
            <div className="service-text">
              <h2 style={{ color: '#38bdf8' }}>Servicio y Soporte Técnico Impecables</h2>
              <p className="service-description">
                No solo vendemos equipos de seguridad; ofrecemos un servicio integral que cubre todas tus necesidades de protección. Desde cámaras de vigilancia de alta definición con visión nocturna hasta sistemas de monitoreo avanzados con alertas en tiempo real, nuestros productos están diseñados para ofrecer una cobertura total y una vigilancia constante.
              </p>
              <p className="service-description">
                Lo que realmente nos distingue es nuestro compromiso con el servicio y el soporte técnico. Nuestro equipo de expertos se encarga de cada detalle, desde la instalación inicial hasta el mantenimiento regular y las actualizaciones necesarias para mantener tu sistema al día con las últimas tecnologías. Ofrecemos asistencia técnica 24/7, siempre disponibles para resolver cualquier problema o realizar ajustes para asegurar que tu sistema funcione de manera óptima.
              </p>
              <p className="service-description">
                Tu seguridad es nuestra máxima prioridad, y estamos comprometidos a brindar un servicio excepcional que garantice la protección continua de tus propiedades. Con nosotros, obtienes más que equipos de seguridad; obtienes tranquilidad y la confianza de saber que estás protegido en todo momento.
              </p>
              <button className="solutions-contact-btn">CONTACTAR</button>
            </div>
          </div>
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
              Opiniones de Nuestro <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Servicio Digital</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-base text-slate-600 mt-4 max-w-2xl mx-auto"
            >
              Descubre cómo nuestros servicios de seguridad han brindado protección y tranquilidad
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

export default TecnologiaEnSeguridad;