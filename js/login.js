const miFormulario = document.getElementById("formularioLogin");

miFormulario.addEventListener("submit", function(evento) {
    const emailLogin = document.getElementById("emailLogin");
    const passwordLogin = document.getElementById("passwordLogin");
    evento.preventDefault();

    if(emailLogin.value.length > 0 && passwordLogin.value.length > 0) {
        evento.preventDefault();
        window.location.href = "home.html";
    } else {
        evento.preventDefault();
        document.getElementById("invalido").innerHTML = "<p style='color:red'>Intente nuevamente</p>";
    }
});