import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Convenios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentInstitutoSlide, setCurrentInstitutoSlide] = useState({});

  const sliderImages = [
    {
      src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/Inauguracion-Ilo-03-scaled-1-1536x1024.jpg",
      title: "SENATI",
    },
    {
      src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/376237836_764535409042613_3847121157515574135_n-3.jpg",
      title: "Instituto Superior Huando",
    },
    {
      src: "https://cdn.www.gob.pe/uploads/document/file/6678958/991735-archivo.jpeg",
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
          href="https://solucionesintegralesjb.com/convenio2/"
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


      {/* Sección de importancia */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <img
            className="rounded-3xl shadow-2xl border-4 border-cyan-400 w-full h-auto object-cover"
            src="https://solucionesintegralesjb.com/wp-content/uploads/2024/10/16735073773853.jpg"
            alt="Convenio"
          />
          <div>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 text-cyan-500">
              ¿Por qué es importante el convenio?
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-8 text-justify">
              Nuestra empresa tiene convenios con diversas instituciones públicas y privadas para la formación de nuevos profesionales. Nuestra propuesta de trabajo estratégico e integrado es ofrecer a través de diferentes áreas de servicios, en donde nuestros equipos de profesionales se encargan de transmitir todos los conocimientos necesarios para preparar a los estudiantes o egresados de una carrera como profesionales competentes.
            </p>
          </div>
        </div>
      </section>

      {/* Frase central */}
      <section className="py-16 md:py-24 px-6 md:px-16 text-white" style={{ backgroundColor: "#262626" }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold italic mb-12">
            "Alianzas Estratégicas para Tu Futuro Profesional"
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sliderImages.slice(0, 2).map((img, idx) => (
              <div key={idx} className="relative group">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-[250px] md:h-[350px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-4 transition-all">
                  <h3 className="text-2xl font-bold">{img.title}</h3>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full">
                    INFORMACIÓN
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrusel instituciones */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {instituciones.map((institucion, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
            >
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-cyan-500 mb-6 uppercase">
                  {institucion.nombre}
                </h3>
                <p className="text-base md:text-lg text-gray-700 text-justify">
                  {institucion.descripcion}
                </p>
              </div>

              {/* Carrusel 3D */}
              <div className="relative h-64 md:h-80 flex items-center justify-center">
                <button
                  onClick={() => handlePrevInstituto(idx)}
                  className="absolute left-2 md:left-0 bg-cyan-500 hover:bg-cyan-600 text-white p-2 md:p-3 rounded-full shadow-lg"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    className="absolute left-0 w-16 h-24 md:w-24 md:h-32 opacity-50"
                  >
                    <img
                      src={
                        institucion.images[
                          (currentInstitutoSlide[idx] || 0) === 0
                            ? institucion.images.length - 1
                            : (currentInstitutoSlide[idx] || 0) - 1
                        ]
                      }
                      alt="prev"
                      className="w-full h-full object-cover rounded-2xl border-4 border-cyan-400"
                    />
                  </motion.div>

                  <motion.div
                    key={`center-${currentInstitutoSlide[idx] || 0}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute z-20 w-64 h-40 md:w-96 md:h-64"
                  >
                    <img
                      src={institucion.images[currentInstitutoSlide[idx] || 0]}
                      alt={institucion.nombre}
                      className="w-full h-full object-cover rounded-2xl border-4 border-cyan-400 shadow-2xl"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute right-0 w-16 h-24 md:w-24 md:h-32 opacity-50"
                  >
                    <img
                      src={
                        institucion.images[
                          (currentInstitutoSlide[idx] || 0) + 1 >=
                          institucion.images.length
                            ? 0
                            : (currentInstitutoSlide[idx] || 0) + 1
                        ]
                      }
                      alt="next"
                      className="w-full h-full object-cover rounded-2xl border-4 border-cyan-400"
                    />
                  </motion.div>
                </div>

                <button
                  onClick={() => handleNextInstituto(idx)}
                  className="absolute right-2 md:right-0 bg-cyan-500 hover:bg-cyan-600 text-white p-2 md:p-3 rounded-full shadow-lg"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Convenios;
