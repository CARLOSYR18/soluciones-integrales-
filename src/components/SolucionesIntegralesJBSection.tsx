import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import ScrollButton from "../components/ScrollButton";
import '../App.css'
import LogoLoop from "./LogoLoop";
import VoiceflowChat from "./VoiceflowChat";
import LogoKeyed from "../components/LogoKeyed";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaMedal, FaClock, FaHandshake, FaShieldAlt } from 'react-icons/fa';

// ---- Types ----
interface Service {
  title: string;
  label: string;
  image: string;
  imageAlt: string;
  cta: string;
  href?: string;
}

interface Feature {
  title: string;
  text: string;
  as?: "h3" | "h4";
}

interface Testimonial {
  name: string;
  avatar: string;
  quote: string;
}

interface ClientLogo {
  src: string;
  alt: string;
}

interface HeroSlide {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  href?: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  original_price: number;
  discount: number;
  image: string;
  brand: string;
  rating: number;
  reviews: number;
  availability: string;
  installments: string;
}

interface Props {
  className?: string;
}

// ---- Data ----
const heroSlides: HeroSlide[] = [
    { image: "https://i.postimg.cc/529YHB9F/Diseno-sin-titulo-(28).png", title: "Conectividad Superior", subtitle: "Routers de alta velocidad para tu hogar y oficina", href: "#" },
    { image: "https://i.postimg.cc/43d90zjq/Diseno-sin-titulo-(22).png", title: "Soluciones Tecnológicas", subtitle: "Innovación y soporte a tu alcance", href: "#" },
    { image: "https://i.postimg.cc/Y0cLjT03/Diseno-sin-titulo-(24).png", imageAlt: "Banner de tecnología", title: "Tu Socio Estratégico", subtitle: "Impulsamos tu crecimiento digital", href: "#" },
    { image: "https://i.postimg.cc/7LW2r5kf/Diseno-sin-titulo-(23).png", imageAlt: "Fondo abstracto azul", title: "Diseño y Desarrollo", subtitle: "Creamos experiencias únicas para tus usuarios", href: "#" },
    { image: "https://i.postimg.cc/gjvXh468/Diseno-sin-titulo-(25).png", imageAlt: "Redes y seguridad", title: "Seguridad Garantizada", subtitle: "Protegemos lo que más importa", href: "#" },
    { image: "https://i.postimg.cc/G3Ys63SL/Diseno-sin-titulo-(26).png", imageAlt: "Soporte técnico", title: "Soporte 24/7", subtitle: "Estamos aquí para ayudarte cuando nos necesites", href: "#" },
    { image: "https://i.postimg.cc/c4S8WqVB/Diseno-sin-titulo-(27).png", imageAlt: "Integración de sistemas", title: "Integración Sin Esfuerzo", subtitle: "Conectamos tus sistemas para una operación fluida", href: "#" },
];

const responsiveServices = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2, slidesToSlide: 2 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2, slidesToSlide: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1, slidesToSlide: 1 },
};

const heroResponsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const strategicServices: Service[] = [
  { label: "Servicios", title: "Desarrollo de Software", image: "https://i.postimg.cc/qgH0Q8DF/mejores-herramientas-desarrollo-software-1-400x267.png", imageAlt: "Herramientas de desarrollo de software", cta: "INFORMACIÓN" },
  { label: "Servicios", title: "Facturación Electrónica", image: "https://i.postimg.cc/pLZhhTpW/s3-blog-facturacion-electronica-min-400x256.png", imageAlt: "Facturación electrónica", cta: "INFORMACIÓN" },
  { label: "Servicios", title: "Soporte Técnico", image: "https://i.postimg.cc/Gmqt355h/image.png", imageAlt: "Soporte en sitio", cta: "INFORMACIÓN" },
  { label: "Servicios", title: "Tecnología en Seguridad", image: "https://i.postimg.cc/k4tgcXMk/tecnologia-seguridad-1-768x512.jpg", imageAlt: "Tecnología y seguridad", cta: "INFORMACIÓN" }
];

const features: Feature[] = [
  { title: "Soluciones a Medida", text: "Desarrollamos software a la medida de tus necesidades. Adaptado específicamente para ti.", as: "h3" },
  { title: "Altamente Escalable", text: "Nuestras soluciones crecen sin problemas con tu negocio. Adaptación sin límites.", as: "h3" },
  { title: "Diseño UX / UI", text: "Creamos interfaces intuitivas que encantan a los usuarios y mejora la experiencia de tu cliente.", as: "h3" },
  { title: "Procesos Optimizados", text: "Automatizamos tareas y operaciones para mejorar la productividad y reducir costos.", as: "h3" },
  { title: "Calidad Garantizada", text: "Aseguramos un rendimiento confiable y duradero para tu negocio. con los más altos estándares.", as: "h3" },
  { title: "Soporte Técnico", text: "Ofrecemos asistencia continua para mantener tu software al día siempre estamos aquí para ayudarte.", as: "h3" },
];

