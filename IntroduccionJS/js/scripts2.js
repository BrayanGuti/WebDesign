class Producto{
    constructor(id,nombre,precio,stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    escribir(){
        return this
    }
}

class Libro extends Producto{
    constructor(id,nombre,precio,stock,autor){
        super(id,nombre,precio,stock);
        this.autor = autor;
    }
} 

const libro = new Libro(1,'El libro',200,100, "juanchoRoiz");

console.log(libro.escribir());