import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../assets/logo.svg";

function Footer() {
  const linkStyle = "hover:text-cyan-400 transition-colors duration-200";

  return (
    <footer className="bg-[#111] text-gray-300 pt-14 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo + descripción */}
        <div>
          <img src={logo} alt="logo" className="h-12 mb-4" />

          <p className="text-sm leading-relaxed text-gray-400">
            Soluciones Integrales JB ofrece servicios tecnológicos,
            consultoría empresarial, marketing digital y soluciones
            de ingeniería para empresas y organizaciones.
          </p>

          {/* redes */}
          <div className="flex gap-3 mt-5">
            <a
              href="https://wa.me/51926392858"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full hover:bg-cyan-500"
            >
              <FaWhatsapp />
            </a>

               <a
              href="https://www.facebook.com/solucionesintegralesJB/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full hover:bg-cyan-500"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/solucionesintegralesjb/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full hover:bg-cyan-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/channel/UCwZllsxQMp2LwUSIDmldUeQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full hover:bg-cyan-500"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full hover:bg-cyan-500"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.tiktok.com/@solucionesintegralesjb?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full hover:bg-cyan-500"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Empresa */}
        <div>
          <h3 className="text-white font-semibold mb-4">Empresa</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/QuienesSomos" className={linkStyle}>
                Quiénes Somos
              </Link>
            </li>

            <li>
              <Link to="/NuestraHistoria" className={linkStyle}>
                Nuestra Historia
              </Link>
            </li>

            <li>
              <Link to="/NuestroEquipo" className={linkStyle}>
                Nuestro Equipo
              </Link>
            </li>

            <li>
              <Link to="/Convenios" className={linkStyle}>
                Convenios
              </Link>
            </li>
            {/* Nuevo */}
            <li>
              <Link to="/PoliticadePrivacidad" className={linkStyle}>
                Política de Privacidad
              </Link>
            </li>

            <li>
              <a
                href="https://solucionesintegralesjb.com/zona.cliente/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              > Zona Cliente </a>
            </li>
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-white font-semibold mb-4">Servicios</h3>

          <ul className="space-y-2 text-sm">

            <li>
              <Link to="/DesarrolloDeSoftware" className={linkStyle}>
                Desarrollo de Software
              </Link>
            </li>

            <li>
              <Link to="/DesarrolloDeSitiosWeb" className={linkStyle}>
                Desarrollo Web
              </Link>
            </li>

            <li>
              <Link to="/FacturacionElectronica" className={linkStyle}>
                Facturación Electrónica
              </Link>
            </li>

            <li>
              <Link to="/HostingYDominio" className={linkStyle}>
                Hosting y Dominio
              </Link>
            </li>

            <li>
              <Link to="/SoporteTecnico" className={linkStyle}>
                Soporte Técnico
              </Link>
            </li>

            <li>
              <Link to="/SeguridadInformatica" className={linkStyle}>
                Seguridad Informática
              </Link>
            </li>

          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contacto</h3>

          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-2">
              <FaMapMarkerAlt />
              Chancay, Lima, Perú
            </li>

            <li className="flex items-center gap-2">
              <FaWhatsapp />
              <a target="_blank" href="https://wa.me/51926392858" className="text-cyan-400 hover:underline">
                +51 926 392 858
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope />
              consultas@solucionesintegralesjb.com
            </li>

            <li>
              <Link to="/contacto" className="text-cyan-400 hover:underline">
                Ir a contacto →
              </Link>
            </li>

          </ul>
        </div>
      </div>

      {/* linea */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Soluciones Integrales JB. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;