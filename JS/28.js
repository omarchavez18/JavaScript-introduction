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

console.log(Producto2);
console.log(Producto3);
