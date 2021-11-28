//array methods

const meses = ["enero", "febrero", "marzo", "abril", "mayo"];

//array con objetos
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

//forEach se ejecutara al menos una vez por cada elemento que hay en el array
//la funcion se llama mes, si mes es igual a marzo escribe en la consola 'marzo si existe'
meses.forEach(function (mes) {
  if (mes == "marzo") {
    console.log("marzo si existe");
  }
});

// includes
//asi podemos comprobar si un elemento existe en el array, solo funciona en arrays planos como el de meses.
//para usarlo en arreglos con objetos como el de carrito seria con 'some'
let resultado = meses.includes("octubre");

//'Some' ideal para arrays con objetos
resultado = carrito.some(function (producto) {
  return producto.nombre === "celular";
});

//  REDUCE. toma todos los numeros y los suma generando un resultado.

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// FILTER sirve para obtener los elementos deseados en base a filtros.

resultado = carrito.filter(function (producto) {
  return producto.precio < 400; //filtra todos los elementos que sean menores a 400 los mostrara
});

resultado = carrito.filter(
  (producto) => producto.nombre !== "celular" //mostrara los elementos que no sean celular mediante la expresion !==
);

console.log(resultado);
