import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../../config/axios";
import Alerta from "../alertas/Alerta";

const NuevoPassword = () => {

  const [password, setPassword] = useState('');
  const [alerta, SetAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const {token} = params;

  // Validamos que el enlace con el token al que se accedio sea correcto
  useEffect( () => {
    const comprobarToken = async () =>{
     try{
      await clienteAxios(`/olvide-password/${token}`);
      SetAlerta({
        msg: 'Coloca tu nueva contraseña',
        error: false
      })
      setTokenValido(true);
     }catch(error){
      SetAlerta({
        msg: 'Hubo un error con el enlace',
        error: true
      })
     }
    }

    comprobarToken();

  },[])

  // Almacenando la nueva contraseña
  const handleSubmit = async (e) =>{
    e.preventDefault();

    // Validación para que la contraseña tenga como mínimo 6 dígitos
    if(password.length < 6){
      SetAlerta({
        msg: 'La contraseña debe de ser mínimo de 6 caracteres',
        error: true
      })
      return
    }

    try{
      const url = `/olvide-password/${token}`;
      const {data} = await clienteAxios.post(url, {password});

      SetAlerta({
        msg: data.msg,
        error: false
      })

      setPasswordModificado(true);
    }catch(error){
      SetAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

  }

 // Extraemos el mensaje del alerta
 const { msg } = alerta;

  return (
    <>
        <div>
            <h1>
              Reestablece tu contraseña y recupera el acceso a tu cuenta
            </h1>
        </div>

        {/* Formulario para reestrablecer la contraseña */}
        <div className="mt-20 md:mt-1 shadow-xl px-5 py-4 rounded-xl bg-white">

              {/* Mostramos la alerta */}
              {msg && <Alerta alerta={alerta}/>}

            {tokenValido && (
              
              <form onSubmit={handleSubmit}>

                  <div className="my-7">
                      <label htmlFor="password"  className="uppercase text-gray-700 text-1xl block font-bold"> Nueva contraseña </label>
                      <input type="password" placeholder="Digite su nueva contraseña" id="password" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl" value={password} onChange={e => setPassword(e.target.value)}/>
                  </div>

                  <input type="submit" value="Guardar nueva contraseña" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto"/>

              </form>
   
            
            )}

            {passwordModificado &&  <Link to="/" className="block text-center my-5 text-gray-600"> Inicia sesión </Link>}
        </div> 
    </>
  )
}

export default NuevoPassword