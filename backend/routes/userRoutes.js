import express  from "express";
const router = express.Router();
import { registrar, perfil, confirmar, autenticar} from "../controllers/userController.js";
import checkAuth from "../middleware/authMiddleware.js";

//Rutas para login, registrar y mostrar registros
router.get('/login', autenticar); 
router.post('/login/registrar', registrar);
router.get('/login/confirmar/:token', confirmar) //(:usuario) es un parámetro dinamico que se le pasa al método confirmar

// Rutas con autorización
router.get('/perfil', checkAuth, perfil);
export default router;