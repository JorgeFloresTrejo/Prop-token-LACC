import {Link} from "react-router-dom";
import { useState } from "react";
import Alerta from '../alertas/Alerta';
import clienteAxios from '../../config/axios';

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
    
        <div>
            <h1>
              Recupera el acceso a tu cuenta
            </h1>
        </div>

        <div className="mt-20 md:mt-2 shadow-xl px-5 py-4 rounded-xl bg-white">

                {/* Mostramos la alerta */}
              {msg && <Alerta alerta={alerta}/>}

                {/* Formulario */}
            <form  className="mt-5" onSubmit={handleSubmit}>
              <div className="my-7">
                <label htmlFor="email"  className="uppercase text-gray-700 text-2xl block font-bold"> email </label>
                <input type="email" placeholder="Email de registro" id="email" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl" value={email} onChange={e => setEmail(e.target.value)}/>
              </div>

              <input type="submit" value="Enviar instrucciones" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto"/>
            </form>

            <nav className="mt-5 lg:flex justify-between">
              <Link to="/login" className="block text-center my-5 text-gray-600">¿Ya tienes una cuenta? Inicia sesión</Link>
              <Link to="/login/registrar" className="block text-center my-5 text-gray-600">¿No tienes una cuenta? Registrate</Link>
            </nav>

          </div>

    </>
  )
}

export default OlvidePassword