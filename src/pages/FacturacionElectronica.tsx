
import React from "react";
import fondoN from "../assets/fondoN.jpg";
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonios = [
  {
    nombre: "Maria Torres",
    imagen: "https://randomuser.me/api/portraits/women/44.jpg",
    opinion:
      "El servicio fue rápido y profesional. La facturación electrónica nos ayudó a ordenar mejor nuestros procesos.",
  },
  {
    nombre: "Carlos Gómez",
    imagen: "https://randomuser.me/api/portraits/men/32.jpg",
    opinion:
      "La integración fue sencilla. En pocos días ya estábamos emitiendo comprobantes de forma segura y sin complicaciones.",
  },
  {
    nombre: "Laura Ramírez",
    imagen: "https://randomuser.me/api/portraits/women/55.jpg",
    opinion:
      "El soporte técnico fue excelente. Siempre estuvieron disponibles para orientarnos durante la implementación.",
  },
];

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

interface ContentSectionProps {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  dark?: boolean;
  pills?: string[];
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  paragraphs,
  image,
  imageAlt,
  imagePosition = "right",
  dark = false,
  pills = [],
}) => {
  const imageCard = (
    <motion.div
      className="w-full"
      variants={imagePosition === "left" ? fadeInLeft : fadeInRight}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={[
          "group relative h-full overflow-hidden rounded-3xl p-3 transition-all duration-500",
          "hover:-translate-y-2",
          dark
            ? "border border-white/10 bg-white/5 shadow-[0_18px_55px_rgba(6,182,212,0.12)] hover:border-cyan-500/50 hover:shadow-[0_22px_70px_rgba(6,182,212,0.22)]"
            : "border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.10)] hover:border-cyan-300 hover:shadow-[0_22px_70px_rgba(15,23,42,0.16)]",
        ].join(" ")}
      >
        <div className="absolute -top-16 -left-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative h-full overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
        </div>
      </div>
    </motion.div>
  );

  const textCard = (
    <motion.div
      className="w-full"
      variants={imagePosition === "left" ? fadeInRight : fadeInLeft}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={[
          "group relative h-full rounded-3xl p-7 sm:p-8 lg:p-10 transition-all duration-500",
          "hover:-translate-y-2",
          dark
            ? "border border-white/10 bg-white/5 text-white shadow-[0_18px_55px_rgba(6,182,212,0.12)] hover:border-cyan-500/50 hover:shadow-[0_22px_70px_rgba(6,182,212,0.22)]"
            : "border border-slate-200 bg-white text-slate-800 shadow-[0_18px_55px_rgba(15,23,42,0.10)] hover:border-cyan-300 hover:shadow-[0_22px_70px_rgba(15,23,42,0.16)]",
        ].join(" ")}
      >
        <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <h2 className="relative text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-500 leading-tight">
          {title}
        </h2>

        <div className="mt-6 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={[
                "text-sm sm:text-base leading-7 text-justify",
                dark ? "text-slate-200" : "text-slate-700",
              ].join(" ")}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {pills.length > 0 && (
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pills.map((pill, index) => (
              <span
                key={`${pill}-${index}`}
                className={[
                  "inline-flex items-center justify-center rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300",
                  "hover:-translate-y-1",
                  dark
                    ? "border border-white/15 bg-white/5 text-slate-100 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
                    : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white",
                ].join(" ")}
              >
                {pill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className={dark ? "bg-black py-16 px-4 md:px-8" : "bg-white py-16 px-4 md:px-8"}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
        {imagePosition === "left" ? (
          <>
            {imageCard}
            {textCard}
          </>
        ) : (
          <>
            {textCard}
            {imageCard}
          </>
        )}
      </div>
    </section>
  );
};

const FacturacionElectronica: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* Banner Superior */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-4xl md:text-5xl font-bold text-center text-cyan-500 z-10">
          <TextType
            text={["Facturación Electrónica"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
          />
        </h1>
      </div>

      <ContentSection
        title="Automatiza tu Proceso de Facturación"
        image="https://i.postimg.cc/gkZwfh8C/IMG-20260603-WA0017.jpg"
        imageAlt="Automatización de facturación electrónica"
        imagePosition="right"
        dark={false}
        paragraphs={[
          "Nuestro servicio de facturación electrónica permite automatizar la emisión, validación y almacenamiento de comprobantes, simplificando la gestión financiera de tu empresa. La solución optimiza tiempos, reduce errores operativos y fortalece la seguridad de la información.",
          "Con integración directa a SUNAT, el sistema ayuda a cumplir con las obligaciones tributarias vigentes en Perú. Además, se adapta a empresas de distintos tamaños, brindando flexibilidad, control y escalabilidad para acompañar el crecimiento del negocio.",
        ]}
        pills={["Emisión electrónica", "Control documental", "Integración SUNAT", "Gestión segura"]}
      />

      <ContentSection
        title="Integración Fácil y Rápida"
        image="https://i.postimg.cc/tCx1L6Fb/IMG-20260603-WA0020.jpg"
        imageAlt="Integración de sistemas de facturación"
        imagePosition="left"
        dark={true}
        paragraphs={[
          "Nuestro sistema se integra de forma práctica con plataformas existentes, como ERP, sistemas contables u otras herramientas administrativas. El objetivo es facilitar una transición ordenada, segura y sin interrupciones para las operaciones del negocio.",
          "La implementación está orientada a que puedas comenzar a emitir comprobantes electrónicos en poco tiempo. También brindamos acompañamiento técnico para asegurar una configuración correcta y una experiencia de uso estable desde el inicio.",
        ]}
        pills={["Implementación ágil", "Soporte técnico", "ERP y contabilidad", "Proceso ordenado"]}
      />

      <ContentSection
        title="Acceso y Control desde Cualquier Lugar"
        image="https://i.postimg.cc/zGsBFK50/dd.jpg"
        imageAlt="Acceso remoto a facturación electrónica"
        imagePosition="right"
        dark={false}
        paragraphs={[
          "Con nuestra plataforma puedes acceder a tus comprobantes electrónicos y gestionar tus operaciones desde cualquier lugar, manteniendo el control de la información en tiempo real. La solución está preparada para funcionar desde computadoras, tablets o smartphones.",
          "Este enfoque mejora la eficiencia operativa y brinda mayor flexibilidad para responder a las necesidades del negocio. Las actualizaciones automáticas permiten contar siempre con una herramienta moderna, segura y alineada con los procesos actuales.",
        ]}
        pills={["Acceso remoto", "Control en tiempo real", "Plataforma segura", "Actualizaciones automáticas"]}
      />

      <ContentSection
        title="Cumplimiento Fiscal Garantizado"
        image="https://i.postimg.cc/Jh0f0dSj/dd1-1.png"
        imageAlt="Cumplimiento fiscal y normativo"
        imagePosition="left"
        dark={true}
        paragraphs={[
          "Nuestro software de facturación electrónica está diseñado para registrar y reportar las transacciones conforme a los requerimientos tributarios correspondientes. Esto permite mantener una operación ordenada, trazable y alineada con las exigencias normativas.",
          "Las actualizaciones automáticas incorporan cambios fiscales relevantes, reduciendo riesgos por errores manuales o procesos desactualizados. Así, tu empresa puede operar con mayor confianza y enfocarse en su crecimiento.",
        ]}
        pills={["Cumplimiento normativo", "Reportes confiables", "Actualización fiscal", "Operación segura"]}
      />

      {/* Sección Testimonios - CARRUSEL MEJORADO */}
      <section className="bg-white py-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
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
              className="text-cyan-500 text-sm font-black tracking-[0.2em] uppercase inline-block px-4 py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5 mb-4"
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
              Opiniones de Nuestros <span className="text-cyan-500">Clientes</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-base text-slate-600 mt-4 max-w-2xl mx-auto"
            >
              Descubre cómo nuestro servicio de facturación electrónica ha optimizado la gestión de distintos negocios.
            </motion.p>
          </motion.div>

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
                  <div className="flex gap-2 mb-5">
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
                        className="w-6 h-6 fill-yellow-400 cursor-pointer"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </motion.svg>
                    ))}
                  </div>

                  <div className="text-5xl text-cyan-500/20 mb-3 leading-none">"</div>

                  <p className="text-slate-700 text-base leading-relaxed mb-8 flex-grow font-medium">
                    {testimonio.opinion}
                  </p>

                  <div className="h-1 w-12 bg-cyan-500 mb-6 rounded-full"></div>

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-cyan-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                      <p className="text-cyan-500 text-xs font-semibold">
                        Cliente satisfecho
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </motion.div>

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
              background: rgba(6, 182, 212, 0.8);
              transform: scale(1.2);
            }

            .custom-testimonial-dots li.react-multi-carousel-dot.active {
              background: #06b6d4;
              width: 2rem;
              box-shadow: 0 0 15px rgba(6, 182, 212, 0.6);
            }
          `}</style>
        </div>
      </section>

      <ScrollButton />
    </div>
  );
};

export default FacturacionElectronica;
