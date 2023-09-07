import User from "../models/User.js";
 //Función para el login
const login =  (req, res) => {
    res.json({msg: "Pagina del login"});
};

//Función para registrar
const registrar = async (req, res) => {
 const {email} = req.body;

    //Prevenir usuarios duplicados
    //findOne permite buscar por los diferentes atributos de la BD, find se tre todos y findById se trae el registro por Id
    const existeUsuario = await User.findOne({email});
    if(existeUsuario){
       const error = new Error("Usuario ya registrado");
       return res.status(400).json({msg: error.message});
    }
    try{
        // Registrar un nuevo usuario
        const user = new User(req.body);
        //save() método de mongoose para almacenar o actualizar objetos en la base de datos
        const registrarUser = await user.save(); 

    res.json({registrarUser});


    }catch(error){
      console.log(error.message);
    }
 
};

//Función para mostrar perfin
const perfil = (req, res) => {
    res.json({msg: "Mostrando perfil"});
};

export {
    login,
    registrar,
    perfil
}