import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      title: "Instituto Superior Huando",
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
        "La colaboración entre SENATI y Soluciones Integrales JB tiene como objetivo crear una sinergia que beneficie a ambas partes. SENATI proporcionará formación técnica actualizada y alineada con las necesidades del mercado laboral, mientras que Soluciones Integrales JB ofrecerá oportunidades de prácticas profesionales.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEt8LsudDua5jNDpRGb-rquvA14EMMUFIYgnO--wvcicRxcX86LX5wQVZNyVJCZ_4Gmg&usqp=CAU",
        "https://elcomercio.pe/resizer/tH65A-_HcP1OBN1QnDPzdRKr8Vs=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FJSX7NXQS5GQ3J3MSKB7LXNKZA.jpg",
      ],
    },
    {
      nombre: "INSTITUTO SUPERIOR HUANDO",
      descripcion:
        "La alianza entre el Instituto de Educación Superior Huando y Soluciones Integrales JB mejoraría la empleabilidad de los estudiantes mediante programas de capacitación especializada.",
      images: [
        "https://portal.isthuando.edu.pe/wp-content/uploads/2024/07/admin-ajax.php-1.jpg",
        "https://cdn.www.gob.pe/uploads/document/file/5115620/376237836_764535409042613_3847121157515574135_n.jpg",
      ],
    },
    {
      nombre: "INSTITUTO SUPERIOR CHANCAY",
      descripcion:
        "La colaboración entre el Instituto Superior Chancay y Soluciones Integrales JB permitirá a los estudiantes acceder a programas de formación práctica en ambientes profesionales.",
      images: [
        "https://cdn.www.gob.pe/uploads/document/file/6678958/991735-archivo.jpeg",
        "https://elperuano.pe/fotografia/thumbnail/2024/07/30/000305023M.jpg",
      ],
    },
    {
      nombre: "UNIVERSIDAD NACIONAL JOSÉ FAUSTINO SÁNCHEZ",
      descripcion:
        "La colaboración entre la Universidad Nacional José Faustino Sánchez y Soluciones Integrales JB ofrecería a los estudiantes prácticas profesionales para aplicar sus conocimientos.",
      images: [
        "https://unjfsc.edu.pe/wp-content/uploads/2020/04/NUESTRA-HISTORIA2.jpg",
        "https://pbs.twimg.com/media/FTs9qv7XsAgJ0if?format=jpg&name=large",
      ],
    },
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
        padding: 16px 50px;
        text-decoration: none;
        font-size: 24px;
        color: #ffffff;
        background: #ff0000;
        transition: 1s;
        box-shadow: 6px 6px 0 black;
        transform: skewX(-15deg);
        border: none;
        cursor: pointer;
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
        margin-right: 45px;
      }
      .span {
        transform: skewX(15deg);
        font-weight: 600;
      }
      .second {
        width: 20px;
        margin-left: 30px;
        position: relative;
        top: 12%;
      }
      .one {
        transition: 0.4s;
        transform: translateX(-60%);
      }
      .two {
        transition: 0.5s;
        transform: translateX(-30%);
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
    src="https://i.postimg.cc/X7HyydWB/job-g9afc21b12-1920-1600x1000-1.jpg"
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
                 px-12 py-10 rounded-2xl border-2 border-cyan-500 text-center 
                 w-[480px] shadow-2xl hover:shadow-cyan-500/60 
                 transition-all duration-300 group relative overflow-hidden
                 max-[768px]:w-[90%] max-[768px]:px-8 max-[768px]:py-8"
      whileHover={{ scale: 1.05, borderColor: "rgb(34, 211, 238)" }}
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 
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
          <span className="text-cyan-400 drop-shadow-lg">Convenios</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-cyan-300 text-lg font-semibold mb-6
                     max-[768px]:text-base max-[480px]:text-sm"
        >
          Prácticas - Profesionales
        </motion.p>

       <motion.a
  href="https://wa.me/51996720630"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  whileHover={{ y: -5 }}
>
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 40px rgba(239, 68, 68, 0.9), 0 10px 25px rgba(0, 0, 0, 0.8)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.92 }}
            className="cta group/button relative overflow-hidden text-sm sm:text-base md:text-lg"
          >
            {/* Fondo animado del botón */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 
                         opacity-0 group-hover/button:opacity-100"
              animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="span relative z-10 flex items-center justify-center gap-2">
              Información
            </span>
            <motion.span
              className="second relative z-10"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="40px" height="16px" viewBox="0 0 66 43" xmlns="http://www.w3.org/2000/svg">
                <g id="arrow" fill="none" fillRule="evenodd">
                  <path
                    className="one"
                    d="M40.15 3.89L43.97.14c.2-.19.51-.19.7 0l21.01 20.65c.4.39.4 1.02 0 1.41L44.67 42.86a.5.5 0 01-.7 0L40.15 39.1a.5.5 0 01.01-.71L56.99 21.86a.5.5 0 000-.71L40.15 3.9z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </motion.span>
          </motion.button>
        </motion.a>
      </div>
    </motion.div>
  </motion.div>
</div>


    {/* ====================== SECCIÓN IMPORTANCIA CONVENIOS ====================== */}
<section className="relative w-full overflow-hidden">
  {/* Fondo */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
  <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
  <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 md:px-16 py-16 md:py-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
      {/* ================= IMAGEN ================= */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="relative rounded-3xl bg-white shadow-xl border border-slate-200 p-4">
          <div className="absolute -top-10 -left-10 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://i.postimg.cc/0QG1nHLt/image.png"
              alt="Convenios"
              className="w-full h-[320px] sm:h-[380px] lg:h-[430px] object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* ================= TEXTO ================= */}
      <div className="flex flex-col">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-semibold text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            CONVENIOS
          </div>
        </motion.div>

        {/* TITULO EN UNA SOLA LÍNEA */}
       <motion.h3
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.1 }}
  viewport={{ once: true }}
  className="mt-6 text-[28px] md:text-[38px] lg:text-[44px] font-extrabold text-cyan-500 leading-tight text-center lg:text-left max-w-[720px] mx-auto lg:mx-0"
>
  ¿Por qué es importante el convenio?
</motion.h3>

        {/* TEXTO JUSTIFICADO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-lg p-8"
        >
          <p className="text-base md:text-lg text-slate-700 leading-8 text-justify">
            Nuestra empresa tiene convenios con diversas instituciones públicas y
            privadas para la formación de nuevos profesionales. Nuestra propuesta
            de trabajo estratégico e integrado es ofrecer a través de diferentes
            áreas de servicios, en donde nuestros equipos de profesionales se
            encargan de transmitir todos los conocimientos necesarios para
            preparar a los estudiantes o egresados de una carrera como
            profesionales competentes.
          </p>

          {/* Píldoras */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["Prácticas profesionales", "Formación aplicada", "Vinculación laboral"].map(
              (t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 * i }}
                  viewport={{ once: true }}
                  className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-sm font-medium border border-slate-200"
                >
                  {t}
                </motion.span>
              )
            )}
          </div>
        </motion.div>

        {/* RECUADRO AZUL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 bg-cyan-500 rounded-2xl p-6 text-white shadow-lg"
        >
          <h4 className="text-lg font-semibold">
            Conectamos talento con experiencia real
          </h4>

          <p className="text-sm mt-2 opacity-90">
            Impulsamos la empleabilidad con oportunidades, mentoría y formación
            en entornos profesionales.
          </p>
        </motion.div>
      </div>
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

    {/* CARDS */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

      {sliderImages.slice(0, 2).map((img, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: idx * 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
          className="group relative overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.4)] cursor-pointer"
        >

          <div className="relative h-[300px] md:h-[420px]">

            {/* IMAGEN */}
            <img
              src={img.src}
              alt={img.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* OVERLAY OSCURO INTENSO */}
            <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/75" />

            {/* CONTENIDO */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg"
              >
                {img.title}
              </motion.h3>

              {/* BOTÓN APARECE EN HOVER */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-6 w-fit px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500 hover:bg-blue-500"
              >
                INFORMACIÓN
              </motion.button>

            </div>

            {/* Efecto brillo lateral */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -right-24 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            </div>

          </div>
        </motion.div>
      ))}

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
        <span className="text-cyan-500">instituciones</span>
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
