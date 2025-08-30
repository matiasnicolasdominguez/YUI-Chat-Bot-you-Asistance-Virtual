/* Funsion que define el Switch del dark-mode */

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode')
}

/* Funcion quw define el boton del sidebar */

function toggleSidebar() {
    document.body.classList.toggle('sidebar-open');
}
document.getElementById('sidebarToggle').onclick = toggleSidebar;


/* Funcion que define las conversaciones de Yui y sus acciones */

// Definir respuestas
const respuestas = {
  "hola": "¡Hola! Soy Yui, tu asistente.",
  "como estas": "Estoy bien, gracias por preguntar :)",
  "adios": "¡Hasta luego! Cuídate.",
  "default": "Lo siento, aún no entiendo esa pregunta."
};

// Capturar input y mostrar respuesta
function enviarMensaje() {
  let input = document.getElementById("inputUsuario").value.toLowerCase();
  let salida = document.getElementById("chatBox");

  // Buscar respuesta
  let respuesta = respuestas[input] || respuestas["default"];

  // Mostrar en el chat
  salida.innerHTML += `<p><b>Tú:</b> ${input}</p>`;
  salida.innerHTML += `<p><b>Yui:</b> ${respuesta}</p>`;

  // Limpiar input
  document.getElementById("inputUsuario").value = "";
}
