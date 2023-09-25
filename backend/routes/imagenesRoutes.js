import express from "express";
import multer from "multer";
import { autorizar, cargarImagen } from "../middleware/authDrive.cjs"; // Asegúrate de proporcionar la ruta correcta

const router = express.Router();

// Configuración para recibir imágenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./middleware/temp"); // Ruta donde se guardarán temporalmente las imágenes
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

// Ruta para subir la imagen a Google Drive
router.post("/upload", upload.array("files"), async (req, res) => {
  try {
    // Obtener un cliente autorizado de Google Drive
    const authClient = await autorizar();
    console.log(req.body);
    const imageUrls = [];
    console.log(req.files);
    // Cargar la imagen en Google Drive
    for (const file of req.files) {
      const imageUrl = await cargarImagen(authClient, file.filename);
      imageUrls.push(imageUrl);
      console.log(imageUrl);
    }

    // Aquí puedes devolver la URL de la imagen almacenada en Google Drive en la respuesta
    res.json({ imageUrl: imageUrls });
  } catch (error) {
    console.error("Error al subir la imagen a Google Drive:", error);
    res.status(500).json({ error: "Error al subir la imagen a Google Drive" });
  }
});

export default router;
