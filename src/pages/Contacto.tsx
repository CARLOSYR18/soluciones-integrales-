
 import React, { useState } from 'react';
import ScrollButton from "../components/ScrollButton";

type CategoriaKey = 'TI' | 'CONSULTORIA' | 'MD' | 'IE';

const categorias: Record<CategoriaKey, string> = {
  TI: 'Tecnología de Información',
  CONSULTORIA: 'Consultoría',
  MD: 'Marketing Digital',
  IE: 'Ing. Eléctrica',
};

const servicios: Record<CategoriaKey, readonly string[]> = {
  TI: [
    'Desarrollo de Software',
    'Facturación Electrónica',
    'Tecnología en Seguridad',
    'Redes e Infraestructura',
    'Hosting y Dominio',
    'Soporte Técnico',
  ],
  CONSULTORIA: [
    'Consultoría TI',
    'Consultoría Empresarial',
    'Consultoría Educativa',
    'Auditorías',
    'Seguridad Informática',
  ],
  MD: [
    'Desarrollo de Sitio Web',
    'Posicionamiento SEO',
    'Gráfica Publicitaria',
    'Merchandising',
    'Social Media',
  ],
  IE: [
    'Mantenimiento Eléctrico',
    'Refrigeración Industrial',
    'Instalaciones Eléctricas',
  ],
};

