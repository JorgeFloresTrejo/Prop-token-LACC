import {Link} from "react-router-dom";
import { useState } from "react";
import Alerta from '../alertas/Alerta';
import clienteAxios from '../../config/axios';

import contrasena from "../../images/contrasena.png"

const OlvidePassword = () => {

  const [email, setEmail] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();

    if(email == '' || email.length < 6){
      setAlerta({
        msg: 'El email es obligatorio',
        error: true
      })
      return
    }

    try{
      const { data } = await clienteAxios.post('/olvide-password', {email});
      setAlerta({
        msg: data.msg,
        error: false
      })
      console.log(data);

    }catch(error){
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  //Se extrae el mensaje del useState de alerta
  const {msg} = alerta;

  return (
    <>
    
        <div className="h-full ">
            <img src={contrasena}/>
        </div>
        <div className="flex justify-end ">
        <div class="mt-5 ml-auto h-3/4 w-full shadow-xl rounded-xl bg-blue-100 bg-opacity-25">

                {/* Mostramos la alerta */}
              {msg && <Alerta alerta={alerta}/>}

                {/* Formulario */}
            <form  className="mt-5 ml-9 mr-9" onSubmit={handleSubmit}>
              <div className="my-7">
              <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Recuperación de contraseña</h1> 
      <p class="text-sm text-gray-600 text-center mt-8 mb-6">Introduce tu correo electrónico para restablecer tu contraseña</p> 
                <label htmlFor="email"  className="uppercase text-gray-700 text-2xl block font-bold"> email </label>
                <input type="email" placeholder="Email de registro" id="email" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl" value={email} onChange={e => setEmail(e.target.value)}/>
              </div>

              <input type="submit" value="Enviar instrucciones" class="bg-indigo-700 mx-auto block py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto"/>
            </form>

            <nav className="mt-5 lg:flex justify-between">
              <Link to="/login" className="block text-center my-5 text-gray-600 ml-9 mr-9">¿Ya tienes una cuenta? <span class="text-cyan-600"> <br /> Inicia sesión</span></Link>
              <Link to="/login/registrar" className="block text-center my-5 text-gray-600 ml-9 mr-9"> ¿No tienes una cuenta? <span class="text-cyan-600"> <br /> Registrate</span></Link>
            </nav>

          </div>
          </div>
    </>
  )
}

export default OlvidePassword