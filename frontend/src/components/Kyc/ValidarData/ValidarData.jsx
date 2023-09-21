import React from "react";
import '../ValidarData/ValidarData.css';
import { useNavigate } from 'react-router-dom';

function ValidarData(){

    const navigate = useNavigate();

    const avanzarPagina = () => {
        navigate('/Info');
    };

    const retrocederPagina = () => {
        navigate(-1); // Navegar hacia atrás usando -1
    };

    return (
        <div className="ValidarData-container">
            <div className="ValidarInfo">

            </div>
            <div className="submit-container">
                <button className="back-button" onClick={retrocederPagina}>
                    Volver
                </button>
                <button className="submit-button" onClick={avanzarPagina}>
                    Cargar Datos
                </button>
            </div>

        </div>
    )
};

export default ValidarData;