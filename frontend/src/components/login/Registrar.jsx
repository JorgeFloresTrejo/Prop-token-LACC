import {useState} from "react";
import {Link} from "react-router-dom";
import Alerta from "../alertas/Alerta";
import axios from 'axios';
function Registrar() {

  const [nombre, setNombre] = useState("");  
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [alerta, setAlerta] = useState({});

// Funcion que se ejecuta al enviar el formulario
  const handleSubmit = async e =>{
    e.preventDefault();

    if([nombre, apellido, email, password, repetirPassword].includes('')){
      setAlerta({msg: 'Hay campos vacios', error: true});
      return;
    }
    if(password !== repetirPassword){
      setAlerta({msg: 'La contraseña no es la misma', error: true});
      return;
    }
    if(password.length < 6   ){
      setAlerta({msg: 'Contraseña muy corta, Minimo 6 caracteres', error: true});
      return;
    }
    setAlerta({}); // Si no hay errores, se setea la alerta como un objeto vacio

    // Crear el usuario en la api
    try{
      const url = 'http://localhost:4000/api/registrar';
      await axios.post(url, {nombre, apellido, email, password, telefono});
      //Si los datos se envían correctamente, seteamos un mensaje para el componente alerta
      setAlerta({msg: "Creado correctamente, Revisa tu email", error: false});
    }catch(error){
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

  }

  const {msg} = alerta;
  return (
    <>
        <div>
            <h1>
              Registrate con nosotros y empieza a invertir
            </h1>
        </div>

          {/* Formulario de registro */}
        <div className="mt-20 md:mt-1 shadow-xl px-5 py-4 rounded-xl bg-white">
         
         {/* Si en el mensaje hay algo entonces se muestra el componente alerta */}
       {msg &&  <Alerta  alerta={alerta}/>}

        <form onSubmit={handleSubmit} className="mt-5">
              <div className="my-7">
                <label htmlFor="nombre"  className="uppercase text-gray-700 text-1xl block font-bold"> nombre </label>
                <input type="text" placeholder="Digite su nombre" id="nombre" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl" value={nombre} onChange={e => setNombre(e.target.value)}/>
              </div>

              <div className="my-7">
                <label htmlFor="apellido"  className="uppercase text-gray-700 text-1xl block font-bold"> apellido </label>
                <input type="text" placeholder="Digite su apellido" id="apellido" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl" value={apellido} onChange={e => setApellido(e.target.value)}/>
              </div>

              <div className="my-7">
                <label htmlFor="email"  className="uppercase text-gray-700 text-1xl block font-bold"> email </label>
                <input type="email" placeholder="Email de registro" id="correo" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl" value={email} onChange={e => setEmail(e.target.value)}/>
              </div>

              <div className="my-7">
                <label htmlFor="password"  className="uppercase text-gray-700 text-1xl block font-bold"> contraseña </label>
                <input type="password" placeholder="Digite su contraseña" id="password" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl" value={password} onChange={e => setPassword(e.target.value)}/>
              </div>

              <div className="my-7">
                <label htmlFor="repetir-password"  className="uppercase text-gray-700 text-1xl block font-bold">repetir contraseña </label>
                <input type="password" placeholder="Repite tu contraseña" id="repetir-password" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl" value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)} />
              </div>

              <div className="my-7">
                <label htmlFor="telefono"  className="uppercase text-gray-700 text-1xl block font-bold"> telefono </label>
                <input type="number" placeholder="Digite su número de teléfono" id="telefono" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl" value={telefono} onChange={e => setTelefono(e.target.value)}/>
              </div>


              <input type="submit" value="Crear cuenta" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto"/>
            </form>

            <nav className="mt-5 lg:flex justify-between">
              <Link to="/" className="block text-center my-5 text-gray-600">¿Ya tienes una cuenta? Inicia sesión</Link>
              <Link to="/olvide-password" className="block text-center my-5 text-gray-600">Olvide mi contraseña</Link>
            </nav>

        </div>

    </>
  )
}

export default Registrar