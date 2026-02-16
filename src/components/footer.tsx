import React from "react";

import StickerPeel from '../components/StickerPeel';
import logo from '../assets/logo2.jpg'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + descripción */}
  
 <div className="flex flex-col items-center"> 
  {/* Logo con efecto */}
  <div className="mb-6 relative w-[144px] h-[144px]">
    <StickerPeel
      imageSrc="/logo2.jpg"
      width={144}               // mismo tamaño que el <img>
      rotate={1}
      peelBackHoverPct={39}
      peelBackActivePct={40}
      shadowIntensity={0.6}
      lightingIntensity={0.1}
      initialPosition="center"
      peelDirection={45}
    />
  </div>

  {/* Descripción */}
  <p className="text-sm leading-relaxed text-gray-400 text-center">
    Impulsamos el éxito de tu negocio con soluciones digitales
    innovadoras y diseño creativo, adaptados a tus necesidades para
    asegurar tu crecimiento.
  </p>
</div>



        {/* Servicios */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 transition">Tecnología de información</li>
            <li className="hover:text-cyan-400 transition">Ingeniería eléctrica</li>
            <li className="hover:text-cyan-400 transition">Marketing digital</li>
          </ul>
        </div>

        {/* Nosotros */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Nosotros</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 transition">¿Quiénes Somos?</li>
            <li className="hover:text-cyan-400 transition">Convenios</li>
            <li className="hover:text-cyan-400 transition">Organigrama</li>
            <li className="hover:text-cyan-400 transition">Términos y Garantías</li>
            <li className="hover:text-cyan-400 transition">Formulario de Contacto</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Conecta con nosotros
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" />
              Av. Lopez de Zúñiga Nº 547 2º Piso, Chancay
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-400" />
              consultas@solucionesintegralesjb.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-400" />
              +51 996 720 630
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-400" />
              +51 979 687 700
            </li>
          </ul>
        </div>
        
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
       {/* Copyright */}
  <p className="text-xs text-gray-500 flex-1 text-center">
    © 2024 Soluciones Integrales JB S.A.C. - Todos los derechos reservados.
  </p>
      </div>
    </footer>
  );
};

export default Footer;
