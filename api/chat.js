const OLLAMA_BASE_URL = (process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434").replace(/\/$/, "");
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "llama3.2:1b";
const OLLAMA_TIMEOUT_MS = Number(process.env.OLLAMA_TIMEOUT_MS || 6000);

const SYSTEM_PROMPT = `
Eres el asistente virtual de Soluciones Integrales JB, una empresa de Chancay, Lima, Peru.
Responde en espanol natural, cercano y profesional.
Tu objetivo es entender el problema del visitante, mantener contexto y guiarlo como una IA conversacional real.

Servicios de la empresa:
- Soporte tecnico, mantenimiento de computadoras, correos, hosting y fallas de red.
- Desarrollo de sitios web, landing pages, tiendas, formularios, hosting y SEO.
- Desarrollo de software a medida, facturacion electronica, inventarios, CRM y automatizaciones.
- Camaras, alarmas, CCTV, control de acceso y tecnologia en seguridad.
- Redes e infraestructura, cableado, WiFi, switches, routers y servidores.
- Marketing digital, social media, grafica publicitaria y merchandising.
- Consultoria TI, empresarial, educativa, auditorias y seguridad informatica.
- Instalaciones electricas, mantenimiento electrico y refrigeracion industrial.

Reglas:
- No repitas la misma pregunta si el usuario ya dio informacion.
- Si el usuario pide ayuda humana, asesor o persona, deriva a WhatsApp +51 926 392 858 y correo consultas@solucionesintegralesjb.com.
- No inventes horarios, precios, direcciones exactas ni disponibilidad. Si no tienes ese dato, dilo y deriva a WhatsApp o correo.
- Si faltan datos, pide solo 1 a 3 datos concretos.
- Da pasos utiles y seguros. Para soporte tecnico no inventes diagnosticos definitivos; da 1 o 2 acciones seguras y pide una evidencia concreta.
- Si el usuario dice que su PC esta lenta, menciona revisar programas de inicio, espacio en disco, virus, RAM o disco duro, y pregunta desde cuando ocurre.
- Responde breve, con 1 a 2 frases completas, salvo que el usuario pida detalle. No uses listas largas ni markdown.
- No traduzcas siglas tecnicas como VPN, SSD, RAM, CPU, DNS o WiFi; explicalas en espanol simple.
- Si el usuario escribe informal o con errores, entiende la intencion y responde normal.
`;

const toOllamaMessages = (messages = []) => {
  const recentMessages = messages.slice(-14);

  return recentMessages
    .filter((message) => message?.text && (message.from === "user" || message.from === "bot"))
    .map((message) => ({
      role: message.from === "bot" ? "assistant" : "user",
      content: String(message.text).slice(0, 1200),
    }));
};

const normalizeText = (value = "") =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const hasAny = (text, terms) => terms.some((term) => text.includes(term));

const createKnownFactReply = (messages = []) => {
  const userMessages = messages.filter((message) => message?.from === "user");
  const lastUserMessage = userMessages[userMessages.length - 1]?.text || "";
  const text = normalizeText(lastUserMessage);

  if (hasAny(text, ["horario", "hora abren", "a que hora", "atienden", "abren", "cierran"])) {
    return "No tengo un horario exacto configurado para Soluciones Integrales JB. Para confirmarlo, escribenos por WhatsApp al +51 926 392 858 o al correo consultas@solucionesintegralesjb.com.";
  }

  return null;
};

const createLocalReply = (messages = []) => {
  const userMessages = messages.filter((message) => message?.from === "user");
  const lastUserMessage = userMessages[userMessages.length - 1]?.text || "";
  const text = normalizeText(lastUserMessage);

  if (
    hasAny(text, [
      "humano",
      "humana",
      "atencion",
      "atender",
      "asesor",
      "asesora",
      "persona",
      "alguien",
      "whatsapp",
      "contacto",
      "llamar",
      "llamada",
      "operador",
      "soporte humano",
    ])
  ) {
    return "Claro. Para atencion humana, escribenos por WhatsApp al +51 926 392 858 o al correo consultas@solucionesintegralesjb.com. Tambien puedes tocar el boton de WhatsApp de este chat para enviar el resumen de tu consulta.";
  }

  if (hasAny(text, ["hola", "buenos dias", "buenas tardes", "buenas noches", "hey"])) {
    return "Hola, soy el asistente de Soluciones Integrales JB. Puedo ayudarte con cotizaciones, soporte tecnico, paginas web, software, camaras, redes o marketing. ¿Que necesitas hoy?";
  }

  if (hasAny(text, ["cotizacion", "cotizar", "precio", "costo", "cuanto cuesta", "presupuesto"])) {
    return "Claro, te ayudo con una cotizacion. ¿Que servicio necesitas y en que ciudad o zona se realizaria?";
  }

  if (hasAny(text, ["agua", "mojado", "mojada", "teclado", "derrame"])) {
    return "Apaga el equipo de inmediato, desconectalo y no lo prendas de nuevo. Para evitar corrosion conviene revisarlo cuanto antes; ¿fue una laptop, teclado o PC?";
  }

  if (hasAny(text, ["vpn"])) {
    return "Una VPN crea una conexion segura entre tu equipo e internet para proteger tus datos, sobre todo en redes publicas. Tambien puede servir para acceder a recursos privados de una empresa.";
  }

  if (hasAny(text, ["ssd", "disco solido"])) {
    return "Un SSD es un disco de almacenamiento mas rapido que un disco duro tradicional. Si tu PC demora al prender o abrir programas, cambiar de HDD a SSD suele mejorar bastante el rendimiento.";
  }

  if (hasAny(text, ["ram", "memoria"])) {
    return "La RAM es la memoria temporal que usa la PC para trabajar con programas abiertos. Si tienes poca RAM, el equipo puede ponerse lento al abrir Chrome, sistemas o varias ventanas.";
  }

  if (hasAny(text, ["dns"])) {
    return "El DNS convierte nombres como google.com en direcciones que la red entiende. Si falla, puedes tener internet conectado pero las paginas no cargan bien.";
  }

  if (hasAny(text, ["lenta", "lento", "demora", "tarda", "chrome", "prender", "arrancar", "encender"])) {
    return "Entiendo. Revisa primero los programas de inicio y el espacio libre del disco; si demora al prender o abrir Chrome, tambien puede ser disco duro, RAM o malware. ¿Desde cuando pasa y tu equipo usa disco HDD o SSD?";
  }

  if (hasAny(text, ["soporte", "pc", "laptop", "computadora", "impresora", "correo", "hosting", "falla"])) {
    return "Podemos ayudarte con soporte tecnico. Cuentame que equipo o servicio falla y que mensaje de error aparece, si hay alguno.";
  }

  if (hasAny(text, ["camara", "camaras", "cctv", "alarma", "seguridad", "biometria"])) {
    return "Trabajamos con camaras CCTV, alarmas, control de acceso y tecnologia de seguridad. ¿Es para casa, negocio u oficina?";
  }

  if (hasAny(text, ["web", "pagina", "sitio", "landing", "tienda", "seo"])) {
    return "Podemos desarrollar paginas web, landing pages, tiendas virtuales y SEO. ¿Buscas una web nueva o mejorar una que ya existe?";
  }

  if (hasAny(text, ["software", "sistema", "crm", "inventario", "facturacion", "automatizacion"])) {
    return "Podemos crear software a medida para gestion, inventario, CRM, facturacion electronica o automatizaciones. ¿Que proceso quieres digitalizar?";
  }

  if (hasAny(text, ["red", "redes", "wifi", "cableado", "switch", "router", "servidor"])) {
    return "Podemos ayudarte con redes, cableado, WiFi, switches, routers y servidores. ¿Es una instalacion nueva o una falla?";
  }

  if (hasAny(text, ["marketing", "redes sociales", "facebook", "instagram", "publicidad", "diseño", "diseno"])) {
    return "Tenemos servicios de marketing digital, redes sociales, grafica publicitaria y campanas. ¿Quieres captar mas clientes o mejorar la imagen de tu marca?";
  }

  return "Puedo ayudarte con soporte tecnico, paginas web, software, camaras, redes, marketing, consultoria o servicios electricos. ¿Sobre cual de estos temas necesitas ayuda?";
};

const createFastReply = (messages = []) => {
  const userMessages = messages.filter((message) => message?.from === "user");
  const lastUserMessage = userMessages[userMessages.length - 1]?.text || "";
  const text = normalizeText(lastUserMessage);

  const fastTerms = [
    "hola",
    "buenos dias",
    "buenas tardes",
    "buenas noches",
    "humano",
    "asesor",
    "persona",
    "whatsapp",
    "cotizacion",
    "cotizar",
    "precio",
    "costo",
    "agua",
    "mojado",
    "teclado",
    "lenta",
    "lento",
    "demora",
    "tarda",
    "chrome",
    "prender",
    "vpn",
    "ssd",
    "disco solido",
    "ram",
    "memoria",
    "dns",
    "soporte",
    "pc",
    "laptop",
    "computadora",
    "camara",
    "camaras",
    "web",
    "pagina",
    "software",
    "red",
    "wifi",
    "marketing",
  ];

  return hasAny(text, fastTerms) ? createLocalReply(messages) : null;
};

const getBody = (req) => {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo no permitido" });
  }

  const body = getBody(req);
  const messages = Array.isArray(body?.messages) ? body.messages : [];
  const knownFactReply = createKnownFactReply(messages);

  if (knownFactReply) {
    return res.status(200).json({ reply: knownFactReply, source: "known_fact" });
  }

  const fastReply = createFastReply(messages);

  if (fastReply) {
    return res.status(200).json({ reply: fastReply, source: "fast" });
  }

  try {
    const input = toOllamaMessages(messages);

    if (!input.length) {
      return res.status(400).json({ error: "Mensaje vacio" });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), OLLAMA_TIMEOUT_MS);
    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...input],
        stream: false,
        keep_alive: "30m",
        options: {
          num_ctx: 2048,
          num_predict: 100,
          temperature: 0.2,
        },
      }),
    }).finally(() => clearTimeout(timeout));

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error("Ollama error:", data);
      return res.status(200).json({
        reply: createLocalReply(messages),
        source: "local",
        providerError: data?.error || "ollama_error",
      });
    }

    const reply = data?.message?.content?.trim();

    if (!reply) {
      return res.status(502).json({ error: "Ollama no devolvio texto" });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Error en /api/chat:", error);
    if (messages.length) {
      return res.status(200).json({
        reply: createLocalReply(messages),
        source: "local",
        providerError: "provider_unavailable",
      });
    }

    return res.status(500).json({ error: "Error interno del chatbot" });
  }
}
