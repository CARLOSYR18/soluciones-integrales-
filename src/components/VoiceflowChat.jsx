import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  Bot,
  CalendarCheck,
  Check,
  ChevronRight,
  ClipboardCopy,
  Headphones,
  Mail,
  Maximize2,
  MessageCircle,
  Mic,
  MicOff,
  Minimize2,
  Phone,
  RefreshCcw,
  Send,
  Sparkles,
  Volume2,
  VolumeX,
  Wifi,
  X,
} from "lucide-react";

// ─── Config ──────────────────────────────────────────────────────────────────
const WHATSAPP_PHONE = "51926392858";
const EMAIL = "consultas@solucionesintegralesjb.com";
const COMPANY = "Soluciones Integrales JB";
const LOCATION = "Chancay, Lima, Perú";

const DEFAULT_WHATSAPP_MESSAGE = `Hola ${COMPANY}, quiero recibir asesoría sobre sus servicios tecnológicos.`;

const QUICK_REPLIES = [
  { label: "💰 Cotización", value: "Quiero una cotización" },
  { label: "🔧 Soporte", value: "Necesito soporte técnico" },
  { label: "📷 Cámaras", value: "Servicios de cámaras" },
  { label: "🌐 Web", value: "Desarrollo web" },
  { label: "💻 Software", value: "Software a medida" },
  { label: "📡 Redes", value: "Redes e infraestructura" },
  { label: "📱 Marketing", value: "Marketing digital" },
  { label: "📅 Asesoría", value: "Agendar asesoría" },
];

const SERVICE_LINKS = [
  { label: "Software", href: "/DesarrolloDeSoftware", icon: "💻" },
  { label: "Web", href: "/DesarrolloDeSitiosWeb", icon: "🌐" },
  { label: "Seguridad", href: "/TecnologiaEnSeguridad", icon: "🔒" },
  { label: "Soporte", href: "/SoporteTecnico", icon: "🔧" },
  { label: "Redes", href: "/RedesEInfrostructura", icon: "📡" },
  { label: "Contacto", href: "/contacto", icon: "📬" },
];

// ─── System instruction for API ───────────────────────────────────────────────
const SYSTEM_PROMPT = `Eres el asistente virtual oficial de ${COMPANY}, una empresa tecnológica peruana ubicada en ${LOCATION}.

TU ROL:
- Conversar de forma natural, inteligente y empática con clientes potenciales.
- Responder cualquier mensaje con coherencia, incluso saludos, frases cotidianas o comentarios casuales.
- Orientar hacia los servicios de la empresa cuando sea relevante.
- Recopilar información para cotizaciones o diagnósticos técnicos.
- Derivar a WhatsApp o correo cuando el usuario necesite atención humana.

SERVICIOS QUE OFRECE LA EMPRESA:
1. Desarrollo web (páginas corporativas, landing pages, tiendas virtuales, SEO)
2. Software a medida (sistemas de gestión, facturación, CRM, inventario, automatizaciones)
3. Soporte técnico (mantenimiento, diagnóstico de PC, correo, hosting)
4. Tecnología en seguridad (cámaras CCTV, alarmas, control de acceso, biometría)
5. Redes e infraestructura (cableado, WiFi, switches, servidores)
6. Marketing digital (redes sociales, diseño gráfico, campañas, SEO)
7. Ingeniería eléctrica (instalaciones, mantenimiento, refrigeración industrial)
8. Consultoría y auditoría empresarial (procesos, TI, seguridad informática)

CONTACTO:
- WhatsApp/Llamadas: +51 926 392 858
- Correo: ${EMAIL}
- Ubicación: ${LOCATION}

REGLAS IMPORTANTES:
- Responde SIEMPRE en español, de forma natural y conversacional.
- Si el usuario pregunta por un número de teléfono o para llamar, dale el WhatsApp/Llamadas: +51 926 392 858.
- Si el usuario saluda, responde el saludo amablemente y luego pregunta en qué puedes ayudar.
- Si el usuario dice "estoy bien", "gracias", o frases casuales, responde de forma natural y empática.
- Si el usuario describe un problema (como agua en el teclado), responde con COHERENCIA a ese problema específico, da consejos prácticos de urgencia PRIMERO, y ofrece el servicio relacionado.
- Nunca repitas la misma respuesta genérica; siempre adapta tu respuesta al contexto exacto del mensaje.
- Para cotizaciones: solicita servicio, alcance, ubicación, nombre/empresa, contacto — de UNA pregunta a la vez.
- Respuestas concisas (máximo 4 oraciones); si necesitas más info, haz UNA sola pregunta.
- Usa un tono cálido, cercano y sin tecnicismos innecesarios.`;

// ─── Utilities ────────────────────────────────────────────────────────────────
const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

const createMsg = (from, text, meta = {}) => ({
  id: uid(),
  from,
  text,
  ts: Date.now(),
  ...meta,
});

const WELCOME_MSGS = [
  createMsg(
    "bot",
    `¡Hola! Soy el asistente virtual de ${COMPANY} 👋\n\nPuedo ayudarte con cotizaciones, soporte técnico, desarrollo web, software a medida, redes, cámaras y más. ¿En qué te puedo ayudar hoy?`
  ),
];

const buildSummary = (messages, completedQuoteSummary) => {
  if (completedQuoteSummary) {
    return completedQuoteSummary;
  }
  const userMsgs = messages
    .filter((m) => m.from === "user")
    .map((m) => `- ${m.text}`)
    .join("\n");
  return userMsgs ? `Hola ${COMPANY}, escribo desde el chat web.\n\nMi consulta:\n${userMsgs}` : DEFAULT_WHATSAPP_MESSAGE;
};

