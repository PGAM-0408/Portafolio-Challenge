//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega

// Función de validación
function validarFormulario(event) {
  // Evitar el envío del formulario si hay errores
  event.preventDefault();

  // Obtener referencias a los campos
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  // Inicializar mensaje de error
  let mensajesError = [];

  // Validar Nombre
  if (nombre.value.trim() === "") {
    mensajesError.push("El campo Nombre no debe estar vacío.");
  } else if (nombre.value.length > 50) {
    mensajesError.push("El campo Nombre no debe exceder 50 caracteres.");
  }

  // Validar Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    mensajesError.push("El campo Correo Electrónico no debe estar vacío.");
  } else if (!emailRegex.test(email.value)) {
    mensajesError.push("El formato del correo electrónico es inválido.");
  }

  // Validar Mensaje
  if (mensaje.value.trim() === "") {
    mensajesError.push("El campo Mensaje no debe estar vacío.");
  } else if (mensaje.value.length > 300) {
    mensajesError.push("El campo Mensaje no debe exceder 300 caracteres.");
  }

  // Si hay errores, mostrarlos en un alert
  if (mensajesError.length > 0) {
    alert(mensajesError.join("\n"));
  } else {
    // Si no hay errores, mostrar mensaje de éxito
    alert("Formulario enviado correctamente.");

    // Limpiar los campos
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
  }
}
