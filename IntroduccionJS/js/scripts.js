const produtco = {
    nombreProducto: 'Celular',
    precio: 1200,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto ${this.nombreProducto}`) 
    }    
}

console.log(produtco.nombreProducto)
console.log(produtco.precio)
console.log(produtco.disponible)
produtco.mostrarInfo()