const testimonials: Testimonial[] = [
    { name: "Italo romero", avatar: "https://i.postimg.cc/HW9gC7KY/unnamed-1.png", quote: "Buen servicio de sitios web, excelente diseño y experiencia." },
    { name: "William Moises", avatar: "https://i.postimg.cc/3xd5pfwK/unnamed-2.png", quote: "Buen lugar donde te ofrecen de todo en tecnología informática y de cyber vigilancia." },
    { name: "Fritzl Yacomin", avatar: "https://i.postimg.cc/SsbwByfm/unnamed.png", quote: "Excelente atención, realmente muy profesionales en su trato y servicio." },
    { name: "Marielis Baptista", avatar: "https://i.postimg.cc/wT4n65QP/image.png", quote: "Excelentes los productos y trato para los clientes, lo recomiendo totalmente." },
    { name: "Ana montes", avatar: "https://i.postimg.cc/CxWt8FtH/unnamed-4.png", quote: "Muy buen servicio de parte de los empleados y cómo atienden y ayudan." },
];

const clientLogos = [
  { src: "https://i.postimg.cc/RFGXg9PK/Frame-394-modified-5.jpg", alt: "Cliente 1", href: "#" },
  { src: "https://i.postimg.cc/sf6TSjGy/Frame-394-modified-4.jpg", alt: "Cliente 2", href: "#" },
  { src: "https://i.postimg.cc/q7Tw0gS2/Frame-394-modified-1-1.jpg", alt: "Cliente 3", href: "#" },
  { src: "https://i.postimg.cc/636h2g98/Frame-394-modified-7.jpg", alt: "Cliente 4", href: "#" },
  { src: "https://i.postimg.cc/zBdFn7vz/Frame-394-modified-10.jpg", alt: "Cliente 5", href: "#" },
  { src: "https://i.postimg.cc/CxyHHzhg/Frame-394-modified-3.jpg", alt: "Cliente 6", href: "#" },
  { src: "https://i.postimg.cc/V6NjLtR9/Frame-394-modified-9.jpg", alt: "Cliente 7", href: "#" },
  { src: "https://i.postimg.cc/nry7kPJZ/Frame-394-modified-11.jpg", alt: "Cliente 8", href: "#" },
  { src: "https://i.postimg.cc/BncDTp7h/Frame-394-modified-12.jpg", alt: "Cliente 9", href: "#" },
  { src: "https://i.postimg.cc/MTXQ8S69/Frame-394-modified-6.jpg", alt: "Cliente 10", href: "#" },
  { src: "https://i.postimg.cc/7PfcYsKy/Frame-394-modified-18.jpg", alt: "Cliente 11", href: "#" },
  { src: "https://i.postimg.cc/Dzxj7LGt/Frame-394-modified-19.jpg", alt: "Cliente 12", href: "#" },
  { src: "https://i.postimg.cc/MZMP8cGX/Frame-394-modified-8.jpg", alt: "Cliente 13", href: "#" },
  { src: "https://i.postimg.cc/9fQbg0S2/Frame-394-modified-15.jpg", alt: "Cliente 14", href: "#" },
  { src: "https://i.postimg.cc/kXPc3fZw/Frame-394-modified-13.jpg", alt: "Cliente 15", href: "#" },
  { src: "https://i.postimg.cc/bvr0HMDG/Frame-394-modified-14.jpg", alt: "Cliente 16", href: "#" },
];

const products: Product[] = [
  {
    id: 1,
    name: 'Cámara de Seguridad Giratoria para Casa Wi-Fi 2K TAPO C212',
    price: 74.1,
    original_price: 195.0,
    discount: -62,
    image: 'https://oechsle.vteximg.com.br/arquivos/ids/18353484/image-e9973dc0a8304dc6a3cb84a1dd4e6fee.jpg?v=638563413734730000',
    brand: 'INFOCOM',
    rating: 5,
    reviews: 1,
    availability: 'Llega mañana',
    installments: '18 Cuotas Sin Interés'
  },
  {
    id: 2,
    name: 'Micrófono Solapero Double K15 Tipo Lightning y Auxiliar',
    price: 60.39,
    original_price: 99.0,
    discount: -59,
    image: 'https://digitronik.pe/cdn/shop/files/image.png?v=1690827121&width=700',
    brand: 'DADATECNO',
    rating: 4,
    reviews: 2,
    availability: 'Retira mañana',
    installments: '18 Cuotas Sin Interés'
  },
  {
    id: 3,
    name: 'iPhone 13 128GB',
    price: 989.55,
    original_price: 2199.0,
    discount: -55,
    image: 'https://pe.tiendasishop.com/cdn/shop/files/IMG-12496198_f5def5ea-2ecf-46d2-a7a5-694a6a19047e.jpg?v=1741363380',
    brand: 'FALABELLA',
    rating: 4,
    reviews: 1754,
    availability: 'Llega hoy',
    installments: '18 Cuotas Sin Interés'
  },
  {
    id: 4,
    name: 'Galaxy A56 5g 256gb Black',
    price: 1263.21,
    original_price: 1599.0,
    discount: -21,
    image: 'https://media.falabella.com/falabellaPE/20933319_1/w=800,h=800,fit=pad',
    brand: 'FALABELLA',
    rating: 4,
    reviews: 371,
    availability: 'Retira hoy',
    installments: '18 Cuotas Sin Interés'
  },
  {
    id: 5,
    name: 'Laptop Oficina Pro',
    price: 2449.9,
    original_price: 2450.0,
    discount: -53,
    image: 'https://alfatechperu.com/wp-content/uploads/2025/10/laptop-dell-inspiron-3530-intel-core-i5-1334u-8gb-ram-512gb-ssd-15-6-fhd-500x500.webp',
    brand: 'INFOCOM',
    rating: 5,
    reviews: 45,
    availability: 'Llega hoy',
    installments: '18 Cuotas Sin Interés'
  },
  {
    id: 6,
    name: 'Monitor 4K 32 pulgadas',
    price: 550.0,
    original_price: 1200.0,
    discount: -54,
    image: 'https://cdn.memorykings.pe/files/2024/07/06/350261-MK037106-A1.jpg',
    brand: 'DADATECNO',
    rating: 5,
    reviews: 89,
    availability: 'Retira mañana',
    installments: '18 Cuotas Sin Interés'
  }
];

