import express  from "express";
const router = express.Router();
import { registrar, login, perfil} from "../controllers/userController.js";

//Rutas para login, registrar y mostrar registros
router.get('/login', login);
router.post('/login/registrar', registrar);
router.get('/login/perfil', perfil);

export default router;