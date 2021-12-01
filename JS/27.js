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

const producto2 = new Producto('monitor curvo de 49"', 800);
const producto3 = new Producto("laptop", 400);
const producto4 = new Producto("cpu", 800, false);
const producto5 = new Producto("curso", 1200, true);

function formatearProducto() {
  return ``;
}

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
