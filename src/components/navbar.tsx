import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF, FaEnvelope, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok,
  FaUsers, FaHistory, FaHandshake, FaPeopleCarry, FaLaptopCode, FaBuilding,
  FaChalkboardTeacher, FaClipboardCheck, FaShieldAlt, FaSitemap, FaUserTie,
  FaCode, FaFileInvoiceDollar, FaLock, FaNetworkWired, FaServer, FaTools,
  FaSearch, FaPaintBrush, FaGift, FaShareAlt, FaBolt, FaSnowflake, FaPlug,
  FaHeadset,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  let closeTimer: ReturnType<typeof setTimeout>;

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleMouseEnter = (menu: string) => {
    clearTimeout(closeTimer);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    closeTimer = setTimeout(() => setActiveMenu(null), 100);
  };

  // Dropdown: centrado en la página, ancho fijo grande con bordes redondeados
  const dropdownStyle = (menu: string): React.CSSProperties => ({
    position: "fixed",
    top: "auto",
    left: "50%",
    transform: "translateX(-50%)",
    width: "85vw",
    maxWidth: "1300px",
    zIndex: 9999,
    opacity: activeMenu === menu ? 1 : 0,
    visibility: activeMenu === menu ? "visible" : "hidden",
    transition: "opacity 0.2s ease, visibility 0.2s ease",
    pointerEvents: activeMenu === menu ? "auto" : "none",
  });

  return (
    <nav
      style={{ overflow: "visible", position: "sticky", top: 0, zIndex: 40 }}
      className="bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between shadow-md w-full"
    >
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      {/* ══ MENÚ DESKTOP ══ */}
      <ul
        style={{ overflow: "visible" }}
        className="hidden md:flex items-center gap-8 text-sm font-semibold select-none flex-nowrap"
      >
        <li className="whitespace-nowrap">
          <a href="/" className="hover:text-cyan-400 transition-colors duration-200">INICIO</a>
        </li>

        {/* ── NOSOTROS ── */}
        <li
          className="whitespace-nowrap"
          style={{ position: "relative" }}
          onMouseEnter={() => handleMouseEnter("nosotros")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer py-4 inline-block">
            NOSOTROS
          </span>

          <div style={dropdownStyle("nosotros")}>
            <div
              onMouseEnter={() => handleMouseEnter("nosotros")}
              onMouseLeave={handleMouseLeave}
              className="bg-white shadow-2xl rounded-xl px-12 py-10 grid grid-cols-4 gap-12"
            >
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-2">Nuestra Empresa</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {[
                    { icon: <FaUsers />, label: "Quienes Somos", href: "/QuienesSomos" },
                    { icon: <FaHistory />, label: "Nuestra Historia", href: "/NuestraHistoria" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <span className="text-gray-400">{item.icon}</span>
                      <a href={item.href} className="hover:text-cyan-600 transition-colors duration-200 relative">
                        {item.label}
                        <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-2">Responsabilidad Social</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {[
                    { icon: <FaHandshake />, label: "Convenios", href: "/Convenios" },
                    { icon: <FaPeopleCarry />, label: "Comunidad Activa", href: "/ComunidadActiva" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <span className="text-gray-400">{item.icon}</span>
                      <a href={item.href} className="hover:text-cyan-600 transition-colors duration-200 relative">
                        {item.label}
                        <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-2">Consultoría</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {[
                    { icon: <FaLaptopCode />, label: "Consultoría TI", href: "/ConsultoriaTI" },
                    { icon: <FaBuilding />, label: "Consultoría Empresarial", href: "/ConsultoriaEmpresarial" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <span className="text-gray-400">{item.icon}</span>
                      <a href={item.href} className="hover:text-cyan-600 transition-colors duration-200 relative">
                        {item.label}
                        <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-2">Nuestra Organización</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {[
                    { icon: <FaSitemap />, label: "Organigrama", href: "/Organigrama" },
                    { icon: <FaUserTie />, label: "Nuestro Equipo", href: "/NuestroEquipo" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <span className="text-gray-400">{item.icon}</span>
                      <a href={item.href} className="hover:text-cyan-600 transition-colors duration-200 relative">
                        {item.label}
                        <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* ── SERVICIOS ── */}
        <li
          className="whitespace-nowrap"
          style={{ position: "relative" }}
          onMouseEnter={() => handleMouseEnter("servicios")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer py-4 inline-block">
            SERVICIOS
          </span>

          <div style={dropdownStyle("servicios")}>
            <div
              onMouseEnter={() => handleMouseEnter("servicios")}
              onMouseLeave={handleMouseLeave}
              className="bg-white shadow-2xl rounded-xl px-12 py-10 grid grid-cols-4 gap-12"
            >
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-2">Tecnología de Información</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {[
                    { icon: <FaCode />, label: "Desarrollo de Software", href: "/DesarrolloDeSoftware" },
                    { icon: <FaFileInvoiceDollar />, label: "Facturación Electrónica", href: "/FacturacionElectronica" },
                    { icon: <FaLock />, label: "Tecnología en Seguridad", href: "/TecnologiaEnSeguridad" },
                    { icon: <FaNetworkWired />, label: "Redes e Infraestructura", href: "/RedesEInfrostructura" },
                    { icon: <FaServer />, label: "Hosting y Dominio", href: "/HostingYDominio" },
                    { icon: <FaTools />, label: "Soporte Técnico", href: "/SoporteTecnico" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <span className="text-gray-400">{item.icon}</span>
                      <a href={item.href} className="hover:text-cyan-600 transition-colors duration-200 relative">
                        {item.label}
                        <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-2">Consultoría</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {[
                    { icon: <FaLaptopCode />, label: "Consultoría TI", href: "/ConsultoriaTI" },
                    { icon: <FaBuilding />, label: "Consultoría Empresarial", href: "/ConsultoriaEmpresarial" },
                    { icon: <FaChalkboardTeacher />, label: "Consultoría Educativa", href: "/ConsultoriaEducativa" },
                    { icon: <FaClipboardCheck />, label: "Auditorías", href: "/Auditorias" },
                    { icon: <FaShieldAlt />, label: "Seguridad Informática", href: "/SeguridadInformatica" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <span className="text-gray-400">{item.icon}</span>
                      <a href={item.href} className="hover:text-cyan-600 transition-colors duration-200 relative">
                        {item.label}
                        <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-2">Marketing Digital</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {[
                    { icon: <FaCode />, label: "Desarrollo de Sitio Web", href: "/DesarrolloDeSitiosWeb" },
                    { icon: <FaSearch />, label: "Posicionamiento SEO", href: "/PosicionamientoSEO" },
                    { icon: <FaPaintBrush />, label: "Gráfica Publicitaria", href: "/GraficaPublicitaria" },
                    { icon: <FaGift />, label: "Merchandising", href: "/Merchandising" },
                    { icon: <FaShareAlt />, label: "Social Media", href: "/SocialMedia" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <span className="text-gray-400">{item.icon}</span>
                      <a href={item.href} className="hover:text-cyan-600 transition-colors duration-200 relative">
                        {item.label}
                        <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-cyan-600 mb-2">Ing. Eléctrica</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {[
                    { icon: <FaBolt />, label: "Mantenimiento Eléctrico", href: "/MantenimientoElectrico" },
                    { icon: <FaSnowflake />, label: "Refrigeración Industrial", href: "/RefrigeracionIndustrial" },
                    { icon: <FaPlug />, label: "Instalaciones Eléctricas", href: "/InstalacionesElectricas" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group/item">
                      <span className="text-gray-400">{item.icon}</span>
                      <a href={item.href} className="hover:text-cyan-600 transition-colors duration-200 relative">
                        {item.label}
                        <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="whitespace-nowrap">
          <Link to="/contacto" className="hover:text-cyan-400 transition-colors duration-200">CONTACTO</Link>
        </li>
      </ul>

      {/* Redes sociales Desktop */}
      <div className="hidden md:flex gap-2 flex-shrink-0">
        {[
          { icon: FaFacebookF, url: "https://www.facebook.com/solucionesintegralesJB/" },
          { icon: FaEnvelope, url: "/contacto" },
          { icon: FaInstagram, url: "https://www.instagram.com/solucionesintegralesjb/" },
          { icon: FaYoutube, url: "https://www.youtube.com/channel/UCwZllsxQMp2LwUSIDmldUeQ" },
          { icon: FaLinkedinIn, url: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEnsF-ThdiG6wAAAZmCDWzwVJaTR1vjPPp6uv0JzfhdWh9HdUi2ruenocalO7aVtO01d1i-f6pdm2vsTla4cINdCtOMymMuBfBVhvrYXXNQFKhXmuFz-pD0IK6OTq1UICqMgpI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsoluciones-integrales-jb%2F%3ForiginalSubdomain%3Dpe" },
          { icon: FaTiktok, url: "https://www.tiktok.com/@solucionesintegralesjb?lang=es" },
        ].map(({ icon: Icon, url }, idx) => (
          <a key={idx} href={url} target="_blank" rel="noopener noreferrer"
            className="bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-cyan-400 hover:text-white cursor-pointer transition-colors duration-200">
            <Icon />
          </a>
        ))}
      </div>

      {/* Botón hamburguesa */}
      <button className="md:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* ══ SIDEBAR MÓVIL — idéntico al original ══ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
          <div className="ml-auto w-80 bg-white shadow-lg p-6 h-full overflow-y-auto transform transition-transform duration-300 ease-in-out">
            <button className="absolute top-4 right-4 text-2xl" onClick={() => setMobileMenuOpen(false)}>
              <FiX />
            </button>
            <ul className="mt-10 space-y-3 font-semibold text-gray-800">
              <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>INICIO</Link></li>
              <li>
                <button onClick={() => toggleDropdown("nosotros")} className="w-full text-left">NOSOTROS</button>
                {openDropdown === "nosotros" && (
                  <div className="mt-4 grid grid-cols-1 gap-6 text-sm">
                    <div>
                      <h4 className="font-bold text-gray-700 mb-2">Nuestra Identidad</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaUsers /> <a href="/QuienesSomos">Quiénes Somos</a></li>
                        <li className="flex items-center gap-2"><FaHistory /> <a href="/NuestraHistoria">Nuestra Historia</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700 mb-2">Alianzas</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaHandshake /> <a href="/convenios">Convenios</a></li>
                        <li className="flex items-center gap-2"><FaPeopleCarry /> <a href="/comunidadActiva">Comunidad Activa</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700 mb-2">Consultoría</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaLaptopCode /> <a href="/ConsultoriaTI">Consultoría TI</a></li>
                        <li className="flex items-center gap-2"><FaBuilding /> <a href="/ConsultoriaEmpresarial">Consultoría Empresarial</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700 mb-2">Equipo</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaUserTie /> <a href="/NuestroEquipo">Nuestro Equipo</a></li>
                        <li className="flex items-center gap-2"><FaSitemap /> <a href="/Organigrama">Organigrama</a></li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <button onClick={() => toggleDropdown("servicios")} className="w-full text-left">SERVICIOS</button>
                {openDropdown === "servicios" && (
                  <div className="mt-4 grid grid-cols-1 gap-6 text-sm">
                    <div>
                      <h4 className="font-bold text-gray-700 mb-2">Tecnología de Información</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaCode /> <a href="/DesarrolloDeSoftware">Desarrollo de Software</a></li>
                        <li className="flex items-center gap-2"><FaFileInvoiceDollar /> <a href="/FacturacionElectronica">Facturación Electrónica</a></li>
                        <li className="flex items-center gap-2"><FaLock /> <a href="/TecnologiaEnSeguridad">Tecnología en Seguridad</a></li>
                        <li className="flex items-center gap-2"><FaNetworkWired /> <a href="/RedesEInfraestructura">Redes e Infraestructura</a></li>
                        <li className="flex items-center gap-2"><FaServer /> <a href="/HostingYDominio">Hosting y Dominio</a></li>
                        <li className="flex items-center gap-2"><FaTools /> <a href="/SoporteTecnico">Soporte Técnico</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700 mb-2">Consultoría</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaLaptopCode /> <a href="/ConsultoriaTI">Consultoría TI</a></li>
                        <li className="flex items-center gap-2"><FaBuilding /> <a href="/ConsultoriaEmpresarial">Consultoría Empresarial</a></li>
                        <li className="flex items-center gap-2"><FaChalkboardTeacher /> <a href="/ConsultoriaEducativa">Consultoría Educativa</a></li>
                        <li className="flex items-center gap-2"><FaClipboardCheck /> <a href="/Auditorias">Auditorías</a></li>
                        <li className="flex items-center gap-2"><FaShieldAlt /> <a href="/SeguridadInformatica">Seguridad Informática</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700 mb-2">Marketing Digital</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaCode /> <a href="/DesarrolloDeSitiosWeb">Desarrollo de Sitio Web</a></li>
                        <li className="flex items-center gap-2"><FaSearch /> <a href="/PosicionamientoSEO">Posicionamiento SEO</a></li>
                        <li className="flex items-center gap-2"><FaPaintBrush /> <a href="/GraficaPublicitaria">Gráfica Publicitaria</a></li>
                        <li className="flex items-center gap-2"><FaGift /> <a href="/Merchandising">Merchandising</a></li>
                        <li className="flex items-center gap-2"><FaShareAlt /> <a href="/SocialMedia">Social Media</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-700 mb-2">Ing. Eléctrica</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><FaBolt /> <a href="/MantenimientoElectrico">Mantenimiento Eléctrico</a></li>
                        <li className="flex items-center gap-2"><FaSnowflake /> <a href="/RefrigeracionIndustrial">Refrigeración Industrial</a></li>
                        <li className="flex items-center gap-2"><FaPlug /> <a href="/InstalacionesElectricas">Instalaciones Eléctricas</a></li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li><Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>CONTACTO</Link></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
