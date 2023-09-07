import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helpers/generarId.js";

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    token: {
        type:String,
        default: generarId()
    },
    confirmado: {
        type: Boolean,
        default: false
    }
});

//pre('save') indica que se va a ejecutar antes de guardar el dato  
userSchema.pre('save',async function(next){ 
    
    // si un password ya esta hasheado, no se vuelva a hashea
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
}); 

const User = mongoose.model("User", userSchema);

export default User;