import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import PropiedadRoutes from "./routes/PropiedadRoutes.js";
import googleRoutes from "./routes/googleRoutes.js";
import express from "express";
import cors from "cors"; //Cors sirven para proteger la api
import passport from "passport";
import express_session from "express-session";
import router from "./routes/imagenesRoutes.js";

const app = express();
app.use(express_session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json()); //Para decirle a express que vamos a enviarle datos de tipo json
dotenv.config();
conectarDB();

//Configuración del Cors - codigo en el paquete
const dominioPermitidos = ["http://localhost:5173"];
const corsOpciones = {
  // origin: "http://localhost:5173",
  // methods: "GET,POST",
  origin: function (origin, callback) {
    // Si la url del frontend, donde se realiza la petición hacia la api esta en la lista de dominios permitidos
    //y es diferente a -1 (-1 significa que no lo encontro) entonces el Origen está permitido
    if (dominioPermitidos.indexOf(origin) !== -1) {
      //Si el origen de la petición está permitida
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};

app.use(cors(corsOpciones));

//Registrando el Routing
app.use("/api", userRoutes);
app.use("/api/propiedades", PropiedadRoutes);
app.use("/", googleRoutes);

//Subir imagenes
app.use("/api", router);

// Puerto en el que funcionará
const PORT = process.env.PORT || 4000;

//Puerto
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