const uiImage = "https://i.postimg.cc/TwmTb7CG/Frame-932-qqow7tfd3r2zohqj4jx9yf23tmjv30p5niiolmvipc.png";
const videoUrl = "https://solucionesintegralesjb.com/wp-content/uploads/2024/06/ES-1.mp4";
const videoPoster = "https://solucionesintegralesjb.com/wp-content/uploads/2024/11/logo-cubo.png";

const StrategicServiceCard: React.FC<{ item: Service }> = ({ item }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 group text-white mx-2 cursor-pointer">
      <img
        src={item.image}
        alt={item.imageAlt}
        className="absolute w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <p className="bg-white/90 text-black text-xs font-bold px-3 py-1 rounded-full self-start mb-2">
          {item.label}
        </p>
        <h3 className="text-5xl font-bold leading-tight text-white text-shadow-lg">
          {item.title}
        </h3>
        <a
          href={item.href || "#"}
          className="mt-5 text-sm font-bold rounded-full px-6 py-3 text-center self-start shadow-lg
                     bg-blue-600 text-white
                     transition-all duration-300 ease-out
                     opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                     hover:bg-blue-500"
        >
          {item.cta}
        </a>
      </div>
    </div>
  );
};

const FeatureBlock: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Tag = feature.as || "h3";
  return (
    <div>
      <Tag className="text-lg font-bold text-blue-600">{feature.title}</Tag>
      <p className="text-sm text-gray-600 leading-relaxed mt-2">{feature.text}</p>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   HERO SLIDER — Parallax zoom + line dots + flechas
   ═══════════════════════════════════════════════════ */
const HeroSlider: React.FC<{ slides: HeroSlide[] }> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
  };

  useEffect(() => {
    startAutoplay();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [slides.length]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    startAutoplay();
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    startAutoplay();
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
    startAutoplay();
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 1,
      transition: {
        x: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
      },
    }),
  };

  return (
    <motion.div
      key="hero-carousel"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden bg-black"
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full h-full"
        >
          <motion.img
            src={slides[current].image}
            alt={slides[current].imageAlt || slides[current].title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.04 }}
            transition={{ duration: 5, ease: "linear" }}
            key={`img-${current}`}
          />

          {/* Título y subtítulo centrado */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="text-center px-6">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                key={`title-${current}`}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
                style={{ textShadow: "0 3px 20px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)" }}
              >
                {slides[current].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                key={`sub-${current}`}
                className="mt-3 text-sm md:text-lg text-cyan-400 font-medium max-w-xl mx-auto text-center"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
              >
                {slides[current].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Gradiente lateral izquierdo para contraste de flecha */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/40 to-transparent z-20 pointer-events-none" />
      {/* Gradiente lateral derecho */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/40 to-transparent z-20 pointer-events-none" />

      {/* Flecha Izquierda */}
      <button
        onClick={prev}
        className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 z-30
                   w-12 h-12 md:w-14 md:h-14 rounded-full
                   bg-black/40 border-2 border-white/20
                   flex items-center justify-center
                   hover:bg-cyan-500/80 hover:border-cyan-400 hover:scale-110
                   active:scale-95
                   transition-all duration-300 cursor-pointer group"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
             className="group-hover:-translate-x-0.5 transition-transform duration-200">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Flecha Derecha */}
      <button
        onClick={next}
        className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 z-30
                   w-12 h-12 md:w-14 md:h-14 rounded-full
                   bg-black/40 border-2 border-white/20
                   flex items-center justify-center
                   hover:bg-cyan-500/80 hover:border-cyan-400 hover:scale-110
                   active:scale-95
                   transition-all duration-300 cursor-pointer group"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
             className="group-hover:translate-x-0.5 transition-transform duration-200">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Indicadores de línea modernos */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="relative h-[3px] rounded-full overflow-hidden transition-all duration-500 cursor-pointer"
            style={{
              width: idx === current ? "36px" : "14px",
              background: idx === current ? "transparent" : "rgba(255,255,255,0.3)",
            }}
          >
            {idx === current && (
              <>
                <div className="absolute inset-0 rounded-full bg-white/20" />
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4.5, ease: "linear" }}
                  key={`progress-${current}`}
                />
              </>
            )}
          </button>
        ))}
      </div>

      {/* Contador de slides — diseño moderno */}
      <div className="absolute top-4 right-5 z-30 flex items-center gap-1">
        <span className="text-3xl font-black text-white leading-none" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-white/40 text-lg font-light mx-0.5">/</span>
        <span className="text-sm font-semibold text-white/50 mt-1">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Gradiente inferior sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent z-20 pointer-events-none" />
    </motion.div>
  );
};

