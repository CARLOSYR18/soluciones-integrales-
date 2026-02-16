import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import Productos from "./Productos";
import "react-multi-carousel/lib/styles.css";
import ScrollButton from "../components/ScrollButton";
import '../App.css'
import LogoLoop from "./LogoLoop";
import VoiceflowChat from "./VoiceflowChat";

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
    { image: "https://solucionesintegralesjb.com/wp-content/uploads/slider/cache/456a340008da7d76915187e50dcc7cf4/ed40b25e-eec1-4e3e-bf86-92ae710d6d06-e1727215670672.jpg", imageAlt: "Promoción de routers y conectividad", title: "Conectividad Superior", subtitle: "Routers de alta velocidad para tu hogar y oficina", href: "#" },
    { image: "https://solucionesintegralesjb.com/wp-content/uploads/slider/cache/5f7d0fef1ec7a6d768636f30af4dcfb5/c3cc9f73-0e33-4fd0-aa2d-050c9b272e8c.jpg", title: "Soluciones Tecnológicas", subtitle: "Innovación y soporte a tu alcance", href: "#" },
    { image: "https://solucionesintegralesjb.com/wp-content/uploads/slider/cache/4b9df303a3e55818808c971f39340ea6/d429c0fa-c3b2-4b6d-a65b-56c8ea26bcbc-1.jpg", imageAlt: "Banner de tecnología", title: "Tu Socio Estratégico", subtitle: "Impulsamos tu crecimiento digital", href: "#" },
    { image: "https://solucionesintegralesjb.com/wp-content/uploads/slider/cache/382ed7f76699f6eae27f4e965558d97e/8671e011-0391-4bd6-a5b1-114495d3d898.jpg", imageAlt: "Fondo abstracto azul", title: "Diseño y Desarrollo", subtitle: "Creamos experiencias únicas para tus usuarios", href: "#" },
    { image: "https://solucionesintegralesjb.com/wp-content/uploads/slider/cache/bc0e25010ca8388680ab2c9af3bd226c/cdba0529-3664-4dff-92fb-2bbfe5cb09f6.jpg", imageAlt: "Redes y seguridad", title: "Seguridad Garantizada", subtitle: "Protegemos lo que más importa", href: "#" },
    { image: "https://solucionesintegralesjb.com/wp-content/uploads/slider/cache/794a0e0b79da6a5cf270643ec721eee8/Agregar-un-titulo.png", imageAlt: "Soporte técnico", title: "Soporte 24/7", subtitle: "Estamos aquí para ayudarte cuando nos necesites", href: "#" },
    { image: "https://solucionesintegralesjb.com/wp-content/uploads/slider/cache/0c9dd85eb5a49fc3e81e2093f2a540c6/Agregar-un-titulo-1.png", imageAlt: "Integración de sistemas", title: "Integración Sin Esfuerzo", subtitle: "Conectamos tus sistemas para una operación fluida", href: "#" },
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
  { label: "Servicios", title: "Desarrollo de Software", image: "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/mejores-herramientas-desarrollo-software-1-400x267.png", imageAlt: "Herramientas de desarrollo de software", cta: "INFORMACIÓN" },
  { label: "Servicios", title: "Facturación Electrónica", image: "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/s3-blog-facturacion-electronica-min-400x256.png", imageAlt: "Facturación electrónica", cta: "INFORMACIÓN" },
  { label: "Servicios", title: "Soporte Técnico", image: "https://solucionesintegralesjb.com/wp-content/uploads/2024/09/Soporte-en-Sitio-¿Que-es-eso-copia.webp", imageAlt: "Soporte en sitio", cta: "INFORMACIÓN" },
  { label: "Servicios", title: "Tecnología en Seguridad", image: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/tecnologia-seguridad-1-768x512.jpg", imageAlt: "Tecnología y seguridad", cta: "INFORMACIÓN" }
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
    { name: "Italo romero", avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-1.png", quote: "Buen servicio de sitios web, excelente diseño y experiencia." },
    { name: "William Moises", avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-2.png", quote: "Buen lugar donde te ofrecen de todo en tecnología informática y de cyber vigilancia." },
    { name: "Fritzl Yacomin", avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed.png", quote: "Excelente atención, realmente muy profesionales en su trato y servicio." },
    { name: "Marielis Baptista", avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-3.png", quote: "Excelentes los productos y trato para los clientes, lo recomiendo totalmente." },
    { name: "Ana montes", avatar: "https://solucionesintegralesjb.com/wp-content/uploads/2024/10/unnamed-4.png", quote: "Muy buen servicio de parte de los empleados y cómo atienden y ayudan." },
];

const clientLogos = [
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-5.svg", alt: "Cliente 1", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-4.svg", alt: "Cliente 2", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-1-1.svg", alt: "Cliente 3", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-7.svg", alt: "Cliente 4", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-10.svg", alt: "Cliente 5", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-3.svg", alt: "Cliente 6", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-9.svg", alt: "Cliente 7", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-11.svg", alt: "Cliente 8", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-12.svg", alt: "Cliente 9", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-6.svg", alt: "Cliente 10", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-18.svg", alt: "Cliente 11", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-19.svg", alt: "Cliente 12", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-8.svg", alt: "Cliente 13", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-15.svg", alt: "Cliente 14", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-13.svg", alt: "Cliente 15", href: "#" },
  { src: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-394-modified-14.svg", alt: "Cliente 16", href: "#" },
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

const uiImage = "https://solucionesintegralesjb.com/wp-content/uploads/elementor/thumbs/Frame-932-qqow7tfd3r2zohqj4jx9yf23tmjv30p5niiolmvipc.png";
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
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Encabezado mejorado */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl font-semibold tracking-wide text-cyan-400"
          >
            Soluciones Integrales para Impulsar tu Negocio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Soluciones Estratégicas para <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Crecer</span>
          </motion.p>
        </motion.div>

        {/* Carrusel mejorado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10"
        >
          <Carousel
            responsive={responsiveServices}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            showDots={true}
            arrows={true}
            containerClass="carousel-container"
            itemClass="p-2"
            dotListClass="custom-strategic-dots"
          >
            {strategicServices.map((s, idx) => (
              <motion.div
                key={`${s.title}-${idx}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <StrategicServiceCard item={s} />
              </motion.div>
            ))}
          </Carousel>
        </motion.div>

        <style jsx>{`
          .carousel-container {
            position: relative;
            z-index: 10;
          }

          .react-multi-carousel-item {
            animation: slideInUp 0.8s ease-out forwards;
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .custom-strategic-dots {
            display: flex;
            justify-content: center;
            gap: 0.75rem;
            list-style: none;
            padding: 2rem 0 0 0;
            margin: 0;
          }

          .custom-strategic-dots li {
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .custom-strategic-dots li.react-multi-carousel-dot {
            background: rgba(148, 163, 184, 0.6);
            height: 0.5rem;
            width: 0.75rem;
            border-radius: 9999px;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .custom-strategic-dots li.react-multi-carousel-dot:hover {
            background: rgba(34, 211, 238, 0.8);
            transform: scale(1.2);
          }

          .custom-strategic-dots li.react-multi-carousel-dot.active {
            background: linear-gradient(90deg, #22d3ee, #3b82f6);
            width: 2rem;
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.6);
          }
        `}</style>
      </div>
      <div>
      <Productos />   
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

      {/* ====================== SECCIÓN DE VIDEO CON FONDO OSCURO ====================== */}
      <section className="bg-neutral-800 text-white py-20 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Nuestras</span> <span className="text-cyan-400">Soluciones</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Mira cómo transformamos negocios con tecnología innovadora
            </p>
          </motion.div>

          {/* Video Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-700 w-full h-96 md:h-[500px] bg-black">
              <video
                className="w-full h-full object-cover"
                src={videoUrl}
                controls
                preload="none"
                poster="https://i.postimg.cc/ncJGw17n/image.png"
              />
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Soluciones Digitales Personalizadas
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Transformamos tus ideas en soluciones digitales que generan resultados reales. Cada proyecto es único y diseñado específicamente para tus necesidades.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Consultoría estratégica personalizada",
                  "Desarrollo de software a medida",
                  "Implementación e integración"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-200 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/contacto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Contactar Ahora
              </motion.a>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <h4 className="text-lg font-bold text-white mb-4">¿Por qué elegirnos?</h4>
                <div className="space-y-4">
                  {[
                    { label: "Experiencia", value: "15+ años" },
                    { label: "Proyectos", value: "100+ completados" },
                    { label: "Satisfacción", value: "98% clientes" },
                    { label: "Soporte", value: "24/7 disponible" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center pb-3 border-b border-slate-700 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-300">{item.label}</span>
                      <span className="font-bold text-cyan-400">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-700/50 text-white p-8 rounded-lg">
                <p className="text-sm mb-4">
                  "Trabajar con este equipo fue transformacional para nuestro negocio. Son profesionales, dedicados y entienden realmente lo que necesitas."
                </p>
                <p className="font-semibold text-sm">Cliente Satisfecho</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    {/* ====================== SECCIÓN DE OPINIONES CON CARRUSEL MEJORADA ====================== */}
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
        La voz de nuestros <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">clientes</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        viewport={{ once: true }}
        className="text-base text-slate-600 mt-4 max-w-2xl mx-auto"
      >
        Descubre cómo hemos transformado negocios y generado resultados tangibles
      </motion.p>
    </motion.div>

    {/* Carrusel de testimonios mejorado - SIN ANIMACIONES PESADAS */}
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
        {testimonials.map((testimonial, index) => (
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
            <p className="text-slate-700 text-base leading-relaxed mb-8 flex-grow font-medium">
              {testimonial.quote}
            </p>

            {/* Separador */}
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full"></div>

            {/* Avatar y nombre */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="relative w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900 text-sm">
                  {testimonial.name}
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

      {/* ====================== SECCIÓN DE CLIENTES GRID ====================== */}
      <div className="bg-neutral-800 text-white py-8 px-4 md:px-8 relative overflow-hidden">
        {/* Fondo limpio */}

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight"
          >
            Nuestros <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">clientes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg md:text-xl mb-8 font-semibold tracking-wide"
          >
            Las marcas que confían en <span className="text-cyan-400">Soluciones Integrales JB</span>
          </motion.p>

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
                ></motion.div>

                {/* Borde animado */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-cyan-500/0 group-hover:border-cyan-500/40 transition-all duration-300"
                  whileHover={{ 
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)"
                  }}
                ></motion.div>

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
                      whileHover={{ 
                        boxShadow: "0 0 25px rgba(34, 211, 238, 0.6)"
                      }}
                    ></motion.div>

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
                      whileHover={{ 
                        boxShadow: "0 0 25px rgba(34, 211, 238, 0.6)"
                      }}
                    ></motion.div>

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