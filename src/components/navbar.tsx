import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  FaFacebookF, FaEnvelope, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok,
  FaUsers, FaHistory, FaHandshake, FaPeopleCarry, FaLaptopCode, FaBuilding,
  FaChalkboardTeacher, FaClipboardCheck, FaShieldAlt, FaSitemap, FaUserTie,
  FaCode, FaFileInvoiceDollar, FaLock, FaNetworkWired, FaServer, FaTools,
  FaSearch, FaPaintBrush, FaGift, FaShareAlt, FaBolt, FaSnowflake, FaPlug,FaWhatsapp,
  FaHeadset,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";

/* ───────────────────────────────────────────
   Estilos inline reutilizables
   ─────────────────────────────────────────── */
const navBarStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 40,
  background: "rgba(17, 17, 17, 0.95)",
  backdropFilter: "blur(16px) saturate(180%)",
  WebkitBackdropFilter: "blur(16px) saturate(180%)",
  padding: "0 24px",
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const separatorStyle: React.CSSProperties = {
  width: "1px",
  height: "28px",
  background: "linear-gradient(to bottom, transparent, #475569, transparent)",
  margin: "0 24px",
  flexShrink: 0,
};

const menuLinkBase: React.CSSProperties = {
  color: "#cbd5e1",
  fontWeight: 500,
  fontSize: "14px",
  letterSpacing: "0.3px",
  cursor: "pointer",
  padding: "0px 0 0px 0",
  display: "inline-block",
  transition: "color 0.25s ease, border-color 0.25s ease",
  textDecoration: "none",
  fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
  borderBottom: "2px solid transparent",
};

