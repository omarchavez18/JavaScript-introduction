//objeto

const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1 kg",
  medida: "1 m",
};

//para unir dos objetos con Spread Operator.
// debe llevar los 3 puntos seguido del nombre del objeto.
const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);
