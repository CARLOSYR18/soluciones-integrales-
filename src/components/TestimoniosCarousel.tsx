import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    quote: "Buen servicio de sitios web, excelente diseño y experiencia.",
    name: "Italo romero",
    avatar:
      "https://i.postimg.cc/90hKzpFq/imagen-2024-06-23-215557883-removebg-preview-1-1.png",
  },
  {
    quote:
      "Buen lugar donde te ofrecen de todo en tecnología informática y de cyber vigilancia.",
    name: "William Moises",
    avatar: "https://i.postimg.cc/qMC4NmLz/Frame-918.png",
  },
  {
    quote:
      "Excelente atención, realmente muy profesionales en su trato y servicio.",
    name: "Fritzl Yacomin",
    avatar: "https://i.postimg.cc/Dw6XNyXV/Frame-919.png",
  },
];

const TestimoniosCarousel = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 relative overflow-hidden">
      {/* fondos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* titulo */}
        <div className="mb-12 text-center">
          <span className="text-cyan-400 text-sm font-black tracking-[0.2em] uppercase inline-block px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5 mb-4">
            Testimonios
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
            La voz de nuestros{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              clientes
            </span>
          </h2>

          <p className="text-base text-slate-600 mt-4 max-w-2xl mx-auto">
            Descubre cómo hemos transformado negocios y generado resultados tangibles
          </p>
        </div>

        {/* carrusel */}
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
          itemClass="px-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col border border-slate-100"
            >
              {/* estrellas */}
              <div className="flex gap-2 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* comentario */}
              <p className="text-slate-700 text-base leading-relaxed mb-8 flex-grow font-medium">
                {testimonial.quote}
              </p>

              {/* separador */}
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full"></div>

              {/* usuario */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />

                <div>
                  <p className="font-bold text-slate-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-cyan-500 text-xs font-semibold">
                    Cliente satisfecho
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimoniosCarousel;