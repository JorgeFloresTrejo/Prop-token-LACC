import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CrearInmueble = () => {
  const [descripcion, setDescripcion] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [valor, setValor] = useState("");
  const [file, setFile] = useState([]);
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGI5YjczZjBhOGZmZmI3ZGU1MDA2MiIsImlhdCI6MTY5NTI1OTUzNywiZXhwIjoxNjk3ODUxNTM3fQ.iPhcH3DxgXSabMjVztaZZOVdMftPN0fX-F_F_v_VwiE"
  );
  const urlBackend = "http://localhost:4000/api/propiedades";

  //Manejar el submit y guardado a la base de datos
  const manejarSubmit = async (e) => {
    e.preventDefault();

    //Lamada asincrona
    await upload();
  };
  //Subir la imagen al drive
  const upload = async () => {
    console.log("Array: ", file);
    const formData = new FormData();

    for (let i = 0; i < file.length; i++) {
      formData.append("files", file[i]);
    }
    console.log(...formData);

    try {
      Swal.fire({
        title: "Guardando...",
        html: "Por favor, espere mientras guardamos su propiedad.",
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await axios.post(
        "http://localhost:4000/api/upload",
        formData
      );
      //Verificar si la respuesta contiene la Url de la imagen
      if (response.data && response.data.imageUrl) {
        const urls = response.data.imageUrl;
        //setImagenUrls(urls);
        console.log("urls: ", urls);
        //Crear las credenciales
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // console.log("ImageUrl", imagenUrl);
        //Crear una propiedad
        const nuevaPropiedad = {
          descripcion,
          ubicacion,
          valor,
          imagenUrl: urls,
        };

        await axios.post(urlBackend, nuevaPropiedad, { headers });

        // Limpiar todos los inputs
        setDescripcion("");
        setUbicacion("");
        setValor("");
        setFile("");

        // Cerrar el mensaje de carga
        Swal.close();
        //Agregamos el mensaje de exito
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Creada la propiedad con éxito",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrio un error al guardar en BD",
        });
      }
    } catch (er) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrio un error al guardar imagen enviada por file",
      });

      console.log(er);
    }
  };
  return (
    <>
      <form className="w-full max-w-md" onSubmit={manejarSubmit}>
        <div className="mb-6">
          <label
            htmlFor="descripcion"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingrese la descripción de la propiedad."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            name="descripcion"
            required={true}
          ></textarea>
        </div>
        <div className="mb-6">
          <label
            htmlFor="ubicacion"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Ubicación
          </label>
          <input
            type="text"
            id="ubicacion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingrese la ubicación de su propiedad"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            name="ubicacion"
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="valor"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Valor
          </label>
          <input
            type="number"
            id="valor"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingrese el precio de la pieza"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            name="valor"
            required={true}
          />
        </div>
        <label
          htmlFor="dropzone-file"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Imagénes
        </label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click para subir</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px) Máximo 6
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              name="file"
              accept="image/*"
              multiple
              required={true}
              onChange={(e) => {
                setFile(e.target.files);
              }}
            />
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-8"
        >
          Guardar propiedad
        </button>
      </form>
    </>
  );
};

export default CrearInmueble;
