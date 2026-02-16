import React, { useState } from "react";

const miembros = [
  {
    id: 1,
    nombre: "Wilder Julca",
    cargo: "Gerente de Servicios",
    imagen: "https://solucionesintegralesjb.com/wp-content/uploads/2024/07/Frame-952.png"
  },
  {
    id: 2,
    nombre: "carlos yamacacho rocca",
    cargo: "Programador Web",
    imagen: "https://i.postimg.cc/QCQRcRKh/image.png"
  },
  {
    id: 3,
    nombre: "Adixon Julca Ramirez",
    cargo: "Programador Web",
    imagen: "https://i.postimg.cc/nLpp5hTx/image.png"
  },
  {
    id: 4,
    nombre: "jared arroyo alarcon",
    cargo: "Programador Web",
    imagen: "https://i.postimg.cc/DfPjdQYJ/Imagen-de-Whats-App-2025-11-04-a-las-11-45-55-9088b08b.jpg"
  },
  {
    id: 5,
    nombre: "gabriel sedano",
    cargo: "Programador Web",
    imagen: "https://i.postimg.cc/nhJqdNjC/Imagen-de-Whats-App-2025-11-04-a-las-11-46-04-63d8f5c0.jpg"
  },
  {
    id: 6,
    nombre: "Edwin Bustamante",
    cargo: "Administración de Redes",
    imagen: "https://via.placeholder.com/200?text=Edwin"
  },
  {
    id: 7,
    nombre: "Juan Rodriguez",
    cargo: "Programador Web",
    imagen: "https://via.placeholder.com/200?text=Juan"
  }
];