const Contacto = () => {
  const [categoria, setCategoria] = useState<CategoriaKey>('TI');

  const [formData, setFormData] = useState({
    nombre: '',
    servicio: '',
    numero: '',
    gmail: '',
    mensaje: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoria(e.target.value as CategoriaKey);

    setFormData((prev) => ({
      ...prev,
      servicio: '',
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailto = `mailto:julcaadixon25@gmail.com?subject=Contacto&body=
Nombre: ${formData.nombre}
Categoría: ${categorias[categoria]}
Servicio: ${formData.servicio}
Número: ${formData.numero}
Gmail: ${formData.gmail}
Mensaje: ${formData.mensaje}`;

    window.location.href = mailto;
  };

  const preguntasFrecuentes = [
    {
      q: "¿Quiénes somos?",
      a: "Somos una empresa especializada en soluciones tecnológicas, consultoría, marketing digital e ingeniería eléctrica para empresas que buscan mejorar su operación, presencia digital y seguridad.",
    },
    {
      q: "¿A qué nos dedicamos?",
      a: "Brindamos servicios integrales orientados a optimizar procesos, fortalecer la infraestructura tecnológica, mejorar la comunicación digital y atender necesidades técnicas en instalaciones eléctricas.",
    },
    {
      q: "¿Qué servicios realizamos?",
      a: "Realizamos desarrollo de software, facturación electrónica, redes e infraestructura, soporte técnico, consultoría, auditorías, seguridad informática, desarrollo web, SEO, social media, mantenimiento eléctrico, refrigeración industrial e instalaciones eléctricas.",
    },
    {
      q: "¿Cómo nos pueden contactar?",
      a: (
        <>
          <p><strong>Dirección:</strong> Av. López de Zúñiga Nº 547, 2º Piso, Chancay</p>
          <p>
            <strong>Correo:</strong>{" "}
            <a
              className="text-cyan-500 underline decoration-cyan-500/40 underline-offset-4 transition hover:text-cyan-600"
              href="mailto:consultas@solucionesintegralesjb.com"
            >
              consultas@solucionesintegralesjb.com
            </a>
          </p>
          <p><strong>Teléfonos:</strong>+51 926 392 858</p>
        </>
      ),
    },
    {
      q: "¿Qué tan confiables son nuestros servicios?",
      a: " Tenemos mas de 16 años de experiencia, trabajamos con responsabilidad , enfoque profesional, ofreciendo soluciones claras, acompañamiento técnico y atención orientada a resultados para cada cliente.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 font-sans">
      {/* MAPA */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-cyan-500/20 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=11mvaCxq2p8bmFqn9WozkHj6V9lNZGVU&ehbc=2E312F&noprof=1"
          width="100%"
          height="400"
          className="w-full border-0"
          loading="lazy"
          title="Mapa"
        ></iframe>
      </div>

      {/* FORMULARIO + FAQ */}
      <div className="flex flex-col gap-8 md:flex-row">
        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-3xl border border-cyan-500/20 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] md:w-1/2"
        >
          <h2 className="mb-6 text-center text-2xl font-extrabold tracking-wide text-cyan-500">
            Motivo de Contacto
          </h2>

          <div className="mb-5">
            <label className="mb-2 block font-semibold text-slate-700">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full rounded-lg border-2 border-cyan-500/60 p-2.5 text-slate-700 outline-none transition duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15"
            />
          </div>

          <fieldset className="mb-5">
            <legend className="mb-3 text-lg font-semibold text-slate-700">Categoría:</legend>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {(Object.keys(categorias) as CategoriaKey[]).map((key) => (
                <label
                  key={key}
                  className={[
                    "group flex cursor-pointer items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
                    categoria === key
                      ? "border-cyan-500 bg-cyan-500 text-white shadow-[0_10px_28px_rgba(6,182,212,0.25)]"
                      : "border-cyan-500/30 bg-cyan-50/40 text-slate-700 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white",
                  ].join(" ")}
                >
                  <input
                    type="radio"
                    value={key}
                    checked={categoria === key}
                    onChange={handleCategoriaChange}
                    className="accent-cyan-500"
                  />
                  {categorias[key]}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mb-5">
            <label className="mb-2 block font-semibold text-slate-700">
              Selecciona un servicio:
            </label>

            <select
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              required
              className="w-full rounded-lg border-2 border-cyan-500/60 bg-white p-2.5 text-slate-700 outline-none transition duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15"
            >
              <option value="">Seleccione una opción</option>
              {servicios[categoria].map((servicio) => (
                <option key={servicio} value={servicio}>
                  {servicio}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5 flex flex-col gap-4 sm:flex-row">
            <input
              type="number"
              name="numero"
              placeholder="Número"
              value={formData.numero}
              onChange={handleChange}
              required
              className="flex-1 rounded-lg border-2 border-cyan-500/60 p-2.5 text-slate-700 outline-none transition duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15"
            />

            <input
              type="email"
              name="gmail"
              placeholder="Gmail"
              value={formData.gmail}
              onChange={handleChange}
              required
              className="flex-1 rounded-lg border-2 border-cyan-500/60 p-2.5 text-slate-700 outline-none transition duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-semibold text-slate-700">Mensaje:</label>
            <textarea
              name="mensaje"
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="w-full rounded-lg border-2 border-cyan-500/60 p-2.5 text-slate-700 outline-none transition duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="rounded-lg bg-cyan-500 px-8 py-3 font-bold text-white shadow-[0_12px_30px_rgba(6,182,212,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-[0_18px_40px_rgba(6,182,212,0.35)]"
            >
              Enviar
            </button>
          </div>
        </form>

        {/* PREGUNTAS FRECUENTES */}
        <div className="w-full rounded-3xl border border-cyan-500/20 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] md:w-1/2">
          <h2 className="mb-6 text-center text-2xl font-extrabold tracking-wide text-cyan-500">
            Preguntas Frecuentes
          </h2>

          {preguntasFrecuentes.map((item, i) => (
            <details
              key={i}
              className="group mb-4 overflow-hidden rounded-lg border border-cyan-500/30 bg-white transition-all duration-300 hover:border-cyan-500 hover:shadow-[0_10px_28px_rgba(6,182,212,0.12)]"
            >
              <summary className="cursor-pointer bg-cyan-50 px-4 py-3 font-bold text-cyan-700 transition-all duration-300 group-open:bg-cyan-500 group-open:text-white hover:bg-cyan-500 hover:text-white">
                {`${i + 1}. ${item.q}`}
              </summary>

              <div className="px-4 py-3 text-sm leading-7 text-slate-700">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <ScrollButton />
      </div>
    </div>
  );
};

export default Contacto;
