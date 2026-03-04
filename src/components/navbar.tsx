import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaUsers,
  FaHistory,
  FaHandshake,
  FaPeopleCarry,
  FaLaptopCode,
  FaBuilding,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaShieldAlt,
  FaSitemap,
  FaUserTie,
  FaCode,
  FaFileInvoiceDollar,
  FaLock,
  FaNetworkWired,
  FaServer,
  FaTools,
  FaSearch,
  FaPaintBrush,
  FaGift,
  FaShareAlt,
  FaBolt,
  FaSnowflake,
  FaPlug,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";

type MenuKey = "nosotros" | "servicios" | null;

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);

  const closeTimer = useRef<number | null>(null);

  const openMenu = (key: Exclude<MenuKey, null>) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setActiveMenu(key);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActiveMenu(null), 140);
  };

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const topLink =
    "text-white hover:text-cyan-400 transition-colors duration-200";

  // ✅ ESTO REPLICA TUS CAPS (centrado y ancho grande)
  const baseDropdown =
    "fixed left-1/2 -translate-x-1/2 top-[78px] " +
    "bg-white text-gray-800 shadow-2xl rounded-xl ring-1 ring-black/10 " +
    "z-[99999]";

  return (
    <nav className="bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between shadow-md w-full sticky top-0 z-[99999]">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-10" />
      </Link>

      {/* Menú Desktop */}
      <ul className="hidden md:flex gap-8 text-sm font-semibold select-none items-center">
        <li>
          <Link to="/" className={topLink}>
            INICIO
          </Link>
        </li>

        {/* NOSOTROS */}
        <li
          className="relative"
          onMouseEnter={() => openMenu("nosotros")}
          onMouseLeave={scheduleClose}
        >
          <button type="button" className={topLink}>
            NOSOTROS
          </button>

          {activeMenu === "nosotros" && (
            <div
              className={`${baseDropdown} w-[80%] px-10 py-10 grid grid-cols-4 gap-10`}
              onMouseEnter={() => openMenu("nosotros")}
              onMouseLeave={scheduleClose}
            >
              {/* Nuestra Empresa */}
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                  Nuestra Empresa
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <FaUsers />
                    <Link to="/QuienesSomos" className="hover:text-cyan-600">
                      Quienes Somos
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaHistory />
                    <Link to="/NuestraHistoria" className="hover:text-cyan-600">
                      Nuestra Historia
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Responsabilidad Social */}
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                  Responsabilidad Social
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <FaHandshake />
                    <Link to="/Convenios" className="hover:text-cyan-600">
                      Convenios
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPeopleCarry />
                    <Link to="/ComunidadActiva" className="hover:text-cyan-600">
                      Comunidad Activa
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Consultoría */}
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                  Consultoría
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <FaLaptopCode />
                    <Link to="/ConsultoriaTI" className="hover:text-cyan-600">
                      Consultoría TI
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBuilding />
                    <Link
                      to="/ConsultoriaEmpresarial"
                      className="hover:text-cyan-600"
                    >
                      Consultoría Empresarial
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Organización */}
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                  Nuestra Organización
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <FaSitemap />
                    <Link to="/Organigrama" className="hover:text-cyan-600">
                      Organigrama
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaUserTie />
                    <Link to="/NuestroEquipo" className="hover:text-cyan-600">
                      Nuestro Equipo
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </li>

        {/* SERVICIOS */}
        <li
          className="relative"
          onMouseEnter={() => openMenu("servicios")}
          onMouseLeave={scheduleClose}
        >
          <button type="button" className={topLink}>
            SERVICIOS
          </button>

          {activeMenu === "servicios" && (
            <div
              className={`${baseDropdown} w-[90%] px-10 py-10 grid grid-cols-4 gap-10`}
              onMouseEnter={() => openMenu("servicios")}
              onMouseLeave={scheduleClose}
            >
              {/* Tecnología de Información */}
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                  Tecnología de Información
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <FaCode />
                    <Link
                      to="/DesarrolloDeSoftware"
                      className="hover:text-cyan-600"
                    >
                      Desarrollo de Software
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaFileInvoiceDollar />
                    <Link
                      to="/FacturacionElectronica"
                      className="hover:text-cyan-600"
                    >
                      Facturación Electrónica
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLock />
                    <Link
                      to="/TecnologiaEnSeguridad"
                      className="hover:text-cyan-600"
                    >
                      Tecnología en Seguridad
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaNetworkWired />
                    <Link
                      to="/RedesEInfrostructura"
                      className="hover:text-cyan-600"
                    >
                      Redes e Infraestructura
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaServer />
                    <Link to="/HostingYDominio" className="hover:text-cyan-600">
                      Hosting y Dominio
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaTools />
                    <Link to="/SoporteTecnico" className="hover:text-cyan-600">
                      Soporte Técnico
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Consultoría */}
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                  Consultoría
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <FaLaptopCode />
                    <Link to="/ConsultoriaTI" className="hover:text-cyan-600">
                      Consultoría TI
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBuilding />
                    <Link
                      to="/ConsultoriaEmpresarial"
                      className="hover:text-cyan-600"
                    >
                      Consultoría Empresarial
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaChalkboardTeacher />
                    <Link
                      to="/ConsultoriaEducativa"
                      className="hover:text-cyan-600"
                    >
                      Consultoría Educativa
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaClipboardCheck />
                    <Link to="/Auditorias" className="hover:text-cyan-600">
                      Auditorías
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaShieldAlt />
                    <Link
                      to="/SeguridadInformatica"
                      className="hover:text-cyan-600"
                    >
                      Seguridad Informática
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Marketing Digital */}
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                  Marketing Digital
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <FaCode />
                    <Link
                      to="/DesarrolloDeSitiosWeb"
                      className="hover:text-cyan-600"
                    >
                      Desarrollo de Sitio Web
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaSearch />
                    <Link
                      to="/PosicionamientoSEO"
                      className="hover:text-cyan-600"
                    >
                      Posicionamiento SEO
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPaintBrush />
                    <Link
                      to="/GraficaPublicitaria"
                      className="hover:text-cyan-600"
                    >
                      Gráfica Publicitaria
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaGift />
                    <Link to="/Merchandising" className="hover:text-cyan-600">
                      Merchandising
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaShareAlt />
                    <Link to="/SocialMedia" className="hover:text-cyan-600">
                      Social Media
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Ing. Eléctrica */}
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
                  Ing. Eléctrica
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <FaBolt />
                    <Link
                      to="/MantenimientoElectrico"
                      className="hover:text-cyan-600"
                    >
                      Mantenimiento Eléctrico
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaSnowflake />
                    <Link
                      to="/RefrigeracionIndustrial"
                      className="hover:text-cyan-600"
                    >
                      Refrigeración Industrial
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPlug />
                    <Link
                      to="/InstalacionesElectricas"
                      className="hover:text-cyan-600"
                    >
                      Instalaciones Eléctricas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </li>

        <li>
          <Link to="/Productos" className={topLink}>
            PRODUCTOS
          </Link>
        </li>
        <li>
          <Link to="/prestamos" className={topLink}>
            PRESTAMOS
          </Link>
        </li>
        <li>
          <Link to="/contacto" className={topLink}>
            CONTACTO
          </Link>
        </li>
      </ul>

      {/* Redes sociales Desktop */}
      <div className="hidden md:flex gap-3">
        {[
          { icon: FaFacebookF, url: "https://www.facebook.com/solucionesintegralesJB/" },
          { icon: FaEnvelope, url: "/contacto" },
          { icon: FaInstagram, url: "https://www.instagram.com/solucionesintegralesjb/" },
          { icon: FaYoutube, url: "https://www.youtube.com/channel/UCwZllsxQMp2LwUSIDmldUeQ" },
          { icon: FaLinkedinIn, url: "https://www.linkedin.com/" },
          { icon: FaTiktok, url: "https://www.tiktok.com/@solucionesintegralesjb?lang=es" },
        ].map(({ icon: Icon, url }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-cyan-400 hover:text-white cursor-pointer transition-colors duration-200"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Botón hamburguesa */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Sidebar móvil */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99999] flex md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="ml-auto w-80 bg-white shadow-lg p-6 h-full overflow-y-auto relative text-gray-800">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiX />
            </button>

            <ul className="mt-10 space-y-4 font-semibold">
              <li>
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  INICIO
                </Link>
              </li>
              <li>
                <Link to="/Productos" onClick={() => setMobileMenuOpen(false)}>
                  PRODUCTOS
                </Link>
              </li>
              <li>
                <Link to="/prestamos" onClick={() => setMobileMenuOpen(false)}>
                  PRESTAMOS
                </Link>
              </li>
              <li>
                <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>
                  CONTACTO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;