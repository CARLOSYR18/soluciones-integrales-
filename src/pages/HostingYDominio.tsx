
import React from 'react';
import fondoN from '../assets/fondoN.jpg';
import { motion } from 'framer-motion';
import ScrollButton from '../components/ScrollButton';
import TextType from '../components/animacion';
import TestimoniosCarousel from '../components/TestimoniosCarousel';


const hostingSections = [
  {
    titulo: 'Hosting Seguro y Confiable',
    imagen: 'https://i.postimg.cc/T3ddwqLr/Cloud-hosting-amico.jpg',
    alt: 'Hosting seguro y confiable',
    fondo: 'white',
    invertido: false,
    parrafos: [
      'En Soluciones Integrales JB ofrecemos servicios de hosting seguros, estables y confiables para mantener tu sitio web siempre disponible. Trabajamos con servidores de alto rendimiento, infraestructura optimizada y medidas de protección orientadas a cuidar la continuidad de tu presencia digital.',
      'Nuestro servicio está diseñado para que tu página cargue con rapidez, funcione correctamente y brinde una experiencia sólida a tus usuarios. Nos enfocamos en rendimiento, seguridad y estabilidad para que puedas concentrarte en el crecimiento de tu negocio.',
    ],
    etiquetas: ['Alta disponibilidad', 'Seguridad web', 'Rendimiento estable'],
  },
  {
    titulo: 'Registro de Dominios Personalizados',
    imagen: 'https://i.postimg.cc/3xxh78VD/Frame-940.jpg',
    alt: 'Registro de dominios personalizados',
    fondo: 'black',
    invertido: true,
    parrafos: [
      'Registramos y gestionamos dominios personalizados para que tu empresa cuente con una identidad clara, profesional y fácil de recordar en internet. Te ayudamos a elegir un nombre adecuado que represente tu marca y fortalezca tu presencia digital.',
      'Además, brindamos acompañamiento en la administración del dominio para que mantengas el control de tu sitio, correos corporativos y configuración principal. Nuestro objetivo es que tu negocio tenga una base digital ordenada, segura y lista para crecer.',
    ],
    etiquetas: ['Identidad digital', 'Gestión de dominio', 'Marca profesional'],
  },
  {
    titulo: 'Planes de Hosting Escalables',
    imagen: 'https://i.postimg.cc/WbXR9Rz3/Server-amico.jpg',
    alt: 'Planes de hosting escalables',
    fondo: 'white',
    invertido: false,
    parrafos: [
      'Ofrecemos planes de hosting escalables que se adaptan al tamaño y crecimiento de tu proyecto. Ya sea que necesites una solución inicial para una página informativa o un entorno con mayores recursos para un sitio con más tráfico, te orientamos hacia la alternativa más conveniente.',
      'A medida que tu empresa crece, nuestros servicios pueden ampliarse para responder a nuevas necesidades de almacenamiento, velocidad y capacidad. De esta manera, tu plataforma digital evoluciona contigo sin limitar tus operaciones.',
    ],
    etiquetas: ['Escalabilidad', 'Recursos flexibles', 'Crecimiento digital'],
  },
  {
    titulo: 'Soporte Técnico 24/7',
    imagen: 'https://i.postimg.cc/mDxKcBXF/Frame-941.jpg',
    alt: 'Soporte técnico para hosting y dominio',
    fondo: 'black',
    invertido: true,
    parrafos: [
      'Brindamos soporte técnico para ayudarte con la administración de tu hosting, dominio y servicios relacionados. Nuestro acompañamiento busca resolver incidencias, orientar configuraciones y mantener tu plataforma operativa con la mayor continuidad posible.',
      'También implementamos certificados SSL y configuraciones de seguridad para proteger la navegación de tus usuarios y reforzar la confianza en tu sitio web. La seguridad y el soporte son parte esencial de una presencia digital profesional.',
    ],
    etiquetas: ['Soporte continuo', 'Certificado SSL', 'Asistencia técnica'],
  },
];

const HostingYDominio: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* Banner Superior */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-5xl font-bold text-cyan-500 text-center z-10 px-4"
        >
          <TextType
            text={['Hosting y Dominio']}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
          />
        </motion.h1>
      </div>

      {hostingSections.map((item, index) => {
        const isDark = item.fondo === 'black';

        return (
          <section
            key={item.titulo}
            className={`${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'} py-16 md:py-20 px-5 md:px-10 lg:px-16 overflow-hidden`}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch ${
                  item.invertido ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                {/* Card de texto */}
                <motion.div
                  initial={{ opacity: 0, x: item.invertido ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="h-full"
                >
                  <div
                    className={`group h-full rounded-3xl border p-6 md:p-8 shadow-[0_18px_60px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-2 ${
                      isDark
                        ? 'border-white/10 bg-white/[0.06] hover:border-cyan-500/40 hover:shadow-cyan-500/10'
                        : 'border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-cyan-500/10'
                    }`}
                  >
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                        isDark
                          ? 'border-white/10 bg-white/5 text-slate-200 group-hover:border-cyan-500/40 group-hover:text-cyan-300'
                          : 'border-slate-200 bg-slate-50 text-slate-600 group-hover:border-cyan-500/40 group-hover:text-cyan-600'
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-cyan-500" />
                      Hosting y Dominio
                    </span>

                    <h2 className="mt-5 text-2xl md:text-3xl font-extrabold text-cyan-500 leading-tight">
                      {item.titulo}
                    </h2>

                    <div className="mt-5 space-y-4">
                      {item.parrafos.map((parrafo) => (
                        <p
                          key={parrafo}
                          className={`text-[15px] md:text-base leading-7 text-justify ${
                            isDark ? 'text-slate-200' : 'text-slate-700'
                          }`}
                        >
                          {parrafo}
                        </p>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.etiquetas.map((etiqueta) => (
                        <span
                          key={etiqueta}
                          className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 ${
                            isDark
                              ? 'border-white/10 bg-white/5 text-slate-200'
                              : 'border-slate-200 bg-slate-50 text-slate-700'
                          }`}
                        >
                          {etiqueta}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Card de imagen */}
                <motion.div
                  initial={{ opacity: 0, x: item.invertido ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="h-full"
                >
                  <div
                    className={`group relative h-full min-h-[360px] rounded-3xl border p-3 md:p-4 shadow-[0_18px_60px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-2 ${
                      isDark
                        ? 'border-white/10 bg-white/[0.06] hover:border-cyan-500/40 hover:shadow-cyan-500/10'
                        : 'border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-cyan-500/10'
                    }`}
                  >
                    <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
                    <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />

                    <div className="relative h-full overflow-hidden rounded-2xl bg-slate-100">
                      <img
                        src={item.imagen}
                        alt={item.alt}
                        className="h-full min-h-[330px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                          Soluciones Integrales JB
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ====================== TESTIMONIOS / OPINIONES REUTILIZABLE ====================== */}
      <TestimoniosCarousel />

      <ScrollButton />
    </div>
  );
};

export default HostingYDominio;
