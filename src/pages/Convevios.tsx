
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel from "react-multi-carousel";

interface Service {
  title: string;
  label: string;
  image: string;
  imageAlt: string;
  cta: string;
  href?: string;
}

const Convenios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentInstitutoSlide, setCurrentInstitutoSlide] = useState({});

  const sliderImages = [
    {
      src: "https://i.postimg.cc/4y8MFCw0/Inauguracion-Ilo-03-scaled-1-1536x1024.jpg",
      title: "SENATI",
    },
    {
      src: "https://i.postimg.cc/SQtD5GkM/376237836-764535409042613-3847121157515574135-n-3.jpg",
      title: "I.E.S.P. HUANDO",
    },
    {
      src: "https://i.postimg.cc/Bbd5vMvf/991735-archivo.jpg",
      title: "Instituto Superior Chancay",
    },
  ];

  const instituciones = [
    {
      nombre: "INSTITUTO NACIONAL SENATI",
      descripcion:
        "La colaboración entre SENATI y nuestra empresa tiene como objetivo generar una sinergia estratégica que beneficie a ambas partes.",
      descripcion2:
      "Por un lado, SENATI brindará formación técnica actualizada y alineada con las demandas del mercado laboral; por otro, nuestra empresa ofrecerá oportunidades de prácticas profesionales en entornos reales de trabajo, bajo la modalidad de convenio de colaboración mutua.",
      descripcion3:
      "Esta alianza permitirá fortalecer las competencias de los estudiantes y contribuir al desarrollo de profesionales altamente capacitados.",
      images: [
        "https://i.postimg.cc/kMwpV1K0/IMG-20260506-WA0006.jpghttps://i.postimg.cc/kMwpV1K0/IMG-20260506-WA0006.jpg",
        "https://i.postimg.cc/tCTmF3z9/IMG-20260506-WA0004.jpg",
        "https://i.postimg.cc/ZYjM97p1/IMG-20260506-WA0003.jpg",
        "https://i.postimg.cc/FFGBfW05/IMG-20260506-WA0005.jpg",
      ],
    },
    {
      nombre: "I.E.S.P. HUANDO",
      descripcion:
        "La colaboración entre I.E.S.P. HUANDO y nuestra empresa tiene como objetivo generar una sinergia estratégica que beneficie a ambas partes.",
        descripcion2:
      "Por un lado, I.E.S.P. HUANDO brindará formación técnica actualizada y alineada con las demandas del mercado laboral; por otro, nuestra empresa ofrecerá oportunidades de prácticas profesionales en entornos reales de trabajo, bajo la modalidad de convenio de colaboración mutua.",
      descripcion3:
      "Esta alianza permitirá fortalecer las competencias de los estudiantes y contribuir al desarrollo de profesionales altamente capacitados.",
      images: [
        "https://i.postimg.cc/02QH7YCR/IMG-20260506-WA0010.jpg",
        "https://i.postimg.cc/4NdFp61C/IMG-20260506-WA0009.jpg",
        "https://i.postimg.cc/3r9cyS2M/IMG-20260506-WA0007.jpg",
        "https://i.postimg.cc/PrxF1WQ0/IMG-20260506-WA0008.jpg",
      ],
    },
    {
      nombre: "INSTITUTO SUPERIOR CHANCAY",
      descripcion:
        "La colaboración entre el INSTITUTO SUPERIOR CHANCAY y nuestra empresa tiene como objetivo generar una sinergia estratégica que beneficie a ambas partes..",
        descripcion2:
      "Por un lado, este instituto brindará formación técnica actualizada y alineada con las demandas del mercado laboral; por otro, nuestra empresa ofrecerá oportunidades de prácticas profesionales en entornos reales de trabajo, bajo la modalidad de convenio de colaboración mutua..",
      descripcion3:
      "Esta alianza permitirá fortalecer las competencias de los estudiantes y contribuir al desarrollo de profesionales altamente capacitados.",
      images: [
        "https://i.postimg.cc/kX4hWQvZ/IMG-20260506-WA0013.jpg",
        "https://i.postimg.cc/yYdr0myG/IMG-20260506-WA0014.jpg",
        "https://i.postimg.cc/kX4hWQvp/IMG-20260506-WA0012.jpg",
        "https://i.postimg.cc/fTLgYcvz/IMG-20260506-WA0011.jpg",
      ],
    },
    {
      nombre: "UNIVERSIDAD NACIONAL JOSÉ FAUSTINO SÁNCHEZ",
      descripcion:
        "La colaboración entre la UNIVERSIDAD NACIONAL JOSÉ FAUSTINO SÁNCHEZ y nuestra empresa tiene como objetivo generar una sinergia estratégica que beneficie a ambas partes.",
        descripcion2:
      "Por un lado, la universidad brindará formación técnica actualizada y alineada con las demandas del mercado laboral; por otro, nuestra empresa ofrecerá oportunidades de prácticas profesionales en entornos reales de trabajo, bajo la modalidad de convenio de colaboración mutua.",
      descripcion3:
      "Esta alianza permitirá fortalecer las competencias de los estudiantes y contribuir al desarrollo de profesionales altamente capacitados.",
        images: [
        "https://unjfsc.edu.pe/wp-content/uploads/2020/04/NUESTRA-HISTORIA2.jpg",
        "https://pbs.twimg.com/media/FTs9qv7XsAgJ0if?format=jpg&name=large",
        "https://i.postimg.cc/sDX05Y4t/IMG-20260506-WA0015.jpg",
        "https://i.postimg.cc/9FMNydYx/IMG-20260506-WA0016.jpg",
      ],
    },
  ];

    const strategicServices: Service[] = [
    { label: "Convenio", title: "INSTITUTO NACIONAL SENATI", image: "https://i.postimg.cc/4y8MFCw0/Inauguracion-Ilo-03-scaled-1-1536x1024.jpg", imageAlt: "Herramientas de desarrollo de software", cta: "INFORMACIÓN" },
    { label: "Convenio", title: "I.E.S.P. HUANDO", image: "https://cdn.www.gob.pe/uploads/document/file/5115620/376237836_764535409042613_3847121157515574135_n.jpg", imageAlt: "Facturación electrónica", cta: "INFORMACIÓN" },
    { label: "Convenio", title: "INSTITUTO SUPERIOR CHANCAY", image: "https://elperuano.pe/fotografia/thumbnail/2024/07/30/000305023M.jpg", imageAlt: "Soporte en sitio", cta: "INFORMACIÓN" },
    { label: "Convenio", title: "UNIVERSIDAD NACIONAL JOSÉ FAUSTINO SÁNCHEZ", image: "https://unjfsc.edu.pe/wp-content/uploads/2020/04/NUESTRA-HISTORIA2.jpg", imageAlt: "Tecnología y seguridad", cta: "INFORMACIÓN" }
  ];

  const handleNextInstituto = (idx) => {
    setCurrentInstitutoSlide((prev) => ({
      ...prev,
      [idx]: ((prev[idx] || 0) + 1) % instituciones[idx].images.length,
    }));
  };

  const handlePrevInstituto = (idx) => {
    setCurrentInstitutoSlide((prev) => ({
      ...prev,
      [idx]:
        ((prev[idx] || 0) - 1 + instituciones[idx].images.length) %
        instituciones[idx].images.length,
    }));
  };

  // Inserta estilos CTA en el documento
  useEffect(() => {
    const styles = `
      .cta {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 42px;
        text-decoration: none;
        font-size: 24px;
        color: #ffffff;
        background: #ff0000;
        transition: 1s;
        box-shadow: 6px 6px 0 black;
        transform: skewX(-15deg);
        border: none;
        cursor: pointer;
        margin: 0 auto;
      }

      .cta.cta-large {
        width: 330px;
        max-width: calc(100vw - 80px);
      }

      .cta:hover {
        transition: 0.5s;
        box-shadow: 10px 10px 0 #ffffff;
      }

      .cta .second {
        transition: 0.5s;
        margin-right: 0px;
      }

      .cta:hover .second {
        transition: 0.5s;
        margin-right: 28px;
      }

      .span {
        transform: skewX(15deg);
        font-weight: 700;
        letter-spacing: 0.2px;
        white-space: nowrap;
      }

      .second {
        width: 20px;
        margin-left: 26px;
        position: relative;
        top: 12%;
        transform: skewX(15deg);
      }

      .one {
        transition: 0.4s;
        transform: translateX(-60%);
      }

      .two {
        transition: 0.5s;
        transform: translateX(-30%);
      }

      .three {
        transition: 0.5s;
      }

      .cta:hover .three {
        animation: color_anim 1s infinite 0.2s;
      }

      .cta:hover .one {
        transform: translateX(0%);
        animation: color_anim 1s infinite 0.6s;
      }

      .cta:hover .two {
        transform: translateX(0%);
        animation: color_anim 1s infinite 0.4s;
      }

      @keyframes color_anim {
        0% { fill: #fff; }
        50% { fill: #000; }
        100% { fill: #fff; }
      }

      @media (max-width: 640px) {
        .cta {
          width: 100%;
          padding: 14px 28px;
          font-size: 17px;
        }

        .cta.cta-large {
          min-width: 0;
          width: 260px;
          max-width: calc(100vw - 70px);
        }

        .second {
          margin-left: 18px;
        }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Banner principal */}
      <div className="relative w-screen h-screen bg-gray-900 overflow-hidden">
  <img
    src="https://i.postimg.cc/66S2jc4X/IMG-20260603-WA0013.jpg"
    alt="Fondo de la historia"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <motion.div
    className="absolute z-20 top-1/2 right-20 transform -translate-y-1/2
                max-[1024px]:right-10
                max-[768px]:relative max-[768px]:top-auto max-[768px]:right-auto max-[768px]:translate-y-0 
                max-[768px]:flex max-[768px]:justify-center max-[768px]:items-center 
                max-[768px]:pt-24 max-[768px]:pb-20"
    initial={{ opacity: 0, x: 100, rotateY: 90 }}
    animate={{ opacity: 1, x: 0, rotateY: 0 }}
    transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 15 }}
  >
    <motion.div
      className="bg-gradient-to-br from-black/75 to-black/90 
                 px-12 py-10 rounded-2xl border border-white/70 text-center 
                 w-[480px] shadow-2xl hover:shadow-white/25 
                 transition-all duration-300 group relative overflow-hidden
                 max-[768px]:w-[90%] max-[768px]:px-8 max-[768px]:py-8"
      whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.95)" }}
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 
                   rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="text-5xl font-black text-white mb-4 tracking-tight
                     max-[1024px]:text-4xl max-[768px]:text-3xl max-[480px]:text-2xl"
        >
          <span className="text-white drop-shadow-lg">Convenios</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white text-lg font-semibold mb-6
                     max-[768px]:text-base max-[480px]:text-sm"
        >
          Prácticas - Profesionales
        </motion.p>

        <motion.a
          href="https://api.whatsapp.com/send/?phone=51926392858&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ y: -5 }}
          className="flex justify-center w-full px-8"
        >
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
            }}
            whileTap={{ scale: 0.92 }}
            className="cta cta-large transition-all duration-300"
            type="button"
          >
            <span className="span">Información</span>

            <span className="second">
              <svg
                width="50px"
                height="20px"
                viewBox="0 0 66 43"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow" fill="none" fillRule="evenodd">
                  <path
                    className="one"
                    d="M40.15 3.89L43.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L44.67 42.86a.5.5 0 01-.7 0L40.15 39.1a.5.5 0 01.01-.71L56.99 21.86a.5.5 0 000-.71L40.15 3.9z"
                    fill="#fff"
                  />
                  <path
                    className="two"
                    d="M20.15 3.89L23.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L24.67 42.86a.5.5 0 01-.7 0L20.15 39.1a.5.5 0 01.01-.71L36.99 21.86a.5.5 0 000-.71L20.15 3.9z"
                    fill="#fff"
                  />
                  <path
                    className="three"
                    d="M0.15 3.89L3.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L4.67 42.86a.5.5 0 01-.7 0L0.15 39.1a.5.5 0 01.01-.71L16.99 21.86a.5.5 0 000-.71L0.15 3.9z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </span>
          </motion.button>
        </motion.a>
      </div>
    </motion.div>
  </motion.div>
</div>


    {/* ====================== SECCIÓN IMPORTANCIA CONVENIOS ====================== */}
<section className="relative w-full overflow-hidden bg-white">
  {/* Fondo compacto */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/70 to-white" />
  <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/25 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-10 md:py-14">
    {/* Badge centrado entre ambos cards */}
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-8 flex justify-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-600 shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
        CONVENIOS
      </div>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
      {/* ================= CARD TEXTO ================= */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.01 }}
        className="group flex h-full"
      >
        <div className="flex h-full min-h-[390px] w-full flex-col justify-center rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 group-hover:border-cyan-400/60 group-hover:shadow-[0_22px_70px_rgba(6,182,212,0.18)]">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-[26px] sm:text-[31px] md:text-[36px] font-extrabold text-cyan-500 leading-[1.15] tracking-wide"
          >
            ¿Por qué es importante <br className="hidden sm:block" />
            el convenio?
          </motion.h3>

          <p className="mt-6 text-[14px] sm:text-[15px] md:text-base text-slate-700 leading-7 text-justify">
            Nuestra empresa mantiene convenios con diversas instituciones públicas y privadas para impulsar la formación de nuevos profesionales mediante experiencias reales de aprendizaje, acompañamiento técnico y participación en proyectos vinculados al entorno laboral.
          </p>

          <p className="mt-4 text-[14px] sm:text-[15px] md:text-base text-slate-700 leading-7 text-justify">
            A través de un trabajo estratégico e integrado, nuestros equipos comparten conocimientos especializados para fortalecer las competencias de estudiantes y egresados, preparándolos como profesionales competentes, responsables y orientados a resultados.
          </p>

          {/* Píldoras */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Prácticas profesionales", "Formación aplicada", "Vinculación laboral", "Mentoría especializada"].map(
              (t, i) => (
                <motion.span
                  key={`${t}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.07 * i }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-md"
                >
                  {t}
                </motion.span>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* ================= CARD IMAGEN ================= */}
      <motion.div
        initial={{ opacity: 0, x: 45 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.01 }}
        className="group flex h-full"
      >
        <div className="relative flex h-full min-h-[390px] w-full items-center rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 group-hover:border-cyan-400/60 group-hover:shadow-[0_22px_70px_rgba(6,182,212,0.18)]">
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="relative h-full min-h-[360px] w-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://i.postimg.cc/ZKd91NpQ/IMG-20260603-WA0014.jpg"
              alt="Convenios"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
     {/* ====================== FRASE CENTRAL (EFECTO OSCURO PRO) ====================== */}
