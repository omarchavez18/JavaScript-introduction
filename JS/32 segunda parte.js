//ASYNC / AWAIT.

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando... espere...");

    //setTimeout establece un tiempo para que se ejecute el codigo. aqui declaramos que despues de 5 seg se ejecute.
    setTimeout(() => {
      resolve("los clientes fueron descargados");
    }, 5000); // 5000 son 5 seg
  });
}
function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos... espere...");

    //setTimeout establece un tiempo para que se ejecute el codigo. aqui declaramos que despues de 5 seg se ejecute.
    setTimeout(() => {
      resolve("los pedidos fueron descargados");
    }, 3000); // 5000 son 5 seg
  });
  async function app() {
    try {
      const resultado = await Promise.all([
        descargarNuevosClientes(),
        descargarUltimosPedidos(),
      ]);
      console.log(resultado[0]);
      console.log(resultado[1]);
    } catch (error) {
      console.log(error);
    }
  }
  app();
}
