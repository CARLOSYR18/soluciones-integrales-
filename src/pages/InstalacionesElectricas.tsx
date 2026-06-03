
import React from "react";
import fondoN from "../assets/fondoN.jpg";
import ScrollButton from "../components/ScrollButton";
import { motion } from "framer-motion";
import TextType from "../components/animacion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CYAN = "#06b6d4";

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

interface ServiceSectionProps {
  title: string;
  badge: string;
  paragraphs: string[];
  pills: string[];
  image: {
    src: string;
    alt: string;
  };
  dark?: boolean;
  reverse?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  badge,
  paragraphs,
  pills,
  image,
  dark = false,
  reverse = false,
}) => {
  const sectionBg = dark ? "bg-black text-white" : "bg-white text-slate-900";

  const textCard = dark
    ? "border-white/10 bg-zinc-950 text-slate-200 shadow-[0_22px_70px_rgba(0,0,0,0.45)]"
    : "border-slate-200 bg-white text-slate-700 shadow-[0_18px_55px_rgba(15,23,42,0.10)]";

  const imageCard = dark
    ? "border-white/10 bg-zinc-950 shadow-[0_22px_70px_rgba(0,0,0,0.45)]"
    : "border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.10)]";

  return (
    <section
      className={`relative overflow-hidden px-5 py-16 md:px-10 lg:px-16 md:py-20 ${sectionBg}`}
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div
        className={[
          "relative mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12",
          reverse ? "lg:[&>div:first-child]:order-2" : "",
        ].join(" ")}
      >
        {/* Card de texto */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -6 }}
          className={`group flex h-full min-h-[420px] flex-col justify-center rounded-3xl border p-6 transition-all duration-500 md:p-8 ${textCard}`}
        >
          <div
            className={[
              "mb-5 inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.22em] shadow-sm",
              dark
                ? "border-white/15 bg-white/5 text-cyan-500"
                : "border-slate-200 bg-white text-cyan-500",
            ].join(" ")}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            {badge}
          </div>

          <h2 className="mb-6 text-center text-3xl font-extrabold tracking-wide text-cyan-500 md:text-4xl">
            {title}
          </h2>

          <div className="space-y-4 text-left text-[15px] leading-7 md:text-base">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={dark ? "text-slate-200" : "text-slate-700"}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pills.map((pill, index) => (
              <span
                key={`${pill}-${index}`}
                className={[
                  "inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300",
                  dark
                    ? "border-white/15 bg-white/5 text-slate-100 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-[0_10px_28px_rgba(6,182,212,0.22)]"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-[0_10px_28px_rgba(6,182,212,0.22)]",
                ].join(" ")}
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-7 h-[3px] w-14 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-24" />
        </motion.div>

        {/* Card de imagen */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -6 }}
          className={`group flex h-full min-h-[420px] items-center justify-center rounded-3xl border p-4 transition-all duration-500 ${imageCard}`}
        >
          <div className="relative h-full min-h-[340px] w-full overflow-hidden rounded-2xl md:min-h-[420px]">
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Soluciones Integrales JB
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const InstalacionesElectricas: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* ====================== BANNER SUPERIOR ====================== */}
      <motion.div
        className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative z-10 px-4 text-center text-4xl font-bold text-cyan-500 md:text-6xl">
          <TextType
            text={["Instalaciones Eléctricas"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={[CYAN]}
          />
        </h1>
      </motion.div>

      <ServiceSection
        title="Diseño y Ejecución de Instalaciones Eléctricas"
        badge="Instalaciones Eléctricas"
        paragraphs={[
          "En Soluciones Integrales JB desarrollamos instalaciones eléctricas seguras, ordenadas y adaptadas a las necesidades de cada proyecto. Evaluamos los requerimientos técnicos del espacio para diseñar soluciones funcionales que garanticen eficiencia, continuidad y correcta distribución de energía.",
          "Nuestro trabajo contempla planificación, ejecución y verificación de cada instalación, cuidando la calidad de los materiales, la seguridad del entorno y el cumplimiento de buenas prácticas técnicas. Así, tu empresa cuenta con una infraestructura eléctrica confiable y preparada para operar con estabilidad.",
        ]}
        pills={[
          "Diseño eléctrico",
          "Ejecución técnica",
          "Distribución segura",
          "Infraestructura confiable",
        ]}
        image={{
          src: "https://i.postimg.cc/mk307JzM/tecnico-electrico-que-parece-concentrado-mientras-trabaja-cuadro-distribucion-fusibles-169016-24151.jpg",
          alt: "Diseño y ejecución de instalaciones eléctricas",
        }}
      />

      <ServiceSection
        dark
        reverse
        title="Soluciones Personalizadas y Eficientes"
        badge="Soluciones Técnicas"
        paragraphs={[
          "Brindamos soluciones eléctricas personalizadas para empresas, locales comerciales y espacios operativos que requieren sistemas seguros y eficientes. Analizamos cada ambiente para proponer instalaciones que respondan a la demanda energética real y al crecimiento futuro del negocio.",
          "Nuestro enfoque busca optimizar recursos, evitar sobrecargas y mejorar el rendimiento general de la instalación. Con una solución bien diseñada, tu empresa puede operar con mayor seguridad, orden y eficiencia en sus actividades diarias.",
        ]}
        pills={[
          "Evaluación técnica",
          "Eficiencia energética",
          "Soluciones a medida",
          "Operación segura",
        ]}
        image={{
          src: "https://i.postimg.cc/sxzLfm6S/dos-ingenieros-constructores-hablando-sitio-construccion-ingeniero-explicando-dibujo-trabajador-1690.jpg",
          alt: "Soluciones eléctricas personalizadas y eficientes",
        }}
      />

      <ServiceSection
        title="Mantenimiento Preventivo y Correctivo"
        badge="Mantenimiento Eléctrico"
        paragraphs={[
          "Realizamos mantenimiento preventivo y correctivo para conservar las instalaciones eléctricas en condiciones óptimas. Mediante inspecciones, pruebas y revisiones técnicas identificamos posibles riesgos antes de que se conviertan en fallas que afecten la operación.",
          "Cuando se presentan incidencias, aplicamos soluciones correctivas de manera ordenada y segura para restablecer el funcionamiento del sistema. Este servicio ayuda a reducir tiempos de inactividad, proteger equipos y prolongar la vida útil de la infraestructura eléctrica.",
        ]}
        pills={[
          "Inspecciones periódicas",
          "Corrección de fallas",
          "Protección de equipos",
          "Continuidad operativa",
        ]}
        image={{
          src: "https://i.postimg.cc/RZhD0NRN/hombre-tecnico-electrico-que-trabaja-centralita-fusibles-instalacion-conexion-equipos-electricos-169.jpg",
          alt: "Mantenimiento preventivo y correctivo eléctrico",
        }}
      />

      <ServiceSection
        dark
        reverse
        title="Cumplimiento Normativo y Seguridad"
        badge="Seguridad Eléctrica"
        paragraphs={[
          "Trabajamos considerando criterios técnicos y normativos aplicables a las instalaciones eléctricas, priorizando la seguridad de las personas, equipos e infraestructura. Cada intervención se realiza con responsabilidad, orden y atención a los estándares de protección necesarios.",
          "El cumplimiento normativo permite reducir riesgos, prevenir accidentes y brindar mayor confianza en la operación diaria. Nuestro objetivo es que tu instalación funcione de manera estable, segura y alineada con buenas prácticas profesionales.",
        ]}
        pills={[
          "Normativa vigente",
          "Prevención de riesgos",
          "Instalación segura",
          "Buenas prácticas",
        ]}
        image={{
          src: "https://i.postimg.cc/25B94Mg4/hombre-tecnico-electrico-que-trabaja-centralita-fusibles-instalacion-conexion-equipos-electricos-169.jpg",
          alt: "Cumplimiento normativo y seguridad eléctrica",
        }}
      />

      {/* ====================== OPINIONES: CARRUSEL ORIGINAL CONSERVADO ====================== */}
      <section className="relative overflow-hidden bg-white px-4 py-16 md:px-8">
        {/* Decorativos de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-20 top-20 h-96 w-96 rounded-full bg-cyan-500 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-blue-500 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
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
              className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-cyan-400"
            >
              Testimonios
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              className="mt-4 text-3xl font-black leading-tight text-slate-900 md:text-4xl"
            >
              Opiniones de Nuestro{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Servicio Digital
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
              className="mx-auto mt-4 max-w-2xl text-justify text-base text-slate-600"
            >
              Descubre cómo hemos transformado negocios y generado resultados tangibles.
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
                  className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-shadow duration-300 hover:-translate-y-3 hover:border-cyan-200 hover:shadow-2xl"
                >
                  {/* Estrellas animadas */}
                  <div className="mb-5 flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + i * 0.08,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.4,
                          rotateZ: 360,
                          y: -10,
                          transition: { duration: 0.5 },
                        }}
                        className="h-6 w-6 cursor-pointer fill-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </motion.svg>
                    ))}
                  </div>

                  {/* Icono de comilla */}
                  <div className="mb-3 text-5xl leading-none text-cyan-400/20">
                    "
                  </div>

                  {/* Texto del testimonio */}
                  <p className="mb-8 flex-grow text-justify text-base font-medium leading-relaxed text-slate-700">
                    {testimonio.opinion}
                  </p>

                  {/* Separador */}
                  <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

                  {/* Avatar y nombre */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100"></div>
                      <img
                        src={testimonio.imagen}
                        alt={testimonio.nombre}
                        className="relative h-14 w-14 rounded-full border-2 border-white object-cover shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900">
                        {testimonio.nombre}
                      </p>
                      <p className="text-xs font-semibold text-cyan-500">
                        Cliente satisfecho
                      </p>
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

            .custom-testimonial-dots li.react-multi-carousel-dot--active button,
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

export default InstalacionesElectricas;
