
import React from "react";
import fondoN from "../assets/fondoN.jpg";
import { motion } from "framer-motion";
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const CYAN = "#06b6d4";

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
    <section className={`relative overflow-hidden px-5 py-16 md:px-10 lg:px-16 md:py-20 ${sectionBg}`}>
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
              <p key={index} className={dark ? "text-slate-200" : "text-slate-700"}>
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

const Graficapublicitaria: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* Banner Superior */}
      <motion.div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-4xl md:text-5xl font-bold text-cyan-500 text-center z-10 px-4">
          <TextType
            text={["Gráfica Publicitaria"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={[CYAN]}
          />
        </h1>
      </motion.div>

      <ServiceSection
        title="Diseños Impactantes y Personalizados"
        badge="Diseño Publicitario"
        paragraphs={[
          "En Soluciones Integrales JB diseñamos piezas publicitarias que comunican la esencia de tu marca con claridad, creatividad y profesionalismo. Creamos propuestas visuales orientadas a captar la atención de tu público y transmitir mensajes estratégicos de manera efectiva.",
          "Desarrollamos logotipos, folletos, banners y material promocional con un enfoque visual consistente, moderno y alineado con los objetivos comerciales de tu negocio. Cada diseño busca fortalecer el reconocimiento de marca y generar una impresión memorable.",
        ]}
        pills={[
          "Diseño de logotipos",
          "Material promocional",
          "Banners publicitarios",
          "Comunicación visual",
        ]}
        image={{
          src: "https://i.postimg.cc/bwZQCxny/dd11.jpg",
          alt: "Diseños impactantes y personalizados",
        }}
      />

      <ServiceSection
        dark
        reverse
        title="Identidad Visual Coherente"
        badge="Identidad de Marca"
        paragraphs={[
          "Construimos una identidad visual coherente para reforzar la percepción de tu marca en todos sus puntos de contacto. Trabajamos colores, tipografías, estilos gráficos y composición visual para que cada pieza mantenga una imagen profesional y reconocible.",
          "Nuestro equipo desarrolla propuestas alineadas con los valores, objetivos y personalidad de tu empresa. De esta manera, tu marca proyecta confianza, orden y diferenciación frente a su público, logrando una presencia visual más sólida y competitiva.",
        ]}
        pills={[
          "Coherencia visual",
          "Identidad de marca",
          "Diseño profesional",
          "Reconocimiento comercial",
        ]}
        image={{
          src: "https://i.postimg.cc/GtvXZDdz/2149337224.jpg",
          alt: "Identidad visual coherente",
        }}
      />

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
              Descubre cómo nuestros servicios de gráfica publicitaria han transformado marcas
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

export default Graficapublicitaria;
