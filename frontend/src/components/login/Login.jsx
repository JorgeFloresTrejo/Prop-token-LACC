import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; //useNavigate es el hook para redireccionar al usuario
import Alerta from "../alertas/Alerta";
import clienteAxios from "../../config/axios";

import sesion from "../../images/sesion.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const navigate = useNavigate(); //Toma la ruta donde quiera redireccionar al usuario

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Si la contraseña o el email vienen vacíos se manda un mensaje
    if ([email, password].includes("")) {
      setAlerta({
        msg: "No se permiten campos vacíos",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post("/login", { email, password });
      localStorage.setItem("token", data.token);
      navigate("/admin"); //Ruta a la que me lleva si llena el formulario del login correctamente
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  const cargarGoogle = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };

  const { msg } = alerta;

  return (
    <div
      className="fixed inset-1 bg-cover bg-no-repeat bg-center rounded-lg"
      style={{ backgroundImage: `url(${sesion})` }}
    >
      {msg && <Alerta alerta={alerta} />}

      {/* <!-- Right column container --> */}
      <div class="mb-20 mt-32 ml-20 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12  bg-opacity-25 rounded-xl ">
        <form onSubmit={handleSubmit}>
          {/* <!--Sign in section--> */}
          <div class="flex flex-row items-center justify-center lg:justify-start">
            <p class="mb-0 mr-4 text-lg font-bold">Inicia sesión con</p>
            {/* <!-- Gmail --> */}
            <button
              onClick={cargarGoogle}
              class="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-blue-200 border border-slate-600 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              <svg
                viewBox="0 0 48 48"
                width="24"
                height="24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g
                    id="Icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        ></path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <span class="text-gray-700 font-medium">Acceder con Google</span>
            </button>
          </div>

          {/* <!-- Separator between social media sign in and email/password sign in --> */}
          <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-900 after:mt-0.5 after:flex-1 after:border-t after:border-gray-900">
            <p class="mx-4 mb-0 text-center font-semibold dark:text-black font-bold">
              Or
            </p>
          </div>

          <div class="relative mb-6" data-te-input-wrapper-init>
            <label
              htmlFor="email"
              className="uppercase text-gray-700 text-2xl block font-bold"
            >
              email
            </label>
            <input
              type="email"
              placeholder="Email de registro"
              id="email"
              className="border w-full p-2 mt-3 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="relative mb-6" data-te-input-wrapper-init>
            <label
              htmlFor="pssword"
              className="uppercase text-gray-600 text-2xl block font-bold"
            >
              contraseña
            </label>
            <input
              type="password"
              placeholder="Tu contraseña"
              id="password"
              className="border w-full p-2 mt-3  rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <nav className="mt-5 lg:flex justify-between">
            <Link
              to="/login/registrar"
              className="block text-center my-5 text-gray-900 font-bold"
            >
              ¿No tienes una cuenta?
              <span class="text-cyan-600 ">Registrate</span>
            </Link>
            <Link
              to="/login/olvide-password"
              className="block text-center my-5 text-gray-900 font-bold"
            >
              Olvide mi contraseña
            </Link>
          </nav>

          {/* <!-- Login button --> */}
          <div class="text-center lg:text-left">
            <input
              type="submit"
              value="Iniciar sesión"
              className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
