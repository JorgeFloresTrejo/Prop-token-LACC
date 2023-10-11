import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; //useNavigate es el hook para redireccionar al usuario
import useAuth from "../../hooks/UseAuth";
import Alerta from "../alertas/Alerta";
import clienteAxios from "../../config/axios";

import logo from "../../images/logo.png"
import sesion from "../../images/sesion.jpg"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({});

  const navigate = useNavigate();  //Toma la ruta donde quiera redireccionar al usuario

  const handleSubmit = async e => {
    e.preventDefault();

    // Si la contraseña o el email vienen vacíos se manda un mensaje
    if ([email, password].includes('')) {
      setAlerta({
        msg: 'No se permiten campos vacíos',
        error: true
      });
      return
    }

    try {

      const { data } = await clienteAxios.post('/login', { email, password })
      localStorage.setItem('token', data.token);
      navigate('/admin'); //Ruta a la que me lleva si llena el formulario del login correctamente
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

  }

  const { msg } = alerta;

  return (

    <div className="fixed inset-1 bg-cover bg-no-repeat bg-center rounded-lg" style={{ backgroundImage: `url(${sesion})` }}>
          {msg && <Alerta alerta={alerta} />}
          
            {/* <!-- Right column container --> */}
            <div class="mb-20 mt-32 ml-20 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12  bg-opacity-25 rounded-xl ">
              <form>
                {/* <!--Sign in section--> */}
                <div
                  class="flex flex-row items-center justify-center lg:justify-start">
                  <p class="mb-0 mr-4 text-lg font-bold">Inicia sesión con</p>

                  {/* <!-- Facebook --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mx-1 h-9 w-9 rounded-full bg-blue-500 uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>



                  {/* <!-- Twitter --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mx-1 h-9 w-9 rounded-full bg-blue-500 uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>

                  {/* <!-- Gmail --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mx-1 h-9 w-9 rounded-full bg-blue-500 uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <g transform="translate(15, 0)">
                        <circle cx="15" cy="15" r="15" fill="#007BFF" />
                        <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61z" fill="white" fill-rule="evenodd" clip-rule="evenodd" />
                      </g>
                    </svg>

                  </button>


                </div>

                {/* <!-- Separator between social media sign in and email/password sign in --> */}
                <div
                  class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-900 after:mt-0.5 after:flex-1 after:border-t after:border-gray-900">
                  <p
                    class="mx-4 mb-0 text-center font-semibold dark:text-black font-bold">
                    Or
                  </p>
                </div>


                <div class="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="email" className="uppercase text-gray-700 text-2xl block font-bold"> email </label>
                  <input type="email" placeholder="Email de registro" id="email" className="border w-full p-2 mt-3 rounded-xl" value={email} onChange={e => setEmail(e.target.value)} />
                </div>


                <div class="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="pssword" className="uppercase text-gray-600 text-2xl block font-bold"> contraseña </label>
                  <input type="password" placeholder="Tu contraseña" id="password" className="border w-full p-2 mt-3  rounded-xl" value={password} onChange={e => setPassword(e.target.value)} />
                </div>



                <nav className="mt-5 lg:flex justify-between">
                  <Link
                    to="/login/registrar"
                    className="block text-center my-5 text-gray-900 font-bold">
                    ¿No tienes una cuenta? <span class="text-cyan-600 ">Registrate</span>
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
                  <input type="submit" value="Iniciar sesión" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto" />
                </div>
              </form>
            </div>
          </div>
        
  );
};

export default Login;
