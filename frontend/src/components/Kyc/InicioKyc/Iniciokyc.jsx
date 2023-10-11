import React from "react";
import { useNavigate } from "react-router-dom";

function InicioKyc() {
  const navigate = useNavigate();

  const avanzarPagina = () => {
    navigate("/admin/infotest-kyc");
  };
  return (
    <div className="ValidarData-container p-4 bg-white rounded-lg shadow-md mt-16">
      <div className="max-w-md mx-auto">
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  hover:bg-blue-400  hover:ring-sky-800">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Registrate en 3 sencillos pasos: <br></br>
          </h5>
          <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Registro personal
          </h5>
          <h5 className="mb-2 text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Por su seguridad necesitamos validar tu identidad (KYC) e
            información financiera. Te llevará solo unos minutos
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Paso 1<br></br>
            Datos Personales<br></br>
            Completa tu información personal básica, inculuido el domicilio
            donde resides.<br></br>
            <br></br>
            Paso 2<br></br>
            Datos financieros<br></br>
            Incluye información sobre tu renta, origen de fondos y demás
            aspectos financieros.
            <br></br>
            <br></br>
            Paso 3 Prueba de identidad<br></br>
            Sobre tu DUI o Pasaporte (anverso y reverso) y selfie para que
            comprobemos tu identidad.
          </p>
        </div>
      </div>
      <div className="submit-container mt-4 flex justify-center items-center">
        <button
          className="submit-button ml-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
          onClick={avanzarPagina}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default InicioKyc;
