// uso local storage y DOM manipulation para agregar el mail del usuario a un nav bar vacío en el inicio
let userMailNavBar = document.getElementById("userMail");
let userMail = localStorage.getItem("userMail");
userMailNavBar.innerHTML = `${userMail}`;
localStorage.removeItem("userMail");

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

});