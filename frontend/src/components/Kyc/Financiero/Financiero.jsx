import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Financiero.css";

function Financiero() {
  const navigate = useNavigate();

  const avanzarPagina = () => {
    navigate("/documento-kyc");
  };

  const retrocederPagina = () => {
    navigate(-1); // Navegar hacia atrás usando -1
  };

  // Estado para almacenar las respuestas
  const [respuestas, setRespuestas] = useState({
    pregunta1: "",
    pregunta2: "",
    pregunta3: "",
  });

  // Manejar cambios en las respuestas
  const handleRespuestaChange = (pregunta, respuesta) => {
    setRespuestas((prevState) => ({
      ...prevState,
      [pregunta]: respuesta,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con las respuestas, como enviarlas a un servidor
    // o procesarlas de alguna manera.
    navigate("/otraRuta"); // Ejemplo de navegación a otra ruta
  };

  return (
    <div className="formulario-container rounded-xl bg-blue-300 shadow-lg shadow-blue-500/50 max-w-xl mt-20 mb-20">
      <form onSubmit={handleSubmit}>
        <div className="pregunta">
          <p>
            ¿Has invertido en empresas no cotizadas gestionadas por ti o por
            otros?
          </p>
          <label>
            <input
              type="radio"
              name="pregunta1"
              value="opcion1"
              checked={respuestas.pregunta1 === "opcion1"}
              onChange={() => handleRespuestaChange("pregunta1", "opcion1")}
            />
            Si
          </label>
          <label>
            <input
              type="radio"
              name="pregunta1"
              value="opcion2"
              checked={respuestas.pregunta1 === "opcion2"}
              onChange={() => handleRespuestaChange("pregunta1", "opcion2")}
            />
            No
          </label>
        </div>

        <div className="pregunta">
          <p>
            ¿Conoces lo que es Security Token y los riesgos que la inversión en
            los mismos conlleva?
          </p>
          <label>
            <input
              type="radio"
              name="pregunta2"
              value="opcion1"
              checked={respuestas.pregunta2 === "opcion1"}
              onChange={() => handleRespuestaChange("pregunta2", "opcion1")}
            />
            Si
          </label>
          <label>
            <input
              type="radio"
              name="pregunta2"
              value="opcion2"
              checked={respuestas.pregunta2 === "opcion2"}
              onChange={() => handleRespuestaChange("pregunta2", "opcion2")}
            />
            No
          </label>
        </div>

        <div className="pregunta">
          <p>
            ¿Sabes que invirtiendo en empresas no cotizadas puedes perder hasta
            el 100% de tu inversión?
          </p>
          <label>
            <input
              type="radio"
              name="pregunta3"
              value="opcion1"
              checked={respuestas.pregunta3 === "opcion1"}
              onChange={() => handleRespuestaChange("pregunta3", "opcion1")}
            />
            Si
          </label>
          <label>
            <input
              type="radio"
              name="pregunta3"
              value="opcion2"
              checked={respuestas.pregunta3 === "opcion2"}
              onChange={() => handleRespuestaChange("pregunta3", "opcion2")}
            />
            No
          </label>
        </div>
      </form>
      <div className="submit-container mt-4">
        <button
          className="back-button px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-lg"
          onClick={retrocederPagina}
        >
          Volver
        </button>
        <button
          className="submit-button ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
          onClick={avanzarPagina}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export default Financiero;