const SolucionesIntegralesJBSection: React.FC<Props> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<any[]>([]);
  const [heroVideoEnded, setHeroVideoEnded] = useState(false);
  const [videoIsMuted, setVideoIsMuted] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const handleSkipVideo = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.pause();
    }
    setHeroVideoEnded(true);
  };

  const handleVideoEnded = () => {
    setHeroVideoEnded(true);
  };

  const handleUnmute = () => {
    const video = heroVideoRef.current;
    if (video) {
      video.muted = false;
      setVideoIsMuted(false);
    }
  };

  // Inicia muted para que autoplay funcione
  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video || heroVideoEnded) return;

    video.muted = true;
    video.play().catch(() => {});
  }, [heroVideoEnded]);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={"w-full " + (className || "")}>
      
      {/* ====================== HERO: VIDEO PRIMERO → CARRUSEL DESPUÉS ====================== */}
      <div className="w-full mb-10 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!heroVideoEnded ? (
            /* ═══ VIDEO HERO ═══ */
            <motion.div
              key="hero-video"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-full h-[60vh] md:h-[80vh] bg-black"
            >
              <video
                ref={heroVideoRef}
                className="w-full h-full object-cover"
                src={videoUrl}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnded}
                poster={videoPoster}
              />

              {/* Overlay transparente clickeable para activar audio */}
              {videoIsMuted && (
                <div
                  className="absolute inset-0 z-25 cursor-pointer"
                  onClick={handleUnmute}
                />
              )}

              {/* Ícono de volumen muted — pequeño, esquina superior derecha */}
              {videoIsMuted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  onClick={handleUnmute}
                  className="absolute top-6 right-6 z-30 flex items-center gap-2 px-4 py-2.5
                             rounded-full bg-black/50 backdrop-blur-md border border-white/20
                             cursor-pointer hover:bg-black/70 transition-all duration-300"
                >
                  <motion.svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </motion.svg>
                  <span className="text-white text-xs font-semibold">Toca para activar audio</span>
                </motion.div>
              )}

              {/* Overlay gradiente inferior */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Botón Saltar Video */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                onClick={handleSkipVideo}
                className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-5 py-2.5 
                           rounded-full bg-white/15 backdrop-blur-md border border-white/25
                           text-white text-sm font-semibold
                           hover:bg-white/25 hover:border-white/40
                           transition-all duration-300 cursor-pointer
                           pointer-events-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Saltar video</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 4 15 12 5 20 5 4" />
                  <line x1="19" y1="5" x2="19" y2="19" />
                </svg>
              </motion.button>

              {/* Barra de progreso del video */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{ width: "0%" }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: heroVideoRef.current?.duration || 30,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Badge "EN VIVO" / "PRESENTACIÓN" */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 
                           rounded-full bg-black/40 backdrop-blur-md border border-white/15"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white text-xs font-bold tracking-wider uppercase">
                  Presentación
                </span>
              </motion.div>
            </motion.div>
          ) : (
            /* ═══ CARRUSEL DE IMÁGENES REDISEÑADO ═══ */
            <HeroSlider slides={heroSlides} />
          )}
        </AnimatePresence>
      </div>
      
    {/* ====================== SERVICIOS — APPLE STYLE ====================== */}
