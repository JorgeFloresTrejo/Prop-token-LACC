import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import PropiedadRoutes from "./routes/PropiedadRoutes.js";
import googleRoutes from "./routes/googleRoutes.js";
import express from "express";
import passport from "passport";
import express_session from "express-session";

const app = express();
app.use(express_session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json()); //Para decirle a express que vamos a enviarle datos de tipo json
dotenv.config();
conectarDB();

//Registrando el Routing
app.use("/api", userRoutes);
app.use("/api/propiedades", PropiedadRoutes);
app.use("/", googleRoutes);

// Puerto en el que funcionará
const PORT = process.env.PORT || 4000;

//Puerto
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
