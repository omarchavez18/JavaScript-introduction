// programacion orientada a objetos/ POO.
//object literal
const producto = {
  nombre: "Tablet",
  precio: 500,
};

//object constructor.
function Producto(nombre, precio, verdadero) {
  this.nombre = nombre;
  this.precio = precio;
  this.verdadero = verdadero;
}
//prototype nos permite crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function () {
  return `el producto ${this.nombre} tiene un precio de $ ${this.precio}`;
};

const producto2 = new Producto('monitor curvo de 49"', 800);
const producto3 = new Producto("laptop", 400);
const producto4 = new Producto("cpu", 800, false);
const producto5 = new Producto("curso", 1200, true);

function formatearProducto(producto2) {
  return `el producto ${producto2.nombre} tiene un precio de $ ${producto2.precio}`;
}

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);

console.log(formatearProducto(producto2));
