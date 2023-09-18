import React from 'react';
import {useParams} from 'react-router-dom';

const ConfirmarCuenta = () => {

  
  const params = useParams();

  console.log(params);

  return (

    <>
          <div>
            <h1>
              RConfirma tu cuenta y empieza a invertir
            </h1>
        </div>

   
        <div className="mt-20 md:mt-1 shadow-xl px-5 py-4 rounded-xl bg-white">
         
         

        </div>

    </>
  )
}

export default ConfirmarCuenta