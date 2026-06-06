import { useState, useRef, useEffect } from "react";

// ============================================================
// 📚 BASE DE CONOCIMIENTO
// Aquí defines todo lo que el chatbot sabe sobre la empresa.
// Para agregar temas nuevos, solo añade un objeto al array.
// ============================================================
const knowledge = [
  {
    // Palabras clave que activan esta respuesta
    tags: ["servicio", "servicios", "ofrecen", "hacen", "tienen", "que hacen", "que ofrecen"],
    // Respuesta del bot
    reply: "Ofrecemos servicios en 4 áreas:\n\n💻 Tecnología de Información: desarrollo de software, facturación electrónica, redes, hosting y soporte técnico.\n\n📊 Consultoría: TI, empresarial, educativa y auditorías.\n\n📣 Marketing Digital: páginas web, SEO, diseño gráfico y redes sociales.\n\n⚡ Ing. Eléctrica: instalaciones, mantenimiento y refrigeración industrial.",
    // Posibles preguntas de seguimiento que se sugieren
    followUp: ["¿Cuánto cuestan los servicios?", "¿Cómo los contrato?", "¿Dónde están ubicados?"]
  },
  {
    tags: ["precio", "costo", "cuanto", "cuánto", "cobran", "tarifa", "presupuesto", "cotizar", "cotización"],
    reply: "Los precios varían según el servicio y la complejidad del proyecto. Para darte un presupuesto exacto necesitamos conocer tu caso. 😊\n\n¿Te gustaría que te contactemos para una cotización sin costo?",
    followUp: ["¿Cómo los contacto?", "¿Qué servicios tienen?"]
  },
  {
    tags: ["contacto", "contactar", "comunicar", "escribir", "llamar", "correo", "email", "telefono", "teléfono", "whatsapp"],
    reply: "Puedes contactarnos por:\n\n📧 Correo: soporte@solucionesintegralesjb.com\n📍 Dirección: Calle López de Zúñiga N° 547 Piso 2, Chancay\n\n¡Respondemos en menos de 24 horas!",
    followUp: ["¿Cuál es su horario?", "¿Dónde están ubicados?"]
  },
  {
    tags: ["horario", "hora", "atienden", "disponible", "abierto", "cuando", "cuándo"],
    reply: "📅 Nuestro horario de atención es:\n\nLunes a Viernes: 9:00 am – 6:00 pm\nSábados: 9:00 am – 1:00 pm\n\nFuera de ese horario puedes escribirnos y te respondemos al día siguiente.",
    followUp: ["¿Cómo los contacto?", "¿Dónde están ubicados?"]
  },
  {
    tags: ["ubicacion", "ubicación", "donde", "dónde", "direccion", "dirección", "local", "oficina", "chancay"],
    reply: "📍 Nuestra oficina está en:\n\nCalle López de Zúñiga N° 547, Piso 2\nChancay, Lima – Perú\n\n¿Deseas agendar una visita?",
    followUp: ["¿Cuál es su horario?", "¿Cómo los contacto?"]
  },
  {
    tags: ["software", "desarrollo", "app", "aplicacion", "aplicación", "sistema", "programa", "web", "pagina", "página"],
    reply: "💻 Desarrollamos software a medida: sistemas de gestión, aplicaciones web, apps móviles y más.\n\nTrabajamos con tecnologías modernas como React, Node.js y bases de datos SQL/NoSQL.",
    followUp: ["¿Cuánto cuesta un desarrollo?", "¿Cómo los contacto?"]
  },
  {
    tags: ["soporte", "tecnico", "técnico", "mantenimiento", "problema", "error", "falla", "ayuda tecnica"],
    reply: "🛠️ Brindamos soporte técnico para equipos, redes y sistemas.\n\nPuedes reportar tu incidencia escribiéndonos directamente y un técnico te atenderá.",
    followUp: ["¿Cómo los contacto?", "¿Cuál es su horario?"]
  },
  {
    tags: ["seo", "posicionamiento", "google", "marketing", "redes sociales", "publicidad", "diseño", "grafico", "gráfico"],
    reply: "📣 En Marketing Digital ofrecemos:\n\n• Posicionamiento SEO en Google\n• Gestión de redes sociales\n• Diseño de piezas gráficas\n• Creación y rediseño de páginas web",
    followUp: ["¿Cuánto cuesta?", "¿Cómo los contacto?"]
  },
  {
    tags: ["electrica", "eléctrica", "electricidad", "instalacion electrica", "instalación eléctrica", "refrigeracion", "refrigeración"],
    reply: "⚡ Nuestro equipo de Ingeniería Eléctrica realiza:\n\n• Instalaciones eléctricas industriales y domiciliarias\n• Mantenimiento eléctrico preventivo y correctivo\n• Refrigeración industrial",
    followUp: ["¿Cómo los contacto?", "¿Cuánto cuesta?"]
  },
  {
    tags: ["empresa", "quienes", "quiénes", "son", "sobre", "informacion", "información", "historia", "acerca"],
    reply: "🏢 Somos Soluciones Integrales JB, una empresa tecnológica ubicada en Chancay, Lima.\n\nNos especializamos en brindar soluciones de TI, consultoría, marketing digital e ingeniería eléctrica a empresas de la región.\n\n🎯 Nuestra misión: desarrollar soluciones tecnológicas de calidad que impulsen el crecimiento de nuestros clientes.",
    followUp: ["¿Qué servicios ofrecen?", "¿Cómo los contacto?"]
  },
  {
    tags: ["facturacion", "facturación", "electronica", "electrónica", "sunat", "comprobante"],
    reply: "🧾 Implementamos sistemas de Facturación Electrónica homologados con SUNAT.\n\nIdeal para empresas que necesitan emitir boletas, facturas y notas de crédito de forma digital y segura.",
    followUp: ["¿Cuánto cuesta?", "¿Cómo los contacto?"]
  },
  {
    tags: ["auditoria", "auditoría", "seguridad", "informatica", "informática", "ciberseguridad"],
    reply: "🔐 Realizamos auditorías de seguridad informática para identificar vulnerabilidades en tus sistemas y redes.\n\nTambién implementamos políticas de seguridad y controles para proteger la información de tu empresa.",
    followUp: ["¿Cómo los contacto?", "¿Cuánto cuesta?"]
  }
];

