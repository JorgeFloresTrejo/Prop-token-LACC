import React from "react";
import { useNavigate } from 'react-router-dom';

function ValidarData() {
    const navigate = useNavigate();

    const avanzarPagina = () => {
        navigate('/sesion');
    };

    const retrocederPagina = () => {
        navigate(-1); // Navegar hacia atrás usando -1
    };

    return (
        <div className="ValidarData-container p-4 bg-white rounded-lg shadow-md mt-16">
            
            <div className="max-w-md mx-auto">
                <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  hover:bg-blue-400  hover:ring-sky-800">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Gracias por tomarse el tiempo para completar la información solicitada. <br></br>
                    </h5>
                    <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Dicho registros se validarán por su seguridad.
                    </h5>
                   
                </div>
            </div>


            <div className="submit-container mt-4">
                <button className="back-button px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-lg" onClick={retrocederPagina}>
                    Volver
                </button>
                <button className="submit-button ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg" onClick={avanzarPagina}>
                    Validar Información
                </button>
            </div>
        </div>
    );
}

export default ValidarData;
