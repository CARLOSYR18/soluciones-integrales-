import React, { useState } from "react";

const Organigrama = () => {
  const [selectedCargo, setSelectedCargo] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const cargos = [
    {
      id: 1,
      titulo: "Gerente General",
      descripcion: "Dirige y supervisa todas las operaciones de la empresa, toma decisiones estratégicas clave y coordina los esfuerzos de los diferentes departamentos.",
      icon: "👔",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      titulo: "Asesor Legal",
      descripcion: "Brinda asesoramiento jurídico a la empresa, gestiona contratos y asegura el cumplimiento de las normativas legales aplicables.",
      icon: "⚖️",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      titulo: "Contabilidad",
      descripcion: "Se encarga de llevar el control financiero de la empresa, gestionando ingresos, egresos, balances y declaraciones fiscales.",
      icon: "💰",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 4,
      titulo: "Gerente Administrativo",
      descripcion: "Supervisa y gestiona los procesos administrativos de la empresa, asegurando la eficiencia en la gestión de recursos y operaciones internas.",
      icon: "📋",
      color: "from-red-500 to-rose-600"
    },
    {
      id: 5,
      titulo: "Gerente de Servicios",
      descripcion: "Responsable de la gestión de servicios al cliente, asegurando que se entreguen de manera eficiente y cumpliendo con los estándares de calidad.",
      icon: "🤝",
      color: "from-purple-500 to-violet-600"
    },
    {
      id: 6,
      titulo: "SSOMA",
      descripcion: "Garantiza que las operaciones de la empresa se realicen de acuerdo con las normativas de seguridad, salud ocupacional y protección ambiental.",
      icon: "🛡️",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x, y });
  };

  return (
    <div 
      className="min-h-screen relative bg-black"
      style={{
        backgroundImage: `url('https://i.postimg.cc/fWfQ4msK/Imagen-de-Whats-App-2025-10-31-a-las-11-29-12-700b7d68.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >


      {/* Contenido */}
      <div className="relative z-10">
        {/* Contenido principal */}
        <div className="max-w-7xl mx-auto px-8 py-16">
          
          {/* Título principal */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">Estructura Organizacional</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conoce la estructura jerárquica y los cargos principales de nuestra organización
            </p>
          </div>

          {/* Sección de imagen */}
          <div className="mb-32">
            <div className="bg-slate-800/40 rounded-2xl shadow-2xl border border-slate-700/40 p-8 hover:shadow-xl transition-shadow duration-300 animate-float-in-3d backdrop-blur-md">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Organigrama General</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
              </div>
              <img
                src="https://i.postimg.cc/prqbFQts/imaget1.png"
                alt="Organigrama de la empresa"
                className="w-full rounded-lg border border-slate-700 transform-gpu"
                style={{
                  animation: 'imageFloat3D 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                }}
              />
            </div>
          </div>

          {/* Espaciador */}
          <div className="my-20"></div>

          {/* Sección de cargos */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">Descripción de Cargos</h2>
            <p className="text-gray-300 text-lg mb-12">
              Información detallada sobre cada posición en nuestra organización
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cargos.map((cargo, idx) => (
                <div
                  key={cargo.id}
                  onMouseMove={(e) => handleMouseMove(e, idx)}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setSelectedCargo(selectedCargo?.id === cargo.id ? null : cargo)}
                  className="group cursor-pointer perspective h-full"
                >
                  <div 
                    className="relative h-full bg-slate-800/40 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-slate-700/40 hover:border-cyan-400 transform-gpu backdrop-blur-md"
                    style={{
                      transform: hoveredCard === idx 
                        ? `perspective(1000px) rotateX(${mousePos.y * 0.03}deg) rotateY(${mousePos.x * -0.03}deg) translateZ(10px)` 
                        : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    {/* Efecto de luz 3D */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at ${mousePos.x + 50}% ${mousePos.y + 50}%, rgba(34, 211, 238, 0.2) 0%, transparent 80%)`,
                      }}
                    ></div>

                    {/* Color bar superior */}
                    <div className={`h-1 bg-gradient-to-r ${cargo.color}`}></div>

                    {/* Contenido */}
                    <div className="p-8 relative z-10">
                      {/* Icono */}
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${cargo.color} text-3xl mb-4 shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        {cargo.icon}
                      </div>

                      {/* Número de cargo */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-cyan-400 font-bold group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
                        {cargo.id}
                      </div>

                      {/* Título */}
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                        {cargo.titulo}
                      </h3>

                      {/* Descripción */}
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-100 transition-colors duration-500">
                        {cargo.descripcion}
                      </p>

                      {/* Botón */}
                      <div className="mt-6 pt-6 border-t border-slate-700">
                        <span className="text-cyan-400 font-semibold text-sm group-hover:text-blue-400 transition-colors flex items-center gap-2">
                          Ver detalles
                          <svg className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedCargo && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 backdrop-blur-sm" onClick={() => setSelectedCargo(null)}>
            <div 
              className="bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-scale-in border border-slate-700 transform-gpu"
              onClick={(e) => e.stopPropagation()}
              style={{
                animation: 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
              }}
            >
              {/* Header modal */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedCargo.color} text-4xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-500`}>
                    {selectedCargo.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedCargo.titulo}</h2>
                    <div className={`h-1 w-12 bg-gradient-to-r ${selectedCargo.color} rounded-full mt-2`}></div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCargo(null)}
                  className="text-gray-400 hover:text-cyan-400 text-3xl font-bold transition-colors hover:rotate-90 duration-300"
                >
                  ×
                </button>
              </div>

              {/* Contenido modal */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                    Descripción del Cargo
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {selectedCargo.descripcion}
                  </p>
                </div>

                {/* Información adicional */}
                <div className="bg-slate-700 rounded-2xl p-6 border border-slate-600">
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">Información General</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-cyan-400 font-bold text-lg">●</span>
                      <p className="text-gray-300"><strong>Tipo:</strong> Posición Corporativa</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-bold text-lg">●</span>
                      <p className="text-gray-300"><strong>Nivel:</strong> Gestión Ejecutiva</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-cyan-300 font-bold text-lg">●</span>
                      <p className="text-gray-300"><strong>Departamento:</strong> Operaciones</p>
                    </div>
                  </div>
                </div>

                {/* Botón cerrar */}
                <button
                  onClick={() => setSelectedCargo(null)}
                  className={`w-full bg-gradient-to-r ${selectedCargo.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 transform`}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}


      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) rotateX(20deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateX(0deg);
          }
        }
        
        @keyframes imageFloat3D {
          0% {
            opacity: 0;
            transform: perspective(1200px) rotateX(90deg) rotateY(-30deg) scale(0.8);
          }
          50% {
            opacity: 0.7;
            transform: perspective(1200px) rotateX(45deg) rotateY(-15deg) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1);
          }
        }
        
        @keyframes float-in-3d {
          0% {
            opacity: 0;
            transform: perspective(1200px) rotateX(80deg) translateZ(-50px);
          }
          100% {
            opacity: 1;
            transform: perspective(1200px) rotateX(0deg) translateZ(0px);
          }
        }
        
        .animate-float-in-3d {
          animation: float-in-3d 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .perspective {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
};

export default Organigrama;