<section className="relative w-full bg-black overflow-hidden">
  <div className="relative z-10 py-16 md:py-24">

    {/* ── Header: Apple-style giant text ── */}
    <div className="max-w-5xl mx-auto px-6 mb-12 md:mb-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-cyan-400 text-sm md:text-base font-semibold tracking-[0.25em] uppercase mb-6"
      >
        Servicios
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight"
      >
        Lo que hacemos. Soluciones diseñadas para llevar tu negocio al siguiente nivel.
      </motion.h2>
    </div>

    {/* ── Carrusel Apple-style ── */}
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
              <p className="mt-1 text-sm text-white/50 leading-relaxed">
                Descubre cómo potenciamos tu negocio con esta solución integral.
              </p>
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

    {/* ── Link final tipo Apple ── */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto px-6 mt-16 md:mt-24"
    >
      <a href="/servicios" className="inline-flex items-center gap-2 text-cyan-400 text-lg md:text-xl font-semibold 
                                       hover:text-cyan-300 transition-colors duration-300 group">
        <span>Explorar todos los servicios</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="group-hover:translate-x-1.5 transition-transform duration-300">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </a>
    </motion.div>

  </div>
</section>

<div></div>

      {/* ====================== CARACTERÍSTICAS CON ANIMACIÓN 3D ====================== */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <motion.p
          initial={{ opacity: 0, y: 50, rotateX: 90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
          className="italic font-semibold text-center text-cyan-400"
        >
          Lo que te ofrecemos para potenciar tu éxito digital
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60, rotateX: 80, z: -100 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
          className="text-2xl md:text-3xl font-bold text-center text-gray-800"
        >
          Características de Soluciones Integrales JB
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 "
          >
            {features.slice(0, 3).map((f, idx) => (
              <motion.div
                key={`${f.title}-${idx}`}
                variants={{
                  hidden: { opacity: 0, x: -60, rotateY: 90, z: -100 },
                  visible: { opacity: 1, x: 0, rotateY: 0, z: 0, transition: { duration: 0.7, ease: "easeOut" } },
                }}
                whileHover={{ x: -8, rotateY: -8, rotateZ: 2, scale: 1.02, transition: { duration: 0.3 } }}
                style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
              >
                <div>
                  <h3 className="text-lg font-bold text-cyan-400">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -45, rotateY: -45, z: -150 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, z: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.08, rotateX: 10, rotateY: -10, rotateZ: 5, transition: { duration: 0.4 } }}
            style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
          >
            <motion.img
              src={uiImage}
              alt="Diseño web profesional en teléfono"
              className="w-40 sm:w-56 md:w-64 mx-auto rounded-xl shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 text-left"
          >
            {features.slice(3, 6).map((f, idx) => (
              <motion.div
                key={`${f.title}-${idx}`}
                variants={{
                  hidden: { opacity: 0, x: 60, rotateY: -90, z: -100 },
                  visible: { opacity: 1, x: 0, rotateY: 0, z: 0, transition: { duration: 0.7, ease: "easeOut" } },
                }}
                whileHover={{ x: 8, rotateY: 8, rotateZ: -2, scale: 1.02, transition: { duration: 0.3 } }}
                style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
              >
                <div>
                  <h3 className="text-lg font-bold text-cyan-400">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>



     {/* ====================== POR QUÉ ELEGIRNOS ====================== */}
<section className="relative overflow-hidden" style={{ minHeight: "580px" }}>
  {/* Fondo negro sólido */}
  <div className="absolute inset-0 z-0 bg-black" />

  {/* Decoraciones */}
  <div className="pointer-events-none absolute inset-0 z-[1]">
    <svg className="absolute top-8 right-[43%]" width="24" height="24" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" fill="none" stroke="#7c3aed" strokeWidth="2" opacity="0.4"/></svg>
    <div className="absolute top-10 right-16 w-14 h-14 border-2 border-cyan-400/15 rounded-lg rotate-12" />
    <svg className="absolute bottom-16 right-[24%]" width="16" height="20" viewBox="0 0 16 20" opacity="0.2"><polygon points="0,0 16,10 0,20" fill="#7c3aed"/></svg>
    <svg className="absolute bottom-10 left-[48%]" width="14" height="18" viewBox="0 0 16 20" opacity="0.15"><polygon points="0,0 16,10 0,20" fill="#0ea5e9"/></svg>
    <svg className="absolute bottom-6 right-[15%]" width="18" height="18" viewBox="0 0 24 24" opacity="0.08"><polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" fill="#1e3a5f"/></svg>
  </div>

  <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 relative z-10">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-8 md:mb-12 max-w-2xl mx-auto text-center"
    >
      <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[0.95] tracking-tight" style={{ fontStyle: "italic" }}>
        POR QUÉ ELEGIRNOS
      </h2>
      <p className="mt-3 text-sm md:text-[15px] text-white/60 leading-relaxed max-w-md mx-auto">
        Descubre las razones por las que somos tu mejor opción para crecer y alcanzar tus metas con excelencia y confianza.
      </p>
    </motion.div>

    {/* 4 Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-10 md:mb-14">

      {[
        {
          icon: <FaMedal size={32} color="#3b82f6" />,
          title: "Experiencia Probada",
          desc: "Más de 15 años impulsando el éxito de nuestros clientes con resultados reales y medibles.",
          color: "blue",
          borderColor: "border-blue-500/30",
          glowColor: "group-hover:shadow-blue-500/20",
          iconBg: "bg-blue-500/10 border-blue-500/20",
          lineColor: "from-blue-500 to-blue-400",
        },
        {
          icon: <FaClock size={32} color="#10b981" />,
          title: "Eficiencia y Puntualidad",
          desc: "Cumplimos plazos con procesos ágiles y dedicación rigurosa a cada proyecto.",
          color: "emerald",
          borderColor: "border-emerald-500/30",
          glowColor: "group-hover:shadow-emerald-500/20",
          iconBg: "bg-emerald-500/10 border-emerald-500/20",
          lineColor: "from-emerald-500 to-emerald-400",
        },
        {
          icon: <FaHandshake size={32} color="#f59e0b" />,
          title: "Trato Personalizado",
          desc: "Atención individualizada y soluciones a medida adaptadas a tus necesidades únicas.",
          color: "amber",
          borderColor: "border-amber-500/30",
          glowColor: "group-hover:shadow-amber-500/20",
          iconBg: "bg-amber-500/10 border-amber-500/20",
          lineColor: "from-amber-500 to-amber-400",
        },
        {
          icon: <FaShieldAlt size={32} color="#8b5cf6" />,
          title: "Confianza y Garantía",
          desc: "Garantizamos calidad, transparencia y respaldo en cada etapa del camino.",
          color: "violet",
          borderColor: "border-violet-500/30",
          glowColor: "group-hover:shadow-violet-500/20",
          iconBg: "bg-violet-500/10 border-violet-500/20",
          lineColor: "from-violet-500 to-violet-400",
        },
      ].map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: 25, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          whileHover={{ y: -14, rotateX: 5, rotateY: i < 2 ? -5 : 5, scale: 1.04, transition: { type: "spring", stiffness: 280, damping: 14 } }}
          style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
          className="group"
        >
          <div className={`relative h-full rounded-3xl p-8 md:p-9
                          bg-gradient-to-b from-white/[0.06] to-white/[0.02]
                          border ${card.borderColor}
                          hover:border-${card.color}-400/50
                          transition-all duration-600 flex flex-col items-center text-center overflow-hidden`}
               style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)" }}
          >

            {/* Línea gradiente superior animada */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${card.lineColor} opacity-40 group-hover:opacity-100 transition-all duration-500`} />
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-[2px] bg-gradient-to-r ${card.lineColor} transition-all duration-700 ease-out`} />

            {/* Glow superior */}
            <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700`}
                 style={{ background: `radial-gradient(circle, var(--tw-gradient-from, rgba(59,130,246,0.15)), transparent 70%)` }} />

            {/* Partículas flotantes */}
            <div className={`absolute top-8 right-6 w-1 h-1 rounded-full bg-${card.color}-400/30 group-hover:bg-${card.color}-400/60 group-hover:-translate-y-3 transition-all duration-700`} />
            <div className={`absolute bottom-12 left-6 w-1.5 h-1.5 rounded-full bg-${card.color}-400/20 group-hover:bg-${card.color}-400/50 group-hover:translate-y-2 transition-all duration-500 delay-100`} />
            <div className={`absolute top-1/2 right-4 w-1 h-1 rounded-full bg-${card.color}-400/15 group-hover:bg-${card.color}-400/40 group-hover:translate-x-1 transition-all duration-600 delay-200`} />

            {/* Ícono con ring animado */}
            <div className="relative mb-7">
              {/* Ring exterior que pulsa al hover */}
              <div className={`absolute inset-0 -m-3 rounded-2xl border border-${card.color}-500/0 group-hover:border-${card.color}-500/20 group-hover:-m-4 transition-all duration-500`} />
              <div className={`absolute inset-0 -m-1 rounded-2xl bg-${card.color}-500/0 group-hover:bg-${card.color}-500/5 transition-all duration-500`} />
              
              <motion.div
                className={`relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl ${card.iconBg} border flex items-center justify-center
                            group-hover:shadow-lg transition-all duration-500`}
                whileHover={{ rotate: [0, -8, 8, -4, 0], transition: { duration: 0.5 } }}
                style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
              >
                {card.icon}
              </motion.div>
            </div>

            {/* Título */}
            <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider leading-tight mb-3 group-hover:text-white transition-colors" style={{ fontStyle: "italic" }}>
              {card.title}
            </h3>

            {/* Separador */}
            <div className={`w-8 h-[1px] bg-gradient-to-r ${card.lineColor} opacity-30 group-hover:opacity-70 group-hover:w-14 mb-4 transition-all duration-500`} />

            {/* Descripción */}
            <p className="text-xs md:text-sm text-white/40 leading-relaxed group-hover:text-white/65 transition-colors duration-500 flex-1">
              {card.desc}
            </p>

            {/* Footer: línea + flecha que aparece */}
            <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
              <div className={`w-6 h-[2px] rounded-full bg-gradient-to-r ${card.lineColor}`} />
              <span className={`text-${card.color}-400 text-xs font-semibold`}>Ver más</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`text-${card.color}-400`}><polyline points="9 18 15 12 9 6"/></svg>
            </div>

            {/* Borde glow inferior */}
            <div className={`absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent ${card.lineColor.replace('from-', 'via-')} to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700`} />
          </div>
        </motion.div>
      ))}

    </div>

    {/* Botón CTA */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.a
        href="/QuienesSomos"
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-black text-white text-sm
                   bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500
                   shadow-lg shadow-cyan-500/25
                   transition-all duration-300 uppercase tracking-[0.12em]"
      >
        CONÓCENOS MÁS
      </motion.a>
    </motion.div>

  </div>
</section>


   {/* ====================== SECCIÓN TESTIMONIOS ====================== */}
<section className="relative overflow-hidden py-20 md:py-24 px-4 md:px-8 bg-white text-slate-900">
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-40 -right-40 w-[560px] h-[560px] bg-cyan-500/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-[560px] h-[560px] bg-blue-500/10 rounded-full blur-3xl" />
    <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,23,42,.18) 1px, transparent 0)", backgroundSize: "18px 18px" }} />
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.35 }} className="text-center mb-14 md:mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-900/10 bg-white/70 backdrop-blur shadow-sm">
        <span className="w-2 h-2 rounded-full bg-cyan-500" />
        <span className="text-xs md:text-sm font-black tracking-[0.18em] uppercase text-cyan-700">Testimonios</span>
      </div>
      <h2 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
        <span className="text-slate-950">La voz de nuestros</span>{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">clientes</span>
      </h2>
      <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">Descubre cómo hemos transformado negocios y generado resultados tangibles.</p>
    </motion.div>

    <Carousel
      responsive={{ desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 }, tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 }, mobile: { breakpoint: { max: 640, min: 0 }, items: 1 } }}
      infinite autoPlay autoPlaySpeed={5000} arrows showDots dotListClass="testimonial-dots-light" itemClass="px-3 md:px-4" containerClass="pb-14"
    >
      {testimonials.map((t, index) => (
        <motion.div key={index} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: index*0.06 }} viewport={{ once: true, amount: 0.25 }} className="h-full">
          <div className="group relative h-full rounded-3xl border border-slate-900/10 bg-white/80 backdrop-blur shadow-[0_18px_50px_rgba(2,6,23,0.08)] p-8 flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(2,6,23,0.12)]">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/6 via-transparent to-blue-500/6" />
            <div className="flex gap-2 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.svg key={i} initial={{ opacity: 0, scale: 0.6, y: 10, rotateZ: -80 }} whileInView={{ opacity: 1, scale: 1, y: 0, rotateZ: 0 }} transition={{ duration: 0.22, delay: 0.08+i*0.05, ease: "easeOut" }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.25, rotateZ: 20, transition: { duration: 0.18, ease: "easeOut" } }} className="w-6 h-6 fill-yellow-400 cursor-pointer" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </motion.svg>
              ))}
            </div>
            <p className="text-slate-700 text-base leading-relaxed mb-8 flex-grow font-medium">{t.quote}</p>
            <div className="h-1 w-14 bg-gradient-to-r from-cyan-500 to-blue-600 mb-6 rounded-full" />
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <img src={t.avatar} alt={t.name} className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                <p className="text-cyan-700 text-xs font-semibold">Cliente satisfecho</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </Carousel>

    <style>{`
      .testimonial-dots-light{ display:flex; justify-content:center; gap:.8rem; list-style:none; padding:2rem 0 0 0; margin:0; }
      .testimonial-dots-light li button{ width:10px; height:10px; border-radius:9999px; border:1px solid rgba(15,23,42,.20); background:rgba(15,23,42,.18); padding:0; transition:all .25s ease; }
      .testimonial-dots-light li button:hover{ transform:scale(1.2); background:rgba(34,211,238,.45); border-color:rgba(34,211,238,.45); }
      .testimonial-dots-light li.react-multi-carousel-dot--active button{ width:32px; height:10px; background:linear-gradient(90deg,#06b6d4,#2563eb); border-color:rgba(37,99,235,.25); box-shadow:0 0 14px rgba(34,211,238,.35); }
    `}</style>
  </div>
</section>

   {/* ====================== SECCIÓN DE CLIENTES ====================== */}

{/* Parte 1: CTA — fondo negro */}
<section className="relative bg-black py-16 md:py-24 px-4 md:px-8">
  <div className="max-w-3xl mx-auto text-center relative z-10">

    {/* Título */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-black text-white leading-tight"
    >
      ¿Listo para llevar tu negocio al siguiente nivel?
    </motion.h2>

    {/* Descripción */}
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="mt-4 text-white/50 text-sm md:text-base leading-relaxed max-w-xl mx-auto"
    >
      Contáctanos hoy y descubre cómo nuestras soluciones tecnológicas pueden transformar tu empresa con resultados reales y medibles.
    </motion.p>

    {/* Input + Botón */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
    >
      <input
        type="email"
        placeholder="Ingresa tu correo electrónico"
        className="flex-1 w-full px-5 py-3.5 rounded-full border border-white/15 bg-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
      />
      <motion.a
        href="/contacto"
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all whitespace-nowrap"
      >
        CONTÁCTANOS
      </motion.a>
    </motion.div>

    {/* Beneficios */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/40"
    >
      <span>Consulta gratuita</span>
      <span className="w-1 h-1 rounded-full bg-white/30" />
      <span>Sin compromiso</span>
      <span className="w-1 h-1 rounded-full bg-white/30" />
      <span>Respuesta en 24h</span>
    </motion.div>

  </div>
</section>

{/* Parte 2: Logos — carrusel, fondo blanco */}
<section className="relative bg-white py-16 md:py-24 px-4 md:px-8 overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* Título centrado */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center mb-6"
    >
      <p className="text-base md:text-lg text-gray-600 font-semibold tracking-wide text-center mx-auto">
        Las marcas que confían en{" "}
        <span className="text-cyan-500">Soluciones Integrales JB</span>
      </p>
    </motion.div>

    {/* Métricas debajo del título */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex justify-center gap-8 md:gap-16 mb-10 md:mb-14"
    >
      {[
        { number: "100+", label: "Clientes" },
        { number: "15+", label: "Años" },
        { number: "98%", label: "Satisfacción" },
      ].map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.6, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + idx * 0.12, type: "spring", stiffness: 120, damping: 12 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.15, y: -8, transition: { duration: 0.25, type: "spring", stiffness: 300, damping: 12 } }}
          className="text-center cursor-pointer group"
        >
          <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-none">
            {stat.number}
          </p>
          <p className="mt-2 text-gray-500 text-sm md:text-base font-semibold group-hover:text-cyan-600 transition-colors">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>

    {/* Carrusel de logos */}
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Fila 1 → */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-5 overflow-hidden py-4"
      >
        <motion.div
          className="flex items-center gap-6 md:gap-8"
          animate={{ x: [0, -1800] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        >
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.08, rotateY: 8, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              style={{ transformStyle: "preserve-3d" }}
              className="flex-shrink-0 flex items-center justify-center h-20 md:h-24 w-36 md:w-44 bg-slate-50 rounded-xl border border-slate-100 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-400 cursor-pointer group"
            >
              <img src={logo.src} alt={logo.alt} className="h-12 md:h-14 object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Fila 2 ← */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="overflow-hidden py-4"
      >
        <motion.div
          className="flex items-center gap-6 md:gap-8"
          animate={{ x: [-1800, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        >
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.08, rotateY: -8, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              style={{ transformStyle: "preserve-3d" }}
              className="flex-shrink-0 flex items-center justify-center h-20 md:h-24 w-36 md:w-44 bg-slate-50 rounded-xl border border-slate-100 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-400 cursor-pointer group"
            >
              <img src={logo.src} alt={logo.alt} className="h-12 md:h-14 object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>

  </div>

  <div className="max-w-3xl mx-auto mt-10 text-center">
    <VoiceflowChat />
    <ScrollButton />
  </div>
</section>

      {/* ====== ESTILOS PARA LA SECCIÓN DE PRODUCTOS ====== */}
      <style>{`
        .products-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
        .section-title { color: #333; text-shadow: none; font-size: 2.5rem; font-weight: bold; margin: 0; }
        .results-count { color: #999; font-size: 14px; margin: 5px 0 0 0; }
        .sort-container { display: flex; align-items: center; gap: 15px; }
        .sort-select { padding: 8px 15px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; background: white; cursor: pointer; }
        .search-container { position: sticky; top: 80px; background: white; padding: 15px; border-radius: 30px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); margin: 0 auto 40px; max-width: 700px; display: flex; align-items: center; }
        .search-icon { color: #0066ff; font-size: 1.2rem; margin-right: 10px; }
        .search-input { border: none; flex: 1; padding: 10px 0; font-size: 1rem; }
        .search-input:focus { outline: none; }
        .filter-btn { background: none; border: none; color: #ff7a00; font-size: 1.2rem; cursor: pointer; padding: 0 10px; }
        .products-grid-store { display: grid; grid-template-columns: repeat(3,1fr); gap: 25px; margin-top: 30px; }
        .product-card-store { background: white; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; transition: all 0.3s ease; display: flex; flex-direction: column; }
        .product-card-store:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.15); transform: translateY(-4px); border-color: #0066ff; }
        .product-image-wrapper { position: relative; width: 100%; height: 350px; background: linear-gradient(135deg,#fcfcfc 0%,#f5f5f5 100%); display: flex; align-items: center; justify-content: center; overflow: visible; border-bottom: 1px solid #ececec; }
        .product-image { max-width: 95%; max-height: 95%; width: auto; height: auto; object-fit: contain; transition: transform 0.3s ease; }
        .product-card-store:hover .product-image { transform: scale(1.08); }
        .discount-badge { position: absolute; top: 10px; right: 10px; background: #ff6600; color: white; padding: 6px 10px; border-radius: 4px; font-weight: 700; font-size: 13px; }
        .product-info { padding: 15px; flex-grow: 1; display: flex; flex-direction: column; }
        .brand-name { color: #0066ff; font-size: 12px; font-weight: 700; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px; }
        .product-title { font-size: 13px; font-weight: 600; margin: 0 0 10px 0; line-height: 1.4; color: #333; min-height: 32px; }
        .rating { display: flex; align-items: center; gap: 5px; margin-bottom: 10px; font-size: 13px; }
        .rating span { color: #ffc107; }
        .reviews { color: #999; font-size: 12px; }
        .price-section { display: flex; gap: 10px; margin-bottom: 10px; }
        .original-price { text-decoration: line-through; color: #999; font-size: 12px; }
        .current-price { font-size: 18px; font-weight: 700; color: #0066ff; }
        .availability { font-size: 12px; color: #00aa00; font-weight: 600; margin: 5px 0; }
        .installments { font-size: 11px; color: #666; margin: 5px 0 10px 0; }
        .btn-add-cart-store { background: white; border: 1px solid #ddd; padding: 10px; border-radius: 4px; font-weight: 600; font-size: 13px; cursor: pointer; transition: all 0.3s ease; margin-top: auto; }
        .btn-add-cart-store:hover { background: #f0f0f0; border-color: #0066ff; color: #0066ff; }
        .view-more-container { display: flex; justify-content: center; margin-top: 50px; padding: 30px 0; }
        .btn-view-more { display: inline-block; text-decoration: none; text-align: center; background: white; border: 2px solid #0066ff; color: #0066ff; padding: 12px 50px; border-radius: 6px; font-weight: 700; font-size: 15px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; }
        .btn-view-more:hover { background: #0066ff; color: white; transform: translateY(-2px); box-shadow: 0 5px 20px rgba(0,102,255,0.3); }
        @media (max-width: 1024px) { .products-grid-store { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 768px) { .products-grid-store { grid-template-columns: 1fr; gap: 20px; } .products-header { flex-direction: column; align-items: flex-start; gap: 15px; } }
      `}</style>

    </section>
  );
};

export default SolucionesIntegralesJBSection;