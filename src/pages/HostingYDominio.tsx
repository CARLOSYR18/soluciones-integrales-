import React from 'react';
import fondoN from '../assets/fondoN.jpg';
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ScrollButton from "../components/ScrollButton";
import TextType from "../components/animacion";

const testimonios = [
  {
    nombre: 'Maria Torres',
    imagen: 'https://randomuser.me/api/portraits/women/44.jpg',
    opinion: 'Muy profesionalismo y rapidez nos impresionaron. El nuevo diseño ha atraído más clientes.',
  },
  {
    nombre: 'Carlos Gómez',
    imagen: 'https://randomuser.me/api/portraits/men/32.jpg',
    opinion: 'La integración fue muy sencilla. En pocos días ya estábamos facturando sin problemas.',
  },
  {
    nombre: 'Laura Ramírez',
    imagen: 'https://randomuser.me/api/portraits/women/55.jpg',
    opinion: 'El soporte técnico es excelente. Siempre disponibles para ayudarnos cuando lo necesitamos.',
  },
];

const HostingYDominio: React.FC = () => {
  return (
    <div className="px-0 py-0 max-w-full font-sans">

      {/* Banner Superior */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${fondoN})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-sky-400 text-center z-10">
          <TextType
            text={['Hosting y Dominio']}
            typingSpeed={70}
            pauseDuration={2000}
            loop={false}
            showCursor={false}
            textColors={['#38bdf8']}
          />
        </h1>
      </div>

      {/* Sección Hosting */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Hosting Seguro y Confiable
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, ofrecemos servicios de hosting seguro y confiable para tu sitio web. Nuestros servidores de alta velocidad garantizan que tu página esté siempre accesible y funcione sin problemas. Con una infraestructura robusta y medidas avanzadas de seguridad, protegemos tus datos y aseguramos el rendimiento óptimo de tu sitio. Confía en nosotros para mantener tu presencia en línea activa y segura.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://i.postimg.cc/T3ddwqLr/Cloud-hosting-amico.jpg"
              alt="Hosting seguro"
              className="w-full max-w-md h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Sección Dominios */}
      <section className="bg-neutral-800 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Imagen */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://i.postimg.cc/3xxh78VD/Frame-940.jpg"
              alt="Registro de dominios"
              className="rounded-lg shadow-md w-full max-w-md"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-white"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Registro de Dominios Personalizados
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              Registra tu dominio con Soluciones Integrales JB y dale a tu negocio una identidad única en internet. Te ayudamos a encontrar y registrar el nombre de dominio perfecto que represente tu marca de manera efectiva. Además, ofrecemos servicios de gestión de dominios para que tengas control total sobre tu presencia en línea. Con nosotros, asegurar tu nombre de dominio es fácil y rápido.
            </p>
            <a href="/contacto">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                CONTÁCTANOS
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sección Hosting Escalable */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Planes de Hosting Escalables
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, ofrecemos una amplia gama de planes de hosting escalables, diseñados para ajustarse a las necesidades específicas de tu negocio. Ya sea que estés iniciando con una solución básica para pequeñas empresas o necesites un plan avanzado para gestionar sitios web de alto tráfico, tenemos la opción ideal para ti.
            </p>
            <p className="leading-relaxed text-justify">
              A medida que tu negocio crece, nuestros servicios se adaptan, garantizando el espacio, rendimiento y recursos necesarios para acompañar tu expansión en línea, permitiéndote enfocarte en tu éxito sin preocuparte por limitaciones tecnológicas.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://i.postimg.cc/WbXR9Rz3/Server-amico.jpg"
              alt="Planes de hosting"
              className="w-full max-w-md h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Sección Soporte */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Imagen */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://i.postimg.cc/mDxKcBXF/Frame-941.jpg"
              alt="Soporte técnico"
              className="rounded-lg shadow-md w-full max-w-md"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sky-400 mb-6">
              Soporte Técnico 24/7
            </h2>
            <p className="mb-4 leading-relaxed text-justify">
              En Soluciones Integrales JB, ofrecemos un soporte técnico disponible las 24 horas, los 7 días de la semana, para asistirte con cualquier aspecto relacionado con tu hosting y dominio.
            </p>
            <p className="leading-relaxed text-justify mb-6">
              Además, implementamos certificados digitales SSL para proteger tu página web, y certificados digitales para correo electrónico, garantizando la seguridad en todas tus comunicaciones.
            </p>
            <a href="/contacto">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                CONTACTAR
              </button>
            </a>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default HostingYDominio;