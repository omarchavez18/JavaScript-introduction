//This

const reservacion = {
  nombre: "Omar",
  apellido: "chavez",
  total: 5000,
  pagado: false,
  informacion: function () {
    // debe llevar de esta forma la parte de function en lugar de arrow function.
    // ya que usar arrow function nos dara 'undefined'
    console.log(
      `el cliente ${this.nombre} reservo y su cantidad a pagar es de $${this.total}`
    );
  },
};
console.log(reservacion.informacion());
