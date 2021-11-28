//ESTRUCTURAS DE CONTROL
// CONDICIONES.

const puntaje = 100;

if (puntaje === 1000) {
  // si se cumple la condicion de que puntaje sea 1000 se ejecuta el codigo de abajo.
  console.log("si son 1000");
} else {
  // si no se cumple la condicion se ejecuta este codigo.
  console.log("no son 1000");
}
//

//condicion diferente.

if (puntaje !== 1000) {
  // '!==' este simbolo significa que sea diferente a =
  // si se cumple la condicion de que el puntaje sea diferente a 1000 se ejecuta el codigo de abajo.
  console.log("no es igual a mil");
} else {
  // si no se cumple la condicion se ejecuta este codigo.
  console.log("son 1000");
}
//

//ejemplo condicion mayor que '>'.
const efectivo = 1500;
const carrito = 1800;

if (efectivo > carrito) {
  console.log("El cliente puede realizar la compra");
} else {
  console.log("Fondos insuficientes");
}
//

// condiciones mediante texto

const usuario = "ADMINISTRADOR";

if (usuario === "ADMINISTRADOR") {
  console.log("Acceso total");
} else if (usuario === "EDITOR") {
  console.log("Acceso limitado");
} else {
  console.log("acceso restringido");
}

// ejemplo inventado.

const level = "senior developer";

if (level === "jr developer") {
  console.log("your salary will be good");
} else if (level === "mid developer") {
  console.log("your salary will be great");
} else if (level === "senior developer") {
  console.log("your salary will be awesome");
} else {
  console.log("your income its $0");
}