// ============================================================
// 🧠 MOTOR DE COMPRENSIÓN DE TEXTO
// Normaliza el texto y busca coincidencias en la base de conocimiento.
// Cuantas más palabras coincidan, mayor es la puntuación.
// ============================================================
const normalize = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // elimina tildes
    .replace(/[^a-z0-9\s]/g, "")     // elimina símbolos
    .trim();

const findBestMatch = (input) => {
  const normalized = normalize(input);
  const words = normalized.split(/\s+/);

  let bestScore = 0;
  let bestMatch = null;

  for (const item of knowledge) {
    let score = 0;

    for (const tag of item.tags) {
      // Coincidencia exacta de frase completa → peso alto
      if (normalized.includes(normalize(tag))) {
        score += tag.split(" ").length * 2;
      }
      // Coincidencia por palabras sueltas → peso bajo
      for (const word of words) {
        if (word.length > 3 && normalize(tag).includes(word)) {
          score += 1;
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  // Umbral mínimo para considerar una coincidencia válida
  return bestScore >= 2 ? bestMatch : null;
};

// ============================================================
// 💬 SALUDOS Y DESPEDIDAS
// ============================================================
const greetings = ["hola", "buenas", "buenos dias", "buenas tardes", "buenas noches", "hey", "hi", "saludos"];
const farewells = ["gracias", "chau", "adios", "hasta luego", "bye", "ok gracias", "listo gracias"];

const isGreeting = (text) => greetings.some(g => normalize(text).includes(normalize(g)));
const isFarewell = (text) => farewells.some(f => normalize(text) === normalize(f) || normalize(text).startsWith(normalize(f)));

// ============================================================
// ⏳ EFECTO DE "ESCRIBIENDO..."
// Simula que el bot está pensando antes de responder
// ============================================================
const TYPING_DELAY = 800; // ms

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const chatEndRef = useRef(null);

  // Mensaje de bienvenida
  useEffect(() => {
    setMessages([{
      text: "👋 ¡Hola! Soy el asistente virtual de Soluciones Integrales JB.\n\n¿En qué puedo ayudarte hoy? Puedes preguntarme sobre nuestros servicios, precios, ubicación o contacto.",
      sender: "bot"
    }]);
    setSuggestions(["¿Qué servicios ofrecen?", "¿Dónde están ubicados?", "¿Cómo los contacto?"]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // ============================================================
  // 🚀 LÓGICA PRINCIPAL DE RESPUESTA
  // ============================================================
  const getBotReply = (userInput) => {
    const norm = normalize(userInput);

    // 1. Saludo
    if (isGreeting(norm) && norm.split(" ").length <= 3) {
      return {
        text: "👋 ¡Hola! ¿En qué puedo ayudarte?\n\nPuedes preguntarme sobre servicios, precios, contacto o ubicación.",
        followUp: ["¿Qué servicios ofrecen?", "¿Cuánto cuestan los servicios?", "¿Dónde están ubicados?"]
      };
    }

    // 2. Despedida
    if (isFarewell(norm)) {
      return {
        text: "¡Hasta luego! 👋 Si necesitas algo más, aquí estaré. ¡Que tengas un excelente día!",
        followUp: []
      };
    }

    // 3. Búsqueda en base de conocimiento
    const match = findBestMatch(userInput);
    if (match) {
      return { text: match.reply, followUp: match.followUp || [] };
    }

    // 4. Fallback con sugerencias
    return {
      text: "Mmm, no estoy seguro de entender bien tu pregunta 🤔\n\n¿Podrías reformularla? O puedes elegir uno de estos temas:",
      followUp: ["¿Qué servicios ofrecen?", "¿Cuánto cuestan los servicios?", "¿Cómo los contacto?", "¿Dónde están ubicados?"]
    };
  };

  const sendMessage = (text) => {
    if (!text.trim() || isTyping) return;

    // Agrega mensaje del usuario
    setMessages(prev => [...prev, { text, sender: "user" }]);
    setInput("");
    setSuggestions([]);
    setIsTyping(true);

    // Simula delay de "escritura"
    setTimeout(() => {
      const { text: replyText, followUp } = getBotReply(text);
      setMessages(prev => [...prev, { text: replyText, sender: "bot" }]);
      setSuggestions(followUp || []);
      setIsTyping(false);
    }, TYPING_DELAY);
  };

  const handleReset = () => {
    setMessages([{
      text: "👋 ¡Hola! Soy el asistente virtual de Soluciones Integrales JB.\n\n¿En qué puedo ayudarte hoy?",
      sender: "bot"
    }]);
    setSuggestions(["¿Qué servicios ofrecen?", "¿Dónde están ubicados?", "¿Cómo los contacto?"]);
    setIsTyping(false);
  };

  return (
    <>
      {/* ── Burbuja flotante ── */}
      {!isOpen && (
        <div style={styles.bubble} onClick={() => setIsOpen(true)} title="¿Necesitas ayuda?">
          <img src="public/logo2.jpg" alt="Soluciones Integrales JB" style={styles.imgBurbuja} />
        </div>
      )}

      {/* ── Ventana del chat ── */}
      {isOpen && (
        <div style={styles.container}>

          {/* Header */}
          <div style={styles.header}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src="public/logo2.jpg" alt="Logo" style={styles.img} />
              <div>
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>Soluciones Integrales JB</div>
              </div>
            </div>
            <div style={styles.headerButtons}>
              <button onClick={handleReset} style={styles.smallBtn} title="Reiniciar chat">⟳</button>
              <button onClick={() => setIsOpen(false)} style={styles.smallBtn} title="Cerrar">✕</button>
            </div>
          </div>

          {/* Mensajes */}
          <div style={styles.chat}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.sender === "user" ? "flex-end" : "flex-start", marginBottom: "8px" }}>
                {msg.sender === "bot" && (
                  <img src="public/logo2.jpg" alt="" style={styles.avatar} />
                )}
                <div style={{
                  ...styles.bubbleMsg,
                  backgroundColor: msg.sender === "user" ? "#158cee" : "#f0f4f8",
                  color: msg.sender === "user" ? "#fff" : "#1a1a2e",
                  borderRadius: msg.sender === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  whiteSpace: "pre-line"
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Indicador "escribiendo..." */}
            {isTyping && (
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                <img src="public/logo2.jpg" alt="" style={styles.avatar} />
                <div style={{ ...styles.bubbleMsg, backgroundColor: "#f0f4f8", color: "#888" }}>
                  <span style={styles.dot} />
                  <span style={{ ...styles.dot, animationDelay: "0.2s" }} />
                  <span style={{ ...styles.dot, animationDelay: "0.4s" }} />
                </div>
              </div>
            )}

            {/* Sugerencias rápidas */}
            {!isTyping && suggestions.length > 0 && (
              <div style={styles.suggestionsContainer}>
                {suggestions.map((s, i) => (
                  <button key={i} style={styles.suggestionBtn} onClick={() => sendMessage(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div style={styles.inputContainer}>
            <input
              style={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              disabled={isTyping}
            />
            <button style={{ ...styles.sendBtn, opacity: isTyping ? 0.5 : 1 }} onClick={() => sendMessage(input)} disabled={isTyping}>
              ➤
            </button>
          </div>
        </div>
      )}

      {/* ── Animación de los puntos de "escribiendo" ── */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}

const styles = {
  bubble: {
    position: "fixed", bottom: "20px", right: "20px",
    width: "60px", height: "60px", borderRadius: "50%",
    backgroundColor: "#158cee", color: "#fff",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", boxShadow: "0 5px 15px rgba(0,0,0,0.3)", zIndex: 9999
  },
  imgBurbuja: { width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" },
  container: {
    position: "fixed", bottom: "20px", right: "20px",
    width: "340px", height: "530px",
    backgroundColor: "#fff", borderRadius: "16px",
    display: "flex", flexDirection: "column",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)", overflow: "hidden", zIndex: 9999
  },
  img: { width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover" },
  avatar: { width: "26px", height: "26px", borderRadius: "50%", objectFit: "cover", marginRight: "6px", alignSelf: "flex-end" },
  header: {
    backgroundColor: "#158cee", color: "#fff", padding: "10px 14px",
    display: "flex", justifyContent: "space-between", alignItems: "center"
  },
  headerButtons: { display: "flex", gap: "5px" },
  smallBtn: {
    cursor: "pointer", borderRadius: "6px", padding: "4px 8px", fontSize: "14px"
  },
  chat: { flex: 1, padding: "12px", overflowY: "auto", backgroundColor: "#f9fafb" },
  bubbleMsg: {
    maxWidth: "78%", padding: "10px 13px",
    fontSize: "13.5px", lineHeight: "1.5"
  },
  suggestionsContainer: {
    display: "flex", flexWrap: "wrap", gap: "6px",
    padding: "4px 0 8px 32px"
  },
  suggestionBtn: {
    backgroundColor: "#fff", border: "1.5px solid #158cee",
    color: "#158cee", borderRadius: "20px",
    padding: "5px 12px", fontSize: "12px",
    cursor: "pointer", transition: "all 0.15s"
  },
  inputContainer: { display: "flex", borderTop: "1px solid #e5e7eb" },
  input: {
    flex: 1, padding: "11px 14px", border: "none",
    outline: "none", fontSize: "13.5px", color: "#1a1a2e", backgroundColor: "#fff"
  },
  sendBtn: {
    backgroundColor: "#158cee", color: "#fff",
    border: "none", padding: "0 16px", cursor: "pointer", fontSize: "16px"
  },
  dot: {
    display: "inline-block", width: "7px", height: "7px",
    borderRadius: "50%", backgroundColor: "#aaa", margin: "0 2px",
    animation: "bounce 1.2s infinite ease-in-out"
  }
};
