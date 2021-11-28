// METODOS DE PROPIEDAD.
//estamos creando un objeto con funciones, objeto reproductor con funcion= "reproducir, pausar, borrarCancion, etc.."

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion con el id: ${id}`);
  },
  pausar: function () {
    console.log("pausando...");
  },
  borrarCancion: function (id) {
    console.log(`borrando cancion: ${id}`);
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando playlist con el nombre: ${nombre}`);
  },
  reproducirPlaylist: function (nombre) {
    console.log(`Reproducir playlist con el nombre: ${nombre}`);
  },
};
reproductor.reproducir(1825);
reproductor.pausar();
reproductor.borrarCancion(45);
reproductor.crearPlaylist("Heavy metal");
reproductor.reproducirPlaylist("Heavy metal");
