import React, { useMemo, useRef, useState } from "react";

type Miembro = {
  id: number;
  nombre: string;
  cargo: string;
  imagen: string;

  // INFO EXTRA para el modal
  bio?: string;
  skills?: string[];
  correo?: string;
  linkedin?: string;
  twitter?: string;
};

const miembros: Miembro[] = [
  {
    id: 1,
    nombre: "Wilder Julca",
    cargo: "Gerente de Servicios",
    imagen: "https://i.postimg.cc/0y0wMnJ6/wilder1024-(2).png",
    bio: "Lidera la gestión de servicios, asegurando calidad, cumplimiento y mejora continua en cada proyecto.",
    skills: ["Gestión", "Operaciones", "Calidad", "Atención al cliente"],
    linkedin: "https://www.linkedin.com/in/wilder-julca-61783043/",
    correo: "wilder@empresa.com",
  },
  {
    id: 2,
    nombre: "Victor Galarza",
    cargo: "Programador",
    imagen: "https://i.postimg.cc/50GvM68v/unnamed_(2).jpg",
    bio: "Planificar, organizar, dirigir y supervisar eficientemente el desarrollo de proyectos, asegurando el cumplimiento de objetivos, plazos y estándares de calidad..",
    skills: ["Planear", "Organizar", "Dirigir ", "Controlar"],
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    nombre: "Edwin Bustamante",
    cargo: " Especialista en redes",
    imagen: "https://i.postimg.cc/X79df4y1/Gemini-Generated-Image-firbicfirbicfirb.png",
    bio: "Configuración y administración de redes, manejo de protocolos, implementación de redes seguras, nonitoreo y diagnóstico de redes .",
    skills: ["React", "Node.js", "SQL", "Arquitectura"],
    linkedin: "#",
  },
  
  {
    id: 4,
    nombre: "Diego Uriarte",
    cargo: "Desarrollador Mobil",
    imagen:"https://i.postimg.cc/5t4Pyr0g/Diego.jpg",
    bio: "Desarrollador de aplicaciones móviles en plataformas Android & iOS, especializado en Kotlin, Java y Swift",
    skills: ["Desarrollo ", "Manejo de frameworks", "Gestión ", "Integración "],
    linkedin: "https://www.linkedin.com/in/diego-ronaldo-uriarte-chancafe-637297182/",
    twitter: "#",
  },
  {
    id: 5,
    nombre: "Adixon Julca Ramirez",
    cargo: "Programador Web",
    imagen:"https://i.postimg.cc/m2rq6pTW/Gemini-Generated-Image-4ayvix4ayvix4ayv.png",
    bio: "Enfocado en desarrollo frontend con detalle visual y experiencia de usuario.",
    skills: ["Frontend", "Tailwind", "Accesibilidad", "Optimización"],
    linkedin: "#",
    twitter: "#",
  },
 
];
const grupoApoyo: Miembro[] = [
  {
    id: 101,
    nombre: "Carlos Yamacacho Rocca",
    cargo: "Equipo de apoyo" ,
    imagen: "https://i.postimg.cc/nVmYVvTm/yamac1024.png",
    bio: "Brinda soporte técnico y asistencia en los proyectos.",
    skills: ["Soporte", "Infraestructura", "Mantenimiento"],
  },
  {
    id: 102,
    nombre: "Jared Alonso Arroyo Alarcon" ,
    cargo: "Equipo de apoyo",
    imagen: "https://i.postimg.cc/85VjPrZ7/jared1024.png" ,
    bio: "Apoya en tareas operativas y coordinación de actividades.",
    skills: ["Organización", "Logística", "Trabajo en equipo"],
  },
  {
    id: 103,
    nombre: "Gabriel Sedano Ramirez" ,
    cargo: "Equipo de apoyo",
    imagen: "https://i.postimg.cc/8cYqbLJR/Gemini-Generated-Image-5rt2635rt2635rt2.png" ,
    bio: "Gestiona procesos administrativos y apoyo organizacional.",
    skills: ["Administración", "Gestión", "Documentación"],
  },
 
];  
const IconLinkedIn = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5H4.5V23H.5V8.5zM8.5 8.5H12.3V10.5H12.36C12.89 9.5 14.2 8.4 16.12 8.4 20.1 8.4 20.8 11 20.8 14.4V23H16.8V15.2C16.8 13.3 16.77 10.9 14.26 10.9 11.72 10.9 11.33 12.9 11.33 15.1V23H7.33V8.5H8.5z" />
  </svg>
);

const IconTwitter = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M23 4.6c-.8.4-1.7.6-2.6.8.9-.6 1.6-1.4 2-2.4-.9.5-1.9.9-2.9 1.1A4.5 4.5 0 0 0 12 7.8c0 .3 0 .6.1.8-3.7-.2-7-2-9.2-4.8-.4.6-.6 1.4-.6 2.2 0 1.6.8 2.9 2 3.8-.7 0-1.4-.2-2-.6v.1c0 2.2 1.6 4 3.7 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.5 3.3A9.1 9.1 0 0 1 1 19.1 12.8 12.8 0 0 0 8 21.2c8.4 0 13-7 13-13v-.6c.9-.7 1.6-1.4 2.2-2.3Z" />
  </svg>
);

const NuestroEquipo: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Miembro | null>(null);

  const items = useMemo(() => {
    if (miembros.length <= 5) return miembros;
    return [...miembros, ...miembros];
  }, []);
