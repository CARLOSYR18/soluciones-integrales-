import React from "react";
import fondoN from "../assets/fondoN.jpg";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";
import TestimoniosCarousel from "../components/TestimoniosCarousel";
// Variantes para animaciones
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const testimonios = [
  {
    nombre: "Maria Torres",
    imagen: "https://randomuser.me/api/portraits/women/44.jpg",
    opinion:
      "Muy profesionalismo y rapidez nos impresionaron. El nuevo diseño ha atraído más clientes.",
  },
  {
    nombre: "Carlos Gómez",
    imagen: "https://randomuser.me/api/portraits/men/32.jpg",
    opinion:
      "La integración fue muy sencilla. En pocos días ya estábamos facturando sin problemas.",
  },
  {
    nombre: "Laura Ramírez",
    imagen: "https://randomuser.me/api/portraits/women/55.jpg",
    opinion:
      "El soporte técnico es excelente. Siempre disponibles para ayudarnos cuando lo necesitamos.",
  },
];

const RedesEinfroestructura: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">
      {/* Banner Superior */}
      <motion.div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-sky-400 text-center z-10">
          <TextType
            text={["Redes e Infraestructura"]}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={["#38bdf8"]}
          />
        </h1>
      </motion.div>

      {/* Sección de Hosting y Dominio */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Diseño e Implementación de Redes
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, nos especializamos en el diseño e
              implementación de redes que priorizan tanto la eficiencia como la
              seguridad. Ya sea que necesites una red local para tu oficina o
              una infraestructura avanzada que conecte múltiples ubicaciones,
              nuestro equipo de expertos posee la experiencia y el conocimiento
              para desarrollar soluciones personalizadas que se ajusten a tus
              necesidades específicas.
            </p>
            <p className="mb-4 leading-relaxed text-justify">
              Nos enfocamos en cada detalle, desde la planificación y
              configuración inicial hasta el mantenimiento continuo,
              garantizando que tu red esté optimizada para ofrecer un
              rendimiento máximo. Además, implementamos las mejores prácticas en
              seguridad para proteger tus datos y mantener la integridad de la
              comunicación dentro de tu organización.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <img
              src="https://i.postimg.cc/FsncgRjB/ingenieros-redes-tableta-tiro-medio-23-2148323447.jpg"
              alt="Descripción de la imagen"
              className="w-full max-w-[600px] rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Optimización y Mantenimiento */}
      <section className="bg-neutral-800 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Imágenes */}
          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <img
              src="https://i.postimg.cc/TYh5w6zT/Mantenimiento-de-redes.jpg"
              alt="Imagen 1"
              className="rounded-lg shadow-md w-full"
            />
            <img
              src="https://i.postimg.cc/C1mdhP79/joven-sosteniendo-interruptores-ethernet-cables-23-2148323476.jpg"
              alt="Imagen 2"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Optimización y Mantenimiento de Redes
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, ofrecemos servicios de optimización y mantenimiento de redes diseñados para garantizar que tu infraestructura opere de manera eficiente en todo momento. Nuestro equipo de expertos realiza un monitoreo continuo de tu red, detectando y solucionando posibles problemas antes de que impacten en tus operaciones.
            </p>
            <p className="mb-4 leading-relaxed text-justify">
              Implementamos un enfoque proactivo con mantenimiento preventivo y actualizaciones regulares, asegurando que tu red se mantenga en su mejor estado y funcione de manera óptima. De esta manera, puedes concentrarte en el crecimiento de tu negocio sin preocuparte por interrupciones o problemas técnicos. Con nuestra gestión integral, tu red estará siempre al máximo rendimiento, ofreciendo una experiencia fluida y confiable.
            </p>
          <a
href="https://wa.me/51996720630?text=Hola%20quiero%20información%20sobre%20Redes%20e%20Infraestructura"
target="_blank"
rel="noopener noreferrer"
>
  <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
    CONTÁCTANOS
  </button>
</a>
          </motion.div>
        </div>
      </section>

      {/* Seguridad en Redes */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Seguridad en Redes
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, la seguridad de tu red es nuestra máxima prioridad. Implementamos las mejores prácticas y tecnologías avanzadas para proteger tu infraestructura contra amenazas externas e internas. Utilizamos firewalls de última generación, sistemas de detección de intrusos y soluciones de cifrado de datos para asegurar que tu red permanezca segura en todo momento. Nuestro enfoque integral te brinda tranquilidad al garantizar la integridad y confidencialidad de tu información. Confía en nosotros para mantener la protección continua de tus activos digitales.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <img
              src="https://i.postimg.cc/dV2sQNVv/images-2.jpg"
              alt="Seguridad"
              className="w-full max-w-[600px] rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Consultoría */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <img
              src="https://i.postimg.cc/Y99M3pfw/diversos-ingenieros-hombres-mujeres-discutiendo-sobre-tableta-digital-sala-servidores-computadoras-c.jpg"
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Consultoría en Infraestructura
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Nuestro servicio de consultoría en infraestructura está diseñado para asistirte en la planificación y ejecución de proyectos de redes con la máxima eficiencia y efectividad.
            </p>
            <p className="mb-4 leading-relaxed text-justify">
              Realizamos un análisis detallado de tus necesidades específicas y te ofrecemos soluciones personalizadas que optimizan tu infraestructura actual mientras preparan tu red para futuros crecimientos. Con Soluciones Integrales JB, contarás con una infraestructura robusta y escalable, capaz de soportar las demandas actuales y futuras de tu negocio, asegurando que estés siempre un paso adelante en el desarrollo tecnológico.
            </p>
            
            <a
href="https://wa.me/51996720630?text=Hola%20quiero%20información%20sobre%20Redes%20e%20Infraestructura"
target="_blank"
rel="noopener noreferrer"
>
  <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
    CONTACTAR
  </button>
</a>
          </motion.div>
        </div>
      </section>

     
      <TestimoniosCarousel />
    </div>
  );
};

export default RedesEinfroestructura;