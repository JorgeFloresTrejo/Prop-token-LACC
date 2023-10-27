import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../alertas/Alerta";
import clienteAxios from "../../config/axios";

import raices from "../../images/registrars.jpg";

function Registrar() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [alerta, setAlerta] = useState({});

  // Funcion que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, apellido, email, password, repetirPassword].includes("")) {
      setAlerta({ msg: "Hay campos vacios", error: true });
      return;
    }
    if (password !== repetirPassword) {
      setAlerta({ msg: "La contraseña no es la misma", error: true });
      return;
    }
    if (password.length < 6) {
      setAlerta({
        msg: "Contraseña muy corta, Minimo 6 caracteres",
        error: true,
      });
      return;
    }
    setAlerta({}); // Si no hay errores, se setea la alerta como un objeto vacio

    // Crear el usuario en la api
    try {
      await clienteAxios.post(`/registrar`, {
        nombre,
        apellido,
        email,
        password,
        telefono,
      });
      //Si los datos se envían correctamente, seteamos un mensaje para el componente alerta
      setAlerta({ msg: "Creado correctamente, Revisa tu email", error: false });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;
  return (
    <div
      className="absolute inset-1 bg-cover bg-no-repeat bg-center rounded-lg"
      style={{ backgroundImage: `url(${raices})` }}
    >
      {/* Formulario de registro */}
      <div className="flex justify-end ">
        <div className="mt-5 shadow-xl px-9 py-6 rounded-xl bg-blue-100 bg-opacity-25  ">
          {/* Si en el mensaje hay algo, entonces se muestra el componente alerta */}
          {msg && <Alerta alerta={alerta} />}
          <h1 className="text-2xl font-semibold tracking-wider capitalize dark:text-black text-center">
            Obtenga Su Cuenta Aqui.
          </h1>
          <p className="text-gray-500 dark:text-gray-900 text-center ">
            Vamos a configurarlo todo para que pueda verificar su cuenta <br />y
            comenzar a Invertir en PropTokenLACC.
          </p>
          <br />
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 md:grid-cols-2"
          >
            <div className="">
              <label
                htmlFor="nombre"
                className="uppercase text-gray-700 text-1xl block font-bold"
              >
                nombre
              </label>
              <input
                type="text"
                placeholder="Digite su nombre"
                id="nombre"
                className="block w-full px-5 py-3 mt-2 text-white-700 placeholder-white-400 bg-white border border-white-200 rounded-md dark:placeholder-white-600 dark:bg-white-900 dark:text-white-300 dark:border-white-700 focus:border-white-400 dark:focus:border-white-400 focus:ring-white-400 focus:outline-none focus:ring focus:ring-opacity-40"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="apellido"
                className="uppercase text-gray-700 text-1xl block font-bold"
              >
                apellido
              </label>
              <input
                type="text"
                placeholder="Digite su apellido"
                id="apellido"
                className="block w-full px-5 py-3 mt-2 text-white-700 placeholder-white-400 bg-white border border-white-200 rounded-md dark:placeholder-white-600 dark:bg-white-900 dark:text-white-300 dark:border-white-700 focus:border-white-400 dark:focus:border-white-400 focus:ring-white-400 focus:outline-none focus:ring focus:ring-opacity-40"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="telefono"
                className="uppercase text-gray-700 text-1xl block font-bold"
              >
                telefono
              </label>
              <input
                type="number"
                placeholder="Digite su número de teléfono"
                id="telefono"
                className="block w-full px-5 py-3 mt-2 text-white-700 placeholder-white-400 bg-white border border-white-200 rounded-md dark:placeholder-white-600 dark:bg-white-900 dark:text-white-300 dark:border-white-700 focus:border-white-400 dark:focus:border-white-400 focus:ring-white-400 focus:outline-none focus:ring focus:ring-opacity-40"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="uppercase text-gray-700 text-1xl block font-bold"
              >
                email
              </label>
              <input
                type="email"
                placeholder="Email de registro"
                id="correo"
                className="block w-full px-5 py-3 mt-2 text-white-700 placeholder-white-400 bg-white border border-white-200 rounded-md dark:placeholder-white-600 dark:bg-white-900 dark:text-white-300 dark:border-white-700 focus:border-white-400 dark:focus:border-white-400 focus:ring-white-400 focus:outline-none focus:ring focus:ring-opacity-40"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="uppercase text-gray-700 text-1xl block font-bold"
              >
                contraseña
              </label>
              <input
                type="password"
                placeholder="Digite su contraseña"
                id="password"
                className="block w-full px-5 py-3 mt-2 text-white-700 placeholder-white-400 bg-white border border-white-200 rounded-md dark:placeholder-white-600 dark:bg-white-900 dark:text-white-300 dark:border-white-700 focus:border-white-400 dark:focus:border-white-400 focus:ring-white-400 focus:outline-none focus:ring focus:ring-opacity-40"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="repetir-password"
                className="uppercase text-gray-700 text-1xl block font-bold"
              >
                repetir contraseña
              </label>
              <input
                type="password"
                placeholder="Repite tu contraseña"
                id="repetir-password"
                className="block w-full px-5 py-3 mt-2 text-white-700 placeholder-white-400 bg-white border border-white-200 rounded-md dark:placeholder-white-600 dark:bg-white-900 dark:text-white-300 dark:border-white-700 focus:border-white-400 dark:focus:border-white-400 focus:ring-white-400 focus:outline-none focus:ring focus:ring-opacity-40"
                value={repetirPassword}
                onChange={(e) => setRepetirPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Crear cuenta"
              className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto"
            />

            <nav className="mt-5 lg:flex justify-between">
              <Link
                to="/login"
                className="block text-center my-5 text-gray-600 mx-12"
              >
                ¿Ya tienes una cuenta?
                <span class="text-cyan-600">Inicia sesión</span>
              </Link>
              <Link
                to="/login/olvide-password"
                className="block text-center my-5 text-gray-600"
              >
                Olvidé mi contraseña
              </Link>
            </nav>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registrar;
