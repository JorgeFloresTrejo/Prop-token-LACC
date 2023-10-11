import { useState, useEffect } from "react";
import Inmueble from "./../Inmuebles/Inmueble";
import Indicador from "./../../images/indicator.png";
import axios from "axios";
import "./InmuebleFinal.css";

const InmuebleFinal = ({ mostrarBoton }) => {
  const [items, setItems] = useState([]);
  const [mostrarItems, setMostrarItems] = useState([]);
  const [indice, setIndice] = useState(0);
  const itemPagina = 3;
  const urlBackend = "http://localhost:4000/api/propiedades/";
  //const [token, setToken] = useState(localStorage.getItem("token"));
  //const headers = {
  //Authorization: `Bearer ${token}`,
  //};

  useEffect(() => {
    axios
      .get(urlBackend)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setMostrarItems((indicePrevio) => [
      ...indicePrevio,
      ...items.slice(indice, indice + itemPagina),
    ]);
  }, [items, indice]);

  const cargarMasInmuebles = () => {
    setIndice(indice + itemPagina);
  };
  return (
    <>
      <div className="inmueble-inmueble">
        {mostrarItems.map((item, index) => (
          <div className="inmueble-inmueble_card" key={index}>
            <Inmueble
              imagen={item.imagenUrl[0]}
              ubicacion={item.ubicacion}
              precio={item.valor}
              token="100"
              fecha_inicio="12/4/2023"
              indicador={Indicador}
              rendimiento="11"
              rendimiento_porce="11"
              renta="1200"
              extencion="1220"
            />
          </div>
        ))}
      </div>
      {items.length > mostrarItems.length && mostrarBoton && (
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full center"
            onClick={cargarMasInmuebles}
          >
            Mostrar más
          </button>
        </div>
      )}
    </>
  );
};

export default InmuebleFinal;
