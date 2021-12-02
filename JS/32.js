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
async function app() {
  try {
    const resultado = await descargarNuevosClientes();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}
app();

console.log("este codigo no se pudo descargar");
