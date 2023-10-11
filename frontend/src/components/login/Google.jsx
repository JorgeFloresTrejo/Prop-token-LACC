import React, { useState, useEffect } from "react";

const Google = () => {
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    // Redirigir automáticamente a /auth/google al cargar el componente
    window.location.href = "http://localhost:4000/auth/google";
  }, []);
  useEffect(() => {
    // Captura el token de la URL después de la redirección
    console.log("hola");
    const autenticacionConGoogle = async () => {
      console.log("hola1");

      try {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("accessToken");

        if (token) {
          // Almacena el token en el estado
          setAccessToken(token);
        }
      } catch (error) {
        console.error("Error al autenticar con Google: ", error);
      }
    };

    autenticacionConGoogle();
  }, []);

  return (
    <div>
      {accessToken ? (
        <div>Autenticación exitosa. Token de acceso: {accessToken}</div>
      ) : (
        <p>Redirigiendo a la autenticación de Google...</p>
      )}
    </div>
  );
};

export default Google;
