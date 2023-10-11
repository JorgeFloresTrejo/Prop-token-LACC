import express from "express";
import {
  agregarPropiedad,
  obtenerPropiedades,
  obtenerPropiedad,
  actualizarPropiedad,
  eliminarPropiedad,
} from "../controllers/propiedadController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();
//Con post vamos a almacenar propiedades y con get las vamos a obtener
//router
//.route("/")
//.post(checkAuth, agregarPropiedad)
//.get(checkAuth, obtenerPropiedades);
router.route("/").post(checkAuth, agregarPropiedad).get(obtenerPropiedades);

//router.route("/todos").get(obtenerPropiedades);
//Ruta para obtener propiedad por el id, actualizar la propiedad por el id y eliminar
router
  .route("/:id")
  .get(checkAuth, obtenerPropiedad)
  .put(checkAuth, actualizarPropiedad)
  .delete(checkAuth, eliminarPropiedad);

export default router;
