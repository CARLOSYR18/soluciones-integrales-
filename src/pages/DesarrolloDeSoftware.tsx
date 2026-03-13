  import React, { useState, useEffect } from "react";
  import { motion } from "framer-motion";
  import ScrollButton from "../components/ScrollButton";
  import TextType from "../components/animacion";
  import Carousel from "react-multi-carousel";
  import "react-multi-carousel/lib/styles.css";
  import Magnet from '../components/magnet';
  import { Link } from "react-router-dom";
import ClientesCarousel from "../components/ClientesCarousel";
import TestimoniosCarousel from "../components/TestimoniosCarousel";
import fondoN from "../assets/fondoN.jpg";
  const DesarrolloWebBanner: React.FC = () => {
    // Datos para el carrusel de testimonios (ahora con 4 comentarios)
    const testimonials = [
      {
        quote: "La experiencia de usuario mejoró significativamente desde que rediseñaron nuestro sitio. Excelente trabajo.",
        name: "Naomi Sifuentes",
        avatar: "https://i.postimg.cc/90hKzpFq/imagen-2024-06-23-215557883-removebg-preview-1-1.png" // Usé un avatar de ejemplo
      },
      {
        quote: "El equipo entendió perfectamente nuestras necesidades y creó un sitio web funcional y atractivo. ¡Estamos encantados!",
        name: "Lonardo",
        avatar: "https://i.postimg.cc/qMC4NmLz/Frame-918.png" // Usé un avatar de ejemplo
      },
      {
        quote: "Muy profesionalismo y rapidez nos impresionaron. El nuevo diseño ha atraído más clientes.",
        name: "Maria Torres",
        avatar: "https://i.postimg.cc/Dw6XNyXV/Frame-919.png" // Usé un avatar de ejemplo
      },
      {
        quote: "La integración de las nuevas funcionalidades ha optimizado nuestros procesos internos de manera increíble. ¡Gran solución!",
        name: "juana deprado",
        avatar: "https://i.postimg.cc/SKjJtL48/Frame-921-1.png" // Usé un avatar de ejemplo
      }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Efecto para el cambio automático de testimonios cada 3 segundos
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000); // Cambia cada 3000 milisegundos (3 segundos)

      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(intervalId);
    }, [testimonials.length]); // Se ejecuta una vez al montar y cuando cambia el número de testimonios

    // Función para ir a un testimonio específico
    const goToSlide = (index: number) => {
      setCurrentIndex(index);
    };

    return (
      <div id="desarrollo-software" className="font-sans">
      {/* ====================== BANNER PRINCIPAL ====================== */}
<header
  className="relative w-full h-64 md:h-80 flex flex-col items-center justify-center text-white bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: `url(${fondoN})` }}
>

  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Contenido */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">

    <h1 className="text-4xl md:text-6xl font-bold text-sky-400">
      <TextType
        text={["Desarrollo de Software"]}
        typingSpeed={70}
        pauseDuration={2000}
        loop={false}
        showCursor={false}
        textColors={["#38bdf8"]}
      />
    </h1>

    <span className="mt-2 text-sm md:text-base font-semibold tracking-wider text-gray-300">
      Inicio / Desarrollo de Software
    </span>

  </div>

</header>
        {/* ====================== SECCIÓN DE CONTENIDO - DESARROLLO WEB ====================== */}
  <section className="bg-white py-16 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Texto descriptivo */}
      <div className="text-gray-800 max-w-3xl mx-auto text-justify">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-6 text-center"
        >
          Desarrollo Web Personalizado
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg md:text-base leading-relaxed mb-6 text-justify tracking-wide"
        >
          Diseñamos sitios web únicos y funcionales, perfectamente alineados con
          las necesidades específicas de tu negocio. Nuestro equipo se dedica a
          comprender a fondo tus objetivos para transformarlos en una plataforma
          digital que potencie tu identidad de marca. Implementamos las
          tecnologías más avanzadas para garantizar un rendimiento rápido y
          fluido, lo que no solo optimiza la experiencia del usuario, sino que
          también disminuye las tasas de rebote, prolonga el tiempo de
          permanencia en el sitio y favorece el posicionamiento en motores de
          búsqueda. Nos aseguramos de que tu sitio sea completamente responsive,
          adaptándose sin esfuerzo a cualquier dispositivo para ofrecer una
          experiencia homogénea y de alta calidad en móviles, tabletas o
          computadoras de escritorio. Con un enfoque sólido en la optimización y
          la accesibilidad, garantizamos que la navegación sea intuitiva y
          accesible para todos los usuarios, independientemente de su nivel
          técnico, mejorando así la interacción y la conversión.
        </motion.p>
      </div>

      {/* Imagen descriptiva */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center lg:justify-end"
      >
        <img
          src="https://i.postimg.cc/gc81zB8N/Desarrollo-de-un-sitio-web-Como-es-el-proceso.jpg"
          alt="Desarrollo Web Personalizado"
          className="rounded-lg shadow-xl max-w-full h-auto"
        />
      </motion.div>
    </div>
  </section>


        {/* ====================== SECCIÓN DE MANTENIMIENTO Y SOPORTE ====================== */}
  <section className="bg-neutral-800 text-white py-16 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Imagen de Mantenimiento y Soporte */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center lg:justify-start"
      >
        <img
          src="https://i.postimg.cc/1XVFSqfj/soporte-web-agradable.jpg"
          alt="Mantenimiento y Soporte"
          className="rounded-lg shadow-xl w-full max-w-lg h-auto"
        />
      </motion.div>

      {/* Texto de Mantenimiento y Soporte */}
      <div className="text-gray-300 max-w-3xl mx-auto text-justify">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-6 text-center"
        >
          Mantenimiento y Soporte
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg md:text-base leading-relaxed mb-6 text-justify tracking-wide"
        >
          Ofrecemos mantenimiento continuo y soporte técnico para que tu sitio
          web esté siempre actualizado y seguro. Nos encargamos de actualizaciones
          regulares, copias de seguridad automáticas y monitoreo de seguridad para
          proteger tu plataforma. Con un equipo de soporte disponible en todo
          momento, solucionamos rápidamente cualquier problema técnico,
          minimizando el tiempo de inactividad y garantizando la confiabilidad de
          tu sitio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg md:text-base leading-relaxed mb-8 text-justify tracking-wide"
        >
          Nuestro enfoque proactivo previene problemas antes de que ocurran,
          asegurando un funcionamiento fluido y una experiencia consistente para
          los usuarios. Con nuestro soporte, puedes concentrarte en hacer crecer
          tu negocio, sabiendo que tu sitio está en buenas manos.
        </motion.p>

        {/* BOTÓN ACTUALIZADO */}
     <a
href="https://wa.me/51996720630?text=Hola%20quiero%20información%20sobre%20Mantenimiento%20y%20Soporte"
target="_blank"
rel="noopener noreferrer"
>

<button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition mx-auto block">

CONTÁCTANOS

</button>

</a>

</div>

</div>
</section>

      {/* ====================== SECCIÓN DE DISEÑO UX/UI ====================== */}
  <section className="bg-white py-16 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Texto Descriptivo UX/UI */}
      <div className="text-gray-800 max-w-3xl mx-auto text-justify">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-6 text-center"
        >
          Diseño UX/UI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg md:text-base leading-relaxed mb-6 text-justify tracking-wide"
        >
          Desarrollamos interfaces intuitivas y visualmente atractivas que
          optimizan la experiencia del usuario. Nuestro enfoque en diseño UX/UI
          equilibra estética, funcionalidad y facilidad de uso. Mediante
          investigaciones y pruebas con usuarios, perfeccionamos cada elemento de
          la interfaz para garantizar una navegación fluida y sin obstáculos. Una
          excelente UX/UI no solo fideliza a los visitantes, sino que también
          mejora la satisfacción del cliente y aumenta las tasas de conversión.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg md:text-base leading-relaxed text-justify tracking-wide"
        >
          Prestamos especial atención a detalles como la velocidad de carga y la
          estructura de la información, creando un entorno digital que proyecta
          profesionalismo y cuidado al cliente. Nuestra misión es transformar cada
          visita en una experiencia positiva que no solo impulse la interacción,
          sino que también motive a los usuarios a regresar.
        </motion.p>
      </div>

      {/* Imagen Descriptiva UX/UI */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center lg:justify-end"
      >
        <img
          src="https://i.postimg.cc/9FTZ0KBg/2149749873-1.jpg"
          alt="Diseño UX/UI"
          className="rounded-lg shadow-xl w-full max-w-lg h-auto"
        />
      </motion.div>
    </div>
  </section>


        {/* ====================== SECCIÓN DE INTEGRACIÓN DE FUNCIONALIDADES ====================== */}
  <section className="bg-gray-50 py-16 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Imagen de Integración */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center lg:justify-start"
      >
        <img
          src="https://i.postimg.cc/zvwDZCn7/Ventajas-de-la-Integracion-de-Sistemas-y-Datos-scaled-1-2048x1018.webp"
          alt="Integración de Funcionalidades"
          className="rounded-lg shadow-xl w-full max-w-lg h-auto"
        />
      </motion.div>

      {/* Texto de Integración */}
      <div className="text-gray-800 max-w-3xl mx-auto text-justify">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-6 text-center"
        >
          Integración de Funcionalidades
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg md:text-base leading-relaxed mb-6 text-justify tracking-wide"
        >
          Incorporamos las funcionalidades necesarias para optimizar los procesos
          de tu negocio. Desde formularios de contacto y chatbots hasta sistemas
          de gestión de contenido y CRM, nuestras soluciones están diseñadas
          para aumentar la eficiencia operativa. Garantizamos que todas las
          integraciones sean compatibles con dispositivos móviles, mejorando el
          acceso y la usabilidad.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg md:text-base leading-relaxed mb-8 text-justify tracking-wide"
        >
          Con nuestras soluciones, no solo simplificas la gestión, sino que también
          ofreces una experiencia más completa y satisfactoria a tus usuarios.
          Además, personalizamos cada funcionalidad para que se alinee
          perfectamente con tus necesidades específicas, asegurando que tu sitio
          web no solo sea una herramienta, sino una extensión efectiva de tu
          estrategia de negocio. Esto te permite concentrarte en lo más importante:
          expandir y mejorar tu empresa.
        </motion.p>

        {/* BOTÓN ACTUALIZADO */}
       <a
  href="https://wa.me/51996720630?text=Hola%20quiero%20información%20sobre%20Integración%20de%20Funcionalidades"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    viewport={{ once: true, amount: 0.3 }}
    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 mx-auto block"
  >
    CONTACTAR
  </motion.button>
</a>
      </div>
    </div>
  </section>

  
  {/* Carrusel de clientes al final */}
<TestimoniosCarousel />
      </div>
    );
  };

  export default DesarrolloWebBanner;