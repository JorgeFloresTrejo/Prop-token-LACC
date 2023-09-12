import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import PropiedadRoutes from "./routes/PropiedadRoutes.js";


const app = express();
app.use(express.json()); //Para decirle a express que vamos a enviarle datos de tipo json
dotenv.config();
conectarDB();

    //Registrando el Routing
app.use('/api', userRoutes);
app.use('/api/propiedades', PropiedadRoutes);


// Puerto en el que funcionará 
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});