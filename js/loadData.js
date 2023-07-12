const fs = require("fs");
fetch("https://portfolio-l2h9.onrender.com/api/projects")
  .then((response) => response.json())
  .then((data) => {
    // Aquí compararás el contenido con el archivo JSON existente (si lo hay)
    // y decidirás si guardar los datos o no.
    // Supongamos que tienes el archivo JSON existente en una variable llamada `existingData`.

    fetch("/data/frontend-backend.json")
      .then((response) => response.json())
      .then((data2) => {
        if (!sonIguales(data, data2)) {
          // Si no hay datos existentes o los datos son diferentes, guardar los nuevos datos en el archivo JSON.
          guardarEnJSON(data);
        } else {
          // Los datos son iguales, no se realiza ninguna acción adicional.
          console.log("son iguales");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  })
  .catch((error) => {
    // Manejo de errores en caso de que la solicitud falle.
    console.error("Error al obtener los datos de la API:", error);
  });

function sonIguales(datosNuevos, datosExistente) {
  return JSON.stringify(datosNuevos) === JSON.stringify(datosExistente);
}

function guardarEnJSON(datos) {
  fs.writeFile(
    "/data/frontend-backend.json",
    JSON.stringify(datos),
    "utf8",
    (error) => {
      if (error) {
        console.error("Error al guardar los datos en el archivo JSON:", error);
      } else {
        console.log("Datos guardados correctamente en el archivo JSON.");
      }
    }
  );
}
