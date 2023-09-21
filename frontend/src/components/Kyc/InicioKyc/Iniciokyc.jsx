import React from "react";
import { useNavigate } from 'react-router-dom';
import './iniciokyc.css';



function InicioKyc() {
    const navigate = useNavigate();

    const avanzarPagina = () => {
        navigate('/Info');
    };
    return (
        <div className="inicio-container">
            <h1>Bienvenido a la pagina de inicio</h1><br />
            <div className="submit-container">
                <button className="submit-button" onClick={avanzarPagina}>
                    Cargar Datos
                </button>
            </div>
        </div>

    )
};

export default InicioKyc;