import express from "express";
const router = express.Router();
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
} from "../controllers/userController.js";
import checkAuth from "../middleware/authMiddleware.js";

//Rutas públicas
router.post("/registrar", registrar);
router.get("/confirmar/:token", confirmar); //(:usuario) es un parámetro dinamico que se le pasa al método confirmar
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// Rutas privadas
router.get("/perfil", checkAuth, perfil);
export default router;
