import { timeStamp } from "console";
import mongoose from "mongoose";
import { cargarImagen, autorizar } from "../middleware/authDrive.cjs";
import path from "path";

const propiedadSchema = mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    ubicacion: {
      type: String,
      required: true,
      trim: true,
    },
    valor: {
      type: Number,
      required: true,
      trim: true,
    },
    imagenUrl: [
      {
        type: String,
        required: true,
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  timeStamp(true)
);

//Subir imagenes antes de guardar propiedad
const Propiedad = mongoose.model("Propiedad", propiedadSchema);

export default Propiedad;
