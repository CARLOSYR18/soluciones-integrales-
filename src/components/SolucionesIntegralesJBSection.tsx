import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import ScrollButton from "../components/ScrollButton";
import '../App.css'
import LogoLoop from "./LogoLoop";
import VoiceflowChat from "./VoiceflowChat";
import LogoKeyed from "../components/LogoKeyed";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

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
    { image: "https://i.postimg.cc/d1QtZqkW/Diseño_sin_título_(21).png", title: "Conectividad Superior", subtitle: "Routers de alta velocidad para tu hogar y oficina", href: "#" },
    { image: "https://i.postimg.cc/ZKXRst2h/Diseño_sin_título_(15).png", title: "Soluciones Tecnológicas", subtitle: "Innovación y soporte a tu alcance", href: "#" },
    { image: "https://i.postimg.cc/nh7L6Sf2/Diseño_sin_título_(17).png", imageAlt: "Banner de tecnología", title: "Tu Socio Estratégico", subtitle: "Impulsamos tu crecimiento digital", href: "#" },
    { image: "https://i.postimg.cc/8zWCqXgJ/Diseño_sin_título_(16).png", imageAlt: "Fondo abstracto azul", title: "Diseño y Desarrollo", subtitle: "Creamos experiencias únicas para tus usuarios", href: "#" },
    { image: "https://i.postimg.cc/vmsmM7G3/Diseño_sin_título_(18).png", imageAlt: "Redes y seguridad", title: "Seguridad Garantizada", subtitle: "Protegemos lo que más importa", href: "#" },
    { image: "https://i.postimg.cc/Zqx5q9qg/Diseño_sin_título_(19).png", imageAlt: "Soporte técnico", title: "Soporte 24/7", subtitle: "Estamos aquí para ayudarte cuando nos necesites", href: "#" },
    { image: "https://i.postimg.cc/vB8HxQgm/Diseño_sin_título_(20).png", imageAlt: "Integración de sistemas", title: "Integración Sin Esfuerzo", subtitle: "Conectamos tus sistemas para una operación fluida", href: "#" },
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

const SolucionesIntegralesJBSection: React.FC<Props> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<any[]>([]);

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
      
      {/* ====================== BANNER DEL PRIMER CÓDIGO ====================== */}
      <div className="w-full mb-10">
        <Carousel 
          responsive={heroResponsive} 
          infinite={true} 
          autoPlay={true} 
          autoPlaySpeed={3000} 
          keyBoardControl={true} 
          showDots={true} 
          arrows={true} 
          containerClass="carousel-container" 
          dotListClass="custom-dot-list-style" 
          itemClass="carousel-item-padding-40-px"
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative w-full h-80 md:h-96 text-white overflow-hidden group">
              <img 
                src={slide.image} 
                alt={slide.imageAlt} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          ))}
        </Carousel>
      </div>
      
    {/* ====================== SERVICIOS ESTRATÉGICOS ====================== */}
