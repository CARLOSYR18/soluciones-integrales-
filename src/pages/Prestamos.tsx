import React, { useEffect, useMemo, useState, FormEvent, ChangeEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type PaymentMode = "cuotas" | "unico";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dni: string;
  district: string;
}

interface TermOption {
  id: string;
  label: string;
  weeks?: number;
  days?: number;
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
}

const PrestamosCalculadora: React.FC = () => {
  // ====== UI / Datos ======
  const termCuotas: TermOption[] = [
    { id: "w4", label: "4 cuotas semanales (28 días)", weeks: 4 },
    { id: "w8", label: "8 cuotas semanales (56 días)", weeks: 8 },
    { id: "w12", label: "12 cuotas semanales (84 días)", weeks: 12 },
  ];

  const termUnico: TermOption[] = [
    { id: "d7", label: "Pago único (7 días)", days: 7 },
    { id: "d14", label: "Pago único (14 días)", days: 14 },
    { id: "d30", label: "Pago único (30 días)", days: 30 },
  ];

  const whyCards = [
    {
      icon: "💸",
      title: "Grandes descuentos",
      desc: "Primer préstamo con grandes descuentos en intereses. Sin condiciones raras.",
    },
    {
      icon: "⚡",
      title: "Préstamo en menos de 24h",
      desc: "100% digital. Sin colas ni papeles. Desde tu teléfono.",
    },
    {
      icon: "⭐",
      title: "Transparencia total",
      desc: "El costo que ves es el que pagas. Cero sorpresas.",
    },
    {
      icon: "⏱️",
      title: "Respuesta inmediata",
      desc: "Aprobamos en minutos. Tu tiempo vale.",
    },
  ];

  const requirements = [
    { n: 1, title: "Documento DNI vigente" },
    { n: 2, title: "Ser mayor de 18 años" },
    { n: 3, title: "Contar con ingresos demostrables" },
    { n: 4, title: "Tener una cuenta bancaria activa" },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "José Morante",
      role: "Cliente desde 2023",
      text: "Excelente atención y rapidez. El dinero llegó el mismo día.",
      stars: 5,
    },
    {
      name: "Renzo Huamanyauri",
      role: "Cliente desde 2024",
      text: "Desembolso rápido y seguro. Proceso muy sencillo y sin sorpresas.",
      stars: 5,
    },
    {
      name: "Archivos Digitales",
      role: "Cliente recurrente",
      text: "Muy conformes con el servicio. Lo recomendamos sin dudarlo.",
      stars: 5,
    },
  ];

  // ====== Estados (Calculadora) ======
  const [mode, setMode] = useState<PaymentMode>("cuotas");
  const [amount, setAmount] = useState<number>(500);
  const [selectedTermId, setSelectedTermId] = useState<string>("w4");
  const [interestPct, setInterestPct] = useState<number>(20); // estilo captura: 20%

  // ====== Estados (Formulario) ======
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    dni: "",
    district: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    dni: false,
    district: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [loansCounter, setLoansCounter] = useState(100);

  // ====== Helpers ======
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
      minimumFractionDigits: 2,
    }).format(value);

  const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

  const activeTerm = useMemo(() => {
    const list = mode === "cuotas" ? termCuotas : termUnico;
    return list.find((t) => t.id === selectedTermId) ?? list[0];
  }, [mode, selectedTermId]);

  const computed = useMemo(() => {
    const principal = amount;
    const interest = principal * (interestPct / 100);

    if (mode === "cuotas") {
      const weeks = activeTerm.weeks ?? 4;
      const total = principal + interest;
      const weekly = total / weeks;

      const lastPayment = new Date();
      lastPayment.setDate(lastPayment.getDate() + weeks * 7);

      return {
        principal,
        interest,
        installmentsText: `${weeks} cuotas semanales`,
        installmentLabel: `Cuota semanal (× ${weeks})`,
        installmentValue: weekly,
        total,
        lastPayment,
      };
    } else {
      const days = activeTerm.days ?? 7;
      // Puedes ajustar la lógica; aquí mantenemos interés fijo para que se vea como la captura
      const total = principal + interest;

      const lastPayment = new Date();
      lastPayment.setDate(lastPayment.getDate() + days);

      return {
        principal,
        interest,
        installmentsText: `Pago único`,
        installmentLabel: `Pago único (${days} días)`,
        installmentValue: total,
        total,
        lastPayment,
      };
    }
  }, [amount, interestPct, mode, activeTerm]);

  const lastPaymentText = useMemo(() => {
    const d = computed.lastPayment;
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }, [computed.lastPayment]);

  // ====== Validación ======
  useEffect(() => {
    const newErrors = {
      fullName: !formData.fullName || formData.fullName.trim().length < 3,
      email: !formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      phone: !formData.phone || !/^\d{9}$/.test(formData.phone.replace(/\s/g, "")),
      dni: !formData.dni || !/^\d{8}$/.test(formData.dni.trim()),
      district: !formData.district || formData.district.trim().length < 2,
    };

    setErrors(newErrors);
    setIsFormValid(!Object.values(newErrors).includes(true));
  }, [formData]);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // ====== Submit ======
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const refNumber = `JB-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 900 + 100)}`;
    setReferenceNumber(refNumber);
    setLoansCounter((p) => p + 1);
    setShowModal(true);

    // reset (solo datos personales; dejamos calculadora como está)
    setFormData({ fullName: "", email: "", phone: "", dni: "", district: "" });
  };

  // ====== UX: si cambias modo, set term default ======
  useEffect(() => {
    if (mode === "cuotas") setSelectedTermId("w4");
    else setSelectedTermId("d7");
  }, [mode]);

  return (
    <>
      <style>
        {`
          :root{
            --jb-green:#12b347;
            --jb-green-dark:#0e9a3d;
            --jb-purple:#6f2dbd;
            --jb-ink:#0b1220;
            --jb-muted:#6b7280;
            --jb-line:#e5e7eb;
            --jb-card:#ffffff;
            --jb-bg:#f7f8fb;
          }

          body{
            background: var(--jb-bg);
            color:#111827;
            font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Apple Color Emoji","Segoe UI Emoji";
          }

          /* Navbar */
          .jb-nav{
            background:#fff;
            border-bottom:1px solid rgba(0,0,0,.06);
            position:sticky;
            top:0;
            z-index:50;
          }
          .jb-brand{
            display:flex; align-items:center; gap:.6rem;
            font-weight:800; letter-spacing:.2px;
            color:#0b1220; text-decoration:none;
          }
          .jb-logo{
            width:34px;height:34px;border-radius:10px;
            background: linear-gradient(135deg, var(--jb-green), #2dd4bf);
            box-shadow: 0 10px 25px rgba(18,179,71,.18);
          }
          .jb-link{
            color:#374151; text-decoration:none; font-weight:600;
            padding:.4rem .6rem; border-radius:10px;
          }
          .jb-link:hover{ background: rgba(17,24,39,.06); color:#111827; }
          .jb-link.active{ color: var(--jb-purple); }

          .jb-btn{
            border:0; border-radius:12px; font-weight:800;
            padding:.65rem 1.05rem;
          }
          .jb-btn-green{
            background: var(--jb-green); color:#fff;
            box-shadow: 0 10px 24px rgba(18,179,71,.18);
          }
          .jb-btn-green:hover{ background: var(--jb-green-dark); }
          .jb-btn-outline{
            background:#fff; color:#111827;
            border:1px solid rgba(17,24,39,.14);
          }
          .jb-btn-outline:hover{ background: rgba(17,24,39,.04); }

          /* Hero split */
          .jb-hero{
            background:#fff;
          }
          .jb-hero-wrap{
            display:grid;
            grid-template-columns: 1.2fr .9fr;
            gap: 2.2rem;
            align-items: stretch;
            padding: 1.6rem 0 2.1rem;
          }
          @media (max-width: 992px){
            .jb-hero-wrap{ grid-template-columns: 1fr; }
          }

          .jb-hero-media{
            border-radius: 18px;
            overflow:hidden;
            min-height: 420px;
            position:relative;
            background:
              radial-gradient(1200px 500px at 0% 100%, rgba(18,179,71,.30), transparent 55%),
              radial-gradient(900px 450px at 80% 10%, rgba(111,45,189,.22), transparent 60%),
              linear-gradient(135deg, #0b1220, #111827);
          }
          .jb-hero-media::after{
            content:"";
            position:absolute; inset:0;
            background: linear-gradient(to top, rgba(0,0,0,.58), rgba(0,0,0,.10));
          }
          .jb-hero-text{
            position:absolute; left: 28px; bottom: 28px; right: 28px;
            z-index:2;
            color:#fff;
          }
          .jb-hero-kicker{
            font-size:.78rem;
            letter-spacing:.18em;
            text-transform: uppercase;
            color: rgba(255,255,255,.74);
            margin-bottom:.35rem;
          }
          .jb-hero-title{
            font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
            font-weight:900;
            font-size: clamp(2.2rem, 3.6vw, 3.2rem);
            line-height: 1.03;
            margin:0 0 .35rem;
          }
          .jb-hero-title span{
            color: #74f3a6;
            font-style: italic;
            font-weight:800;
          }
          .jb-hero-sub{
            max-width: 520px;
            color: rgba(255,255,255,.82);
            margin: 0;
          }

          /* Calculator card */
          .jb-panel{
            background: var(--jb-card);
            border-radius: 18px;
            border: 1px solid rgba(0,0,0,.06);
            box-shadow: 0 10px 30px rgba(17,24,39,.08);
            padding: 1.35rem;
          }
          .jb-panel h6{
            color: var(--jb-green);
            font-weight:900;
            text-align:center;
            margin-bottom: 1rem;
          }
          .jb-seg{
            display:flex; gap:.6rem;
            background:#f2f5f9;
            border-radius: 14px;
            padding:.45rem;
            border:1px solid rgba(0,0,0,.06);
          }
          .jb-seg button{
            flex:1; border:0; border-radius: 12px;
            padding:.62rem .8rem;
            font-weight:900;
            background: transparent;
            color:#111827;
          }
          .jb-seg button.active{
            background: var(--jb-green);
            color:#fff;
            box-shadow: 0 10px 20px rgba(18,179,71,.16);
          }

          .jb-box{
            border:1px solid rgba(0,0,0,.06);
            background:#fff;
            border-radius: 14px;
            padding: 1rem;
            margin-top: .9rem;
          }
          .jb-label{
            font-weight:800;
            color:#111827;
            margin-bottom:.65rem;
          }

          .jb-amount-row{
            display:flex; align-items:center; gap:.8rem;
          }
          .jb-circle{
            width:40px;height:40px;border-radius:999px;border:0;
            font-weight:900;
            background:#eafff1; color: var(--jb-green-dark);
          }
          .jb-circle:hover{ background:#d9ffe6; }
          input[type="range"].jb-range{
            flex:1;
            accent-color: var(--jb-green);
          }
          .jb-amount{
            text-align:right;
            font-weight:900;
            color: var(--jb-green-dark);
            margin-top:.5rem;
          }

          .jb-select{
            width:100%;
            border-radius: 12px;
            border:1px solid rgba(0,0,0,.10);
            padding:.72rem .85rem;
            font-weight:700;
            outline:none;
          }
          .jb-select:focus{
            border-color: rgba(18,179,71,.5);
            box-shadow: 0 0 0 .2rem rgba(18,179,71,.12);
          }

          .jb-summary{
            display:grid;
            grid-template-columns: 1fr auto;
            gap:.35rem 1rem;
            font-size: .95rem;
            margin-top:.15rem;
          }
          .jb-summary .k{ color: var(--jb-muted); font-weight:700; }
          .jb-summary .v{ font-weight:900; color:#111827; text-align:right; }
          .jb-summary .v.green{ color: var(--jb-green-dark); }
          .jb-summary .v.purple{ color: var(--jb-purple); }
          .jb-cta{
            margin-top: 1rem;
            width:100%;
            border-radius: 999px;
            padding: .85rem 1rem;
            font-weight: 1000;
          }

          /* Section titles */
          .jb-section{
            padding: 4rem 0;
          }
          .jb-eyebrow{
            text-transform: uppercase;
            letter-spacing: .22em;
            font-size: .75rem;
            color: #9ca3af;
            font-weight: 900;
            text-align:center;
            margin-bottom:.45rem;
          }
          .jb-h2{
            text-align:center;
            font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
            font-weight: 900;
            font-size: clamp(2.05rem, 3.2vw, 3rem);
            margin:0 0 2.25rem;
          }
          .jb-h2 span{
            color: var(--jb-green);
            font-style: italic;
          }

          /* Cards row */
          .jb-card{
            background:#fff;
            border:1px solid rgba(0,0,0,.06);
            border-radius: 16px;
            padding: 1.35rem 1.2rem;
            height:100%;
            box-shadow: 0 10px 25px rgba(17,24,39,.06);
          }
          .jb-icon{
            width:44px;height:44px;border-radius: 14px;
            display:grid; place-items:center;
            background: rgba(111,45,189,.10);
            color: var(--jb-purple);
            font-weight: 900;
            margin-bottom: 1rem;
          }
          .jb-card h5{ font-weight: 1000; margin:0 0 .5rem; }
          .jb-card p{ margin:0; color: var(--jb-muted); font-weight:600; }

          /* Stats strip */
          .jb-strip{
            background: radial-gradient(900px 400px at 20% 0%, rgba(18,179,71,.25), transparent 55%),
                        radial-gradient(900px 400px at 80% 100%, rgba(111,45,189,.20), transparent 60%),
                        linear-gradient(180deg, #0b1220, #0b1220);
            color:#fff;
            padding: 2.3rem 0;
          }
          .jb-stat{
            text-align:center;
            padding: 1rem .75rem;
            border-right: 1px solid rgba(255,255,255,.10);
          }
          .jb-stat:last-child{ border-right:0; }
          .jb-stat .num{
            font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
            font-weight: 900;
            font-size: 2.2rem;
            margin-top:.2rem;
          }
          .jb-stat .lab{
            color: rgba(255,255,255,.65);
            letter-spacing:.14em;
            text-transform: uppercase;
            font-weight: 900;
            font-size: .72rem;
            margin-top:.1rem;
          }

          /* Requirements */
          .jb-req-wrap{
            display:grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items:center;
          }
          @media (max-width: 992px){
            .jb-req-wrap{ grid-template-columns: 1fr; }
          }
          .jb-photo{
            border-radius: 18px;
            min-height: 280px;
            border: 1px solid rgba(0,0,0,.06);
            background:
              radial-gradient(700px 300px at 30% 20%, rgba(18,179,71,.22), transparent 55%),
              radial-gradient(700px 300px at 80% 80%, rgba(111,45,189,.18), transparent 60%),
              linear-gradient(135deg, #ffffff, #f3f4f6);
            box-shadow: 0 10px 25px rgba(17,24,39,.06);
            position:relative;
            overflow:hidden;
          }
          .jb-badge{
            position:absolute;
            right: 14px;
            bottom: 14px;
            background: var(--jb-green);
            color:#fff;
            font-weight: 1000;
            padding: .45rem .7rem;
            border-radius: 999px;
            font-size: .82rem;
            box-shadow: 0 10px 20px rgba(18,179,71,.20);
          }
          .jb-req-title{
            font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
            font-weight: 900;
            font-size: clamp(1.6rem, 2.4vw, 2.2rem);
            margin:0 0 .9rem;
          }
          .jb-req-title span{ color: var(--jb-purple); font-style: italic; }
          .jb-steps{
            display:flex; flex-direction:column; gap:.75rem;
          }
          .jb-step{
            display:flex; align-items:center; gap:.9rem;
            border:1px solid rgba(0,0,0,.06);
            background:#fff;
            border-radius: 14px;
            padding:.85rem .95rem;
            font-weight: 900;
            color:#111827;
          }
          .jb-step .n{
            width:28px;height:28px;border-radius: 999px;
            display:grid; place-items:center;
            background: rgba(111,45,189,.12);
            color: var(--jb-purple);
            font-weight: 1000;
            font-size:.9rem;
          }
          .jb-step.active{
            background: rgba(111,45,189,.10);
            border-color: rgba(111,45,189,.22);
          }
          .jb-step.active .n{
            background: var(--jb-purple);
            color:#fff;
          }

          /* Testimonials */
          .jb-stars{ color: var(--jb-green); letter-spacing:.08em; }
          .jb-quote{ color: var(--jb-muted); font-weight:650; }

          /* Form small */
          .jb-form{
            margin-top: .9rem;
            border-top: 1px dashed rgba(17,24,39,.16);
            padding-top: 1rem;
          }
          .jb-input{
            border-radius: 12px !important;
            font-weight: 700 !important;
          }

          /* Modal (simple) */
          .jb-modal-backdrop{
            position:fixed; inset:0; background: rgba(0,0,0,.55);
            display:flex; align-items:center; justify-content:center;
            z-index: 9999;
            padding: 1rem;
          }
          .jb-modal{
            width: min(560px, 96vw);
            background:#fff;
            border-radius: 18px;
            border:1px solid rgba(0,0,0,.06);
            box-shadow: 0 20px 60px rgba(0,0,0,.25);
            overflow:hidden;
          }
          .jb-modal header{
            padding: 1rem 1.2rem;
            display:flex; align-items:center; justify-content:space-between;
            border-bottom:1px solid rgba(0,0,0,.06);
          }
          .jb-modal header h5{ margin:0; font-weight: 1000; }
          .jb-modal .body{ padding: 1.1rem 1.2rem; }
          .jb-modal .footer{ padding: 1rem 1.2rem; border-top:1px solid rgba(0,0,0,.06); }
          .jb-x{
            border:0; background: rgba(17,24,39,.06);
            width:36px;height:36px;border-radius: 12px;
            font-weight: 1000;
          }
        `}
      </style>

      {/* NAVBAR */}
      <header className="jb-nav">
        <div className="container py-3 d-flex align-items-center justify-content-between">
          <a className="jb-brand" href="#inicio">
            <span className="jb-logo" />
            <span>
              SOLUCIONES <span style={{ color: "var(--jb-green)" }}>INTEGRALES</span> JB
            </span>
          </a>

          <nav className="d-none d-md-flex align-items-center gap-2">
            <a className="jb-link active" href="#inicio">
              Inicio
            </a>
            <a className="jb-link" href="#como-funciona">
              ¿Cómo funciona?
            </a>
            <a className="jb-link" href="#como-pagar">
              ¿Cómo pagar?
            </a>
          </nav>

          <a className="jb-btn jb-btn-green text-decoration-none" href="#zona-clientes">
            ZONA DE CLIENTES
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="jb-hero">
        <div className="container">
          <div className="jb-hero-wrap">
            {/* Izquierda: imagen / hero */}
            <div className="jb-hero-media">
              <div className="jb-hero-text">
                <div className="jb-hero-kicker">— PRÉSTAMOS PERSONALES · LIMA</div>
                <h1 className="jb-hero-title">
                  Dinero en horas, <span>sin complicaciones.</span>
                </h1>
                <p className="jb-hero-sub">
                  Desde S/ 200 hasta S/ 5,000 con aprobación inmediata. Sin colas ni papeleo.
                </p>
              </div>
            </div>

            {/* Derecha: calculadora */}
            <div className="jb-panel">
              <h6>Elige aquí el tipo de préstamo que necesitas</h6>

              <div className="jb-seg">
                <button className={mode === "cuotas" ? "active" : ""} onClick={() => setMode("cuotas")} type="button">
                  Pago a Cuotas
                </button>
                <button className={mode === "unico" ? "active" : ""} onClick={() => setMode("unico")} type="button">
                  Pago Único
                </button>
              </div>

              <div className="jb-box">
                <div className="jb-label">¿Cuánto necesitas?</div>
                <div className="jb-amount-row">
                  <button
                    className="jb-circle"
                    type="button"
                    onClick={() => setAmount((p) => clamp(p - 50, 200, 5000))}
                    aria-label="Disminuir"
                  >
                    −
                  </button>

                  <input
                    className="jb-range"
                    type="range"
                    min={200}
                    max={5000}
                    step={50}
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                  />

                  <button
                    className="jb-circle"
                    type="button"
                    onClick={() => setAmount((p) => clamp(p + 50, 200, 5000))}
                    aria-label="Aumentar"
                  >
                    +
                  </button>
                </div>
                <div className="jb-amount">{formatCurrency(amount)}</div>
              </div>

              <div className="jb-box">
                <div className="jb-label">Plazo</div>
                <select className="jb-select" value={selectedTermId} onChange={(e) => setSelectedTermId(e.target.value)}>
                  {(mode === "cuotas" ? termCuotas : termUnico).map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="jb-box">
                <div className="jb-summary">
                  <div className="k">Cantidad solicitada</div>
                  <div className="v">{formatCurrency(computed.principal)}</div>

                  <div className="k">Interés Total ({interestPct}%)</div>
                  <div className="v">{formatCurrency(computed.interest)}</div>

                  <div className="k">N° de cuotas</div>
                  <div className="v purple">{computed.installmentsText}</div>

                  <div className="k">{computed.installmentLabel}</div>
                  <div className="v green">{formatCurrency(computed.installmentValue)}</div>

                  <div className="k">Total a pagar</div>
                  <div className="v">{formatCurrency(computed.total)}</div>

                  <div className="k">Fecha de último pago</div>
                  <div className="v">{lastPaymentText}</div>
                </div>

                <button
                  className="jb-btn jb-btn-green jb-cta"
                  type="button"
                  onClick={() => {
                    // scroll al form
                    const el = document.getElementById("solicitud");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  Solicítalo Ahora
                </button>

                {/* FORM debajo, estilo “zona derecha” */}
                <form id="solicitud" className="jb-form" onSubmit={handleSubmit} noValidate>
                  <div className="row g-2">
                    <div className="col-12">
                      <input
                        id="fullName"
                        className={`form-control jb-input ${errors.fullName ? "is-invalid" : ""}`}
                        placeholder="Nombre completo"
                        value={formData.fullName}
                        onChange={handleFormChange}
                      />
                      <div className="invalid-feedback">Ingresa tu nombre (mín. 3 caracteres).</div>
                    </div>

                    <div className="col-12">
                      <input
                        id="email"
                        type="email"
                        className={`form-control jb-input ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Correo"
                        value={formData.email}
                        onChange={handleFormChange}
                      />
                      <div className="invalid-feedback">Ingresa un correo válido.</div>
                    </div>

                    <div className="col-6">
                      <input
                        id="phone"
                        className={`form-control jb-input ${errors.phone ? "is-invalid" : ""}`}
                        placeholder="Celular (9 dígitos)"
                        value={formData.phone}
                        onChange={handleFormChange}
                      />
                      <div className="invalid-feedback">Debe tener 9 dígitos.</div>
                    </div>

                    <div className="col-6">
                      <input
                        id="dni"
                        className={`form-control jb-input ${errors.dni ? "is-invalid" : ""}`}
                        placeholder="DNI (8 dígitos)"
                        value={formData.dni}
                        onChange={handleFormChange}
                      />
                      <div className="invalid-feedback">DNI de 8 dígitos.</div>
                    </div>

                    <div className="col-12">
                      <input
                        id="district"
                        className={`form-control jb-input ${errors.district ? "is-invalid" : ""}`}
                        placeholder="Distrito"
                        value={formData.district}
                        onChange={handleFormChange}
                      />
                      <div className="invalid-feedback">Ingresa tu distrito.</div>
                    </div>

                    <div className="col-12 mt-1">
                      <button className="jb-btn jb-btn-outline w-100" type="submit" disabled={!isFormValid}>
                        Enviar Solicitud
                      </button>
                      <div className="text-center mt-2" style={{ color: "var(--jb-muted)", fontWeight: 700, fontSize: ".85rem" }}>
                        * Los montos y costos son referenciales.
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-3 text-center" style={{ color: "var(--jb-muted)", fontWeight: 800 }}>
                Solicitudes hoy: <span style={{ color: "var(--jb-purple)" }}>{loansCounter}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="jb-section">
        <div className="container">
          <div className="jb-eyebrow">¿POR QUÉ ELEGIRNOS?</div>
          <h2 className="jb-h2">
            Préstamos online <span>sin complicaciones</span>
          </h2>

          <div className="row g-4">
            {whyCards.map((c) => (
              <div className="col-12 col-md-6 col-lg-3" key={c.title}>
                <div className="jb-card">
                  <div className="jb-icon">{c.icon}</div>
                  <h5>{c.title}</h5>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="jb-strip" id="como-pagar">
        <div className="container">
          <div className="row g-0">
            <div className="col-6 col-lg-3 jb-stat">
              <div style={{ fontSize: "1.35rem" }}>🗓️</div>
              <div className="num">90</div>
              <div className="lab">Plazo de pago</div>
            </div>
            <div className="col-6 col-lg-3 jb-stat">
              <div style={{ fontSize: "1.35rem" }}>🏅</div>
              <div className="num">1</div>
              <div className="lab">Fintech préstamos</div>
            </div>
            <div className="col-6 col-lg-3 jb-stat">
              <div style={{ fontSize: "1.35rem" }}>🍎</div>
              <div className="num">100</div>
              <div className="lab">Solicitudes</div>
            </div>
            <div className="col-6 col-lg-3 jb-stat">
              <div style={{ fontSize: "1.35rem" }}>🌍</div>
              <div className="num">1</div>
              <div className="lab">Distrito</div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS + HOW IT WORKS */}
      <section className="jb-section" id="como-funciona">
        <div className="container">
          <div className="jb-req-wrap">
            <div className="jb-photo">
              <div className="jb-badge">✔ Proceso 100% digital</div>
            </div>

            <div>
              <div className="jb-eyebrow" style={{ textAlign: "left" }}>
                — REQUISITOS
              </div>
              <h3 className="jb-req-title">
                ¿Qué necesitas para <span>aplicar</span>?
              </h3>

              <div className="jb-steps">
                {requirements.map((r, idx) => (
                  <div key={r.title} className={`jb-step ${idx === 0 ? "active" : ""}`}>
                    <div className="n">{r.n}</div>
                    <div>{r.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-12 col-lg-6">
              <div className="jb-card">
                <div className="jb-eyebrow" style={{ textAlign: "left", marginBottom: ".3rem" }}>
                  — EJEMPLO REAL
                </div>
                <h4 style={{ fontFamily: "ui-serif", fontWeight: 900, marginBottom: "1rem" }}>
                  Así funcionan nuestros <span style={{ color: "var(--jb-green)", fontStyle: "italic" }}>préstamos</span>
                </h4>

                <div className="p-3" style={{ borderRadius: 14, border: "1px solid rgba(0,0,0,.06)", background: "#fff" }}>
                  <div className="d-flex justify-content-between" style={{ fontWeight: 800, color: "var(--jb-muted)" }}>
                    <span>Monto solicitado</span>
                    <span style={{ color: "#111827" }}>{formatCurrency(amount)}</span>
                  </div>
                  <hr style={{ opacity: 0.12 }} />
                  <div className="d-flex justify-content-between" style={{ fontWeight: 800, color: "var(--jb-muted)" }}>
                    <span>Interés ({interestPct}%)</span>
                    <span style={{ color: "#111827" }}>{formatCurrency(amount * (interestPct / 100))}</span>
                  </div>
                  <hr style={{ opacity: 0.12 }} />
                  <div className="d-flex justify-content-between" style={{ fontWeight: 900 }}>
                    <span style={{ color: "#111827" }}>Total a pagar</span>
                    <span style={{ color: "var(--jb-green-dark)" }}>{formatCurrency(computed.total)}</span>
                  </div>
                  <div className="mt-2" style={{ color: "var(--jb-muted)", fontWeight: 700, fontSize: ".88rem" }}>
                    * Montos referenciales (pueden variar según evaluación crediticia).
                  </div>
                </div>

                <button
                  className="jb-btn jb-btn-green jb-cta mt-3"
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("solicitud");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  SOLICÍTALO AHORA →
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="jb-card" style={{ display: "grid", placeItems: "center", minHeight: 260 }}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 130,
                      height: 130,
                      borderRadius: 22,
                      margin: "0 auto 10px",
                      background:
                        "radial-gradient(120px 120px at 30% 20%, rgba(18,179,71,.22), transparent 55%), radial-gradient(120px 120px at 80% 80%, rgba(111,45,189,.18), transparent 60%), linear-gradient(135deg, #ffffff, #f3f4f6)",
                      border: "1px solid rgba(0,0,0,.06)",
                      boxShadow: "0 10px 24px rgba(17,24,39,.06)",
                      display: "grid",
                      placeItems: "center",
                      fontSize: "2rem",
                    }}
                  >
                    📱
                  </div>

                  <div
                    style={{
                      display: "inline-block",
                      padding: ".35rem .65rem",
                      borderRadius: 999,
                      background: "rgba(111,45,189,.10)",
                      color: "var(--jb-purple)",
                      fontWeight: 1000,
                      fontSize: ".85rem",
                    }}
                  >
                    Desembolso: 24 horas
                  </div>

                  <p className="jb-quote mt-3" style={{ margin: 0 }}>
                    Completa tus datos, valida tu información y recibe respuesta en minutos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="jb-section" style={{ paddingTop: "2.4rem" }}>
        <div className="container">
          <div className="jb-eyebrow">— TESTIMONIOS</div>
          <h2 className="jb-h2">
            Lo que dicen nuestros <span>clientes</span>
          </h2>

          <div className="row g-4 justify-content-center">
            {testimonials.map((t) => (
              <div className="col-12 col-md-6 col-lg-4" key={t.name}>
                <div className="jb-card">
                  <div className="jb-stars">
                    {"★★★★★".slice(0, t.stars)}
                    <span style={{ opacity: 0.35 }}>{"★★★★★".slice(t.stars)}</span>
                  </div>
                  <p className="jb-quote mt-2">“{t.text}”</p>
                  <div className="mt-3" style={{ fontWeight: 1000 }}>
                    {t.name}
                  </div>
                  <div style={{ color: "var(--jb-muted)", fontWeight: 800, fontSize: ".9rem" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer simple */}
      <footer style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,.06)" }}>
        <div className="container py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div style={{ fontWeight: 1000, color: "#111827" }}>
            © {new Date().getFullYear()} SOLUCIONES INTEGRALES JB
          </div>
          <div id="zona-clientes" style={{ color: "var(--jb-muted)", fontWeight: 800 }}>
            Atención: Lun–Sáb · WhatsApp: 999 999 999
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {showModal && (
        <div className="jb-modal-backdrop" role="dialog" aria-modal="true">
          <div className="jb-modal">
            <header>
              <h5>¡Solicitud recibida!</h5>
              <button className="jb-x" onClick={() => setShowModal(false)} aria-label="Cerrar">
                ✕
              </button>
            </header>

            <div className="body">
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 18,
                  background: "rgba(18,179,71,.12)",
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 12,
                  fontSize: "1.7rem",
                }}
              >
                ✅
              </div>

              <p style={{ marginBottom: 8, fontWeight: 750, color: "#111827" }}>
                Tu solicitud fue registrada. Un asesor te contactará para continuar con el proceso.
              </p>

              <div style={{ fontWeight: 900, color: "var(--jb-muted)" }}>
                Número de referencia:{" "}
                <span style={{ color: "var(--jb-purple)" }}>{referenceNumber}</span>
              </div>

              <div className="mt-3" style={{ fontWeight: 800, color: "var(--jb-muted)" }}>
                Resumen:
              </div>
              <div style={{ fontWeight: 900 }}>
                {mode === "cuotas" ? "Pago a Cuotas" : "Pago Único"} · {formatCurrency(amount)} · Interés {interestPct}%
              </div>
            </div>

            <div className="footer">
              <button className="jb-btn jb-btn-green w-100" onClick={() => setShowModal(false)}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrestamosCalculadora;  