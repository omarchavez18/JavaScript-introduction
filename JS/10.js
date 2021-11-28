//objetos

// un objeto puede contener varias variables como se muestra aqui abajo
const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//para acceder a la propiedad de un objeto se pone como aqui abajo un "." y luego el nombre de la propiedad.
// console.log(producto.precio);
// console.log(producto.disponible);
// console.log(producto.nombreProducto);

//para agregar nuevas propiedades seria el nombre del objeto mas .nombre nuevas propiedad = " tal cosa"
producto.imagen = "imagen.jpg";

//para eliminar propiedades seria delete nombre del objeto mas . y la propiedad que deseas eliminar
delete producto.disponible;

console.log(producto);
