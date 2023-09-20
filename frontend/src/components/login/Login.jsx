import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; //useNavigate es el hook para redireccionar al usuario
import useAuth from "../../hooks/UseAuth";
import Alerta from "../alertas/Alerta";
import clienteAxios from "../../config/axios";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({});

  const navigate = useNavigate();  //Toma la ruta donde quiera redireccionar al usuario

  const handleSubmit = async e => {
    e.preventDefault();

    // Si la contraseña o el email vienen vacíos se manda un mensaje
    if([email, password].includes('')){
      setAlerta({
        msg: 'No se permiten campos vacíos',
        error: true
      });
      return
    }

    try{

      const {data} = await clienteAxios.post('/login', {email, password})
      localStorage.setItem('token',data.token);
      navigate('/admin'); //Ruta a la que me lleva si llena el formulario del login correctamente
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
            <h1>Invierte en inmuebles tokenizados</h1>
          </div>

          <div className="mt-20 md:mt-2 shadow-xl px-5 py-4 rounded-xl bg-white">

              {msg && <Alerta alerta={alerta}/>}

            <form onSubmit={handleSubmit} className="mt-5">
              <div className="my-7">
                <label htmlFor="email"  className="uppercase text-gray-700 text-2xl block font-bold"> email </label>
                <input type="email" placeholder="Email de registro" id="email" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl" value={email} onChange={e => setEmail(e.target.value)}/>
              </div>

              <div className="my-7">
                <label htmlFor="pssword"  className="uppercase text-gray-600 text-2xl block font-bold"> contraseña </label>
                <input type="password" placeholder="Tu contraseña" id="password" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl" value={password} onChange={e => setPassword(e.target.value)}/>
              </div>

              <input type="submit" value="Iniciar sesión" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto"/>
            </form>

            <nav className="mt-5 lg:flex justify-between">
              <Link to="/registrar" className="block text-center my-5 text-gray-600">¿No tienes una cuenta? Registrate</Link>
              <Link to="/olvide-password" className="block text-center my-5 text-gray-600">Olvide mi contraseña</Link>
            </nav>

          </div>
   </>
  )
}

export default Login