//   Arrays o arreglos
//los valores dentro del array se posicionan como 0, 1, 2, 3, 4, etc...
const numeros = [10, 20, 30, 40, 50];

//acceder a los valores de un array
//se pone el nombre del objeto seguido de corchetes con el numero-posicion del valor en el indice que se desea sacar.
console.log(numeros[4]);
console.log(numeros[2]);

//metodo en array
numeros.push(80, 100, 250); //  .push   -para agregar elementos al final del array
numeros.unshift(4, 1, -20); // .unshift  -para agregar elementos al inicio del array

//console.table lo despliega en una tabla
console.table(numeros);

const meses = ["enero", "febrero", "marzo", "abril", "mayo"];

// meses.pop(); //elimina el ultimo elemento del array
// meses.shift(); //elimina el primer elemento del array

meses.splice(2, 1); // elimina elementos ubicados en la posicion 2 en este caso
console.table(meses);

//conocer la extension de un arreglo o cuantos elementos hay
console.log(meses.length);

//Rest Operator o Spread Operator
// se crea nuevo arreglo jalando el arreglo de meses y agregandole un elemento mas
const nuevoArreglo = [...meses, "junio"];
console.log(nuevoArreglo);
