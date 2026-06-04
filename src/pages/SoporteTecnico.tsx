
import React from 'react';
import fondoN from '../assets/fondoN.jpg';
import { motion } from 'framer-motion';
import TextType from '../components/animacion';
import TestimoniosCarousel from '../components/TestimoniosCarousel';

interface SectionBlockProps {
  title: string;
  paragraphs: string[];
  pills: string[];
  images: {
    src: string;
    alt: string;
  }[];
  dark?: boolean;
  reverse?: boolean;
}

const CYAN = '#06b6d4';

const SectionBlock: React.FC<SectionBlockProps> = ({
  title,
  paragraphs,
  pills,
  images,
  dark = false,
  reverse = false,
}) => {
  const sectionBg = dark ? 'bg-black text-white' : 'bg-white text-slate-900';
  const textCard =
    dark
      ? 'border-white/10 bg-zinc-950 text-slate-200 shadow-[0_22px_70px_rgba(0,0,0,0.45)]'
      : 'border-slate-200 bg-white text-slate-700 shadow-[0_18px_55px_rgba(15,23,42,0.10)]';
  const imageCard =
    dark
      ? 'border-white/10 bg-zinc-950 shadow-[0_22px_70px_rgba(0,0,0,0.45)]'
      : 'border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.10)]';

  return (
    <section className={`relative overflow-hidden py-16 px-5 md:px-10 lg:px-16 ${sectionBg}`}>
      <div className="pointer-events-none absolute -top-28 -left-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div
        className={[
          'relative mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12',
          reverse ? 'lg:[&>div:first-child]:order-2' : '',
        ].join(' ')}
      >
        {/* Card de texto */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 45 : -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.25 }}
          className={`group flex min-h-[420px] flex-col justify-center rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 sm:p-8 md:p-10 ${textCard}`}
        >
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-cyan-500 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Soporte TI
          </div>

          <h2 className="text-2xl font-black leading-tight tracking-wide text-cyan-500 md:text-3xl">
            {title}
          </h2>

          <div className="mt-5 space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-sm leading-7 md:text-[15px] ${
                  dark ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pills.map((pill, index) => (
              <span
                key={`${pill}-${index}`}
                className={[
                  'inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300',
                  dark
                    ? 'border-white/15 bg-white/5 text-slate-100 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white',
                ].join(' ')}
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-7 h-[3px] w-14 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-24" />
        </motion.div>

        {/* Card de imagen */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -45 : 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.25 }}
          className={`group flex min-h-[420px] items-center justify-center rounded-3xl border p-4 transition-all duration-300 hover:-translate-y-2 sm:p-5 ${imageCard}`}
        >
          <div
            className={[
              'grid h-full w-full gap-4',
              images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1',
            ].join(' ')}
          >
            {images.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="relative min-h-[330px] overflow-hidden rounded-2xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Soporte: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* Banner Superior */}
      <div
        className="relative flex h-[300px] w-full items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative z-10 text-center text-4xl font-bold text-cyan-500 md:text-5xl">
          <TextType
            text={['Soporte Técnico']}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={[CYAN]}
          />
        </h1>
      </div>

      <SectionBlock
        title="Asistencia Técnica Integral"
        paragraphs={[
          'En Soluciones Integrales JB brindamos soporte técnico integral para garantizar el correcto funcionamiento de tus sistemas, equipos e infraestructura tecnológica. Nuestro equipo atiende incidencias de hardware y software con soluciones rápidas, ordenadas y orientadas a reducir tiempos de inactividad.',
          'Nos enfocamos en mantener la continuidad operativa de tu negocio mediante atención especializada, diagnóstico oportuno y acompañamiento técnico confiable. De esta manera, tu empresa puede trabajar con mayor seguridad, estabilidad y eficiencia.',
        ]}
        pills={[
          'Soporte especializado',
          'Diagnóstico técnico',
          'Continuidad operativa',
          'Atención eficiente',
        ]}
        images={[
          {
            src: 'https://i.postimg.cc/vZgP5C6j/800-imagen-1.jpg',
            alt: 'Asistencia técnica integral',
          },
        ]}
      />

      <SectionBlock
        dark
        reverse
        title="Monitoreo y Mantenimiento Proactivo"
        paragraphs={[
          'Nuestro servicio no se limita a resolver problemas cuando aparecen. Implementamos monitoreo y mantenimiento proactivo para anticiparnos a posibles fallas, supervisando tus sistemas y aplicando acciones preventivas que reduzcan riesgos operativos.',
          'Este enfoque permite conservar la infraestructura tecnológica en condiciones óptimas, mejorar el rendimiento de los equipos y prolongar su vida útil. Así, tu negocio obtiene mayor estabilidad, productividad y control sobre sus recursos tecnológicos.',
        ]}
        pills={[
          'Monitoreo preventivo',
          'Mantenimiento continuo',
          'Mayor estabilidad',
          'Optimización de equipos',
        ]}
        images={[
          {
            src: 'https://i.postimg.cc/g0r37v6L/dd6.png',
            alt: 'Monitoreo técnico',
          },
        ]}
      />

      <SectionBlock
        title="Soporte Remoto y On-Site"
        paragraphs={[
          'Ofrecemos soporte técnico remoto y presencial, adaptándonos a las necesidades de cada cliente. A través del soporte remoto realizamos diagnósticos, configuraciones y soluciones rápidas mediante herramientas seguras de acceso y asistencia en línea.',
          'Cuando la situación requiere atención física, nuestros técnicos pueden acudir a tus instalaciones para revisar computadoras, laptops, impresoras y otros equipos. Esta flexibilidad permite resolver incidencias complejas y ejecutar mantenimientos programados con mayor precisión.',
        ]}
        pills={[
          'Atención remota',
          'Servicio presencial',
          'Equipos de cómputo',
          'Respuesta flexible',
        ]}
        images={[
          {
            src: 'https://i.postimg.cc/KzqLqv6L/retrato-hombre-negocios-atractivo-30s-vistiendo-traje-telefono-movil-mientras-trabaja-computadora-of.jpg',
            alt: 'Soporte remoto y presencial',
          },
        ]}
      />

      <SectionBlock
        dark
        reverse
        title="Consultoría y Asesoramiento Tecnológico"
        paragraphs={[
          'Además de brindar soporte técnico, ofrecemos consultoría para optimizar la infraestructura tecnológica de tu empresa. Evaluamos el estado actual de tus sistemas, identificamos oportunidades de mejora y recomendamos soluciones alineadas con tus objetivos operativos.',
          'Nuestro propósito es ayudarte a tomar decisiones tecnológicas más seguras y estratégicas, priorizando eficiencia, escalabilidad y protección de la información. Con una visión técnica clara, tu negocio estará mejor preparado para crecer y adaptarse al entorno digital.',
        ]}
        pills={[
          'Asesoría tecnológica',
          'Mejora de procesos',
          'Seguridad TI',
          'Escalabilidad',
        ]}
        images={[
          {
            src: 'https://i.postimg.cc/VN4bvkkN/Frame-934.png',
            alt: 'Consultoría tecnológica',
          },
        ]}
      />

      <TestimoniosCarousel />
    </div>
  );
};

export default Soporte;
