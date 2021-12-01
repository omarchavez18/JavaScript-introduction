// CLASES //

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
  }
}

const Producto2 = new Producto(`monitor curvo de 49"`, 800);
const Producto3 = new Producto(`laptop`, 300);

//Herencia
// se heredara las propiedades de la funcion que se le indique con 'extends'

class Libro extends Producto {}
const Libro = new Libro("JavaScript la Revolucion", 120, "986451320653");
console.log(Libro);

console.log(Producto2);
console.log(Producto3);
