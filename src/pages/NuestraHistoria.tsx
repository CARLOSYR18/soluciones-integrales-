import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ScrollButton from "../components/ScrollButton";

const timelineItems = [
  {
    year: "2010",
    text: "Iniciamos ofreciendo soluciones en Ingeniería Eléctrica con servicios de consultoría y proyectos ejecutivos, comprometidos con la calidad y la tecnología como herramienta clave.",
  },
  {
    year: "2015",
    text: "Integramos soluciones digitales y Comunicación para automatizar procesos empresariales de manera eficiente y segura, utilizando metodologías avanzadas de gestión.",
  },
  {
    year: "2016",
    text: "Ampliamos nuestros servicios a soluciones en Seguridad Tecnológica, implementando herramientas avanzadas para mejorar la precisión y control desde dispositivos móviles.",
  },
  {
    year: "2018",
    text: "Iniciamos la transformación digital con Sistemas de Gestión Comercial y Facturación Electrónica, mejorando la eficiencia y competitividad en el mercado.",
  },
  {
    year: "2020",
    text: "Transformación digital para nuestros clientes, adaptándonos a nuevas realidades tecnológicas.",
  },
  {
    year: "2023",
    text: "Lanzamiento de nuevos servicios tecnológicos innovadores para seguir creciendo.",
  },
];

const electricalProjects = [
  { date: "MARZO DEL 2010", image: "https://i.postimg.cc/Th84b2Ys/imagen-1.png", description: "Instalación de alumbrado público en la obra Rehabilitación de pistas y veredas. Calle de 28 de Julio Chancay." },
  { date: "ABRIL DEL 2010", image: "https://i.postimg.cc/Bnf2rLVy/imagen-2.jpg", description: "Instalación de alumbrado público en la obra Construcción de pistas, veredas. Centro Poblado Aldea Campesina Chancay." },
  { date: "JUNIO DEL 2010", image: "https://i.postimg.cc/DzMrYjkQ/imagen-3.jpg", description: "Descripción de junio 2010." },
  { date: "ABRIL DEL 2011", image: "https://i.postimg.cc/3JxwdKDR/imagen-4.jpg", description: "Descripción de abril 2011." },
  { date: "JUNIO DEL 2011", image: "https://i.postimg.cc/nrM6fwCH/Imagen5.png", description: "Descripción de junio 2011." },
  { date: "DICIEMBRE DEL 2013", image: "https://i.postimg.cc/htgRfsY0/imagen6.jpg", description: "Descripción de diciembre 2013." },
  { date: "JUNIO DEL 2019", image: "https://i.postimg.cc/yYyrrHfF/imagen-7.jpg", description: "Descripción de junio 2019." },
  { date: "ABRIL DEL 2021", image: "https://i.postimg.cc/Qxm0Jqtm/imagen-8.png", description: "Descripción de abril 2021." },
  { date: "AGOSTO DEL 2021", image: "https://i.postimg.cc/qq0x8tHW/imagen-9.jpg", description: "Realización de pozo a tierra para protección de la instalación eléctrica de los stands. Galería ShopPing Center Chancay." },
  { date: "SETIEMBRE DEL 2021", image: "https://i.postimg.cc/xdfQF5yd/imagen-10.jpg", description: "Descripción de setiembre 2021." },
  { date: "ENERO DEL 2024", image: "https://i.postimg.cc/rpwmtMHg/imagen-11.jpg", description: "Descripción de enero 2024." },
];

const securityProjects = [
  { date: "SEPTIEMBRE DEL 2015", image: "https://i.postimg.cc/j2MVCJGx/Imagen4.png", description: "Descripción del proyecto de seguridad de septiembre 2015." },
  { date: "JULIO DEL 2019", image: "https://i.postimg.cc/hvLjYMzC/imagen-12.png", description: "Montaje de torre para la conectividad de las cámaras de seguridad ciudadana. Municipalidad Distrital de San Ramon Chanchamayo." },
  { date: "ENERO DEL 2020", image: "https://i.postimg.cc/QtVppwtZ/Imagen13.png", description: "Descripción del proyecto de seguridad de enero 2020." },
  { date: "NOVIEMBRE DEL 2022", image: "https://i.postimg.cc/Z5ZpfCRc/Imagen14.jpg", description: "Descripción del proyecto de seguridad de noviembre 2022." },
];

