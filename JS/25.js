const carrito = [
  { nombre: "monitor 20 pulgadas", precio: 500 },
  { nombre: "television 50 pulgadas", precio: 700 },
  { nombre: "tablet", precio: 300 },
  { nombre: "audifonos", precio: 200 },
  { nombre: "teclado", precio: 50 },
  { nombre: "celular", precio: 500 },
  { nombre: "bocinas", precio: 300 },
  { nombre: "laptop", precio: 800 },
];

//ForEach y Map solo se pueden ejecutar en arreglos.

//ForEach con arrow function..

carrito.forEach((producto) => console.log(producto.nombre));

//Map. te genera un nuevo arreglo con los resultados.
const arreglo2 = carrito.map((producto) => producto.precio * 2);
console.log(arreglo2);

//diferencia entre ForEach y Map: ForEach te muestra el resultado en pantalla o consola por separado mientras que Map te crea un array con los resultados.
