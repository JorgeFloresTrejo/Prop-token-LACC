import Jwt from "jsonwebtoken";
import User from "../models/User.js";

const checkAuth = async (req, res, next) => {
//   console.log(req.headers.authorization); //Mostrar el token

    let token;
    //console.log(req.headers.authorization); //Ver el token, es de separarlo de la palabra Bearer
    
    //Comprobando que el usuario envíe el token y comprobar que tenga al inicio el Bearer
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1]; //Separando el token en un arreglo cuando encuentre un espacio y seleccionar la posision 1
            
            //Verificando el token utilizando la palabra secreta, esta palabra sirve para generar el token pero también para verificarlo
            const decoded = Jwt.verify(token, process.env.JWT_SECRET); 
            // console.log(decoded);

            //Una vez se pase la verificación del token se almacena en req.usuario la información de la base de datos
            req.usuario = await User.findById(decoded.id).select("-password -billetera -token -confirmado");
            return next();

        }catch(error){
            const e = new Error("Token no válido");
            return res.status(403).json({msg: e.message});
        
        }
    }

    //Si no llega un token o no es valido, se ejecuta esta función
    if(!token){     
        const error = new Error("Token no válido o inexistente");
        res.status(403).json({msg: error.message});
    }

    next();
}

export default checkAuth;