const createWhatsAppUrl = (summary) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(summary)}`;

const getSpanishVoice = () => {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang?.toLowerCase().startsWith("es-pe")) ||
    voices.find((v) => v.lang?.toLowerCase().startsWith("es-419")) ||
    voices.find((v) => v.lang?.toLowerCase().startsWith("es")) ||
    null
  );
};

const normalizeText = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¿¡]/g, "");

// Comprobación de palabras clave con coincidencia exacta (evita bugs de subcadena)
const hasWord = (text, terms) => {
  const textWords = text.toLowerCase().split(/\s+/);
  return terms.some((term) => {
    if (term.includes(" ")) {
      return text.includes(term);
    }
    return textWords.includes(term);
  });
};

// ─── Direct Google Gemini API Client ──────────────────────────────────────────
const requestGeminiDirect = async (messages, apiKey) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const contents = messages.map((msg) => ({
    role: msg.from === "user" ? "user" : "model",
    parts: [{ text: msg.text }],
  }));

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }],
      },
      contents: contents,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error?.message || "Error al conectar con la API de Gemini");
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Sin respuesta de Gemini");
  return text.trim();
};

// ─── Fallback Backend Server Call ─────────────────────────────────────────────
const requestBackendReply = async (messages) => {
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
  if (!apiBaseUrl) throw new Error("API Base URL no configurada");

  const response = await fetch(`${apiBaseUrl}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: messages,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const msg =
      typeof data.error === "string"
        ? data.error
        : data.error?.message ?? "Error de conexión";
    throw new Error(msg);
  }

  const text = data.reply?.trim();
  if (!text) throw new Error("Sin respuesta de la IA del servidor");
  return text;
};

// ─── Local Rule-Based NLP & Stateful Conversation Engine ──────────────────────
const GREETING_TERMS = ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey", "saludos", "alo", "quetal"];
const POLITENESS_TERMS = ["gracias", "ok", "vale", "bueno", "excelente", "perfecto", "genial", "listo", "entendido", "de nada", "por nada"];
const STATUS_TERMS = ["como estas", "como vas", "que tal todo", "como te va", "que haces"];
const GOOD_STATUS_TERMS = ["bien", "todo bien", "estoy bien", "excelente todo", "super", "genial"];

const WATER_TERMS = ["agua", "mojado", "mojada", "mojo", "mojar", "liquido", "derrame", "volco", "cayo", "cafe", "gaseosa", "vaso", "humedad"];
const SUPPORT_TERMS = ["soporte", "tecnico", "mantenimiento", "reparacion", "reparar", "falla", "danado", "roto", "lento", "virus", "pantallazo", "azul", "no prende", "no enciende", "ruido", "limpieza", "computadora", "pc", "laptop", "impresora", "disco", "ram", "pantalla"];

const WEB_TERMS = ["web", "pagina", "sitio", "landing", "tienda", "ecommerce", "virtual", "catalogo", "seo", "posicionamiento", "dominio", "hosting"];
const SOFTWARE_TERMS = ["software", "sistema", "crm", "erp", "inventario", "facturacion", "automatizacion", "programa", "base de datos", "excel", "automatizar", "medida"];
const SECURITY_TERMS = ["camara", "camaras", "cctv", "alarma", "seguridad", "biometrico", "dvr", "nvr", "vigilancia", "sensor"];
const NETWORK_TERMS = ["red", "redes", "wifi", "cableado", "switch", "router", "servidor", "rack", "cobertura", "internet", "lento", "ethernet", "fibra"];
const MARKETING_TERMS = ["marketing", "publicidad", "redes sociales", "facebook", "instagram", "tiktok", "diseno", "diseño", "campana", "anuncio", "logo", "marca"];
const ELECTRICAL_TERMS = ["electrico", "electricidad", "tablero", "pozo a tierra", "corto", "aire acondicionado", "refrigeracion", "cableado electrico"];
const CONSULTING_TERMS = ["consultoria", "auditoria", "ti", "seguridad informatica", "procesos", "capacitacion", "seguridad de la informacion"];

const CONTACT_TERMS = ["humano", "asesor", "whatsapp", "llamar", "telefono", "celular", "contacto", "correo", "email", "persona", "atencion", "operador", "hablar", "oficina", "donde estan", "ubicacion", "direccion", "numero", "llamo", "llamada"];

