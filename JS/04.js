//string//
const tweet = "20 inches monitor";
const product2 = "monitor HD";
//usar "typeof" nos permite saber que tipo de dato tiene una variable//
// .length nos indica el numero de caracteres en un string
console.log(typeof tweet);
console.log(product2.length);
//indexof nos indica si existe una palabra dentro de un string
console.log(tweet.indexOf("inches"));
console.log(product2.indexOf("tablet"));
//includes (retorna true o false) esto nos indica si esta la palabra en el string o no
console.log(tweet.includes("inches"));
console.log(product2.includes("tablet"));
