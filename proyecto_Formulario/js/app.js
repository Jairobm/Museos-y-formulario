const form = document.getElementById("formUsuario");

form.addEventListener("submit", function(e){
    e.preventDefault(); // evita recargar la página

    const nombre = document.getElementById("nombre").value;
    const apellido1 = document.getElementById("apellido1").value;
    const apellido2 = document.getElementById("apellido2").value;
    const fechaNacimiento = document.getElementById("FechaNacimiento").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    // 1) Comprobar longitud mínima
    if (password1.length < 8) {
        alert("Error en el campo 'Contraseña': debe tener al menos 8 caracteres.");
        return;
    }
    // 2) Comprobar que coinciden
    if (password1 !== password2) {
        alert("Error en el campo 'Repetir contraseña': las contraseñas no coinciden.");
        return;
    }
   // vwntana emergente
    alert(
        `Se ha creado correctamente la cuenta de\n` +
        `${nombre} ${apellido1}`
    );
    // Cambiar color de fondo de la página
    document.body.style.backgroundColor = "#C8E6C9"; 
    // Limpiar el formulario
    form.reset();

});
