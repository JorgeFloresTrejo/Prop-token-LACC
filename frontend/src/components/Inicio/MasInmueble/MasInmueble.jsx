import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MasInmueble.css";

const MasInmueble = () => {
  const [items, setItems] = useState([]);
  const [mostrarItems, setMostrarItems] = useState([]);
  const [indice, setIndice] = useState(0);
  const itemPagina = 3;
  const urlBackend = "http://localhost:4000/api/propiedades/";
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
  return (
    <>
      <div className="flex flex-wrap justify-center my-5">
        {mostrarItems.map((item) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4"
            key={item._id}
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={item.imagenUrl[0]}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="flex items-center justify-between mx-6">
                <h4 className="text-lg font-semibold">{item.ubicacion}</h4>
                <p className="text-gray-600">${item.valor}</p>
              </div>
              <div className="px-4 py-3 text-center">
                <a className="text-blue-500 hover:underline" href="/login">
                  Ver Detalles
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MasInmueble;
