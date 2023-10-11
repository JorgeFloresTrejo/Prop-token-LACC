import React, { useState, useEffect } from "react";

const Google = () => {
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    // Redirigir automáticamente a /auth/google al cargar el componente
    window.location.href = "http://localhost:4000/auth/google";
  }, []);
  useEffect(() => {
    // Captura el token de la URL después de la redirección
    const autenticacionConGoogle = async () => {
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
      <p>Redirigiendo a la autenticación de Google...</p>
    </div>
  );
};

export default Google;