<div className="bg-gradient-to-b from-black via-slate-900 to-black w-full px-6 py-16 md:py-24 relative overflow-hidden">
  {/* Fondos decorativos */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

  {/* ================= HEADER (entrada + hover) ================= */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="text-center mb-16 relative z-10"
  >
    <motion.h2
      initial={{ opacity: 0, y: -25 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-xl font-semibold tracking-wide text-cyan-400"
    >
      Soluciones Integrales para Impulsar tu Negocio
    </motion.h2>

    {/* Wrapper para que todo el título "flote" un poco en hover */}
    <motion.div
      initial={{ opacity: 1 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight text-white flex flex-wrap justify-center gap-x-4"
    >
      {/* Texto blanco: entra desde izquierda + se mueve en hover */}
      <motion.span
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ x: -10 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        Soluciones Estratégicas para
      </motion.span>

      {/* "Crecer": entra desde derecha + se mueve/zoom en hover */}
      <motion.span
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ x: 10, scale: 1.03 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Crecer
      </motion.span>
    </motion.div>
  </motion.div>

  {/* ================= CARRUSEL (AISLADO) ================= */}
  <div className="strategic-carousel-scope relative z-10">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <Carousel
        responsive={responsiveServices} // tu config con slidesToSlide:2 ya ayuda a que dots no “confundan”
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        showDots
        arrows
        containerClass="strategic-carousel-container" // ✅ ÚNICO
        itemClass="p-2"
        dotListClass="strategic-dots" // ✅ ÚNICO
      >
        {strategicServices.map((s, idx) => (
          <motion.div
            key={`${s.title}-${idx}`}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -250 : 250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: idx * 0.08 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="group relative rounded-3xl overflow-hidden">
              {/* overlay oscuro hover */}
              <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 z-10" />
              <div className="relative z-0 group-hover:scale-[1.02] transition-transform duration-300">
                <StrategicServiceCard item={s} />
              </div>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </motion.div>

    {/* ✅ En React normal: <style> (no jsx) */}
    <style>{`
      /* SOLO este carrusel */
      .strategic-carousel-scope .strategic-carousel-container{
        position: relative;
        z-index: 10;
        padding-bottom: 4.8rem; /* espacio para dots */
      }

      .strategic-carousel-scope .react-multi-carousel-item{
        animation: none !important;
      }

      /* DOTS PRO */
      .strategic-carousel-scope .strategic-dots{
        position: absolute !important;
        left: 0;
        right: 0;
        bottom: 1rem; 
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.7rem;
        list-style: none;
        margin: 0;
        padding: 0;
        z-index: 20;
        pointer-events: auto;
      }

      /* apagados */
      .strategic-carousel-scope .strategic-dots li button{
        width: 10px;
        height: 10px;
        border-radius: 9999px;
        border: 1px solid rgba(148, 163, 184, 0.35);
        background: rgba(148, 163, 184, 0.35);
        padding: 0;
        cursor: pointer;
        outline: none;
        opacity: 0.35;
        transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .strategic-carousel-scope .strategic-dots li button:hover{
        transform: scale(1.15);
        background: rgba(34, 211, 238, 0.55);
        border-color: rgba(34, 211, 238, 0.75);
        opacity: 1;
      }

      /* activo */
      .strategic-carousel-scope .strategic-dots li.react-multi-carousel-dot--active button{
        width: 36px;
        height: 10px;
        border-radius: 9999px;
        background: linear-gradient(90deg, #22d3ee, #3b82f6);
        border-color: rgba(34, 211, 238, 0.95);
        box-shadow: 0 0 18px rgba(34, 211, 238, 0.6);
        opacity: 1;
        transform: scale(1.05);
      }
    `}</style>
  </div>
</div>

<div>
  
</div>
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

        {/* Grid responsive */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Bloques Izquierda */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 text-right md:text-left lg:text-right"
          >
            {features.slice(0, 3).map((f, idx) => (
              <motion.div
                key={`${f.title}-${idx}`}
                variants={{
                  hidden: { opacity: 0, x: -60, rotateY: 90, z: -100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    z: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
                whileHover={{ 
                  x: -8, 
                  rotateY: -8,
                  rotateZ: 2,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1200px"
                }}
              >
                <div>
                  <h3 className="text-lg font-bold text-cyan-400">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Imagen central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -45, rotateY: -45, z: -150 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, z: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
              scale: 1.08,
              rotateX: 10,
              rotateY: -10,
              rotateZ: 5,
              transition: { duration: 0.4 }
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1200px"
            }}
          >
            <motion.img
              src={uiImage}
              alt="Diseño web profesional en teléfono"
              className="w-40 sm:w-56 md:w-64 mx-auto rounded-xl shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            />
          </motion.div>

          {/* Bloques Derecha */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 text-left"
          >
            {features.slice(3, 6).map((f, idx) => (
              <motion.div
                key={`${f.title}-${idx}`}
                variants={{
                  hidden: { opacity: 0, x: 60, rotateY: -90, z: -100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    z: 0,
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
                whileHover={{ 
                  x: 8, 
                  rotateY: 8,
                  rotateZ: -2,  
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1200px"
                }}
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

     {/* ====================== SECCIÓN DE VIDEO (panel derecha fijo + métricas abajo) ====================== */}
<section className="bg-neutral-800 text-white py-20 md:py-24 px-4 md:px-8 relative overflow-hidden">
  {/* decor */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-40 -right-40 w-[560px] h-[560px] bg-cyan-500/15 rounded-full blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-[560px] h-[560px] bg-blue-500/15 rounded-full blur-3xl" />
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)",
        backgroundSize: "18px 18px",
      }}
    />
  </div>

  {/* CONTENEDOR CON PERSPECTIVA (3D GLOBAL) */}
  <motion.div
    className="max-w-6xl mx-auto relative z-10"
    style={{ perspective: 1400 }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.06 },
      },
    }}
  >
    {/* HEADER */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18, rotateX: 12 },
        show: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="text-center mb-12 md:mb-16"
    >
      <motion.div
        whileHover={{ y: -2, rotateX: 2 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400" />
        <span className="text-xs md:text-sm font-black tracking-[0.18em] uppercase text-cyan-300">
          Soluciones
        </span>
      </motion.div>

      {/* ✅ TÍTULO COMO TU PRIMERA CAP: BLANCO + CELESTE */}
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 14, rotateX: 14 },
          show: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="mt-5 text-4xl md:text-6xl font-black leading-tight"
      >
        <span className="text-white">Nuestras</span>{" "}
        <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]">
          Soluciones
        </span>
      </motion.h2>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
        }}
        className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl mx-auto"
      >
        Mira cómo transformamos negocios con tecnología innovadora.
      </motion.p>
    </motion.div>

    {/* ✅ BLOQUE 1: VIDEO + PANEL DERECHA */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* VIDEO */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 26, rotateX: 18, rotateY: -10 },
          show: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{
          rotateX: 2,
          rotateY: -2,
          y: -6,
          transition: { type: "spring", stiffness: 220, damping: 18 },
        }}
        className="lg:col-span-8"
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="relative w-full aspect-video">
            <video
              className="w-full h-full object-cover"
              src={videoUrl}
              controls
              preload="metadata"
              poster="https://i.postimg.cc/ncJGw17n/image.png"
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-5 py-4 bg-gradient-to-r from-white/5 to-white/0 border-t border-white/10">
            <p className="text-sm text-slate-200 font-semibold">
              Demo de servicios • Implementación • Resultados
            </p>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-[11px] px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/20 text-cyan-200 font-bold">
                24/7
              </span>
              <span className="text-[11px] px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-200 font-bold">
                Soporte
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* PANEL DERECHA */}
      <motion.aside
        variants={{
          hidden: { opacity: 0, y: 26, rotateX: 18, rotateY: 10 },
          show: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{
          rotateX: 2,
          rotateY: 2,
          y: -6,
          transition: { type: "spring", stiffness: 220, damping: 18 },
        }}
        className="lg:col-span-4"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
          <h3 className="text-xl md:text-2xl font-black">
            Soluciones Digitales Personalizadas
          </h3>
          <p className="mt-3 text-slate-300 leading-relaxed">
            Transformamos tus ideas en soluciones digitales con impacto real.
            Cada proyecto se diseña según tus objetivos.
          </p>

          <div className="mt-6 space-y-3">
            {[
              "Consultoría estratégica personalizada",
              "Desarrollo de software a medida",
              "Implementación e integración",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-200" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-slate-200 font-semibold">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <motion.a
              href="/contacto"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold
                         bg-gradient-to-r from-cyan-500 to-blue-600
                         hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              Contactar ahora
            </motion.a>

            <motion.a
              href="/servicios"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold
                         border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
            >
              Ver servicios
            </motion.a>
          </div>
        </div>
      </motion.aside>
    </div>

    {/* ✅ BLOQUE 2: MÉTRICAS + TESTIMONIO */}
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.10 } },
      }}
      className="mt-14 md:mt-16"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* MÉTRICAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "EXPERIENCIA", main: "15+", sub: "años" },
          { title: "PROYECTOS", main: "100+", sub: "completados" },
          { title: "SATISFACCIÓN", main: "98%", sub: "clientes" },
          { title: "SOPORTE", main: "24/7", sub: "disponible" },
        ].map((m, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 18, rotateX: 14 },
              show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{
              rotateX: 3,
              rotateY: idx % 2 === 0 ? -3 : 3,
              y: -8,
              transition: { type: "spring", stiffness: 220, damping: 16 },
            }}
            className="group relative rounded-2xl p-7 border border-white/10 bg-white/5 backdrop-blur
                       shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-all duration-300"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-70" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            bg-gradient-to-br from-cyan-500/12 via-transparent to-blue-500/12" />

            <p className="text-[11px] uppercase tracking-[0.22em] font-extrabold text-slate-300">
              {m.title}
            </p>

            <div className="mt-4 flex items-end gap-2">
              <p className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent leading-none">
                {m.main}
              </p>
              <span className="text-base font-bold text-slate-300/90">{m.sub}</span>
            </div>

            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Resultados medibles y enfoque en calidad.
            </p>
          </motion.div>
        ))}
      </div>

      {/* TESTIMONIO */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 18, rotateX: 14 },
          show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
        }}
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{
          rotateX: 2,
          rotateY: 2,
          y: -6,
          transition: { type: "spring", stiffness: 220, damping: 18 },
        }}
        className="mt-8"
      >
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur
                        shadow-[0_22px_60px_rgba(0,0,0,0.45)]">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400/80 to-blue-500/70" />
          <div className="pointer-events-none absolute -top-10 right-8 text-[120px] text-cyan-400/10 select-none">
            “
          </div>

          <p className="text-base md:text-lg text-slate-200 leading-relaxed max-w-5xl">
            “Trabajar con este equipo cambió nuestro negocio. Comunicación clara, entrega rápida y resultados.”
          </p>

          <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center font-black text-slate-900">
                CS
              </div>
              <div>
                <p className="text-sm font-extrabold tracking-wide text-white">
                  CLIENTE SATISFECHO
                </p>
                <p className="text-xs text-slate-400">Reseña verificada</p>
              </div>
            </div>

            <div className="sm:ml-auto flex flex-wrap items-center gap-2">
              <span className="text-[11px] px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-200 font-bold">
                Calidad
              </span>
              <span className="text-[11px] px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 font-bold">
                Entrega rápida
              </span>
              <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 font-bold">
                Soporte
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
</section>

   {/* ====================== SECCIÓN TESTIMONIOS (BLANCO + TÍTULO ESTILO “SOLUCIONES”) ====================== */}
<section className="relative overflow-hidden py-20 md:py-24 px-4 md:px-8 bg-white text-slate-900">
  {/* Fondo decorativo (suave en blanco) */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-40 -right-40 w-[560px] h-[560px] bg-cyan-500/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-[560px] h-[560px] bg-blue-500/10 rounded-full blur-3xl" />
    <div
      className="absolute inset-0 opacity-[0.25]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(15,23,42,.18) 1px, transparent 0)",
        backgroundSize: "18px 18px",
      }}
    />
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* HEADER (mismo estilo que “Nuestras Soluciones”: blanco + celeste) */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.35 }}
      className="text-center mb-14 md:mb-16"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-900/10 bg-white/70 backdrop-blur shadow-sm">
        <span className="w-2 h-2 rounded-full bg-cyan-500" />
        <span className="text-xs md:text-sm font-black tracking-[0.18em] uppercase text-cyan-700">
          Testimonios
        </span>
      </div>

      <h2 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
        <span className="text-slate-950">La voz de nuestros</span>{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          clientes
        </span>
      </h2>

      <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
        Descubre cómo hemos transformado negocios y generado resultados tangibles.
      </p>
    </motion.div>

    {/* CARRUSEL */}
    <Carousel
      responsive={{
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
      }}
      infinite
      autoPlay
      autoPlaySpeed={5000}
      arrows
      showDots
      dotListClass="testimonial-dots-light"
      itemClass="px-3 md:px-4"
      containerClass="pb-14"
    >
      {testimonials.map((t, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: index * 0.06 }}
          viewport={{ once: true, amount: 0.25 }}
          className="h-full"
        >
          {/* CARD (NO se mueve / NO “salta”) */}
          <div
            className="group relative h-full rounded-3xl border border-slate-900/10 bg-white/80 backdrop-blur
                       shadow-[0_18px_50px_rgba(2,6,23,0.08)] p-8 flex flex-col overflow-hidden
                       transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(2,6,23,0.12)]"
          >
            {/* brillo suave al hover (sin mover card) */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                         bg-gradient-to-br from-cyan-500/6 via-transparent to-blue-500/6"
            />

            {/* Estrellas (solo aquí hay animación + MÁS RÁPIDA) */}
            <div className="flex gap-2 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ opacity: 0, scale: 0.6, y: 10, rotateZ: -80 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0, rotateZ: 0 }}
                  transition={{
                    duration: 0.22, // ✅ más rápido
                    delay: 0.08 + i * 0.05, // ✅ menos delay
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10, // ✅ “abajo pa arriba”
                    scale: 1.25,
                    rotateZ: 20,
                    transition: { duration: 0.18, ease: "easeOut" }, // ✅ rápido
                  }}
                  className="w-6 h-6 fill-yellow-400 cursor-pointer"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </motion.svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-slate-700 text-base leading-relaxed mb-8 flex-grow font-medium">
              {t.quote}
            </p>

            {/* Divider */}
            <div className="h-1 w-14 bg-gradient-to-r from-cyan-500 to-blue-600 mb-6 rounded-full" />

            {/* Footer */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
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

    {/* DOTS (para fondo blanco) */}
    <style>{`
      .testimonial-dots-light{
        display:flex;
        justify-content:center;
        gap:.8rem;
        list-style:none;
        padding:2rem 0 0 0;
        margin:0;
      }

      .testimonial-dots-light li button{
        width:10px;
        height:10px;
        border-radius:9999px;
        border:1px solid rgba(15,23,42,.20);
        background:rgba(15,23,42,.18);
        padding:0;
        transition:all .25s ease;
      }

      .testimonial-dots-light li button:hover{
        transform:scale(1.2);
        background:rgba(34,211,238,.45);
        border-color:rgba(34,211,238,.45);
      }

      .testimonial-dots-light li.react-multi-carousel-dot--active button{
        width:32px;
        height:10px;
        background:linear-gradient(90deg,#06b6d4,#2563eb);
        border-color:rgba(37,99,235,.25);
        box-shadow:0 0 14px rgba(34,211,238,.35);
      }
    `}</style>
  </div>
</section>
   {/* ====================== SECCIÓN DE CLIENTES GRID ====================== */}
<div className="bg-gradient-to-b from-black via-slate-900 to-black text-white py-8 px-4 md:px-8 relative overflow-hidden">
  {/* Fondo limpio */}
  <div className="max-w-7xl mx-auto text-center relative z-10">

    {/* ✅ HEADER (solo esto se cambió) */}
    <motion.div
      initial={{ opacity: 0, y: -18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.35 }}
      className="mb-10"
    >
      <motion.div
        whileHover={{ y: -2, rotateX: 2 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur"
        style={{ transformStyle: "preserve-3d" }}
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400" />
        <span className="text-xs md:text-sm font-black tracking-[0.18em] uppercase text-cyan-300">
          Clientes
        </span>
      </motion.div>

      <motion.h2
  initial={{ opacity: 0, y: 14, rotateX: 12 }}
  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
  viewport={{ once: true }}
  className="mt-6 text-4xl md:text-6xl font-black leading-tight tracking-tight text-center"
  style={{ transformStyle: "preserve-3d" }}
>
  <span className="text-white">Nuestros</span>{" "}
  <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]">
    clientes
  </span>
</motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
        viewport={{ once: true }}
       className="mt-4 text-gray-300 text-base md:text-lg font-semibold tracking-wide text-center"
      >
        Las marcas que confían en{" "}
        <span className="text-cyan-400">Soluciones Integrales JB</span>
      </motion.p>
    </motion.div>

    {/* ✅ (desde aquí, TODO es tu diseño original) */}

    {/* Estadísticas mejoradas */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex justify-center gap-8 md:gap-16 mb-8 flex-wrap"
    >
      {[
        { number: "100+", text: "Clientes" },
        { number: "15+", text: "Años" },
        { number: "98%", text: "Satisfacción" },
      ].map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.6, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2 + idx * 0.12,
            ease: "backOut",
            type: "spring",
            stiffness: 120,
            damping: 12
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.2,
            y: -15,
            transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 10 }
          }}
          className="text-center group cursor-pointer relative px-6 py-4"
        >
          {/* Fondo decorativo hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur-md"
            whileHover={{ opacity: 1 }}
          />

          {/* Borde animado */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-cyan-500/0 group-hover:border-cyan-500/40 transition-all duration-300"
            whileHover={{ boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
          />

          <motion.div
            className="relative text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-500 transition-all duration-300"
            whileHover={{ scale: 1.25 }}
          >
            {stat.number}
          </motion.div>

          <motion.p
            className="relative text-gray-300 text-sm md:text-base mt-3 font-semibold group-hover:text-cyan-300 transition-colors duration-300"
            whileHover={{ y: -3 }}
          >
            {stat.text}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>

    {/* Carrusel de logos animado */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full mt-8 overflow-hidden"
    >
      {/* Primera fila - movimiento izquierda */}
      <motion.div
        className="h-28 md:h-32 overflow-hidden mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex gap-12 md:gap-16 items-center"
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.2,
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="flex-shrink-0 flex items-center justify-center h-24 md:h-28 group cursor-pointer relative"
            >
              {/* Borde glow hover */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ boxShadow: "0 0 25px rgba(34, 211, 238, 0.6)" }}
              />

              {/* Logo */}
              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="relative h-16 md:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-400"
                whileHover={{
                  scale: 1.15,
                  filter: "drop-shadow(0 0 16px rgba(34, 211, 238, 0.8))"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Segunda fila - movimiento derecha */}
      <motion.div
        className="h-28 md:h-32 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex gap-12 md:gap-16 items-center"
          animate={{ x: [-2000, 0] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.2,
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="flex-shrink-0 flex items-center justify-center h-24 md:h-28 group cursor-pointer relative"
            >
              {/* Borde glow hover */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ boxShadow: "0 0 25px rgba(34, 211, 238, 0.6)" }}
              />

              {/* Logo */}
              <motion.img
                src={logo.src}
                alt={logo.alt}
                className="relative h-16 md:h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-400"
                whileHover={{
                  scale: 1.15,
                  filter: "drop-shadow(0 0 16px rgba(34, 211, 238, 0.8))"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>

    {/* Componentes finales */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-8 space-y-4"
    >
      <VoiceflowChat />
      <ScrollButton />
    </motion.div>
  </div>
</div>

      {/* ====== ESTILOS PARA LA SECCIÓN DE PRODUCTOS ====== */}
      <style>{`
        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        .section-title {
          color: #333;
          text-shadow: none;
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0;
        }
        .results-count {
          color: #999;
          font-size: 14px;
          margin: 5px 0 0 0;
        }
        .sort-container {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .sort-select {
          padding: 8px 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          background: white;
          cursor: pointer;
        }
        .search-container {
          position: sticky;
          top: 80px;
          background: white;
          padding: 15px;
          border-radius: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          margin: 0 auto 40px;
          max-width: 700px;
          display: flex;
          align-items: center;
        }
        .search-icon {
          color: #0066ff;
          font-size: 1.2rem;
          margin-right: 10px;
        }
        .search-input {
          border: none;
          flex: 1;
          padding: 10px 0;
          font-size: 1rem;
        }
        .search-input:focus {
          outline: none;
        }
        .filter-btn {
          background: none;
          border: none;
          color: #ff7a00;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0 10px;
        }
        .products-grid-store {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 30px;
        }
        .product-card-store {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .product-card-store:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
          border-color: #0066ff;
        }
        .product-image-wrapper {
          position: relative;
          width: 100%;
          height: 350px;
          background: linear-gradient(135deg, #fcfcfc 0%, #f5f5f5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
          border-bottom: 1px solid #ececec;
        }
        .product-image {
          max-width: 95%;
          max-height: 95%;
          width: auto;
          height: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        .product-card-store:hover .product-image {
          transform: scale(1.08);
        }
        .discount-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ff6600;
          color: white;
          padding: 6px 10px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 13px;
        }
        .product-info {
          padding: 15px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .brand-name {
          color: #0066ff;
          font-size: 12px;
          font-weight: 700;
          margin: 0 0 8px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .product-title {
          font-size: 13px;
          font-weight: 600;
          margin: 0 0 10px 0;
          line-height: 1.4;
          color: #333;
          min-height: 32px;
        }
        .rating {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 10px;
          font-size: 13px;
        }
        .rating span {
          color: #ffc107;
        }
        .reviews {
          color: #999;
          font-size: 12px;
        }
        .price-section {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }
        .original-price {
          text-decoration: line-through;
          color: #999;
          font-size: 12px;
        }
        .current-price {
          font-size: 18px;
          font-weight: 700;
          color: #0066ff;
        }
        .availability {
          font-size: 12px;
          color: #00aa00;
          font-weight: 600;
          margin: 5px 0;
        }
        .installments {
          font-size: 11px;
          color: #666;
          margin: 5px 0 10px 0;
        }
        .btn-add-cart-store {
          background: white;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: auto;
        }
        .btn-add-cart-store:hover {
          background: #f0f0f0;
          border-color: #0066ff;
          color: #0066ff;
        }
        .view-more-container {
          display: flex;
          justify-content: center;
          margin-top: 50px;
          padding: 30px 0;
        }
        .btn-view-more {
          display: inline-block;
          text-decoration: none;
          text-align: center;
          background: white;
          border: 2px solid #0066ff;
          color: #0066ff;
          padding: 12px 50px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .btn-view-more:hover {
          background: #0066ff;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(0, 102, 255, 0.3);
        }
        @media (max-width: 1024px) {
          .products-grid-store { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .products-grid-store { grid-template-columns: 1fr; gap: 20px; }
          .products-header { flex-direction: column; align-items: flex-start; gap: 15px; }
        }
      `}</style>

    </section>
  );
};

export default SolucionesIntegralesJBSection;
