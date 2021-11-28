function add(numero1, numero2) {
  // numero1 y numero2 son parametros
  console.log(numero1 + numero2);
}

add(8, 9); // los valores reales van aqui representando los valores dentro de los parametros "numero1 y numero2"
add(4, 10); // la funcion se puede reutilizar, por lo que podemos sumar varias veces.
add(2, 2);
add(3, 9);

//
const add2 = function (n1, n2) {
  console.log(n1 + n2);
};

add2(8, 9);
