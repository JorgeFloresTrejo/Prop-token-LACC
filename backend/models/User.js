import mongoose from "mongoose";

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
        type:String
    },
    confirmado: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model("User", userSchema);

export default User;