<section className="relative overflow-hidden py-20 md:py-28 px-6 md:px-16 bg-[#262626] text-white">

  {/* Glow decorativo */}
  <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />

  <div className="relative max-w-7xl mx-auto">


    {/* TÍTULO */}

        <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center text-3xl md:text-5xl font-extrabold italic tracking-tight text-cyan-400"
    >
      "Alianzas Estratégicas para Tu Futuro Profesional"
    </motion.h2>

    <div className="apple-services-scope">
          <Carousel
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2, slidesToSlide: 1 },
              tablet: { breakpoint: { max: 1024, min: 640 }, items: 2, slidesToSlide: 1 },
              mobile: { breakpoint: { max: 640, min: 0 }, items: 1, slidesToSlide: 1 },
            }}
            infinite
            autoPlay
            autoPlaySpeed={4000}
            keyBoardControl
            showDots={false}
            arrows
            containerClass="apple-services-container"
            itemClass="px-3 md:px-4"
            customLeftArrow={
              <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30
                                 w-11 h-11 rounded-full bg-neutral-800/80 border border-neutral-700
                                 flex items-center justify-center
                                 hover:bg-neutral-700 hover:border-neutral-500 
                                 active:scale-90
                                 transition-all duration-200 cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            }
            customRightArrow={
              <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30
                                 w-11 h-11 rounded-full bg-neutral-800/80 border border-neutral-700
                                 flex items-center justify-center
                                 hover:bg-neutral-700 hover:border-neutral-500
                                 active:scale-90
                                 transition-all duration-200 cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            }
          >
            {strategicServices.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                className="group cursor-pointer"
              >
                {/* Card container — horizontal */}
                <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 bg-neutral-900
                                border border-white/[0.06] group-hover:border-white/[0.12]
                                transition-all duration-500">
                  {/* Image with zoom */}
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover 
                               transition-transform duration-[1.2s] ease-out 
                               group-hover:scale-110"
                  />
    
                  {/* Gradient overlay permanente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    
                  {/* Hover overlay extra */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
    
                  {/* Badge superior */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase
                                     bg-white/10 px-3 py-1.5 rounded-full border border-white/10
                                     group-hover:bg-cyan-500/20 group-hover:text-cyan-300 group-hover:border-cyan-500/20
                                     transition-all duration-400">
                      {s.label}
                    </span>
                  </div>
    
                  {/* Título sobre la imagen, abajo */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {s.title}
                    </h3>
    
                    {/* CTA que aparece al hover */}
                    <div className="flex items-center gap-2 mt-3
                                    opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0
                                    transition-all duration-500 delay-75">
                      <span className="text-cyan-400 text-sm font-semibold flex items-center gap-1.5">
                        Explorar
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                             className="group-hover:translate-x-1 transition-transform duration-300">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
    
                    {/* Línea cyan inferior animada */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] 
                                    bg-gradient-to-r from-cyan-400 to-blue-500 
                                    scale-x-0 group-hover:scale-x-100 origin-left
                                    transition-transform duration-700" />
                  </div>
                </div>
    
                {/* Info debajo de la card */}
                <div className="mt-4 px-1">
                  <h4 className="text-lg font-bold text-white">{s.title}</h4>
                </div>
              </motion.div>
            ))}
          </Carousel>
    
          <style>{`
            .apple-services-scope .apple-services-container {
              padding: 0 2rem;
              overflow: visible;
            }
            .apple-services-scope .react-multi-carousel-track {
              padding: 1rem 0 2rem;
            }
          `}</style>
        </div>
  </div>
</section>
    {/* ====================== CARRUSEL INSTITUCIONES (REDISEÑO PRO) ====================== */}
<section className="relative py-20 md:py-28 px-6 md:px-16 bg-white overflow-hidden">
  {/* Glow suave */}
  <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

  <div className="relative max-w-7xl mx-auto">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="text-center mb-14 md:mb-16"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-semibold text-slate-600 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-cyan-500" />
        INSTITUCIONES
      </div>

      <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
        Convenios con{" "}
        <span className="text-cyan-500">Instituciones</span>
      </h2>

      <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Alianzas estratégicas para impulsar prácticas profesionales, formación aplicada
        y vinculación laboral en entornos reales.
      </p>
    </motion.div>

    {/* Lista de instituciones */}
    <div className="space-y-14 md:space-y-16">
      {instituciones.map((institucion, idx) => {
        const active = currentInstitutoSlide[idx] || 0;
        const prevIndex =
          active === 0 ? institucion.images.length - 1 : active - 1;
        const nextIndex =
          active + 1 >= institucion.images.length ? 0 : active + 1;

        const reversed = idx % 2 === 1;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className={[
              "grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center",
              reversed ? "lg:[&>div:first-child]:order-2" : "",
            ].join(" ")}
          >
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: reversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="relative"
            >
              <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur shadow-[0_18px_60px_rgba(0,0,0,0.10)] p-7 md:p-10">
                <h3 className="text-xl md:text-3xl font-extrabold text-cyan-500 uppercase tracking-wide">
                  {institucion.nombre}
                </h3>

                <p className="mt-4 text-slate-700 leading-7 text-justify">
                  {institucion.descripcion}
                </p>
                <p className="mt-4 text-slate-700 leading-7 text-justify">
                  {institucion.descripcion2}
                </p>
                 <p className="mt-4 text-slate-700 leading-7 text-justify">
                  {institucion.descripcion3}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-100">
                    Prácticas profesionales
                  </span>
                  <span className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200">
                    Formación aplicada
                  </span>
                  <span className="px-4 py-2 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                    Vinculación laboral
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Carrusel */}
            <motion.div
              initial={{ opacity: 0, x: reversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="relative"
            >
              <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur shadow-[0_22px_80px_rgba(0,0,0,0.14)] p-5 md:p-6">
                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-300/70 bg-black shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
                  {/* Imagen principal */}
                  <div className="relative h-[260px] sm:h-[340px] md:h-[420px]">
                    <motion.img
                      key={`main-${idx}-${active}`}
                      src={institucion.images[active]}
                      alt={institucion.nombre}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.02, x: 18 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                    />

                    {/* overlay suave */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/12 border border-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        Convenio activo
                      </span>
                    </div>

                    {/* Botones prev/next */}
                    <button
                      onClick={() => handlePrevInstituto(idx)}
                      className="group absolute left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/12 border border-white/15 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all"
                      aria-label="Anterior"
                    >
                      <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={22} />
                    </button>

                    <button
                      onClick={() => handleNextInstituto(idx)}
                      className="group absolute right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/12 border border-white/15 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-all"
                      aria-label="Siguiente"
                    >
                      <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={22} />
                    </button>

                    {/* Previews laterales */}
                    <div className="hidden md:block absolute left-4 bottom-4">
                      <button
                        onClick={() => handlePrevInstituto(idx)}
                        className="group relative h-16 w-24 rounded-xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur shadow-sm hover:scale-[1.02] transition-transform"
                        aria-label="Preview anterior"
                      >
                        <img
                          src={institucion.images[prevIndex]}
                          alt="prev"
                          className="h-full w-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-black/25" />
                      </button>
                    </div>

                    <div className="hidden md:block absolute right-4 bottom-4">
                      <button
                        onClick={() => handleNextInstituto(idx)}
                        className="group relative h-16 w-24 rounded-xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur shadow-sm hover:scale-[1.02] transition-transform"
                        aria-label="Preview siguiente"
                      >
                        <img
                          src={institucion.images[nextIndex]}
                          alt="next"
                          className="h-full w-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-black/25" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dots */}
                <div className="mt-5 flex justify-center gap-2">
                  {institucion.images.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() =>
                        setCurrentInstitutoSlide((prev) => ({
                          ...prev,
                          [idx]: dotIdx,
                        }))
                      }
                      className={[
                        "h-2.5 rounded-full transition-all duration-300",
                        dotIdx === active
                          ? "w-8 bg-cyan-500"
                          : "w-2.5 bg-slate-300 hover:bg-cyan-300",
                      ].join(" ")}
                      aria-label={`Ir a imagen ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
    </div>
  );
};

export default Convenios;