const getSmartLocalReply = (userMsg, currentSession, updateSession) => {
  const text = normalizeText(userMsg);

  // 1. Quoting flow logic (if active)
  if (currentSession.stage === "quoting") {
    const field = currentSession.lastAskedField;
    const newQuoteData = { ...currentSession.quoteData };

    if (field) {
      newQuoteData[field] = userMsg.trim();
    }

    let nextField = null;
    let replyText = "";

    if (!newQuoteData.service) {
      nextField = "service";
      replyText = "Entendido. Para empezar con tu cotización, ¿qué tipo de servicio tecnológico necesitas? (Por ejemplo: páginas web, software a medida, cámaras de seguridad, redes, marketing, soporte técnico).";
    } else if (!newQuoteData.scope) {
      nextField = "scope";
      replyText = `Perfecto, para ${newQuoteData.service}. Cuéntame brevemente el alcance o detalles de tu proyecto (por ejemplo: 'una tienda virtual', 'instalar 4 cámaras', o 'formatear 3 laptops').`;
    } else if (!newQuoteData.location) {
      nextField = "location";
      replyText = "¿En qué ciudad o zona se realizaría el servicio o se encuentra tu negocio? (Ej. Huaral, Chancay, Lima...)";
    } else if (!newQuoteData.name) {
      nextField = "name";
      replyText = "Entendido. ¿A nombre de qué persona o empresa realizamos la cotización?";
    } else if (!newQuoteData.contact) {
      nextField = "contact";
      replyText = `Mucho gusto, ${newQuoteData.name || "estimado cliente"}. Por último, ¿cuál es tu número de WhatsApp o correo electrónico para enviarte la propuesta formal?`;
    }

    if (nextField) {
      updateSession({
        ...currentSession,
        quoteData: newQuoteData,
        lastAskedField: nextField,
      });
      return replyText;
    } else {
      const finalSummary = `Hola ${COMPANY}, quiero concretar una cotización iniciada en el chat web:\n` +
                           `• Servicio: ${newQuoteData.service}\n` +
                           `• Detalles: ${newQuoteData.scope}\n` +
                           `• Ubicación: ${newQuoteData.location}\n` +
                           `• Cliente: ${newQuoteData.name}\n` +
                           `• Contacto: ${newQuoteData.contact}`;

      updateSession({
        ...currentSession,
        stage: "idle",
        lastAskedField: null,
        quoteData: { service: "", scope: "", location: "", name: "", contact: "" },
        completedQuoteSummary: finalSummary,
      });

      return `¡Estupendo, ${newQuoteData.name}! He registrado todos tus datos para la cotización:\n\n` +
             `📋 **Resumen de tu Cotización:**\n` +
             `• **Servicio:** ${newQuoteData.service}\n` +
             `• **Descripción:** ${newQuoteData.scope}\n` +
             `• **Ubicación:** ${newQuoteData.location}\n` +
             `• **Contacto:** ${newQuoteData.contact}\n\n` +
             `He preparado este resumen para ti. Puedes hacer clic en el botón de **WhatsApp** o **Copiar** abajo para enviarnos estos detalles directamente y un asesor te atenderá de inmediato. ¿Hay algo más en lo que te pueda colaborar?`;
    }
  }

  // 2. Priority check: Water damage (Always goes first if match occurs)
  if (hasWord(text, WATER_TERMS)) {
    updateSession({
      ...currentSession,
      stage: "support",
      lastTopic: "agua",
    });
    return "🚨 **¡APAGA EL EQUIPO DE INMEDIATO!** Desconéctalo de la corriente, no intentes encenderlo ni cargarlo, y retira la batería si es extraíble. Si es una laptop, déjala abierta en forma de 'V' invertida sobre una toalla. En Soluciones Integrales JB podemos realizar una limpieza ultrasónica química y secado profesional para evitar la corrosión irreversible de los circuitos. ¿Qué equipo se te mojó y qué líquido le cayó?";
  }

  // 3. SPECIFIC SERVICES (Check BEFORE Greetings, so prefixes like "hola quiero una web" match the web service first!)
  if (hasWord(text, WEB_TERMS)) {
    updateSession({ ...currentSession, lastTopic: "web" });
    return "¡Excelente! El desarrollo web es nuestra especialidad. Diseñamos páginas corporativas premium, tiendas online de alto rendimiento con pasarelas de pago integradas y landing pages optimizadas para ventas. Todo incluye optimización SEO inicial para aparecer en Google. ¿Estás buscando renovar una web actual o crear una completamente nueva?";
  }

  if (hasWord(text, SOFTWARE_TERMS)) {
    updateSession({ ...currentSession, lastTopic: "software" });
    return "Diseñamos y desarrollamos software a medida (sistemas de inventario, facturación electrónica para Perú, CRM, gestión de ventas) 100% adaptado a tu negocio. Olvídate de programas rígidos. ¿Qué proceso manual, reporte o archivo de Excel te gustaría automatizar en tu empresa?";
  }

  if (hasWord(text, SECURITY_TERMS)) {
    updateSession({ ...currentSession, lastTopic: "seguridad" });
    return "Instalamos sistemas de videovigilancia CCTV en alta definición, alarmas inteligentes contra intrusos, control de accesos biométrico y biometría. Trabajamos con marcas líderes como Hikvision y Dahua. ¿Necesitas instalar cámaras para tu casa, condominio, oficina o negocio?";
  }

  if (hasWord(text, NETWORK_TERMS)) {
    updateSession({ ...currentSession, lastTopic: "redes" });
    return "Ofrecemos cableado estructurado de datos, diseño de redes para oficinas, configuración de servidores locales/nube y ampliación de cobertura WiFi profesional para eliminar zonas muertas. Si tu red está lenta o inestable, realizamos un diagnóstico completo. ¿Qué inconveniente o proyecto de red tienes?";
  }

  if (hasWord(text, MARKETING_TERMS)) {
    updateSession({ ...currentSession, lastTopic: "marketing" });
    return "Potenciamos tu presencia en internet: gestionamos tus redes sociales de forma profesional, creamos piezas de diseño gráfico publicitario impactantes y lanzamos campañas pagadas en Facebook e Instagram Ads para conseguir leads calificados. ¿Qué producto o servicio te gustaría promocionar con más fuerza?";
  }

  if (hasWord(text, ELECTRICAL_TERMS)) {
    updateSession({ ...currentSession, lastTopic: "electricidad" });
    return "Contamos con ingenieros electricistas calificados para instalaciones eléctricas comerciales/industriales, mantenimiento de tableros de control, diseño y medición de pozos a tierra, y climatización/aire acondicionado industrial. ¿Deseas cotizar una instalación nueva o certificar un pozo a tierra?";
  }

  if (hasWord(text, CONSULTING_TERMS)) {
    updateSession({ ...currentSession, lastTopic: "consultoria" });
    return "Brindamos consultoría y auditoría de TI. Evaluamos la seguridad informática de tus servidores, optimizamos los procesos tecnológicos de tu empresa y capacitamos a tu personal para evitar ciberataques. ¿Buscas auditar tus sistemas actuales o capacitar a tu equipo?";
  }

  if (hasWord(text, SUPPORT_TERMS)) {
    updateSession({ ...currentSession, lastTopic: "soporte" });
    return "Entiendo perfectamente, las fallas de hardware o software pueden ser muy molestas. En Soluciones Integrales JB ofrecemos diagnóstico, reparación y optimización de laptops, PCs de escritorio e impresoras en Chancay. Un consejo rápido: si tu PC no enciende o da pantalla azul, desconecta los periféricos USB y reiníciala. ¿Qué equipo específico presenta el problema y cuál es la falla exacta?";
  }

  // 4. Pricing / Budget Contextual queries
  if (hasWord(text, ["precio", "costo", "costaria", "cuanto cuesta", "presupuesto", "cuanto"])) {
    if (currentSession.lastTopic === "agua") {
      return "El costo de reparación por daño de agua varía según las piezas afectadas (teclado, placa, pantalla). El mantenimiento inicial para limpieza ultrasónica y secado preventivo oscila entre S/ 80 y S/ 150 en Chancay. ¿Te gustaría agendar una revisión técnica en nuestro taller?";
    }
    if (currentSession.lastTopic === "soporte") {
      return "El costo depende del tipo de falla. Un formateo de sistema o mantenimiento preventivo general suele estar entre S/ 50 y S/ 100. Ofrecemos revisión a bajo costo y si apruebas la reparación, el diagnóstico es gratuito. ¿Deseas agendar el servicio técnico?";
    }
    
    // Otherwise, start quoting flow
    updateSession({
      ...currentSession,
      stage: "quoting",
      lastAskedField: "service",
      quoteData: { service: "", scope: "", location: "", name: "", contact: "" },
      completedQuoteSummary: "",
    });
    return "Con gusto te ayudo con un presupuesto. Para darte un precio a medida, por favor dime: ¿qué servicio o solución necesitas de nosotros?";
  }

  // 5. Contact / Call details
  if (hasWord(text, CONTACT_TERMS)) {
    return `¡Por supuesto! Estaremos encantados de atenderte directamente. Puedes escribirnos o llamarnos por WhatsApp al **+51 926 392 858** o enviarnos un correo a **${EMAIL}**. También nos ubicamos en ${LOCATION}. Si prefieres, dinos cuál es tu consulta y te la responderé con mucho gusto aquí mismo.`;
  }

  // 6. Greetings (only when it is a standalone greeting)
  if (hasWord(text, GREETING_TERMS)) {
    const greetings = [
      `¡Hola! Qué gusto saludarte. Soy el asistente virtual de ${COMPANY}. 👋 ¿En qué servicio o soporte técnico te gustaría que te ayude hoy?`,
      `¡Hola! Bienvenido a ${COMPANY}. Estoy aquí para asesorarte en software, web, redes, seguridad y soporte técnico. ¿Cómo puedo ayudarte hoy?`,
      `¡Hola! Un placer saludarte. Cuéntame, ¿estás buscando una cotización de algún servicio o necesitas asistencia técnica para un equipo?`,
    ];
    updateSession({ ...currentSession, greeted: true });
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // 7. Politeness / Sentiment / Small Talk
  if (hasWord(text, POLITENESS_TERMS)) {
    const politeReplies = [
      "¡Con gusto! Si tienes alguna otra duda o quieres iniciar un proyecto, solo dímelo.",
      "Excelente. Recuerda que puedes iniciar una cotización escribiendo 'cotizar' o seleccionando alguna de las opciones rápidas.",
      "¡Perfecto! Estoy aquí si necesitas algo más. ¿Te gustaría conocer sobre nuestros servicios de desarrollo web, cámaras o soporte?",
      "De nada, es un placer ayudarte. ¿Hay algún otro tema tecnológico en el que te pueda asesorar?",
    ];
    return politeReplies[Math.floor(Math.random() * politeReplies.length)];
  }

  if (hasWord(text, STATUS_TERMS)) {
    return "¡Estoy excelente y muy contento de ayudarte hoy! 😊 Como asistente virtual de Soluciones Integrales JB, mi labor es guiarte con información sobre nuestros servicios o soporte. ¿Tú cómo estás y en qué te puedo colaborar?";
  }

  if (hasWord(text, GOOD_STATUS_TERMS)) {
    return "¡Me alegra muchísimo saber eso! 😊 Cuéntame, ¿qué proyecto o requerimiento tecnológico tienes en mente hoy?";
  }

  // 8. Fallback (AI imitation)
  const wordsArray = text.split(/\s+/).filter((w) => w.length > 0);
  const significantWords = wordsArray.filter(
    (w) =>
      w.length > 4 &&
      ![
        "donde",
        "cuando",
        "quien",
        "sobre",
        "entre",
        "desde",
        "hasta",
        "tengo",
        "quiero",
        "necesito",
        "ayuda",
        "favor",
        "podria",
        "hacer",
        "saber",
        "tienen",
      ].includes(w)
  );

  if (significantWords.length > 0) {
    const topic = significantWords[0];
    const capTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
    return `Entiendo tu consulta sobre **${capTopic}**. En Soluciones Integrales JB nos especializamos en soporte técnico, desarrollo de sistemas a medida, páginas web, redes y videovigilancia. Cuéntame un poco más de detalles de lo que necesitas resolver con respecto a ${topic} para poder darte la mejor asesoría.`;
  }

  return `Entiendo tu mensaje. En Soluciones Integrales JB ofrecemos desarrollo de software, páginas web, cámaras de seguridad, redes, marketing digital, servicios eléctricos y soporte técnico. ¿Sobre cuál de estas áreas te gustaría recibir información o cotizar hoy?`;
};

// ─── Format timestamp ─────────────────────────────────────────────────────────
const formatTime = (ts) => {
  const d = new Date(ts);
  return d.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" });
};

// ─── Main Component ───────────────────────────────────────────────────────────
const VoiceflowChat = () => {
  const [chatKey, setChatKey] = useState(() => Date.now());
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [recogSupported, setRecogSupported] = useState(false);
  const [copied, setCopied] = useState(false);
  const [unread, setUnread] = useState(0);
  const [hasApiKey, setHasApiKey] = useState(false);

  // Stateful offline conversation session
  const [session, setSession] = useState({
    stage: "idle", // "idle" | "quoting" | "support"
    lastAskedField: null,
    quoteData: { service: "", scope: "", location: "", name: "", contact: "" },
    greeted: false,
    completedQuoteSummary: "",
    lastTopic: "",
  });

  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);
  const timerRef = useRef(null);
  const inputRef = useRef(null);

  const summary = useMemo(() => buildSummary(messages, session.completedQuoteSummary), [messages, session.completedQuoteSummary]);
  const whatsappUrl = createWhatsAppUrl(summary);

  // ── Init ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    window.voiceflow?.chat?.destroy?.();
    document.getElementById("voiceflow-widget-next")?.remove();
    setSpeechSupported("speechSynthesis" in window);

    // Comprobar si la API key de Gemini está cargada en el entorno
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    setHasApiKey(Boolean(apiKey && apiKey !== "TU_API_KEY_AQUI" && apiKey.trim() !== ""));

    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () =>
        window.speechSynthesis.getVoices();
    }

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    setRecogSupported(Boolean(SR));

    if (SR) {
      const rec = new SR();
      rec.lang = "es-PE";
      rec.interimResults = false;
      rec.continuous = false;
      rec.onresult = (e) => {
        const t = e.results?.[0]?.[0]?.transcript;
        if (t) setInput(t);
      };
      rec.onend = () => setIsListening(false);
      rec.onerror = () => setIsListening(false);
      recognitionRef.current = rec;
    }

    return () => {
      clearTimeout(timerRef.current);
      recognitionRef.current?.stop();
      if ("speechSynthesis" in window) {
        window.speechSynthesis.onvoiceschanged = null;
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // ── Speech ─────────────────────────────────────────────────────────────────
  const speak = useCallback(
    (text) => {
      if (!voiceEnabled || !("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      // Elimina Markdown y emojis del texto leído para que suene limpio
      const cleanText = text
        .replace(/[*#]/g, "")
        .replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, "");

      const utt = new SpeechSynthesisUtterance(cleanText);
      const voice = getSpanishVoice();
      if (voice) utt.voice = voice;
      utt.lang = "es-PE";
      utt.rate = 1.0;
      utt.pitch = 1;
      setTimeout(() => window.speechSynthesis.speak(utt), 80);
    },
    [voiceEnabled]
  );

  // ── Conversation ───────────────────────────────────────────────────────────
  const resetChat = useCallback(
    (doSpeak = true) => {
      clearTimeout(timerRef.current);
      window.speechSynthesis?.cancel();
      setIsTyping(false);
      setInput("");
      setCopied(false);
      setUnread(0);
      setChatKey(Date.now());
      setMessages(WELCOME_MSGS);
      setSession({
        stage: "idle",
        lastAskedField: null,
        quoteData: { service: "", scope: "", location: "", name: "", contact: "" },
        greeted: false,
        completedQuoteSummary: "",
        lastTopic: "",
      });
      if (doSpeak) speak(WELCOME_MSGS[0].text);
    },
    [speak]
  );

  const openChat = useCallback(() => {
    setIsOpen(true);
    setUnread(0);
    if (messages.length === 0) resetChat(true);
    setTimeout(() => inputRef.current?.focus(), 200);
  }, [messages.length, resetChat]);

  const sendMessage = useCallback(
    async (value = input) => {
      const text = value.trim();
      if (!text || isTyping) return;

      clearTimeout(timerRef.current);
      setInput("");
      setCopied(false);

      const userMsg = createMsg("user", text);
      const nextMessages = [...messages, userMsg];
      setMessages(nextMessages);
      setIsTyping(true);

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const apiConfigured = apiKey && apiKey !== "TU_API_KEY_AQUI" && apiKey.trim() !== "";

      timerRef.current = setTimeout(async () => {
        let reply;
        if (apiConfigured) {
          try {
            // Petición directa a Gemini Cloud API
            reply = await requestGeminiDirect(nextMessages, apiKey);
          } catch (err) {
            console.error("Gemini API Error, usando motor local:", err);
            reply = getSmartLocalReply(text, session, setSession);
          }
        } else {
          try {
            // Fallback a servidor backend si está configurado
            reply = await requestBackendReply(nextMessages);
          } catch (err) {
            // Motor de IA Local inteligente definitivo
            reply = getSmartLocalReply(text, session, setSession);
          }
        }

        const botMsg = createMsg("bot", reply);
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        speak(reply);

        if (!isOpen) setUnread((n) => n + 1);
      }, 600);
    },
    [input, isTyping, messages, isOpen, speak, session]
  );

  const toggleListening = useCallback(() => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setIsListening(true);
      recognitionRef.current.start();
    }
  }, [isListening]);

  const copySummary = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [summary]);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="jb-root">
      {/* Launcher */}
      {!isOpen && (
        <button
          className="jb-launcher"
          onClick={openChat}
          aria-label="Abrir chat"
        >
          <div className="jb-launcher-icon">
            <MessageCircle size={22} />
          </div>
          <span>¿Necesitas ayuda?</span>
          {unread > 0 && <span className="jb-badge">{unread}</span>}
          <div className="jb-launcher-glow" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          key={chatKey}
          className={`jb-window ${isExpanded ? "jb-expanded" : ""}`}
          role="dialog"
          aria-label={`Chat ${COMPANY}`}
        >
          {/* Header */}
          <header className="jb-header">
            <div className="jb-header-avatar">
              <Bot size={20} />
              <span className="jb-online-dot" />
            </div>
            <div className="jb-header-info">
              <strong>Asistente JB</strong>
              <span>
                <span className="jb-online-dot-sm" />
                En línea ahora ({hasApiKey ? "IA Cloud" : "IA Local"})
              </span>
            </div>
            <div className="jb-header-actions">
              <button
                onClick={() => setVoiceEnabled((v) => !v)}
                title={voiceEnabled ? "Silenciar" : "Activar voz"}
              >
                {voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
              <button
                onClick={() => setIsExpanded((v) => !v)}
                title={isExpanded ? "Reducir" : "Expandir"}
                className="jb-hide-mobile"
              >
                {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
              <button onClick={() => setIsOpen(false)} title="Cerrar">
                <X size={16} />
              </button>
            </div>
          </header>

          {/* Action bar */}
          <div className="jb-actionbar">
            <button onClick={() => sendMessage("Quiero una cotización")}>
              <Sparkles size={13} />
              Cotizar
            </button>
            <button onClick={() => sendMessage("Necesito soporte técnico")}>
              <Headphones size={13} />
              Soporte
            </button>
            <button onClick={() => sendMessage("Agendar asesoría")}>
              <CalendarCheck size={13} />
              Agendar
            </button>
            <button onClick={() => resetChat(true)}>
              <RefreshCcw size={13} />
              Nuevo
            </button>
          </div>

          {/* Messages */}
          <div className="jb-messages">
            <div className="jb-date-sep">
              <span>Hoy</span>
            </div>

            {messages.map((msg, i) => (
              <div
                key={msg.id}
                className={`jb-row ${
                  msg.from === "user" ? "jb-user" : "jb-bot"
                }`}
                style={{ animationDelay: `${i * 30}ms` }}
              >
                {msg.from === "bot" && (
                  <div className="jb-avatar-sm">
                    <Bot size={13} />
                  </div>
                )}
                <div className="jb-bubble-wrap">
                  <div className="jb-bubble">{msg.text}</div>
                  <time className="jb-ts">{formatTime(msg.ts)}</time>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="jb-row jb-bot">
                <div className="jb-avatar-sm">
                  <Bot size={13} />
                </div>
                <div className="jb-bubble-wrap">
                  <div className="jb-bubble jb-typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="jb-quick">
            {QUICK_REPLIES.map((r) => (
              <button key={r.value} onClick={() => sendMessage(r.value)}>
                {r.label}
              </button>
            ))}
          </div>

          {/* Service links */}
          <div className="jb-links">
            {SERVICE_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                <span>{l.icon}</span>
                {l.label}
                <ChevronRight size={11} />
              </a>
            ))}
          </div>

          {/* Input */}
          <div className="jb-inputrow">
            {recogSupported && (
              <button
                className={`jb-mic ${isListening ? "active" : ""}`}
                onClick={toggleListening}
                title={isListening ? "Detener" : "Dictar"}
              >
                {isListening ? <MicOff size={17} /> : <Mic size={17} />}
              </button>
            )}
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Escribe tu consulta..."
              aria-label="Mensaje"
              disabled={isTyping}
            />
            <button
              className="jb-send"
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              title="Enviar"
            >
              <Send size={16} />
            </button>
          </div>

          {/* Footer */}
          <footer className="jb-footer">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="jb-wa"
            >
              <Phone size={14} />
              WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`} className="jb-mail">
              <Mail size={14} />
              Correo
            </a>
            <button onClick={copySummary} className="jb-copy">
              {copied ? <Check size={14} /> : <ClipboardCopy size={14} />}
              {copied ? "Copiado" : "Copiar"}
            </button>
          </footer>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        .jb-root {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 2147483000;
          font-family: 'DM Sans', system-ui, sans-serif;
        }
        .jb-root * { box-sizing: border-box; margin: 0; padding: 0; }

        .jb-launcher {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 54px;
          padding: 0 20px 0 8px;
          border: none;
          border-radius: 999px;
          background: linear-gradient(135deg, #0c1225 0%, #0e7490 60%, #06b6d4 100%);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.35), 0 2px 8px rgba(0,0,0,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
          overflow: hidden;
        }
        .jb-launcher:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(6, 182, 212, 0.45), 0 4px 12px rgba(0,0,0,0.3);
        }
        .jb-launcher-icon {
          width: 38px; height: 38px;
          display: grid; place-items: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          flex-shrink: 0;
        }
        .jb-launcher-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(6,182,212,0.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .jb-badge {
          position: absolute; top: 6px; right: 6px;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #ef4444; color: #fff;
          font-size: 10px; font-weight: 800;
          display: grid; place-items: center;
          border: 2px solid #0c1225;
        }

        .jb-window {
          width: min(400px, calc(100vw - 24px));
          height: min(700px, calc(100vh - 40px));
          display: grid;
          grid-template-rows: auto auto 1fr auto auto auto auto;
          border-radius: 20px;
          overflow: hidden;
          background: #0d1526;
          border: 1px solid rgba(6,182,212,0.18);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.04),
            0 32px 80px rgba(0,0,0,0.6),
            0 0 60px rgba(6,182,212,0.08);
          animation: jbSlideUp 0.3s cubic-bezier(.22,.68,0,1.2);
        }
        .jb-expanded { width: min(720px, calc(100vw - 24px)); }
        @keyframes jbSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .jb-header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: linear-gradient(135deg, #0c1225 0%, #0e3a52 100%);
          border-bottom: 1px solid rgba(6,182,212,0.12);
          position: relative; overflow: hidden;
        }
        .jb-header::after {
          content: '';
          position: absolute; top: -30px; right: -30px;
          width: 120px; height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .jb-header-avatar {
          position: relative;
          width: 44px; height: 44px;
          display: grid; place-items: center;
          border-radius: 14px;
          background: linear-gradient(135deg, #0891b2, #06b6d4);
          color: #fff;
          box-shadow: 0 4px 16px rgba(6,182,212,0.4);
          flex-shrink: 0;
        }
        .jb-online-dot {
          position: absolute; bottom: 2px; right: 2px;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #22c55e;
          border: 2px solid #0c1225;
          animation: jbPulse 2s infinite;
        }
        .jb-online-dot-sm {
          display: inline-block;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #22c55e;
          margin-right: 4px;
          vertical-align: middle;
          animation: jbPulse 2s infinite;
        }
        @keyframes jbPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .jb-header-info strong {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 16px; font-weight: 700;
          color: #f0f9ff; letter-spacing: -0.02em;
        }
        .jb-header-info span {
          display: flex; align-items: center;
          font-size: 11.5px; color: #67e8f9;
          font-weight: 500; margin-top: 2px;
        }
        .jb-header-actions { display: flex; gap: 6px; }
        .jb-header-actions button {
          width: 32px; height: 32px;
          display: grid; place-items: center;
          border: none; border-radius: 10px;
          background: rgba(255,255,255,0.07);
          color: #94a3b8; cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }
        .jb-header-actions button:hover {
          background: rgba(6,182,212,0.2); color: #67e8f9;
        }

        .jb-actionbar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px; padding: 10px;
          background: #0d1526;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .jb-actionbar button {
          display: inline-flex; align-items: center;
          justify-content: center; gap: 5px;
          height: 36px;
          border: 1px solid rgba(6,182,212,0.2);
          border-radius: 10px;
          background: rgba(6,182,212,0.06);
          color: #67e8f9;
          font-family: 'DM Sans', sans-serif;
          font-size: 11.5px; font-weight: 700;
          cursor: pointer; transition: all 0.15s;
        }
        .jb-actionbar button:hover {
          background: rgba(6,182,212,0.16);
          border-color: rgba(6,182,212,0.5); color: #e0f9ff;
        }

        .jb-messages {
          overflow-y: auto; padding: 16px;
          display: flex; flex-direction: column; gap: 12px;
          scrollbar-width: thin;
          scrollbar-color: rgba(6,182,212,0.2) transparent;
          background:
            radial-gradient(ellipse at 20% 0%, rgba(6,182,212,0.04) 0%, transparent 50%),
            #0d1526;
        }
        .jb-date-sep {
          display: flex; align-items: center; gap: 8px; margin-bottom: 4px;
        }
        .jb-date-sep::before, .jb-date-sep::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(255,255,255,0.06);
        }
        .jb-date-sep span {
          font-size: 10.5px; color: #475569;
          font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;
        }
        .jb-row {
          display: flex; align-items: flex-end; gap: 8px;
          animation: jbMsgIn 0.25s ease-out;
        }
        .jb-user { flex-direction: row-reverse; }
        @keyframes jbMsgIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .jb-avatar-sm {
          width: 26px; height: 26px; border-radius: 8px;
          background: linear-gradient(135deg, #0891b2, #06b6d4);
          display: grid; place-items: center; color: #fff; flex-shrink: 0;
        }
        .jb-bubble-wrap {
          display: flex; flex-direction: column; gap: 3px; max-width: 84%;
        }
        .jb-bot .jb-bubble-wrap { align-items: flex-start; }
        .jb-user .jb-bubble-wrap { align-items: flex-end; }
        .jb-bubble {
          padding: 10px 14px; border-radius: 16px;
          font-size: 13.5px; line-height: 1.55;
          white-space: pre-wrap; word-break: break-word;
        }
        .jb-bot .jb-bubble {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          color: #e2e8f0; border-bottom-left-radius: 4px;
        }
        .jb-user .jb-bubble {
          background: linear-gradient(135deg, #0891b2, #0369a1);
          color: #fff; border-bottom-right-radius: 4px;
          box-shadow: 0 4px 16px rgba(8,145,178,0.3);
        }
        .jb-ts { font-size: 10px; color: #475569; padding: 0 2px; }
        .jb-typing {
          display: inline-flex; align-items: center; gap: 5px;
          min-width: 52px; height: 38px;
        }
        .jb-typing span {
          width: 6px; height: 6px; border-radius: 50%;
          background: #0891b2; animation: jbDot 1.1s infinite ease-in-out;
        }
        .jb-typing span:nth-child(2) { animation-delay: 0.18s; }
        .jb-typing span:nth-child(3) { animation-delay: 0.36s; }
        @keyframes jbDot {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }

        .jb-quick {
          display: flex; gap: 6px; overflow-x: auto;
          padding: 10px 12px;
          border-top: 1px solid rgba(255,255,255,0.05);
          background: #0d1526; scrollbar-width: none;
        }
        .jb-quick::-webkit-scrollbar { display: none; }
        .jb-quick button {
          flex: 0 0 auto; height: 30px; padding: 0 10px;
          border: 1px solid rgba(6,182,212,0.25);
          border-radius: 999px;
          background: rgba(6,182,212,0.06); color: #67e8f9;
          font-family: 'DM Sans', sans-serif;
          font-size: 11.5px; font-weight: 600;
          cursor: pointer; white-space: nowrap; transition: all 0.15s;
        }
        .jb-quick button:hover {
          background: rgba(6,182,212,0.18);
          border-color: rgba(6,182,212,0.6); color: #e0f9ff;
        }

        .jb-links {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 6px; padding: 0 10px 10px; background: #0d1526;
        }
        .jb-links a {
          display: flex; align-items: center; gap: 5px;
          padding: 7px 9px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.03);
          color: #94a3b8; font-size: 11px; font-weight: 700;
          text-decoration: none; transition: all 0.15s;
          overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
        }
        .jb-links a:hover {
          background: rgba(6,182,212,0.1);
          border-color: rgba(6,182,212,0.3); color: #67e8f9;
        }
        .jb-links a svg { flex-shrink: 0; margin-left: auto; opacity: 0.5; }

        .jb-inputrow {
          display: grid; grid-template-columns: auto 1fr auto;
          gap: 8px; align-items: center; padding: 10px 12px;
          background: #0a1020; border-top: 1px solid rgba(255,255,255,0.05);
        }
        .jb-inputrow input {
          height: 42px; border: 1px solid rgba(6,182,212,0.2);
          border-radius: 12px; padding: 0 14px;
          background: rgba(255,255,255,0.05); color: #e2e8f0;
          font-family: 'DM Sans', sans-serif; font-size: 13.5px;
          outline: none; transition: border-color 0.2s, box-shadow 0.2s;
        }
        .jb-inputrow input::placeholder { color: #475569; }
        .jb-inputrow input:focus {
          border-color: #0891b2;
          box-shadow: 0 0 0 3px rgba(8,145,178,0.15);
          background: rgba(255,255,255,0.07);
        }
        .jb-inputrow input:disabled { opacity: 0.5; }
        .jb-mic {
          width: 42px; height: 42px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; background: rgba(255,255,255,0.04);
          color: #64748b; display: grid; place-items: center;
          cursor: pointer; transition: all 0.15s; flex-shrink: 0;
        }
        .jb-mic:hover { background: rgba(255,255,255,0.08); color: #94a3b8; }
        .jb-mic.active {
          background: rgba(220,38,38,0.15);
          border-color: rgba(220,38,38,0.4); color: #f87171;
          animation: jbMicPulse 1s infinite;
        }
        @keyframes jbMicPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220,38,38,0.3); }
          50% { box-shadow: 0 0 0 6px rgba(220,38,38,0); }
        }
        .jb-send {
          width: 42px; height: 42px; border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #0891b2, #06b6d4);
          color: #fff; display: grid; place-items: center;
          cursor: pointer; transition: all 0.15s; flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(6,182,212,0.35);
        }
        .jb-send:hover { transform: scale(1.05); box-shadow: 0 6px 20px rgba(6,182,212,0.5); }
        .jb-send:disabled { opacity: 0.3; cursor: not-allowed; transform: none; box-shadow: none; }

        .jb-footer {
          display: grid; grid-template-columns: 1fr 1fr 1fr;
          gap: 6px; padding: 8px 10px 12px; background: #0a1020;
        }
        .jb-footer a, .jb-footer button {
          display: inline-flex; align-items: center;
          justify-content: center; gap: 6px; height: 36px;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 700;
          text-decoration: none; cursor: pointer;
          border: none; transition: all 0.15s;
        }
        .jb-wa {
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.25) !important;
          color: #4ade80 !important;
        }
        .jb-wa:hover { background: rgba(34,197,94,0.22); }
        .jb-mail {
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.25) !important;
          color: #a5b4fc !important;
        }
        .jb-mail:hover { background: rgba(99,102,241,0.2); }
        .jb-copy {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08) !important;
          color: #64748b !important;
        }
        .jb-copy:hover { background: rgba(255,255,255,0.08); color: #94a3b8 !important; }

        @media (max-width: 640px) {
          .jb-root { right: 12px; bottom: 12px; }
          .jb-window { height: min(680px, calc(100vh - 24px)); }
          .jb-hide-mobile { display: none !important; }
          .jb-actionbar { grid-template-columns: repeat(2, 1fr); }
          .jb-links { grid-template-columns: repeat(2, 1fr); }
          .jb-launcher span { display: none; }
          .jb-launcher { padding: 0; width: 54px; justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default VoiceflowChat;