const cameraProjects = [
  { date: "ENERO DEL 2016", image: "https://i.postimg.cc/g2Rp8g9T/IMAGEN-1.jpg", description: "Instalación y mantenimiento de cámaras para el sistema de seguridad. Planta procesadora FRUTIPACK Huaral." },
  { date: "JULIO DEL 2019", image: "https://i.postimg.cc/qRBdf0NP/imagen-2.jpg", description: "Instalación de sistema de vigilancia con cámaras IP. Edificio Corporativo Lima." },
  { date: "SEPTIEMBRE DEL 2019", image:"https://i.postimg.cc/Mpk261cb/IMAGEN-3.jpg", description: "Implementación de circuito cerrado de TV para centro comercial." },
  { date: "ENERO DEL 2021", image:"https://i.postimg.cc/Y0JVSwSq/IMAGEN-4.jpg", description: "Actualización de sistema de seguridad con cámaras 4K. Banco Nacional." },
  { date: "OCTUBRE DEL 2021", image:"https://i.postimg.cc/hGSYvsKx/IMAGEN-5.jpg", description: "Instalación y mantenimiento de cámaras de seguridad para la seguridad interna. Colegio Estatal Nº 34 de Chancay." },
  { date: "ENERO DEL 2023", image: "https://i.postimg.cc/g2Rp8g9T/IMAGEN-1.jpg", description: "Sistema de vigilancia con reconocimiento facial para acceso controlado." },
  { date: "JULIO DEL 2024", image: "https://i.postimg.cc/d17cQ696/Imagen12.jpg", description: "Implementación de cámaras con IA para detección de movimientos sospechosos." },
];

interface Project {
  date: string;
  image: string;
  description: string;
}

