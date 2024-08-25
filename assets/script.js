document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Previene el envío del formulario si no es válido
    if (!this.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    // Agrega clase de validación al formulario
    this.classList.add('was-validated');
  });