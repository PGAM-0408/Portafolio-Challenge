//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega

function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
  
    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }
  
    alert("Formulario enviado correctamente.");
    return true;
  }
