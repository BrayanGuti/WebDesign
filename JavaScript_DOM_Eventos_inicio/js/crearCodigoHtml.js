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


const bitEnviar = document.querySelector(".boton--primario")
bitEnviar.addEventListener("click", function(evento){
    console.log(evento);
    evento.preventDefault();  //evita que se recargue la pagina
    console.log("enviando formulatio");
})

const nombre = document.querySelector("#nombre")
nombre.addEventListener("input", function(evento){
    console.log("enviando formulario");
})