const NuestroEquipo: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const getImageAnimation = (id: number) => {
    if (hoveredId === id) {
      return "translateY(-25px)";
    } else if (hoveredId !== null && hoveredId !== id) {
      return "translateY(15px) opacity(0.6)";
    }
    return "translateY(0)";
  };

  return (
    <section className="w-full py-20 bg-gray-50">
      <style>{`
        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes titleGlow {
          0%, 100% {
            text-shadow: 0 0 0px rgba(59, 130, 246, 0);
          }
          50% {
            text-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
          }
        }

        .animate-slide-in {
          animation: slideInUp 0.7s ease-out;
          animation-fill-mode: both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s infinite;
        }

        .animate-title-glow {
          animation: titleGlow 2s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }

        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }

        .shimmer-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 3s infinite;
        }

        .card-3d {
          perspective: 1000px;
          transition: transform 0.3s ease-out;
        }

        .card-3d-inner {
          transform-style: preserve-3d;
          transition: transform 0.4s ease-out;
        }

        .card-glow {
          position: relative;
          transition: all 0.4s ease-out;
        }

        .card-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(59, 130, 246, 0.15), transparent 50%);
          opacity: 0;
          transition: opacity 0.4s ease-out;
          pointer-events: none;
        }

        .card-glow.active::before {
          opacity: 1;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-in">
          <p className="text-blue-500 font-semibold text-lg mb-4 tracking-widest uppercase">
            ✨ Todos los miembros del equipo
          </p>
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tight mb-2 animate-title-glow">
            Nuestro Equipo
          </h2>
          <div className="flex gap-3 justify-center mt-8">
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full animate-glow"></div>
            <div className="w-10 h-1.5 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-16">
          {/* Primera fila - 4 miembros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            {miembros.slice(0, 4).map((miembro, index) => (
              <div
                key={miembro.id}
                className={`animate-slide-in delay-${(index + 1) * 100} w-full card-3d`}
                onMouseEnter={() => setHoveredId(miembro.id)}
                onMouseLeave={() => setHoveredId(null)}
                onMouseMove={handleMouseMove}
              >
                <div 
                  className={`relative bg-white p-8 rounded-2xl shadow-lg card-glow transition-all duration-500 ${hoveredId === miembro.id ? 'animate-float shadow-2xl' : ''}`}
                  style={{
                    '--x': `${mousePosition.x * 100}%`,
                    '--y': `${mousePosition.y * 100}%`,
                  } as React.CSSProperties & { '--x': string; '--y': string }}
                >
                  <div 
                    className={`card-3d-inner ${hoveredId === miembro.id ? 'active' : ''}`}
                    style={{
                      transform: hoveredId === miembro.id 
                        ? `rotateX(${(mousePosition.y - 0.5) * 15}deg) rotateY(${(mousePosition.x - 0.5) * 15}deg)`
                        : 'rotateX(0deg) rotateY(0deg)'
                    }}
                  >
                    <div className="flex flex-col items-center relative z-10">
                      {/* Imagen */}
                      <div className="mb-8 relative">
                        <div 
                          className={`w-44 h-44 rounded-full border-4 border-blue-500 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center shimmer-effect transition-all duration-500 ${hoveredId === miembro.id ? 'animate-glow' : ''}`}
                          style={{
                            filter: hoveredId === miembro.id ? "brightness(1.2) drop-shadow(0 20px 50px rgba(59, 130, 246, 0.6))" : "brightness(1) drop-shadow(0 8px 20px rgba(59, 130, 246, 0.15))",
                            transform: hoveredId === miembro.id ? "scale(1.12) perspective(1000px) rotateZ(-5deg)" : "scale(1) perspective(1000px) rotateZ(0deg)"
                          }}
                        >
                          <img
                            src={miembro.imagen}
                            alt={miembro.nombre}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {hoveredId === miembro.id && (
                          <div className="absolute inset-0 rounded-full animate-pulse-ring"></div>
                        )}
                      </div>

                      {/* Info */}
                      <h3 
                        className="text-2xl font-bold text-gray-900 mb-4 text-center transition-all duration-500"
                        style={{
                          color: hoveredId === miembro.id ? "#3b82f6" : "#1f2937",
                          textShadow: hoveredId === miembro.id ? "0 0 15px rgba(59, 130, 246, 0.3)" : "none",
                          transform: hoveredId === miembro.id ? "scale(1.08)" : "scale(1)"
                        }}
                      >
                        {miembro.nombre}
                      </h3>
                      <div 
                        className="px-6 py-3 rounded-xl text-center w-full border-2 transition-all duration-500 font-semibold"
                        style={{
                          backgroundColor: hoveredId === miembro.id ? "#e0e9f5" : "#f8fbff",
                          borderColor: hoveredId === miembro.id ? "#3b82f6" : "#bfdbfe",
                          color: hoveredId === miembro.id ? "#1e40af" : "#4b5563",
                          boxShadow: hoveredId === miembro.id ? "0 10px 25px rgba(59, 130, 246, 0.2)" : "none",
                          transform: hoveredId === miembro.id ? "scale(1.05)" : "scale(1)"
                        }}
                      >
                        <p className="text-sm">{miembro.cargo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Segunda fila - 3 miembros centrados */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl w-full">
              {miembros.slice(4, 7).map((miembro, index) => (
                <div
                  key={miembro.id}
                  className={`animate-slide-in delay-${(index + 5) * 100} w-full card-3d`}
                  onMouseEnter={() => setHoveredId(miembro.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onMouseMove={handleMouseMove}
                >
                  <div 
                    className={`relative bg-white p-8 rounded-2xl shadow-lg card-glow transition-all duration-500 ${hoveredId === miembro.id ? 'animate-float shadow-2xl' : ''}`}
                    style={{
                      '--x': `${mousePosition.x * 100}%`,
                      '--y': `${mousePosition.y * 100}%`,
                    } as React.CSSProperties & { '--x': string; '--y': string }}
                  >
                    <div 
                      className={`card-3d-inner ${hoveredId === miembro.id ? 'active' : ''}`}
                      style={{
                        transform: hoveredId === miembro.id 
                          ? `rotateX(${(mousePosition.y - 0.5) * 15}deg) rotateY(${(mousePosition.x - 0.5) * 15}deg)`
                          : 'rotateX(0deg) rotateY(0deg)'
                      }}
                    >
                      <div className="flex flex-col items-center relative z-10">
                        {/* Imagen */}
                        <div className="mb-8 relative">
                          <div 
                            className={`w-44 h-44 rounded-full border-4 border-blue-500 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center shimmer-effect transition-all duration-500 ${hoveredId === miembro.id ? 'animate-glow' : ''}`}
                            style={{
                              filter: hoveredId === miembro.id ? "brightness(1.2) drop-shadow(0 20px 50px rgba(59, 130, 246, 0.6))" : "brightness(1) drop-shadow(0 8px 20px rgba(59, 130, 246, 0.15))",
                              transform: hoveredId === miembro.id ? "scale(1.12) perspective(1000px) rotateZ(-5deg)" : "scale(1) perspective(1000px) rotateZ(0deg)"
                            }}
                          >
                            <img
                              src={miembro.imagen}
                              alt={miembro.nombre}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {hoveredId === miembro.id && (
                            <div className="absolute inset-0 rounded-full animate-pulse-ring"></div>
                          )}
                        </div>

                        {/* Info */}
                        <h3 
                          className="text-2xl font-bold text-gray-900 mb-4 text-center transition-all duration-500"
                          style={{
                            color: hoveredId === miembro.id ? "#3b82f6" : "#1f2937",
                            textShadow: hoveredId === miembro.id ? "0 0 15px rgba(59, 130, 246, 0.3)" : "none",
                            transform: hoveredId === miembro.id ? "scale(1.08)" : "scale(1)"
                          }}
                        >
                          {miembro.nombre}
                        </h3>
                        <div 
                          className="px-6 py-3 rounded-xl text-center w-full border-2 transition-all duration-500 font-semibold"
                          style={{
                            backgroundColor: hoveredId === miembro.id ? "#e0e9f5" : "#f8fbff",
                            borderColor: hoveredId === miembro.id ? "#3b82f6" : "#bfdbfe",
                            color: hoveredId === miembro.id ? "#1e40af" : "#4b5563",
                            boxShadow: hoveredId === miembro.id ? "0 10px 25px rgba(59, 130, 246, 0.2)" : "none",
                            transform: hoveredId === miembro.id ? "scale(1.05)" : "scale(1)"
                          }}
                        >
                          <p className="text-sm">{miembro.cargo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestroEquipo;