const spanish = {
  eyebrow: "Contacta conmigo",
  heading: "Trabajemos juntos.",
  intro: "Envíame un mensaje y te responderé lo antes posible.",
  name: "Nombre",
  namePlaceholder: "Tu nombre",
  email: "Correo electrónico",
  subject: "Asunto",
  subjectPlaceholder: "¿Sobre qué te gustaría hablar?",
  message: "Mensaje",
  messagePlaceholder: "Escribe tu mensaje aquí...",
  send: "Enviar mensaje",
  privacy: "Netlify procesa los mensajes para enviarlos por correo electrónico.",
};

if (new URLSearchParams(window.location.search).get("lang") === "es") {
  document.documentElement.lang = "es";
  document.title = "Contactar con Mario";

  document.querySelectorAll("[data-translate]").forEach((element) => {
    element.textContent = spanish[element.dataset.translate];
  });
  document.querySelectorAll("[data-translate-placeholder]").forEach((element) => {
    element.placeholder = spanish[element.dataset.translatePlaceholder];
  });
}
