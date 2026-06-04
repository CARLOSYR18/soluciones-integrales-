
import React, { useEffect } from 'react';
import fondoN from '../assets/fondoN.jpg';
import { motion } from 'framer-motion';
import ScrollButton from '../components/ScrollButton';
import TextType from '../components/animacion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../tecnologia.css';

const testimonios = [
  {
    nombre: 'Maria Torres',
    imagen: 'https://randomuser.me/api/portraits/women/44.jpg',
    opinion: 'El equipo trabajó con gran profesionalismo y rapidez. La implementación mejoró la seguridad de nuestro negocio.',
  },
  {
    nombre: 'Carlos Gómez',
    imagen: 'https://randomuser.me/api/portraits/men/32.jpg',
    opinion: 'La instalación fue ordenada y clara. En pocos días ya contábamos con un sistema funcional y confiable.',
  },
  {
    nombre: 'Laura Ramírez',
    imagen: 'https://randomuser.me/api/portraits/women/55.jpg',
    opinion: 'El soporte técnico fue excelente. Siempre estuvieron disponibles para resolver nuestras consultas.',
  },
];

const FacturacionElectronica: React.FC = () => {
  useEffect(() => {
    // Cleanup effect if needed
  }, [testimonios.length]);

  return (
    <div className="tecnologia-seguridad-page font-sans">
      {/* ====================== BANNER PRINCIPAL ====================== */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center text-cyan-500 tracking-tight">
          <TextType
            text={['Tecnología en Seguridad']}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
          />
        </h1>
      </div>

      {/* ====================== PROTECCIÓN TOTAL ====================== */}
      <section className="relative overflow-hidden bg-white py-16 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Card de texto */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="group h-full"
          >
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_24px_70px_rgba(6,182,212,0.18)]">
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl md:text-4xl font-extrabold text-cyan-500 mb-5 text-center leading-tight"
              >
                Protección Total para tu Hogar y Negocio
              </motion.h2>

              <div className="space-y-4 text-slate-700 text-[15px] md:text-base leading-7 text-left">
                <p>
                  Brindamos soluciones integrales de tecnología en seguridad para proteger hogares, empresas y espacios de trabajo. Nuestro servicio combina equipos modernos, instalación profesional y asesoría especializada para cuidar lo que más valoras.
                </p>

                <p>
                  Implementamos cámaras de vigilancia de alta definición y sistemas de monitoreo diseñados para ofrecer supervisión constante, cobertura eficiente y mayor tranquilidad durante todo el día.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Videovigilancia HD', 'Monitoreo continuo', 'Seguridad preventiva', 'Protección integral'].map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:-translate-y-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card de imagen */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="group h-full"
          >
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-3 md:p-4 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_24px_70px_rgba(6,182,212,0.18)]">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl">
                <img
                  src="https://i.postimg.cc/jj5zw3TN/primera.jpg"
                  alt="Tecnología en seguridad para hogar y negocio"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-80" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== SOLUCIONES PERSONALIZADAS ====================== */}
      <section className="relative overflow-hidden bg-black text-white py-16 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Card de imagen */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="group h-full"
          >
            <div className="h-full rounded-3xl border border-white/10 bg-neutral-950 p-3 md:p-4 shadow-[0_18px_55px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-500/50 group-hover:shadow-[0_24px_70px_rgba(6,182,212,0.18)]">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl">
                <img
                  src="https://i.postimg.cc/9f9BLd7n/dd2.jpg"
                  alt="Soluciones personalizadas de seguridad"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Card de texto */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="group h-full"
          >
            <div className="h-full rounded-3xl border border-white/10 bg-neutral-950 p-6 md:p-8 shadow-[0_18px_55px_rgba(0,0,0,0.45)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-500/50 group-hover:shadow-[0_24px_70px_rgba(6,182,212,0.18)]">
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl md:text-4xl font-extrabold text-cyan-500 mb-5 text-center leading-tight"
              >
                Soluciones Personalizadas para Cada Cliente
              </motion.h2>

              <div className="space-y-4 text-white/85 text-[15px] md:text-base leading-7 text-left">
                <p>
                  Sabemos que cada cliente tiene necesidades distintas. Por ello, diseñamos sistemas de seguridad a medida para hogares, negocios, oficinas y eventos, priorizando cobertura, control y facilidad de uso.
                </p>

                <p>
                  Nuestro equipo evalúa cada entorno, identifica los puntos críticos y propone una solución eficiente, confiable y alineada con el nivel de protección que requiere cada proyecto.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Diagnóstico técnico', 'Diseño a medida', 'Implementación segura', 'Soporte especializado'].map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-white/85 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:-translate-y-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== TECNOLOGÍA DE VANGUARDIA ====================== */}
      <section className="relative overflow-hidden bg-white py-16 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Card de texto */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="group h-full"
          >
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_24px_70px_rgba(6,182,212,0.18)]">
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl md:text-4xl font-extrabold text-cyan-500 mb-5 text-center leading-tight"
              >
                Tecnología de Vanguardia en Seguridad
              </motion.h2>

              <div className="space-y-4 text-slate-700 text-[15px] md:text-base leading-7 text-left">
                <p>
                  Trabajamos con soluciones modernas de videovigilancia y monitoreo para ofrecer sistemas estables, nítidos y preparados para responder a las exigencias actuales de seguridad.
                </p>

                <p>
                  Integramos equipos de alta definición, configuración profesional y criterios técnicos que permiten mejorar la supervisión, optimizar el control de accesos y fortalecer la protección de cada espacio.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Alta definición', 'Control inteligente', 'Monitoreo remoto', 'Equipos modernos'].map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:-translate-y-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card de imagen */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="group h-full"
          >
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-3 md:p-4 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_24px_70px_rgba(6,182,212,0.18)]">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl">
                <img
                  src="https://i.postimg.cc/HLrqm73g/image3.jpg"
                  alt="Tecnología avanzada en seguridad"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-80" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== TESTIMONIOS ====================== */}
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
            transition={{ duration: 0.7, ease: 'easeOut' }}
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
              Opiniones de Nuestros{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Clientes</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-base text-slate-600 mt-4 max-w-2xl mx-auto"
            >
              Conoce la experiencia de clientes que confiaron en nuestras soluciones de seguridad.
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
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col group border border-slate-100 hover:border-cyan-200 hover:-translate-y-3"
                >
                  {/* Estrellas animadas */}
                  <div className="flex gap-2 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.4,
                          rotateZ: 360,
                          y: -10,
                          transition: { duration: 0.5 },
                        }}
                        className="w-6 h-6 fill-yellow-400 cursor-pointer"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </motion.svg>
                    ))}
                  </div>

                  {/* Icono de comilla */}
                  <div className="text-5xl text-cyan-400/20 mb-3 leading-none">"</div>

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
                      <p className="font-bold text-slate-900 text-sm">{testimonio.nombre}</p>
                      <p className="text-cyan-500 text-xs font-semibold">Cliente satisfecho</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </motion.div>

          {/* Estilos personalizados */}
          <style>{`
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
