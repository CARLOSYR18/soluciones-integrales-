
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import ScrollButton from "../components/ScrollButton";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Cpu,
  Radio,
  Camera,
  Zap,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import fondoElectricos from "../assets/fondo-electricos.png";
import fondoRedes from "../assets/fondo-redesv1.jpeg";
import fondoCamaras from "../assets/fondo-camaras.png";

const timelineItems = [
  {
    year: "2010",
    text: "Iniciamos ofreciendo soluciones en Ingeniería Eléctrica con servicios de consultoría y proyectos ejecutivos, comprometidos con la calidad y la tecnología como herramienta clave.",
  },
  {
    year: "2015",
    text: "Integramos soluciones digitales y comunicación para automatizar procesos empresariales de manera eficiente y segura, utilizando metodologías avanzadas de gestión.",
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
  {
    year: "2024",
    text: "Fortalecimos nuestra presencia digital, optimizando soluciones tecnológicas para brindar mayor seguridad, eficiencia y soporte a nuestros clientes.",
  },
  {
    year: "2025",
    text: "Impulsamos nuevos proyectos de innovación, integrando herramientas modernas para mejorar la gestión, conectividad y continuidad operativa.",
  },
  {
    year: "2026",
    text: "Consolidamos nuestra experiencia en transformación digital, seguridad tecnológica y servicios especializados orientados al crecimiento empresarial.",
  },
  {
    year: "2027",
    text: "Proyectamos nuevas soluciones inteligentes, escalables y seguras para acompañar la evolución tecnológica de nuestros clientes.",
  },
  {
    year: "2028",
    text: "Continuamos avanzando hacia una etapa de mayor innovación, integrando tecnología, experiencia y compromiso en cada proyecto desarrollado.",
  },
];
 
type Project = {
  date: string;
  image: string;
  description: string;
  location?: string;
  client?: string;
  year?: string;
  tags?: string[];
  overlay?: "normal" | "dark" | "extra-dark";
};
 
const electricalProjects: Project[] = [
  {
    date: "MARZO DEL 2010",
    image: "https://i.postimg.cc/Th84b2Ys/imagen-1.png",
    description:
      "Instalación de alumbrado público en la obra de rehabilitación de pistas y veredas en la Calle 28 de Julio, Chancay.",
    location: "Chancay",
    client: "Municipalidad",
    year: "2010",
    tags: ["Electricidad", "Alumbrado", "Infraestructura"],
  },
  {
    date: "ABRIL DEL 2010",
    image: "https://i.postimg.cc/Bnf2rLVy/imagen-2.jpg",
    description:
      "Instalación de alumbrado público en la obra de construcción de pistas y veredas del Centro Poblado Aldea Campesina, Chancay.",
    location: "Aldea Campesina",
    client: "Sector público",
    year: "2010",
    tags: ["Obras", "Red eléctrica", "Pistas"],
  },
  {
    date: "JUNIO DEL 2010",
    image: "https://i.postimg.cc/DzMrYjkQ/imagen-3.jpg",
    description:
      "Implementación de soluciones eléctricas para optimizar el servicio y la cobertura en infraestructura urbana.",
    location: "Lima",
    client: "Cliente corporativo",
    year: "2010",
    tags: ["Energía", "Cableado", "Montaje"],
  },
  {
    date: "ABRIL DEL 2011",
    image: "https://i.postimg.cc/3JxwdKDR/imagen-4.jpg",
    description:
      "Desarrollo de instalación eléctrica orientada a la seguridad operativa y al rendimiento del proyecto.",
    location: "Huaral",
    client: "Entidad local",
    year: "2011",
    tags: ["Instalación", "Seguridad", "Proyecto"],
  },
  {
    date: "JUNIO DEL 2011",
    image: "https://i.postimg.cc/nrM6fwCH/Imagen5.png",
    description:
      "Ampliación de soluciones eléctricas para incrementar la capacidad instalada y mejorar la continuidad del servicio.",
    location: "Chancay",
    client: "Cliente privado",
    year: "2011",
    tags: ["Cobertura", "Potencia", "Mantenimiento"],
  },
];
 
const securityProjects: Project[] = [
  {
    date: "SEPTIEMBRE DEL 2015",
    image: "https://i.postimg.cc/j2MVCJGx/Imagen4.png",
    description:
      "Implementación inicial de infraestructura tecnológica de seguridad con enfoque en conectividad y monitoreo.",
    location: "Lima",
    client: "Entidad privada",
    year: "2015",
    tags: ["Conectividad", "Cámaras IP", "Infraestructura"],
    overlay: "extra-dark",
  },
  {
    date: "JULIO DEL 2019",
    image: "https://i.postimg.cc/hvLjYMzC/imagen-12.png",
    description:
      "Montaje de torre para la conectividad de las cámaras de seguridad ciudadana en San Ramón, Chanchamayo.",
    location: "San Ramón - Chanchamayo",
    client: "Municipalidad Distrital",
    year: "2019",
    tags: ["Radioenlace", "Seguridad", "Comunicaciones"],
  },
  {
    date: "ENERO DEL 2020",
    image: "https://i.postimg.cc/QtVppwtZ/Imagen13.png",
    description:
      "Implementación de sistema de vigilancia y conectividad para monitoreo estratégico en tiempo real.",
    location: "Lima",
    client: "Entidad pública",
    year: "2020",
    tags: ["Sistema", "Monitoreo", "Redes"],
  },
  {
    date: "NOVIEMBRE DEL 2022",
    image: "https://i.postimg.cc/Z5ZpfCRc/Imagen14.jpg",
    description:
      "Actualización e integración de infraestructura de seguridad tecnológica para operación continua y estable.",
    location: "Huaral",
    client: "Cliente institucional",
    year: "2022",
    tags: ["Seguridad", "Torre", "Conectividad"],
  },
];
 
const cameraProjects: Project[] = [
  {
    date: "ENERO DEL 2016",
    image: "https://i.postimg.cc/g2Rp8g9T/IMAGEN-1.jpg",
    description:
      "Instalación y mantenimiento de cámaras para el sistema de seguridad en la planta procesadora FRUTIPACK Huaral.",
    location: "Huaral",
    client: "FRUTIPACK",
    year: "2016",
    tags: ["CCTV", "Mantenimiento", "Seguridad"],
  },
  {
    date: "JULIO DEL 2019",
    image: "https://i.postimg.cc/qRBdf0NP/imagen-2.jpg",
    description:
      "Instalación de sistema de vigilancia con cámaras IP para edificio corporativo en Lima.",
    location: "Lima",
    client: "Corporativo",
    year: "2019",
    tags: ["Cámaras IP", "Control", "Videovigilancia"],
  },
  {
    date: "SEPTIEMBRE DEL 2019",
    image: "https://i.postimg.cc/Mpk261cb/IMAGEN-3.jpg",
    description:
      "Implementación de circuito cerrado de TV para centro comercial con monitoreo continuo.",
    location: "Lima",
    client: "Centro comercial",
    year: "2019",
    tags: ["CCTV", "Cobertura", "Monitoreo"],
    overlay: "dark",
  },
  {
    date: "ENERO DEL 2021",
    image: "https://i.postimg.cc/Y0JVSwSq/IMAGEN-4.jpg",
    description:
      "Actualización de sistema de seguridad con cámaras 4K para mayor nitidez y control.",
    location: "Lima",
    client: "Banco",
    year: "2021",
    tags: ["4K", "Seguridad", "Alta definición"],
  },
  {
    date: "OCTUBRE DEL 2021",
    image: "https://i.postimg.cc/hGSYvsKx/IMAGEN-5.jpg",
    description:
      "Instalación y mantenimiento de cámaras de seguridad para protección interna en colegio estatal de Chancay.",
    location: "Chancay",
    client: "Colegio Estatal",
    year: "2021",
    tags: ["Cámaras", "Educación", "Protección"],
  },
];
 
type SliderTheme = {
  background: string;
  stats: { icon: React.ReactNode; label: string; value: string }[];
};
 
const sliderThemes: Record<string, SliderTheme> = {
  electricos: {
    background: fondoElectricos,
    stats: [
      { icon: <Zap size={22} />, label: "Proyectos", value: "+50" },
      { icon: <MapPin size={22} />, label: "Ciudades", value: "+12" },
      { icon: <ShieldCheck size={22} />, label: "Cobertura", value: "100%" },
      { icon: <Cpu size={22} />, label: "Tecnología", value: "Avanzada" },
    ],
  },
  redes: {
    background: fondoRedes,
    stats: [
      { icon: <Radio size={22} />, label: "Proyectos", value: "+50" },
      { icon: <MapPin size={22} />, label: "Ciudades", value: "+12" },
      { icon: <ShieldCheck size={22} />, label: "Conectividad", value: "100%" },
      { icon: <Cpu size={22} />, label: "Tecnología", value: "Avanzada" },
    ],
  },
  camaras: {
    background: fondoCamaras,
    stats: [
      { icon: <Camera size={22} />, label: "Proyectos", value: "+40" },
      { icon: <MapPin size={22} />, label: "Cobertura", value: "+10" },
      { icon: <ShieldCheck size={22} />, label: "Seguridad", value: "24/7" },
      { icon: <Cpu size={22} />, label: "Monitoreo", value: "Inteligente" },
    ],
  },
};
 
interface ProjectSliderProps {
  title: string;
  projects: Project[];
  theme: SliderTheme;
  sliderId: string;
}
 
const ProjectSlider: React.FC<ProjectSliderProps> = ({
  title,
  projects,
  theme,
  sliderId,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
 
  const current = projects[activeIndex] ?? projects[0];
 
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        backgroundImage: `url(${theme.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#020817]/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#031022]/35 via-[#020817]/65 to-[#020617]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.10),transparent_35%)]" />
 
      <div className="relative z-10 mx-auto max-w-[1450px] px-4 md:px-8">
        <div className="text-center">
          <p className="text-cyan-300 tracking-[0.35em] uppercase text-xs md:text-sm font-medium mb-5">
            Trayectoria y proyectos
          </p>
 
          <h2 className="mx-auto max-w-5xl text-white uppercase font-black leading-[1.04] text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
            {title}
          </h2>
 
          <div className="mx-auto mt-5 h-[3px] w-44 rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_25px_rgba(34,211,238,0.7)]" />
        </div>
 
        <div className="relative mt-14">
          <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 xl:flex xl:flex-col xl:items-center xl:pl-2">
            <div className="relative h-72 w-[2px] rounded-full bg-white/15">
              <div className="absolute left-1/2 top-[14%] h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.85)]" />
              <div className="absolute left-1/2 top-[45%] h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-200/70" />
              <div className="absolute left-1/2 top-[76%] h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-200/45" />
            </div>
 
            <div className="mt-5 flex flex-col gap-4">
              {projects.slice(0, 4).map((_, idx) => (
                <div
                  key={idx}
                  className={[
                    "flex h-12 w-12 items-center justify-center rounded-full border text-white backdrop-blur-md",
                    idx === activeIndex % 4
                      ? "border-cyan-300/80 bg-cyan-400/20 shadow-[0_0_22px_rgba(34,211,238,0.65)]"
                      : "border-white/20 bg-white/5 text-white/75",
                  ].join(" ")}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
              ))}
            </div>
          </div>
 
          <div className="mx-auto max-w-[1180px]">
            <div className="relative">
              <button
                className={`swiper-button-prev-${sliderId} absolute left-0 top-1/2 z-20 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/8 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.28)] transition hover:scale-105 hover:bg-white/12 md:flex`}
                aria-label="Anterior"
              >
                <ChevronLeft size={34} />
              </button>
 
              <button
                className={`swiper-button-next-${sliderId} absolute right-0 top-1/2 z-20 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/8 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.28)] transition hover:scale-105 hover:bg-white/12 md:flex`}
                aria-label="Siguiente"
              >
                <ChevronRight size={34} />
              </button>
 
              <Swiper
                modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
                effect="coverflow"
                centeredSlides={true}
                loop={true}
                speed={900}
                grabCursor={true}
                slidesPerView={1.1}
                breakpoints={{
                  640: { slidesPerView: 1.35 },
                  768: { slidesPerView: 1.8 },
                  1024: { slidesPerView: 2.3 },
                  1280: { slidesPerView: 2.8 },
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 20,
                  depth: 220,
                  modifier: 2.1,
                  slideShadows: false,
                  scale: 0.88,
                }}
                autoplay={{
                  delay: 4200,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  prevEl: `.swiper-button-prev-${sliderId}`,
                  nextEl: `.swiper-button-next-${sliderId}`,
                }}
                pagination={{
                  el: `.swiper-pagination-${sliderId}`,
                  clickable: true,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full py-8 md:py-10"
              >
                {projects.map((project, index) => {
                  const extraOverlay =
                    project.overlay === "extra-dark"
                      ? "bg-black/35"
                      : project.overlay === "dark"
                      ? "bg-black/18"
                      : "bg-transparent";
 
                  return (
                    <SwiperSlide key={`${project.date}-${index}`}>
                      {({ isActive }) => (
                        <motion.article
                          className={[
                            "group overflow-hidden rounded-[34px] border bg-white/[0.06] backdrop-blur-xl transition-all duration-500",
                            isActive
                              ? "border-white/28 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_28px_85px_rgba(0,0,0,0.42),0_0_30px_rgba(147,197,253,0.10)]"
                              : "border-white/14 shadow-[0_18px_45px_rgba(0,0,0,0.28)]",
                          ].join(" ")}
                          animate={{ y: isActive ? -8 : 0 }}
                          transition={{ duration: 0.35 }}
                        >
                          <div className="relative h-[230px] md:h-[270px] overflow-hidden rounded-t-[34px]">
                            <img
                              src={project.image}
                              alt={project.date}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
 
                            <div className={`absolute inset-0 ${extraOverlay}`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5" />
 
                            <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
                              <div className="rounded-full border border-white/20 bg-black/35 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                                {project.date}
                              </div>
 
                              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/80 shadow-[0_8px_25px_rgba(255,255,255,0.15)]">
                                <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
                              </div>
                            </div>
                          </div>
 
                          <div className="rounded-b-[34px] border-t border-white/10 bg-[#07111d]/95 px-5 py-5 md:px-6 md:py-6">
                            <p className="text-center text-sm md:text-[15px] font-medium leading-7 text-slate-100 min-h-[88px]">
                              {project.description}
                            </p>
 
                            {project.tags && (
                              <div className="mt-4 flex flex-wrap justify-center gap-2">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className={[
                                      "rounded-full border px-3 py-1.5 text-xs",
                                      isActive
                                        ? "border-cyan-300/20 bg-cyan-400/10 text-cyan-100"
                                        : "border-white/10 bg-white/5 text-slate-200",
                                    ].join(" ")}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
 
                            <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.75)]" />
                          </div>
                        </motion.article>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
 
              <div className={`swiper-pagination-${sliderId} mt-6 flex justify-center gap-3`} />
            </div>
 
            <div className="mx-auto mt-10 flex max-w-[1020px] items-center justify-between gap-2 rounded-[26px] border border-cyan-300/15 bg-[#020817]/70 px-3 py-4 backdrop-blur-xl shadow-[0_0_30px_rgba(14,165,233,0.08)] overflow-hidden">
              <div className="grid flex-1 grid-cols-2 gap-2 md:grid-cols-4 min-w-0">
                {theme.stats.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-2xl border border-white/8 px-2 py-2 text-white min-w-0 overflow-hidden"
                  >
                    <div className="text-cyan-300 flex-shrink-0">{item.icon}</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-base md:text-xl font-black leading-none truncate">{item.value}</div>
                      <div className="text-xs text-slate-200 truncate">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
 
            <div className="mx-auto mt-6 grid max-w-[1020px] grid-cols-2 gap-4 rounded-[24px] border border-white/8 bg-[#020817]/45 px-5 py-4 backdrop-blur-lg md:grid-cols-4">
              <InfoMini
                label="Tipo de proyecto"
                value={current.tags?.[0] ?? "Tecnología"}
                icon={<Cpu size={18} />}
              />
              <InfoMini
                label="Ubicación"
                value={current.location ?? "Perú"}
                icon={<MapPin size={18} />}
              />
              <InfoMini
                label="Año"
                value={current.year ?? "2024"}
                icon={<ShieldCheck size={18} />}
              />
              <InfoMini
                label="Cliente"
                value={current.client ?? "Institucional"}
                icon={<Radio size={18} />}
              />
            </div>
          </div>
        </div>
      </div>
 
      <style>{`
        .swiper-pagination-${sliderId} .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: rgba(255,255,255,0.35);
          opacity: 1;
        }
 
        .swiper-pagination-${sliderId} .swiper-pagination-bullet-active {
          background: #67e8f9;
          box-shadow: 0 0 18px rgba(34,211,238,0.85);
        }
      `}</style>
    </section>
  );
};
 
const InfoMini = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-start gap-3 text-white">
    <div className="mt-1 text-cyan-300">{icon}</div>
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-slate-300">{label}</div>
      <div className="mt-1 text-lg font-bold text-white">{value}</div>
    </div>
  </div>
);
 
const NuestraHistoria: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
 
  // ── NUEVO: motion value para controlar la posición X del carrusel ──
  const x = useMotionValue(0);
 
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (carouselRef.current) {
        const totalWidth = carouselRef.current.scrollWidth;
        const containerWidth = carouselRef.current.offsetWidth;
        setCarouselWidth(-(totalWidth - containerWidth));
      }
    }, 100);
 
    return () => window.clearTimeout(timer);
  }, []);
 
  // ── NUEVO: función que mueve la línea del tiempo al hacer clic en los botones ──
  const scrollTimeline = (direction: "left" | "right") => {
    const amount = 300;
    const current = x.get();
    const next = direction === "right" ? current - amount : current + amount;
    const clamped = Math.max(carouselWidth, Math.min(0, next));
    animate(x, clamped, { type: "spring", stiffness: 80, damping: 20 });
  };
 
  return (
    <>
      <div
        id="menu_main"
        className="absolute top-0 left-0 w-full bg-white/80 py-4 px-6 shadow-sm z-10"
      >
        <p className="text-center font-bold text-gray-800">Menú de Navegación</p>
      </div>
 
      <div className="relative w-screen h-screen bg-gray-900 overflow-hidden">
        <img
          src="https://i.postimg.cc/xj6stj66/fondo-Vm.jpg"
          alt="Fondo de la historia"
          className="absolute inset-0 w-full h-full object-cover"
        />
 
        <motion.div
          className="absolute top-1/2 left-1/2 md:left-auto md:right-20 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 z-20"
          initial={{ opacity: 0, x: 100, rotateY: 90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
        >
          <motion.div
            className="bg-gradient-to-br from-black/75 to-black/90 px-6 md:px-12 py-8 md:py-10 rounded-2xl border-2 border-white text-center w-[92vw] max-w-[480px] shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.03, borderColor: "white" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
 
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
              >
                Nuestra historia  
              </motion.h2>
 
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white text-base md:text-lg font-semibold mb-6"
              >
                ¡Conoce nuestra trayectoria!
              </motion.p>
 
              <Link to="/facturacion-electronica">
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 30px rgba(239, 68, 68, 0.8)",
                  }}
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
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
 
      <section className="bg-[#1a1a1a] py-20 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto border-4 border-white rounded-xl p-4 sm:p-6 md:p-10 overflow-hidden">
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
              className="text-4xl font-bold mb-4 text-white"
            >
              Nuestra Historia
            </motion.h2>
 
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-white max-w-3xl mx-auto mb-16"
            >
              Desde nuestros inicios, nos hemos dedicado a brindar soluciones tecnológicas innovadoras...
            </motion.p>
          </div>
 
          {/* ────────────────────────────────────────────────────────────
              SECCIÓN MODIFICADA: se agregaron los botones ← y →
              y las props x / onDragEnd en motion.div
          ──────────────────────────────────────────────────────────── */}
          <div className="relative">
            {/* Línea horizontal (sin cambios) */}
            <div className="absolute left-0 right-0 top-12 h-1 bg-cyan-400 z-0" />
 
            {/* ── BOTÓN NUEVO: retroceder ◄ ── */}
            <button
              onClick={() => scrollTimeline("left")}
              className="absolute -left-5 top-12 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-black shadow-lg hover:bg-cyan-300 transition -translate-y-1/2"
              aria-label="Anterior"
            >
              <ChevronLeft size={22} />
            </button>
 
            {/* ── BOTÓN NUEVO: avanzar ► ── */}
            <button
              onClick={() => scrollTimeline("right")}
              className="absolute -right-5 top-12 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-black shadow-lg hover:bg-cyan-300 transition -translate-y-1/2"
              aria-label="Siguiente"
            >
              <ChevronRight size={22} />
            </button>
 
            <div className="overflow-hidden" ref={carouselRef}>
              <motion.div
                className="flex gap-10 cursor-grab active:cursor-grabbing pb-8"
                drag="x"
                dragConstraints={{ right: 0, left: carouselWidth }}
                style={{ x }}
                onDragEnd={() => {
                  const current = x.get();
                  const clamped = Math.max(carouselWidth, Math.min(0, current));
                  animate(x, clamped, { type: "spring", stiffness: 80, damping: 20 });
                }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              >
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center w-[220px] sm:w-[260px] flex-shrink-0 text-center relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full z-10 border-4 border-[#1a1a1a]" />
 
                    <div className="w-24 h-24 mb-4 z-10 bg-[#1a1a1a] p-2 flex items-center justify-center">
                      <img
                        src="https://i.postimg.cc/Gp3tf0Lj/cropped-Frame-937.png"
                        alt={`Icono ${item.year}`}
                        className="w-full h-full"
                      />
                    </div>
 
                    <h4 className="text-cyan-400 font-semibold text-lg mb-2">
                      {item.year}
                    </h4>
 
                    <p className="text-sm text-white leading-relaxed text-center max-w-[240px]">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          {/* ── FIN SECCIÓN MODIFICADA ── */}
 
        </div>
      </section>
 
      <ProjectSlider
        title="PROYECTOS ELÉCTRICOS"
        projects={electricalProjects}
        theme={sliderThemes.electricos}
        sliderId="electricos"
      />
 
      <ProjectSlider
        title="PROYECTOS EN REDES Y EN TECNOLOGÍAS DE SEGURIDAD"
        projects={securityProjects}
        theme={sliderThemes.redes}
        sliderId="redes"
      />
 
      <ProjectSlider
        title="PROYECTOS DE CÁMARAS DE SEGURIDAD"
        projects={cameraProjects}
        theme={sliderThemes.camaras}
        sliderId="camaras"
      />
 
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
          0% { fill: #fff; }
          50% { fill: #000; }
          100% { fill: #fff; }
        }
 
        @media (max-width: 640px) {
          .cta.cta-large {
            padding: 10px 24px;
            font-size: 15px;
            min-width: unset;
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </>
  );
};
 
export default NuestraHistoria;