const itemsApoyo = useMemo(() => {
  if (grupoApoyo.length <= 4) return grupoApoyo;
  return [...grupoApoyo, ...grupoApoyo];
}, []);
  const scrollByCards = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * 0.92);
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  const openModal = (m: Miembro) => {
    setSelected(m);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section className="relative w-full overflow-hidden py-24">
      {/* Fondo suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50" />
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-blue-100/35 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-32 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl" />

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* HEADER: NO TOCAR */}
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Nuestro Equipo
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Conoce a nuestro equipo profesional
          </h2>

          <p className="mt-4 text-base text-slate-600">
            Personas comprometidas con la excelencia y el desarrollo de soluciones
            digitales de alto nivel.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="h-[3px] w-24 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
          </div>
        </header>

        {/* Carrusel */}
        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCards("left")}
            className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 shadow-lg backdrop-blur transition hover:scale-[1.03] hover:border-blue-200 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 sm:flex"
            aria-label="Anterior"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scrollByCards("right")}
            className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 shadow-lg backdrop-blur transition hover:scale-[1.03] hover:border-blue-200 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 sm:flex"
            aria-label="Siguiente"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={trackRef}
            className="no-scrollbar flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3"
          >
            {items.map((m, idx) => (
              <article
                key={`${m.id}-${idx}`}
                className="snap-start shrink-0 w-[90%] sm:w-[70%] md:w-[46%] lg:w-[32%]"
              >
                <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.10)] transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,0.16)]">
                  {/* Foto grande */}
                  <div className="relative h-[340px] w-full bg-slate-100">
                    <img
                      src={m.imagen}
                      alt={m.nombre}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  {/* Texto abajo */}
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold text-slate-900">{m.nombre}</h3>
                    <p className="mt-1 text-sm text-slate-600">{m.cargo}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-slate-500">
                        {m.twitter && (
                          <a
                            href={m.twitter}
                            className="rounded-md p-1 transition hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                            aria-label="Twitter"
                          >
                            <IconTwitter className="h-5 w-5" />
                          </a>
                        )}
                        {m.linkedin && (
                          <a
                            href={m.linkedin}
                            className="rounded-md p-1 transition hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                            aria-label="LinkedIn"
                          >
                            <IconLinkedIn className="h-5 w-5" />
                          </a>
                        )}
                      </div>

                      {/* AQUÍ ABRE EL MODAL */}
                      <button
                        type="button"
                        onClick={() => openModal(m)}
                        className="text-xs font-semibold text-blue-700 underline-offset-4 hover:underline"
                      >
                        Conocer más
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-slate-500 sm:hidden">
            Desliza con el dedo para ver más miembros →
          </p>
        </div>
      </div>
{/* ===================== GRUPO DE APOYO ===================== */}

<div className="relative mx-auto mt-24 max-w-7xl px-4">

  <header className="mx-auto mb-16 max-w-2xl text-center">
    <p className="mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
      Equipo de apoyo
    </p>

    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
      Grupo de apoyo
    </h2>

    <p className="mt-4 text-base text-slate-600">
      Profesionales que respaldan cada proyecto y garantizan el correcto funcionamiento de nuestras soluciones.
    </p>

    <div className="mt-8 flex justify-center">
      <div className="h-[3px] w-24 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
    </div>
  </header>

  <div className="relative">

    <div className="no-scrollbar flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3">

      {itemsApoyo.map((m, idx) => (
        <article
          key={`${m.id}-${idx}`}
          className="snap-start shrink-0 w-[90%] sm:w-[70%] md:w-[46%] lg:w-[32%]"
        >

          <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.10)] transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,0.16)]">

            <div className="relative h-[340px] w-full bg-slate-100">
              <img
                src={m.imagen}
                alt={m.nombre}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-extrabold text-slate-900">
                {m.nombre}
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                {m.cargo}
              </p>

              <div className="mt-4 flex items-center justify-between">

                <div className="flex items-center gap-3 text-slate-500">
                  {m.linkedin && (
                    <a href={m.linkedin}>
                      <IconLinkedIn className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => openModal(m)}
                  className="text-xs font-semibold text-blue-700 underline-offset-4 hover:underline"
                >
                  Conocer más
                </button>

              </div>
            </div>

          </div>

        </article>
      ))}

    </div>

  </div>

</div>
      {/* MODAL / CARTA */}
      {open && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Información de ${selected.nombre}`}
          onMouseDown={(e) => {
            // cerrar si clicas el backdrop
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" />

          {/* card modal */}
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Imagen grande */}
              <div className="relative h-[320px] md:h-full bg-slate-100">
                <img
                  src={selected.imagen}
                  alt={selected.nombre}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      {selected.nombre}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-blue-700">
                      {selected.cargo}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    aria-label="Cerrar"
                  >
                    ✕
                  </button>
                </div>

                {/* Bio */}
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {selected.bio ||
                    "Aquí puedes colocar una breve descripción profesional de la persona. (bio)"}
                </p>

                {/* Skills */}
                <div className="mt-5">
                  <p className="text-xs font-bold tracking-widest text-slate-700 uppercase">
                    Habilidades
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {(selected.skills?.length ? selected.skills : ["Trabajo en equipo", "Responsabilidad"]).map(
                      (s) => (
                        <span
                          key={s}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                        >
                          {s}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Contacto */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {selected.linkedin && (
                    <a
                      href={selected.linkedin}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                    >
                      <IconLinkedIn className="h-4 w-4" />
                      LinkedIn
                    </a>
                  )}
                  {selected.twitter && (
                    <a
                      href={selected.twitter}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                    >
                      <IconTwitter className="h-4 w-4" />
                      Twitter
                    </a>
                  )}
                  {selected.correo && (
                    <a
                      href={`mailto:${selected.correo}`}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                    >
                      ✉️ {selected.correo}
                    </a>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full rounded-xl bg-gradient-to-r from-blue-700 to-sky-500 px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
    
  );
};

export default NuestroEquipo;