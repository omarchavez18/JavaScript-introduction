// LOOPS.
//for loop
// nos indica que el index = 0, el loop se va a repetir hasta que la condicion no se pueda cumplir.
// indica si el index es menor o igual a 10 se repetira el loop, por lo que seria 0 es menor a 10?
// si, se aplica el siguiente codigo, i++ indica incremento, 2 es menor a 10 y repite el incremento hasta llegar a 10.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// pregunta de entrevista. identifica del 1 al 100 si el numero actual es par o impar.

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    // si el numero del index divido entre 2 da un residuo de 1 es impar. i % 2 == 1.
    //si el numero del index divido entre 2 da un residuo de 0 es par. i % 2 == 0.
    //revisar si el numero es par. utlizar la funcion del residuo '%' si, el residuo es 0 es par.
    console.log(`El numero ${i} es impar`);
  } else {
    console.log(`El numero ${i} es par`);
  }
}

//while loop

let i = 1; // index

while (i <= 10) {
  //condicion
  if (i % 2 === 0) {
    console.log(`el numero ${i} es par`);
  } else {
    console.log(`el numero ${i} es impar`);
  }
  i++; // incremento
}

// do while loop.

let i = 100;
do {
  console.log(i);
  i++;
} while (i < 10);
