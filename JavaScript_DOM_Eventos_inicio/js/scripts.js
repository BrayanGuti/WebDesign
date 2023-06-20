//query selector
const heading = document.querySelector(".header__texto h2"); 
heading.textContent = "nuevo heading";

// querySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");

// getElementById

const heading2 = document.getElementById("heading");

// Generar contenido HTML
const nuevo_enlace = document.createElement("A")

// Agregar el href
 nuevo_enlace.href = "nuevo-enlace.html"

// Agregar el texto
nuevo_enlace.textContent = "nuevo enlace"

// Agregar la clase
nuevo_enlace.classList.add("navegacion__enlace")

//Agregar al documento
const navegacion = document.querySelector(".navegacion")
navegacion.appendChild(nuevo_enlace)


// Eventos

// console.log(1)

//Cuando carga la pagina:

window.addEventListener("load", function(){ // Espera a que se descargue todo el contenido (HTML, JS, CSS.. ETC)
    // console.log(2)
})

document.addEventListener("DOMContentLoaded", function(){   // Espera a que se descargue todo el html de la pagina
    // console.log(4)
})

// console.log(5)

//Cuando hace scroll

window.onscroll = function () {
    // console.log("Scrolling...")
}


//Seleccionar un elemento y asociarle un evento

const btnEnviar = document.querySelector(".boton--primario");

// btnEnviar.addEventListener("click", function(evento){
//     console.log(evento);
//     evento.preventDefault();  //Previene la accion por default (En este caso previene que se envie el fomulario)

//     //validar un formulario
//     // console.log("enviando formulario");
// })




//eventos de inpust_areas

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", campos)

email.addEventListener("input", campos)

mensaje.addEventListener("input", campos)

function campos (e){
    datos[e.target.id] = e.target.value; 
    
    // console.log(datos)
}

//eventos de Submit

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    //Validar el formulario
    const {nombre, email, mensaje} = datos;

    if(nombre == "" || email == "" || mensaje == ""){
        mostrarError("Todos los campos son obligatorios")
    }
    else{
        mostrarComfirmacion("Se ha enviado correctamente el formulario")
    }
    
    console.log("enviando formulario");
})

function mostrarError(typeError){
    const error = document.createElement("p")
    error.textContent = typeError
    error.classList.add("error");
    formulario.appendChild(error)

    setTimeout(() =>{
        error.remove();
    }, 5000);
}

function mostrarComfirmacion(Comfirmacion){
    const text = document.createElement("p")
    text.textContent = Comfirmacion 
    text.classList.add("comfirmacion")
    formulario.appendChild(text)

    setTimeout(() =>{
        text.remove();
    }, 5000);
}
