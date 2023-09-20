const path = require("path");

const fs = require("fs");
const { google } = require("googleapis");

const apikeys = require("../apikey.json");
const SCOPE = ["https://www.googleapis.com/auth/drive"];

//Autenticación
async function autorizar() {
  const jwtClient = new google.auth.JWT(
    apikeys.client_email,
    null,
    apikeys.private_key,
    SCOPE
  );

  await jwtClient.authorize();

  return jwtClient;
}

async function cargarImagen(authClient, imagenNombre) {
  return new Promise((resolve, rejects) => {
    const drive = google.drive({ version: "v3", auth: authClient });
    let fileMetaData = {
      name: imagenNombre,
      parents: ["1TXjN7gqxeUxofCbrtYV3VD7h7bsiwea4"],
    };

    //Directorio donde se almacenaralos archivos temporales
    const direccionTemporal = path.join(__dirname, "temp");

    // Verificar si el directorio temporal existe, y si no, crearlo
    if (!fs.existsSync(direccionTemporal)) {
      fs.mkdirSync(direccionTemporal, { recursive: true });
    }

    //Ruta del archivo temporal
    const rutaArchivo = path.join(direccionTemporal, imagenNombre);
    console.log("Ruta del archivo: ", rutaArchivo);
    //Escribir el búfer en el archivo temporal
    //fs.writeFileSync(rutaArchivo, imagenBuffer);

    const imagenStream = fs.createReadStream(rutaArchivo);

    drive.files.create(
      {
        resource: fileMetaData,
        media: {
          //body: imagenBuffer, //Dirección de la imágenes
          body: imagenStream,
          mimeType: ["image/jpg", "image/png"],
        },
        fields: "id",
      },
      function (err, file) {
        //Eliminar el archivo temporal
        fs.unlinkSync(rutaArchivo);
        if (err) {
          console.error("Error al crear el archivo en Google Drive");
          rejects(err);
        } else {
          //console.log("Archivo creado en Google Drive: ", file);

          if (file.data.id) {
            const imagenUrl = `https://drive.google.com/uc?id=${file.data.id}`;
            console.log(imagenUrl);
            resolve(imagenUrl);
          } else {
            rejects("El campo 'id' no esta presente");
          }
        }
      }
    );
  });
}

//Exportando las funciones
module.exports = { autorizar, cargarImagen };
