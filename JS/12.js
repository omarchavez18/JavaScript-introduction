//objeto

const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

Object.seal(producto); // seal no permite agregar o eliminar propiedades pero si modificar las existentes.
Object.freeze(producto); //freeze no permite ni agregar ni eliminar ni modificar propiedades del elemento.

producto.imagen = "imagen.jpg";

console.log(producto);
