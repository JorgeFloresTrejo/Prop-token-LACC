import express  from "express";
const router = express.Router();
import { registrar, login, perfil, confirmar} from "../controllers/userController.js";

//Rutas para login, registrar y mostrar registros
router.get('/login', login);
router.post('/login/registrar', registrar);
router.get('/login/perfil', perfil);
router.get('/login/confirmar/:token', confirmar) //(:usuario) es un parámetro dinamico que se le pasa al método confirmar

export default router;