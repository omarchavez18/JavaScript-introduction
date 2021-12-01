// API notification. //
//.querySelector - es la forma para seleccionar contenido HTML.
const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) =>
    console.log("El resultado es: ", resultado)
  );
}); //funcion que nos permite registrar un evento a la variable boton que tiene agregado el html con id de boton.
