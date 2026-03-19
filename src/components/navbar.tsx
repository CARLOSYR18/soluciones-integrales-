import React, { useState } from "react";
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
  FaHeadset,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // iconos hamburguesa
import logo from "../assets/logo.svg";


function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
  <nav className="bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between shadow-md w-full md:sticky md:top-0 md:z-40">



      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-90 h-10" />
      </div>

      {/* Menú Desktop */}
      <ul className="hidden md:flex gap-8 text-sm font-semibold select-none">
        <li>
          <a
            href="/"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            INICIO
          </a>
        </li>

    {/* Dropdown Nosotros */}
<li className="relative cursor-pointer group">
  <span className="hover:text-cyan-400 transition-colors duration-200">
    NOSOTROS
  </span>
  <div
    className="fixed left-0 top-[70px] w-[80%] mx-auto right-0 bg-white z-50 p-10 grid grid-cols-4 gap-10 
               opacity-0 invisible group-hover:opacity-100 group-hover:visible 
               transition-all duration-300 shadow-lg rounded-lg"
  >
    {/* Sección Nuestra Empresa */}
    <div>
      <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
        Nuestra Empresa
      </p>
      <ul className="space-y-3 text-gray-700 text-sm">
        {[
          { icon: <FaUsers />, label: "Quienes Somos", href: "/QuienesSomos" },
          { icon: <FaHistory />, label: "Nuestra Historia", href: "/NuestraHistoria" }
        ].map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 group/item relative">
            {item.icon}
            <a
              href={item.href}
              className="hover:text-cyan-600 transition-colors duration-200 relative"
            >
              {item.label}
              {/* Subrayado animado */}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Sección Responsabilidad Social */}
    <div>
      <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
        Responsabilidad Social
      </p>
      <ul className="space-y-3 text-gray-700 text-sm">
        {[
          { icon: <FaHandshake />, label: "Convenios", href: "/Convenios" },
          { icon: <FaPeopleCarry />, label: "Comunidad Activa", href: "/ComunidadActiva" }
        ].map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 group/item relative">
            {item.icon}
            <a
              href={item.href}
              className="hover:text-cyan-600 transition-colors duration-200 relative"
            >
              {item.label}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Sección Consultoría */}
    <div>
      <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
        Consultoría
      </p>
      <ul className="space-y-3 text-gray-700 text-sm">
        {[
          { icon: <FaLaptopCode />, label: "Consultoría TI", href: "/ConsultoriaTI" },
          { icon: <FaBuilding />, label: "Consultoría Empresarial", href: "/ConsultoriaEmpresarial" }
        ].map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 group/item relative">
            {item.icon}
            <a
              href={item.href}
              className="hover:text-cyan-600 transition-colors duration-200 relative"
            >
              {item.label}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Sección Nuestra Organización */}
    <div>
      <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
        Nuestra Organización
      </p>
      <ul className="space-y-3 text-gray-700 text-sm">
        {[
          { icon: <FaSitemap />, label: "Organigrama", href: "/Organigrama" },
          { icon: <FaUserTie />, label: "Nuestro Equipo", href: "/NuestroEquipo" }
        ].map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 group/item relative">
            {item.icon}
            <a
              href={item.href}
              className="hover:text-cyan-600 transition-colors duration-200 relative"
            >
              {item.label}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</li>

{/* Dropdown Servicios */}
<li className="relative cursor-pointer group">
  <span className="hover:text-cyan-400 transition-colors duration-200">
    SERVICIOS
  </span>
  <div
    className="fixed left-0 top-[70px] w-[90%] mx-auto right-0 bg-white z-50 p-10 grid grid-cols-4 gap-10 
               opacity-0 invisible group-hover:opacity-100 group-hover:visible 
               transition-all duration-300 shadow-lg rounded-lg"
  >
    {/* Sección Tecnología */}
    <div>
      <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
        Tecnología de Información
      </p>
      <ul className="space-y-3 text-gray-700 text-sm">
        {[
          { icon: <FaCode />, label: "Desarrollo de Software", href: "/DesarrolloDeSoftware" },
          { icon: <FaFileInvoiceDollar />, label: "Facturación Electrónica", href: "/FacturacionElectronica" },
          { icon: <FaLock />, label: "Tecnología en Seguridad", href: "/TecnologiaEnSeguridad" },
          { icon: <FaNetworkWired />, label: "Redes e Infraestructura", href: "/RedesEInfrostructura" },
          { icon: <FaServer />, label: "Hosting y Dominio", href: "/HostingYDominio" },
          { icon: <FaTools />, label: "Soporte Técnico", href: "/SoporteTecnico" }
        ].map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 group/item relative">
            {item.icon}
            <a
              href={item.href}
              className="hover:text-cyan-600 transition-colors duration-200 relative"
            >
              {item.label}
              {/* Subrayado animado */}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Sección Consultoría */}
    <div>
      <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
        Consultoría
      </p>
      <ul className="space-y-3 text-gray-700 text-sm">
        {[
          { icon: <FaLaptopCode />, label: "Consultoría TI", href: "/ConsultoriaTI" },
          { icon: <FaBuilding />, label: "Consultoría Empresarial", href: "/ConsultoriaEmpresarial" },
          { icon: <FaChalkboardTeacher />, label: "Consultoría Educativa", href: "/ConsultoriaEducativa" },
          { icon: <FaClipboardCheck />, label: "Auditorías", href: "/Auditorias" },
          { icon: <FaShieldAlt />, label: "Seguridad Informática", href: "/SeguridadInformatica" }
        ].map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 group/item relative">
            {item.icon}
            <a
              href={item.href}
              className="hover:text-cyan-600 transition-colors duration-200 relative"
            >
              {item.label}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Sección Marketing Digital */}
    <div>
      <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
        Marketing Digital
      </p>
      <ul className="space-y-3 text-gray-700 text-sm">
        {[
          { icon: <FaCode />, label: "Desarrollo de Sitio Web", href: "/DesarrolloDeSitiosWeb" },
          { icon: <FaSearch />, label: "Posicionamiento SEO", href: "/PosicionamientoSEO" },
          { icon: <FaPaintBrush />, label: "Gráfica Publicitaria", href: "/GraficaPublicitaria" },
          { icon: <FaGift />, label: "Merchandising", href: "/Merchandising" },
          { icon: <FaShareAlt />, label: "Social Media", href: "/SocialMedia" }
        ].map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 group/item relative">
            {item.icon}
            <a
              href={item.href}
              className="hover:text-cyan-600 transition-colors duration-200 relative"
            >
              {item.label}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Sección Ing. Eléctrica */}
    <div>
      <p className="text-xs uppercase font-bold text-cyan-600 mb-4">
        Ing. Eléctrica
      </p>
      <ul className="space-y-3 text-gray-700 text-sm">
        {[
          { icon: <FaBolt />, label: "Mantenimiento Eléctrico", href: "/MantenimientoElectrico" },
          { icon: <FaSnowflake />, label: "Refrigeración Industrial", href: "/RefrigeracionIndustrial" },
          { icon: <FaPlug />, label: "Instalaciones Eléctricas", href: "/InstalacionesElectricas" }
        ].map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 group/item relative">
            {item.icon}
            <a
              href={item.href}
              className="hover:text-cyan-600 transition-colors duration-200 relative"
            >
              {item.label}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover/item:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</li>
<li>
          <Link
            to="/Productos"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            PRODUCTOS
          </Link>
        </li>



        <li>
          <Link
            to="/contacto"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
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
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEnsF-ThdiG6wAAAZmCDWzwVJaTR1vjPPp6uv0JzfhdWh9HdUi2ruenocalO7aVtO01d1i-f6pdm2vsTla4cINdCtOMymMuBfBVhvrYXXNQFKhXmuFz-pD0IK6OTq1UICqMgpI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsoluciones-integrales-jb%2F%3ForiginalSubdomain%3Dpe" },
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
  <div className="fixed inset-0 z-50 flex">
    {/* Fondo oscuro */}
    <div
      className="fixed inset-0 bg-black bg-opacity-50"
      onClick={() => setMobileMenuOpen(false)}
    ></div>

    {/* Sidebar */}
    <div className="ml-auto w-80 bg-white shadow-lg p-6 h-full overflow-y-auto transform transition-transform duration-300 ease-in-out">
      <button
        className="absolute top-4 right-4 text-2xl"
        onClick={() => setMobileMenuOpen(false)}
      >
        <FiX />
      </button>

      <ul className="mt-10 space-y-4 font-semibold text-gray-800">
        <li>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            INICIO
          </Link>
        </li>

        {/* Dropdown Nosotros */}
        <li>
          <button
            onClick={() => toggleDropdown("nosotros")}
            className="w-full text-left"
          >
            NOSOTROS
          </button>
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

        {/* Dropdown Servicios */}
        <li>
          <button
            onClick={() => toggleDropdown("servicios")}
            className="w-full text-left"
          >
            SERVICIOS
          </button>
          {openDropdown === "servicios" && (
            <div className="mt-4 grid grid-cols-1 gap-6 text-sm">
              {/* Tecnología de Información */}
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

              {/* Consultoría */}
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

              {/* Marketing Digital */}
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

              {/* Ingeniería Eléctrica */}
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
        <li>
          <Link to="/Productos" onClick={() => setMobileMenuOpen(false)}>
            PRODUCTOS
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
