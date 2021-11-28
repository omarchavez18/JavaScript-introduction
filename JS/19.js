// RETURN.

//forma para hacer un carrito de compras con return.

let total = 0;

function agregarCarrito(precio) {
  // += es una forma de hacer icremento, sumar las variables que se tienen.
  return (total += precio);
}

function calcularImpuesto(total) {
  return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(800);
total = agregarCarrito(200);

console.log(total);

const totalAPagar = calcularImpuesto(total);

// las comillas invertidas permiten escribir junto con la variable
console.log(`el total a  pagar con impuestos es de : $${totalAPagar}`);
