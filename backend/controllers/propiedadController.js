import Propiedad from '../models/Propiedad.js';

const agregarPropiedad = async (req, res) => {
    //Instancia de el modelo propiedad
    const propiedad = new Propiedad(req.body);
    //Asignandole a la propiedad user del modelo de propiedad el id del usuario autenticado
    //el req.usuario._id es el retorno de authMiddleware
    propiedad.user = req.usuario._id;
    try{
        //Almacenando la propiedad
        const propiedadAlmacenada = await propiedad.save();
        res.json(propiedadAlmacenada);
    }catch(error){
        console.log(error.message);
    }

};

const obtenerPropiedades = async (req, res) => {
    const propiedades = await Propiedad.find().where('user').equals(req.usuario);

    res.json(propiedades);
}

const obtenerPropiedad = async (req, res) => {
    const { id } = req.params;

    const propiedad = await Propiedad.findById(id);

    if(!propiedad){
        return res.status(404).json({msg: 'No encontrado'});
    }
    // Accedemos al id del usuario relacionado con la propiedad y vefificamos que sea el mismo id del req (osea el que envía el usuario)
    if(propiedad.user._id.toString() !== req.usuario._id.toString() ){
        return res.json({msg: 'Acción no válida'}); 
    }


    //Mostrar la propiedad
    res.json(propiedad);
    
}

const actualizarPropiedad = async (req, res) => {
    const {id} = req.params;

    const propiedad  = await Propiedad.findById(id); 

    if(!propiedad){
        return res.status(404).json({msg: 'No encontrado'});
    }

    if(propiedad.user._id.toString() !== req.usuario._id.toString()){
        return res.json({msg: 'Acción no válida'}); 
    }

    //Actualizar la propiedad
    propiedad.descripcion = req.body.descripcion || propiedad.descripcion; 
    propiedad.ubicacion = req.body.ubicacion || propiedad.ubicacion;
    propiedad.valor = req.body.valor || propiedad.valor; //Si no se actualiza el valor, se llena con lo que tenia antes
    propiedad.imagenUrl = req.body.imagenUrl || propiedad.imagenUrl;

    try{
        const propiedadActualizada = await propiedad.save();
        return res.json(propiedadActualizada);
    }catch(error){
        console.log(error.message);
    }

    
}

const eliminarPropiedad = async (req, res) => {
    const {id} = req.params;

    const propiedad  = await Propiedad.findById(id); 

    if(!propiedad){
        return res.status(404).json({msg: 'No encontrado'});
    }

    if(propiedad.user._id.toString() !== req.usuario._id.toString()){
        return res.json({msg: 'Acción no válida'}); 
    }

    try{
        await propiedad.deleteOne();
        return res.json({msg: 'Propiedad eliminada'});
    }catch(error){
        console.log(error)
    }
}


export{
    agregarPropiedad,
    obtenerPropiedades,
    obtenerPropiedad,
    actualizarPropiedad,
    eliminarPropiedad
}