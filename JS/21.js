//

//ARROW FUNCTIONS
const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo("JavaScript");

//

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

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].precio);
}

let precioCarro = carrito.map((carro) => carro.precio * 2);

carrito.forEach((carro) => {
  console.log(carro.precio);
});

precioCarro;

meses.forEach((mes) => {
  if (mes == "marzo") {
    console.log("marzo si existe");
  }
});

// con el arrow function, pasamos del ejemplo 1 al 2, ya que el return se borra ya que queda implicito
// ejemplo 1
resultado = carrito.some(function (producto) {
  return producto.nombre === "celular";
});

// ejemplo 2
resultado = carrito.some((producto) => producto.nombre === "celular");

//  REDUCE. toma todos los numeros y los suma generando un resultado.

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// FILTER sirve para obtener los elementos deseados en base a filtros.

resultado = carrito.filter(
  (producto) => producto.precio < 400 //filtra todos los elementos que sean menores a 400 los mostrara
);

resultado = carrito.filter(
  (producto) => producto.nombre !== "celular" //mostrara los elementos que no sean celular mediante la expresion !==
);

console.log(resultado);
