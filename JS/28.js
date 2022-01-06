// CLASES //

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
  }

  aumentarPrecio() {
    const precioNuevo = this.precio + 100;
    return `tu producto tiene un precio de ${precioNuevo}`;
  }
}

const Producto2 = new Producto(`monitor curvo de 49"`, 800);
const Producto3 = new Producto(`laptop`, 300);

console.log(Producto2.formatearProducto());

//Herencia
// se heredara las propiedades de la funcion que se le indique con 'extends'

class Libro extends Producto {}

const libro = new Libro("JavaScript la Revolucion", 120, "986451320653");

console.log(libro);

console.log(Producto2);
console.log(Producto3);