interface ProjectSliderProps {
  title: string;
  projects: Project[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ title, projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (projects.length === 0 || !isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [projects.length, isAutoPlaying, activeIndex]);

  if (projects.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToIndex = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="bg-gray-100 py-16 px-6 max-w-7xl mx-auto mt-20 rounded-xl shadow-lg">
      <h2 className="text-center font-bold text-3xl mb-10 text-gray-800 uppercase tracking-wide">
        {title}
      </h2>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="border-4 border-cyan-400 rounded-xl overflow-hidden relative bg-black">
          <div className="w-full h-[500px] flex items-center justify-center relative">
            <motion.img
              key={activeIndex}
              src={projects[activeIndex].image}
              alt={`Proyecto de ${projects[activeIndex].date}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-10"
              aria-label="Proyecto anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-10"
              aria-label="Siguiente proyecto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">{projects[activeIndex].date}</h3>
            <p className="text-sm">{projects[activeIndex].description}</p>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-4xl">
            <div className="flex overflow-x-auto pb-2 space-x-4 scrollbar-hide">
              {projects.map((project, idx) => (
                <button
                  key={idx}
                  onClick={() => goToIndex(idx)}
                  className={`flex-shrink-0 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                    idx === activeIndex
                      ? "bg-cyan-500 text-white shadow-lg transform scale-105"
                      : "bg-gray-200 text-gray-700 hover:bg-cyan-100 hover:text-cyan-700"
                  }`}
                >
                  {project.date.split(' ')[0]}<br />
                  <span className="font-bold">{project.date.split(' ').slice(1).join(' ')}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === activeIndex ? "bg-cyan-500 scale-125" : "bg-gray-300 hover:bg-cyan-300"
              }`}
              aria-label={`Ir a proyecto ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselRef.current) {
        const totalWidth = carouselRef.current.scrollWidth;
        const containerWidth = carouselRef.current.offsetWidth;
        setCarouselWidth(-(totalWidth - containerWidth));
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="menu_main" className="absolute top-0 left-0 w-full bg-white bg-opacity-80 py-4 px-6 shadow-sm z-10">
        <p className="text-center font-bold text-gray-800">Menú de Navegación</p>
      </div>

      <div className="relative w-screen h-screen bg-gray-900 overflow-hidden">
        <img
          src="https://i.postimg.cc/HL0K6p6C/nhhh.png"
          alt="Fondo de la historia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
  className="absolute top-1/2 right-20 transform -translate-y-1/2 z-20"
  initial={{ opacity: 0, x: 100, rotateY: 90 }}
  animate={{ opacity: 1, x: 0, rotateY: 0 }}
  transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 80, damping: 15 }}
>
  <motion.div
    className="bg-gradient-to-br from-black/75 to-black/90 px-12 py-10 rounded-2xl border-2 border-cyan-500 text-center w-[480px] shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 group relative overflow-hidden"
    whileHover={{ scale: 1.05, borderColor: "rgb(34, 211, 238)" }}
  >
    
    {/* Animated background glow */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
    ></motion.div>
    
    <div className="relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="text-5xl font-black text-white mb-4 tracking-tight"
      >
        Nuestra <span className="text-cyan-400 drop-shadow-lg">historia</span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-cyan-300 text-lg font-semibold mb-6"
      >
        ¡Conoce nuestra trayectoria!
      </motion.p>
      
      <motion.a
        href="https://solucionesintegralesjb.com/#services"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ y: -3 }}
      >
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)" }}
          whileTap={{ scale: 0.92 }}
          className="cta cta-large transition-all duration-300"
        >
          <span className="span">Descubre nuestros servicios</span>
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
      
      <div className="w-full h-16 bg-white"></div>
      
      <section className="bg-[#1a1a1a] py-20 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto border-4 border-white rounded-xl p-10 overflow-hidden">
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-cyan-400 text-lg font-semibold mb-2"
            >
              Un viaje de innovación y crecimiento
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold mb-4"
            >
              Nuestra Historia
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-gray-300 max-w-3xl mx-auto mb-16"
            >
              Desde nuestros inicios, nos hemos dedicado a brindar soluciones
              tecnológicas innovadoras...
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-12 h-1 bg-cyan-400 z-0"></div>
            
            <div className="overflow-hidden" ref={carouselRef}>
              <motion.div
                className="flex gap-10 cursor-grab active:cursor-grabbing pb-8"
                drag="x"
                dragConstraints={{ right: 0, left: carouselWidth }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              >
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center w-[260px] flex-shrink-0 text-center relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full z-10 border-4 border-[#1a1a1a]"></div>
                    
                    <div className="w-24 h-24 mb-4 z-10 bg-[#1a1a1a] p-2 flex items-center justify-center">
                      <img
                        src="https://solucionesintegralesjb.com/wp-content/uploads/2024/07/cropped-Frame-937.png"
                        alt={`Icono ${item.year}`}
                        className="w-full h-full"
                      />
                    </div>
                    <h4 className="text-cyan-400 font-semibold text-lg mb-2">
                      {item.year}
                    </h4>
                    <p className="text-sm text-gray-300">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ProjectSlider title="PROYECTOS ELÉCTRICOS" projects={electricalProjects} />
      <ProjectSlider title="PROYECTOS EN REDES Y EN TECNOLOGÍAS DE SEGURIDAD" projects={securityProjects} />
      <ProjectSlider title="PROYECTOS DE CÁMARAS DE SEGURIDAD" projects={cameraProjects} />
      <ScrollButton />

      <style>{`
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

        .cta.cta-large {
          padding: 12px 40px;
          font-size: 18px;
          min-width: 280px;
        }

        .cta:focus {
          outline: none;
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
          0% {
            fill: #fff;
          }
          50% {
            fill: #000;
          }
          100% {
            fill: #fff;
          }
        }
      `}</style>
    </>
  );
};

export default App;
