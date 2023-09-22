import React from "react";
import "./Facilidad.css";

const Facilidad = (props) => {
  return (
    <>
      <div className="facilidad-facilidad-card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
        <img src={props.imagen} alt="" />
        <h5>{props.titulo}</h5>
        <p>{props.descripcion}</p>
      </div>
    </>
  );
};

export default Facilidad;
