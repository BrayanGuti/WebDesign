// querySelector
const heading = document.querySelector(".header__texto h2");
heading.textContent = "PEPE"


// querySelectorALL

// const enlaces = document.querySelectorAll("a");
// enlaces.forEach(enlace => {
//     enlace.textContent = "PEPE"
// })



// Generar codigo html - mediante javaScript

const nuevoEnlace = document.createElement("A")

// Agregar atributos

nuevoEnlace.href = "https://www.google.com"
nuevoEnlace.textContent = "Google"
nuevoEnlace.classList.add("navegacion__enlace")

// Agregarlo al documento

const navegacion = document.querySelector(".navegacion")
navegacion.appendChild(nuevoEnlace)


// eventos

// window.addEventListener("load", function(){  //espera a descargar todo el html, css 
//     console.log(2);
// })

// document.addEventListener("DOMContentLoaded", function(){  //espera a descargar todo el html
//     console.log(3);
// })


// const bitEnviar = document.querySelector(".boton--primario")
// bitEnviar.addEventListener("click", function(evento){
//     console.log(evento);
//     evento.preventDefault();  //evita que se recargue la pagina
//     console.log("enviando formulatio");
// })


const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

const user = {
    nombre: "",
    email: "",
    mensaje: ""
};

nombre.addEventListener("input", function(evento){
    user[evento.target.id] = evento.target.value;
    console.log(user);
});

email.addEventListener("input", function(evento){
    user[evento.target.id] = evento.target.value;
    console.log(user);
});

mensaje.addEventListener("input", function(evento){
    user[evento.target.id] = evento.target.value;
    console.log(user);
});

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    const decision = document.createElement("p");

    if(user.nombre !== "" && user.email !== "" && user.mensaje !== ""){
        decision.textContent = "Enviado correctamente";
        decision.classList.add("correcto");
        formulario.appendChild(decision);
        setTimeout(function(){
            decision.remove();
        }, 3000);
    } else {
        decision.textContent = "Todos los campos son obligatorios";
        decision.classList.add("error");
        formulario.appendChild(decision);
        setTimeout(function(){
            decision.remove();
        }, 3000);
    }
});