const socialBtnStyle: React.CSSProperties = {
  width: "34px",
  height: "34px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(206, 57, 57, 0.08)",
  color: "#94a3b8",
  fontSize: "13px",
  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
  cursor: "pointer",
  border: "1px solid rgba(255,255,255,0.06)",
  textDecoration: "none",
};

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

  const dropdownStyle = (menu: string): React.CSSProperties => ({
    position: "fixed",
    top: "100%",
    left: "50%",
    transform: activeMenu === menu ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-12px)",
    width: "92vw",
    maxWidth: "1400px",
    zIndex: 9999,
    opacity: activeMenu === menu ? 1 : 0,
    visibility: activeMenu === menu ? "visible" : "hidden",
    transition: "opacity 0.35s cubic-bezier(0.4,0,0.2,1), visibility 0.35s ease, transform 0.35s cubic-bezier(0.4,0,0.2,1)",
    pointerEvents: activeMenu === menu ? "auto" : "none",
    paddingTop: "8px",
  });

  const dropdownCardStyle: React.CSSProperties = {
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow:
      "0 20px 60px rgba(0, 0, 0, 0.10), 0 4px 16px rgba(0, 0, 0, 0.04)",
    padding: "32px 32px",
    border: "1px solid #e5e8ec",
    overflow: "hidden",
  };

  /* ── Subcomponente: Link del dropdown ── */
  const DropdownLink = ({
    icon,
    label,
    href,
    desc,
  }: {
    icon: React.ReactNode;
    label: string;
    href: string;
    desc?: string;
  }) => (
    <li style={{ listStyle: "none" }} className="dropdown-item">
      <Link
        to={href}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "14px 12px",
          borderRadius: "14px",
          color: "#1e293b",
          textDecoration: "none",
          transition: "all 0.2s ease",
          fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#f0fdfa";
          const iconEl = e.currentTarget.querySelector("[data-icon]") as HTMLElement;
          if (iconEl) {
            iconEl.style.background = "#ccfbf1";
            iconEl.style.color = "#0d9488";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          const iconEl = e.currentTarget.querySelector("[data-icon]") as HTMLElement;
          if (iconEl) {
            iconEl.style.background = "#e5e8ec";
            iconEl.style.color = "#64748b";
          }
        }}
      >
        <span
          data-icon="true"
          style={{
            fontSize: "16px",
            color: "#64748b",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "#e5e8ec",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.2s ease",
          }}
        >
          {icon}
        </span>
        <div style={{ minWidth: 0, overflow: "hidden" }}>
          <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#1e293b", lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {label}
          </div>
          {desc && (
            <div style={{ fontSize: "11.5px", fontWeight: 400, color: "#94a3b8", marginTop: "2px", lineHeight: 1.4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {desc}
            </div>
          )}
        </div>
      </Link>
    </li>
  );

  /* ── Subcomponente: Título de sección del dropdown ── */
  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <p
      className="dropdown-section-title"
      style={{
        fontSize: "11.5px",
        textTransform: "uppercase",
        fontWeight: 700,
        color: "#0ea5e9",
        letterSpacing: "1.5px",
        marginBottom: "16px",
        paddingLeft: "8px",
        fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      }}
    >
      {children}
    </p>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        @keyframes dropdownItemFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dropdownTitleSlide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .dropdown-section-title {
          animation: dropdownTitleSlide 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
        }

        .dropdown-item {
          opacity: 0;
          animation: dropdownItemFadeIn 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
        }

        .dropdown-item:nth-child(1) { animation-delay: 0.05s; }
        .dropdown-item:nth-child(2) { animation-delay: 0.1s; }
        .dropdown-item:nth-child(3) { animation-delay: 0.15s; }
        .dropdown-item:nth-child(4) { animation-delay: 0.2s; }
        .dropdown-item:nth-child(5) { animation-delay: 0.25s; }
        .dropdown-item:nth-child(6) { animation-delay: 0.3s; }

        .dropdown-col {
          opacity: 0;
          animation: dropdownItemFadeIn 0.45s cubic-bezier(0.4,0,0.2,1) forwards;
        }

        .dropdown-col:nth-child(1) { animation-delay: 0s; }
        .dropdown-col:nth-child(2) { animation-delay: 0.08s; }
        .dropdown-col:nth-child(3) { animation-delay: 0.16s; }
        .dropdown-col:nth-child(4) { animation-delay: 0.24s; }

        .navbar-bg-band {
          display: none;
        }

        @media (min-width: 768px) {
          .navbar-bg-band {
            display: block;
          }
          .navbar-main {
            border-radius: 16px !important;
            margin: 0 24px !important;
            margin-top: -74px !important;
            padding: 0 32px !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            box-shadow: 0 4px 24px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06) !important;
          }
        }
      `}</style>

      {/* Fondo negro: solo desktop, estático */}
      <div className="navbar-bg-band" style={{ background: "#0a0a0a", height: "84px" }} />

      {/* Navbar */}
      <nav style={navBarStyle} className="navbar-main">
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
        </div>

        {/* Separador vertical */}
        <div style={separatorStyle} className="hidden md:block" />

        {/* ══ MENÚ DESKTOP ══ */}
        <ul
          style={{
            overflow: "visible",
            alignItems: "center",
            gap: "32px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            flex: 1,
          }}
          className="hidden md:flex"
        >
          <li style={{ whiteSpace: "nowrap" }}>
            <a
              href="/"
              style={menuLinkBase}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.borderBottom = "2px solid #38bdf8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#cbd5e1";
                e.currentTarget.style.borderBottom = "2px solid transparent";
              }}
            >
              INICIO
            </a>
          </li>

          {/* ── NOSOTROS ── */}
          <li
            style={{ whiteSpace: "nowrap", position: "relative" }}
            onMouseEnter={() => handleMouseEnter("nosotros")}
            onMouseLeave={(e) => {
              handleMouseLeave();
              const span = e.currentTarget.querySelector("span") as HTMLElement;
              if (span) {
                span.style.color = "#cbd5e1";
                span.style.borderBottom = "2px solid transparent";
              }
            }}
          >
            <span
              style={menuLinkBase}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.borderBottom = "2px solid #38bdf8";
              }}
            >
              NOSOTROS
            </span>

            <div style={dropdownStyle("nosotros")}>
              <div
                onMouseEnter={() => handleMouseEnter("nosotros")}
                onMouseLeave={handleMouseLeave}
                style={{
                  ...dropdownCardStyle,
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "24px",
                }}
              >
                <div className="dropdown-col">
                  <SectionTitle>Nuestra Empresa</SectionTitle>
                  <ul style={{ margin: 0, padding: 0 }}>
                    <DropdownLink icon={<FaUsers />} label="Quienes Somos" href="/QuienesSomos" desc="Conoce nuestra misión, visión y valores." />
                    <DropdownLink icon={<FaHistory />} label="Nuestra Historia" href="/NuestraHistoria" desc="Trayectoria y evolución de la empresa." />
                  </ul>
                </div>
                <div className="dropdown-col">
                  <SectionTitle>Responsabilidad Social</SectionTitle>
                  <ul style={{ margin: 0, padding: 0 }}>
                    <DropdownLink icon={<FaHandshake />} label="Convenios" href="/Convenios" desc="Alianzas estratégicas con instituciones." />
                    <DropdownLink icon={<FaPeopleCarry />} label="Comunidad Activa" href="/ComunidadActiva" desc="Nuestro impacto en la comunidad." />
                  </ul>
                </div>
                <div className="dropdown-col">
                  <SectionTitle>Consultoría</SectionTitle>
                  <ul style={{ margin: 0, padding: 0 }}>
                    <DropdownLink icon={<FaLaptopCode />} label="Consultoría TI" href="/ConsultoriaTI" desc="Asesoría en tecnologías de información." />
                    <DropdownLink icon={<FaBuilding />} label="Consultoría Empresarial" href="/ConsultoriaEmpresarial" desc="Estrategias para el crecimiento de tu negocio." />
                  </ul>
                </div>
                <div className="dropdown-col">
                  <SectionTitle>Nuestra Organización</SectionTitle>
                  <ul style={{ margin: 0, padding: 0 }}>
                    <DropdownLink icon={<FaSitemap />} label="Organigrama" href="/Organigrama" desc="Estructura organizacional de la empresa." />
                    <DropdownLink icon={<FaUserTie />} label="Nuestro Equipo" href="/NuestroEquipo" desc="Conoce a los profesionales detrás de JB." />
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* ── SERVICIOS ── */}
          <li
            style={{ whiteSpace: "nowrap", position: "relative" }}
            onMouseEnter={() => handleMouseEnter("servicios")}
            onMouseLeave={(e) => {
              handleMouseLeave();
              const span = e.currentTarget.querySelector("span") as HTMLElement;
              if (span) {
                span.style.color = "#cbd5e1";
                span.style.borderBottom = "2px solid transparent";
              }
            }}
          >
            <span
              style={menuLinkBase}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.borderBottom = "2px solid #38bdf8";
              }}
            >
              SERVICIOS
            </span>

            <div style={dropdownStyle("servicios")}>
              <div
                onMouseEnter={() => handleMouseEnter("servicios")}
                onMouseLeave={handleMouseLeave}
                style={{
                  ...dropdownCardStyle,
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "24px",
                }}
              >
                <div className="dropdown-col">
                  <SectionTitle>Tecnología de Información</SectionTitle>
                  <ul style={{ margin: 0, padding: 0 }}>
                    <DropdownLink icon={<FaCode />} label="Desarrollo de Software" href="/DesarrolloDeSoftware" desc="Software a medida para tu empresa." />
                    <DropdownLink icon={<FaFileInvoiceDollar />} label="Facturación Electrónica" href="/FacturacionElectronica" desc="Cumple con SUNAT de forma eficiente." />
                    <DropdownLink icon={<FaLock />} label="Tecnología en Seguridad" href="/TecnologiaEnSeguridad" desc="Cámaras, alarmas y control de acceso." />
                    <DropdownLink icon={<FaNetworkWired />} label="Redes e Infraestructura" href="/RedesEInfrostructura" desc="Diseño e implementación de redes." />
                    <DropdownLink icon={<FaServer />} label="Hosting y Dominio" href="/HostingYDominio" desc="Alojamiento web seguro y confiable." />
                    <DropdownLink icon={<FaTools />} label="Soporte Técnico" href="/SoporteTecnico" desc="Asistencia técnica especializada." />
                  </ul>
                </div>
                <div className="dropdown-col">
                  <SectionTitle>Consultoría</SectionTitle>
                  <ul style={{ margin: 0, padding: 0 }}>
                    <DropdownLink icon={<FaLaptopCode />} label="Consultoría TI" href="/ConsultoriaTI" desc="Asesoría en tecnologías de información." />
                    <DropdownLink icon={<FaBuilding />} label="Consultoría Empresarial" href="/ConsultoriaEmpresarial" desc="Estrategias para optimizar tu negocio." />
                    <DropdownLink icon={<FaChalkboardTeacher />} label="Consultoría Educativa" href="/ConsultoriaEducativa" desc="Soluciones para instituciones educativas." />
                    <DropdownLink icon={<FaClipboardCheck />} label="Auditorías" href="/Auditorias" desc="Evaluación y mejora de procesos." />
                    <DropdownLink icon={<FaShieldAlt />} label="Seguridad Informática" href="/SeguridadInformatica" desc="Protege tus datos y sistemas." />
                  </ul>
                </div>
                <div className="dropdown-col">
                  <SectionTitle>Marketing Digital</SectionTitle>
                  <ul style={{ margin: 0, padding: 0 }}>
                    <DropdownLink icon={<FaCode />} label="Desarrollo de Sitio Web" href="/DesarrolloDeSitiosWeb" desc="Páginas web modernas y responsivas." />
                    <DropdownLink icon={<FaSearch />} label="Posicionamiento SEO" href="/PosicionamientoSEO" desc="Mejora tu visibilidad en Google." />
                    <DropdownLink icon={<FaPaintBrush />} label="Gráfica Publicitaria" href="/GraficaPublicitaria" desc="Diseño visual para tu marca." />
                    <DropdownLink icon={<FaGift />} label="Merchandising" href="/Merchandising" desc="Artículos promocionales personalizados." />
                    <DropdownLink icon={<FaShareAlt />} label="Social Media" href="/SocialMedia" desc="Gestión de redes sociales." />
                  </ul>
                </div>
                <div className="dropdown-col">
                  <SectionTitle>Ing. Eléctrica</SectionTitle>
                  <ul style={{ margin: 0, padding: 0 }}>
                    <DropdownLink icon={<FaBolt />} label="Mantenimiento Eléctrico" href="/MantenimientoElectrico" desc="Mantenimiento preventivo y correctivo." />
                    <DropdownLink icon={<FaSnowflake />} label="Refrigeración Industrial" href="/RefrigeracionIndustrial" desc="Sistemas de refrigeración a gran escala." />
                    <DropdownLink icon={<FaPlug />} label="Instalaciones Eléctricas" href="/InstalacionesElectricas" desc="Instalación eléctrica profesional." />
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li style={{ whiteSpace: "nowrap" }}>
            <Link
              to="/contacto"
              style={menuLinkBase}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.borderBottom = "2px solid #38bdf8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#cbd5e1";
                e.currentTarget.style.borderBottom = "2px solid transparent";
              }}
            >
              CONTACTO
            </Link>
          </li>
        </ul>

        {/* Redes sociales Desktop */}
        <div
          className="hidden md:flex"
          style={{ gap: "8px", flexShrink: 0, marginLeft: "16px" }}
        >
          {[
            { icon: FaFacebookF, url: "https://www.facebook.com/solucionesintegralesJB/", color: "#1877F2" },
            { icon: FaEnvelope, url: "/contacto", color: "#EA4335" },
            { icon: FaInstagram, url: "https://www.instagram.com/solucionesintegralesjb/", color: "#E4405F" },
            { icon: FaYoutube, url: "https://www.youtube.com/channel/UCwZllsxQMp2LwUSIDmldUeQ", color: "#FF0000" },
            { icon: FaLinkedinIn, url: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEnsF-ThdiG6wAAAZmCDWzwVJaTR1vjPPp6uv0JzfhdWh9HdUi2ruenocalO7aVtO01d1i-f6pdm2vsTla4cINdCtOMymMuBfBVhvrYXXNQFKhXmuFz-pD0IK6OTq1UICqMgpI=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsoluciones-integrales-jb%2F%3ForiginalSubdomain%3Dpe", color: "#0A66C2" },
            { icon: FaTiktok, url: "https://www.tiktok.com/@solucionesintegralesjb?lang=es", color: "#000000" },
            { icon: FaWhatsapp, url: "https://wa.me/51926392858", color: "#25D366" },
          ].map(({ icon: Icon, url, color }, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...socialBtnStyle, background: color, color: "#ffffff", border: "none" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 4px 12px ${color}50`;
                e.currentTarget.style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.opacity = "1";
              }}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden"
          style={{
            fontSize: "24px",
            color: "#e2e8f0",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* ══ SIDEBAR MÓVIL ══ */}
        {mobileMenuOpen && createPortal(
          <div className="fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0"
              style={{ background: "rgba(15, 23, 42, 0.4)", backdropFilter: "blur(4px)" }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <div
              style={{
                marginLeft: "auto",
                width: "320px",
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(20px)",
                boxShadow: "-8px 0 40px rgba(0,0,0,0.12)",
                padding: "24px",
                height: "100%",
                overflowY: "auto",
                fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
              }}
            >
              <button
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  fontSize: "24px",
                  color: "#475569",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiX />
              </button>
              <ul
                style={{
                  marginTop: "48px",
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <li>
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      fontWeight: 600,
                      color: "#1e293b",
                      textDecoration: "none",
                      fontSize: "15px",
                    }}
                  >
                    INICIO
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => toggleDropdown("nosotros")}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      fontWeight: 600,
                      color: "#1e293b",
                      background: openDropdown === "nosotros" ? "#e5e8ec" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "15px",
                      fontFamily: "inherit",
                    }}
                  >
                    NOSOTROS
                  </button>
                  {openDropdown === "nosotros" && (
                    <div style={{ padding: "8px 0 0 8px" }}>
                      <div style={{ marginBottom: "16px" }}>
                        <h4 style={{ fontSize: "11px", textTransform: "uppercase", fontWeight: 700, color: "#1e5fa8", letterSpacing: "1px", marginBottom: "8px", paddingLeft: "8px" }}>Nuestra Identidad</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaUsers /> <a href="/QuienesSomos" style={{ color: "inherit", textDecoration: "none" }}>Quiénes Somos</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaHistory /> <a href="/NuestraHistoria" style={{ color: "inherit", textDecoration: "none" }}>Nuestra Historia</a></li>
                        </ul>
                      </div>
                      <div style={{ marginBottom: "16px" }}>
                        <h4 style={{ fontSize: "11px", textTransform: "uppercase", fontWeight: 700, color: "#1e5fa8", letterSpacing: "1px", marginBottom: "8px", paddingLeft: "8px" }}>Alianzas</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaHandshake /> <a href="/convenios" style={{ color: "inherit", textDecoration: "none" }}>Convenios</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaPeopleCarry /> <a href="/comunidadActiva" style={{ color: "inherit", textDecoration: "none" }}>Comunidad Activa</a></li>
                        </ul>
                      </div>
                      <div style={{ marginBottom: "16px" }}>
                        <h4 style={{ fontSize: "11px", textTransform: "uppercase", fontWeight: 700, color: "#1e5fa8", letterSpacing: "1px", marginBottom: "8px", paddingLeft: "8px" }}>Consultoría</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaLaptopCode /> <a href="/ConsultoriaTI" style={{ color: "inherit", textDecoration: "none" }}>Consultoría TI</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaBuilding /> <a href="/ConsultoriaEmpresarial" style={{ color: "inherit", textDecoration: "none" }}>Consultoría Empresarial</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "11px", textTransform: "uppercase", fontWeight: 700, color: "#1e5fa8", letterSpacing: "1px", marginBottom: "8px", paddingLeft: "8px" }}>Equipo</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaUserTie /> <a href="/NuestroEquipo" style={{ color: "inherit", textDecoration: "none" }}>Nuestro Equipo</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaSitemap /> <a href="/Organigrama" style={{ color: "inherit", textDecoration: "none" }}>Organigrama</a></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <button
                    onClick={() => toggleDropdown("servicios")}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      fontWeight: 600,
                      color: "#1e293b",
                      background: openDropdown === "servicios" ? "#e5e8ec" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "15px",
                      fontFamily: "inherit",
                    }}
                  >
                    SERVICIOS
                  </button>
                  {openDropdown === "servicios" && (
                    <div style={{ padding: "8px 0 0 8px" }}>
                      <div style={{ marginBottom: "16px" }}>
                        <h4 style={{ fontSize: "11px", textTransform: "uppercase", fontWeight: 700, color: "#1e5fa8", letterSpacing: "1px", marginBottom: "8px", paddingLeft: "8px" }}>Tecnología de Información</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaCode /> <a href="/DesarrolloDeSoftware" style={{ color: "inherit", textDecoration: "none" }}>Desarrollo de Software</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaFileInvoiceDollar /> <a href="/FacturacionElectronica" style={{ color: "inherit", textDecoration: "none" }}>Facturación Electrónica</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaLock /> <a href="/TecnologiaEnSeguridad" style={{ color: "inherit", textDecoration: "none" }}>Tecnología en Seguridad</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaNetworkWired /> <a href="/RedesEInfraestructura" style={{ color: "inherit", textDecoration: "none" }}>Redes e Infraestructura</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaServer /> <a href="/HostingYDominio" style={{ color: "inherit", textDecoration: "none" }}>Hosting y Dominio</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaTools /> <a href="/SoporteTecnico" style={{ color: "inherit", textDecoration: "none" }}>Soporte Técnico</a></li>
                        </ul>
                      </div>
                      <div style={{ marginBottom: "16px" }}>
                        <h4 style={{ fontSize: "11px", textTransform: "uppercase", fontWeight: 700, color: "#1e5fa8", letterSpacing: "1px", marginBottom: "8px", paddingLeft: "8px" }}>Consultoría</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaLaptopCode /> <a href="/ConsultoriaTI" style={{ color: "inherit", textDecoration: "none" }}>Consultoría TI</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaBuilding /> <a href="/ConsultoriaEmpresarial" style={{ color: "inherit", textDecoration: "none" }}>Consultoría Empresarial</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaChalkboardTeacher /> <a href="/ConsultoriaEducativa" style={{ color: "inherit", textDecoration: "none" }}>Consultoría Educativa</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaClipboardCheck /> <a href="/Auditorias" style={{ color: "inherit", textDecoration: "none" }}>Auditorías</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaShieldAlt /> <a href="/SeguridadInformatica" style={{ color: "inherit", textDecoration: "none" }}>Seguridad Informática</a></li>
                        </ul>
                      </div>
                      <div style={{ marginBottom: "16px" }}>
                        <h4 style={{ fontSize: "11px", textTransform: "uppercase", fontWeight: 700, color: "#1e5fa8", letterSpacing: "1px", marginBottom: "8px", paddingLeft: "8px" }}>Marketing Digital</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaCode /> <a href="/DesarrolloDeSitiosWeb" style={{ color: "inherit", textDecoration: "none" }}>Desarrollo de Sitio Web</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaSearch /> <a href="/PosicionamientoSEO" style={{ color: "inherit", textDecoration: "none" }}>Posicionamiento SEO</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaPaintBrush /> <a href="/GraficaPublicitaria" style={{ color: "inherit", textDecoration: "none" }}>Gráfica Publicitaria</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaGift /> <a href="/Merchandising" style={{ color: "inherit", textDecoration: "none" }}>Merchandising</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaShareAlt /> <a href="/SocialMedia" style={{ color: "inherit", textDecoration: "none" }}>Social Media</a></li>
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "11px", textTransform: "uppercase", fontWeight: 700, color: "#1e5fa8", letterSpacing: "1px", marginBottom: "8px", paddingLeft: "8px" }}>Ing. Eléctrica</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaBolt /> <a href="/MantenimientoElectrico" style={{ color: "inherit", textDecoration: "none" }}>Mantenimiento Eléctrico</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaSnowflake /> <a href="/RefrigeracionIndustrial" style={{ color: "inherit", textDecoration: "none" }}>Refrigeración Industrial</a></li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", fontSize: "13px", color: "#475569" }}><FaPlug /> <a href="/InstalacionesElectricas" style={{ color: "inherit", textDecoration: "none" }}>Instalaciones Eléctricas</a></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    to="/contacto"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      fontWeight: 600,
                      color: "#1e293b",
                      textDecoration: "none",
                      fontSize: "15px",
                    }}
                  >
                    CONTACTO
                  </Link>
                </li>
              </ul>
            </div>
          </div>,
          document.body
        )}
      </nav>
    </>
  );
}

export default Navbar;