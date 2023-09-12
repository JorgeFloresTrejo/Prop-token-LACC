import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helpers/generarId.js";

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  billetera: {
    type: String,
    default: null,
    trim: true,
  },
  telefono: {
    type: String,
    default: null,
    trim: true,
  },
  token: {
    type: String,
    default: generarId(),
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
  googleId: {
    type: String,
    default: null,
  },
});

//Hashear la contraseña
//pre('save') indica que se va a ejecutar antes de guardar el dato
userSchema.pre("save", async function (next) {
  // si un password ya esta hasheado, no se vuelva a hashea
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10); // genSalt(10)metodo para generar 10 rondas de hasheo
  this.password = await bcrypt.hash(this.password, salt); //Se le pasa lo la contraseña del usuario y el salt para que genere la contraseña hasheada
});

//Función para comprobar contraseña
//con userSchema.methods estoy registrando una función que se ejecute en este modelo
userSchema.methods.comprobarPassword = async function (passwordFormulario) {
  // passwordFormulario sería lo que el usuario escriba en el formulario y this.password lo que se optiene del modelo || compare devuelve true o false
  return await bcrypt.compare(passwordFormulario, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
