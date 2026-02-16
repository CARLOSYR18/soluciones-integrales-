import React, { useState } from 'react';
import ScrollButton from "../components/ScrollButton";


const Contacto = () => {
 const [categoria, setCategoria] = useState<'TI' | 'MD' | 'IE'>('TI');
  const [formData, setFormData] = useState({
    nombre: '',
    servicio: '',
    numero: '',
    gmail: '',
    mensaje: '',
  });

  const servicios = {
    TI: [
      "Tecnología en Seguridad",
      "Facturación Electrónica",
      "Redes & Infraestructura",
      "Desarrollo de Software",
      "Hosting y Dominio",
      "Soporte Técnico",
    ],
    MD: [
      "Desarrollo de sitio Web",
      "Posicionamiento SEO",
      "Gráfica Publicitaria",
      "Merchandising",
      "Social Media",
    ],
    IE: [
      "Mantenimiento Eléctrico",
      "Refrigeración Industrial",
      "Instalaciones Eléctricas",
    ],
  }as const;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setCategoria(e.target.value as "TI" | "MD" | "IE");
    setFormData((prev) => ({
      ...prev,
      servicio: '',
    }));
  };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const mailto = `mailto:julcaadixon25@gmail.com?subject=Contacto&body=
    Nombre: ${formData.nombre}
    Categoría: ${categoria}
    Servicio: ${formData.servicio}
    Número: ${formData.numero}
    Gmail: ${formData.gmail}
    Mensaje: ${formData.mensaje}`;
    window.location.href = mailto;
  };

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto font-sans">
      {/* MAPA */}
      <div className="mb-8">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=11mvaCxq2p8bmFqn9WozkHj6V9lNZGVU&ehbc=2E312F&noprof=1"
          width="100%"
          height="400"
          className="rounded-md w-full border-0"
          loading="lazy"
          title="Mapa"
        ></iframe>
      </div>

      {/* FORMULARIO + FAQ */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="md:w-1/2 w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Motivo de Contacto</h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full border-2 border-blue-400 p-2 rounded"
            />
          </div>

          <fieldset className="mb-4">
            <legend className="font-medium mb-2">Categoría:</legend>
            <div className="space-y-1">
              <label className="block">
                <input type="radio" value="TI" checked={categoria === "TI"} onChange={handleCategoriaChange} className="mr-2" />
                Tecnología de la Información
              </label>
              <label className="block">
                <input type="radio" value="MD" checked={categoria === "MD"} onChange={handleCategoriaChange} className="mr-2" />
                Marketing Digital
              </label>
              <label className="block">
                <input type="radio" value="IE" checked={categoria === "IE"} onChange={handleCategoriaChange} className="mr-2" />
                Ingeniería Eléctrica
              </label>
            </div>
          </fieldset>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Selecciona un servicio:</label>
            <select
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              required
              className="w-full border-2 border-blue-400 p-2 rounded"
            >
              <option value="">Seleccione una opción</option>
              {servicios[categoria].map((s, idx) => (
                <option key={idx} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="mb-4 flex gap-4">
            <input
              type="number"
              name="numero"
              placeholder="Número"
              value={formData.numero}
              onChange={handleChange}
              required
              className="flex-1 border-2 border-blue-400 p-2 rounded"
            />
            <input
              type="email"
              name="gmail"
              placeholder="Gmail"
              value={formData.gmail}
              onChange={handleChange}
              required
              className="flex-1 border-2 border-blue-400 p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Mensaje:</label>
            <textarea
              name="mensaje"
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="w-full border-2 border-blue-400 p-2 rounded"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Enviar
            </button>
          </div>
        </form>

        {/* PREGUNTAS FRECUENTES */}
        <div className="md:w-1/2 w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Preguntas Frecuentes</h2>

          {[
            {
              q: "¿Quiénes somos?",
              a: "Somos una empresa líder en servicios tecnológicos, marketing digital e ingeniería eléctrica."
            },
            {
              q: "¿A qué nos dedicamos?",
              a: "Brindamos soluciones integrales para empresas en tres áreas clave: TI, Marketing y Electricidad."
            },
            {
              q: "¿Qué servicios realizamos?",
              a: "Desarrollo de software, SEO, redes, soporte técnico, instalaciones eléctricas, etc."
            },
            {
              q: "¿Cómo nos pueden contactar?",
              a: (
                <>
                  <p><strong>Dirección:</strong> Av. López de Zúñiga Nº 547, 2º Piso, Chancay</p>
                  <p><strong>Correo:</strong> <a className="text-blue-500 underline" href="mailto:consultas@solucionesintegralesjb.com">consultas@solucionesintegralesjb.com</a></p>
                  <p><strong>Teléfonos:</strong> +51 996 720 630 / +51 979 687 700</p>
                </>
              )
            },
            {
              q: "¿Qué tan confiables son nuestros servicios?",
              a: "Contamos con más de 10 años de experiencia y cientos de clientes satisfechos."
            }
          ].map((item, i) => (
            <details key={i} className="mb-4 border border-gray-300 rounded">
              <summary className="cursor-pointer font-semibold px-4 py-2 bg-blue-100 text-blue-800">
                {`${i + 1}. ${item.q}`}
              </summary>
              <div className="px-4 py-2 text-gray-700">{item.a}</div>
            </details>
          ))}
        </div>
        <ScrollButton />
      </div>
    </div>
  );
};

export default Contacto;
