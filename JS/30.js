//promises //

const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = true; //comentamos que el usuario si esta autenticado
  if (auth) {
    resolve("usuario autenticado"); //se ejecuta cuando el promise se cumple
  } else {
    reject("no se pudo iniciar sesion"); //se ejecuta cuando el promise NO se cumple
  }
});

usuarioAutenticado
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

//En los promises existen 3 valores:
//Pending: No se ha cumplido pero tampoco se ha rechazado.
//Fullfilled: Ya se cumplio.
//Reject: Se ha rechazado o no se pudo cumplir.
