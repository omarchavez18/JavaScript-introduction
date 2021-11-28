//SWITCH.
//se utiliza cuando son muchas condicionales y se vuelve dificil de leer.
// en lugar de utilizar muchos else if , se utiliza switch.

const metodoDePago = "efectivo";

switch (metodoDePago) {
  case "tarjeta":
    console.log("Pagaste con tarjeta");
    break;
  case "efectivo":
    console.log("Pagaste con efectivo");
    break;
  case "vale":
    console.log("Pagaste con vales");
    break;
  case "cheque":
    console.log("Se realizara la compra con cheque, validar fondos");
    break;
  default:
    console.log("Aun no haz pagado");
    break;
}

//switch.
//invented example.
switch ("senior") {
  case "jr":
    console.log("you will earn good");
    break;
  case "mid":
    console.log("you will earn great amount");
    break;
  case "senior":
    console.log("you will earn awesome");
    break;

  default:
    console.log("not al all");
    break;
}
