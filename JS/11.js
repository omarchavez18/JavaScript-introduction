const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//como seleccionar una propiedad del objeto y crear una variable
//se asigna nombre a la variable como "precioProducto" y se accede a la propiedad del objeto como "producto.precio"
//forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

//destructuring
//esta forma extrae la propiedad del objeto y crea la variable en un solo paso
const { precio, nombreProducto } = producto;

console.log(precio);
console.log(nombreProducto);
