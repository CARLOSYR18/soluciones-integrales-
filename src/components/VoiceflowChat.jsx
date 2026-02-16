import { useEffect } from "react";

const VoiceflowChat = () => {
  useEffect(() => {
    // Crear el script dinámicamente
    const v = document.createElement("script");
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    v.type = "text/javascript";

    v.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "689f4aac4df981de6bb0d820" }, // <-- tu projectID
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com"
        },
        onLoad: () => {
          // Lista de nombres
          const nombres = [
            "Juan", "María", "Pedro", "Ana", "Luis", "Laura", "José", "Carmen",
            "Miguel", "Sofía", "David", "Elena", "Carlos", "Teresa", "Javier",
            "Lucía", "Andrés", "Valeria", "Alberto", "Gabriela"
          ];

          // Selección aleatoria
          const randomIndex = Math.floor(Math.random() * nombres.length);
          const nombreBot = nombres[randomIndex];

          // Colores según género
          const nombresMasculinos = [
            "Juan","Pedro","Luis","José","Miguel",
            "David","Carlos","Javier","Andrés","Alberto"
          ];
          const colorFondo = nombresMasculinos.includes(nombreBot)
            ? "#87CEEB"
            : "#FFC0CB";

          // Actualizar tema
          window.voiceflow.chat.updateTheme({
            general: {
              background: colorFondo
            }
          });

          // Mensaje inicial proactivo
          window.voiceflow.chat.proactive.add({
            type: "text",
            payload: {
              message: `Hola! soy ${nombreBot} y hoy seré tu asistente. ¿Cuál es tu nombre?`
            }
          });
        }
      });
    };

    document.body.appendChild(v);

    // Cleanup al desmontar el componente
    return () => {
      if (v) {
        v.remove();
      }
    };
  }, []);

  return null; // No renderiza nada, solo carga el chatbot
};

export default VoiceflowChat;
