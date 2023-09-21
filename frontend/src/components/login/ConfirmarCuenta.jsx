import React from 'react';
import {useParams, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Alerta from "../alertas/Alerta";
import clienteAxios from '../../config/axios';

const ConfirmarCuenta = () => {

  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const {id} = params;
  console.log(id);

  useEffect( () =>{
    const confirmarCuenta = async () =>{
      try{

        const url = `/confirmar/${id}`;
        const {data} = await clienteAxios(url);
        //Cambiamos el estado de la cuenta a true y mostramos el mensaje
        setCuentaConfirmada(true);
        setAlerta({
         msg: data.msg,
         error: false
        });
        
      }catch(error){
        setAlerta({
          msg:error.response.data.msg,
          error: true
        });
      }
      //Una vez termine de cargar se pasa a false
      setCargando(false);
    };

    confirmarCuenta();
  },[]);

  return (

    <>
          <div>
            <h1>
              RConfirma tu cuenta y empieza a invertir
            </h1>
        </div>

   
        <div className="mt-20 md:mt-1 shadow-xl px-5 py-4 rounded-xl bg-white">
         
          {/* Una vez ya no este cargando, muestra una alerta */}
         {!cargando && <Alerta alerta={alerta}/>}

          {/* Si la cuenta está confirmada mostramos un link para que pueda acceder */}
         {cuentaConfirmada && (
            <Link to="/login" className="block text-center my-5 text-gray-600"> Inicia sesión</Link>
         )}

        </div>

    </>
  )
}

export default ConfirmarCuenta