import React, { useState } from "react";

const CrearInmueble = () => {
  const [file, serFile] = useState(null);
  return (
    <>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append("file", file);
            const response = await fetch("http://localhost:4000/subir", {
              method: "POST",
              body: formData,
            });
            const data = await response.json();
            console.log(data);
          }}
        >
          <input
            type="file"
            onChange={(e) => {
              serFile(e.target.files[0]);
            }}
          />
          <button>Enviar</button>
        </form>
      </div>
    </>
  );
};

export default CrearInmueble;
