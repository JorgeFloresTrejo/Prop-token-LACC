import jwt from 'jsonwebtoken';
const generarJWT = (id) => {
    // sign() nos va a crear un nuevo jsonwebtoken
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d" //Tiempo en el que expira la sesión
    }); 
};

export default generarJWT;