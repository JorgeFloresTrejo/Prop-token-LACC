import { Link } from "react-router-dom";
const Login = () => {

  return (
   <>
          <div>
            <h1>Invierte en inmuebles tokenizados</h1>
          </div>

          <div className="mt-20 md:mt-2 shadow-xl px-5 py-4 rounded-xl bg-white">
            <h1 className="text-indigo-700 text-center mx-20 font-black text-3xl">
                Inicia sesión
            </h1>
              
            <form action="" className="mt-5">
              <div className="my-7">
                <label htmlFor="email"  className="uppercase text-gray-700 text-2xl block font-bold"> email </label>
                <input type="email" placeholder="Email de registro" id="email" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl"/>
              </div>

              <div className="my-7">
                <label htmlFor="pssword"  className="uppercase text-gray-600 text-2xl block font-bold"> contraseña </label>
                <input type="password" placeholder="Tu contraseña" id="password" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl"/>
              </div>

              <input type="submit" value="Iniciar sesión" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto"/>
            </form>

            <nav className="mt-5 lg:flex justify-between">
              <Link to="/registrar" className="block text-center my-5 text-gray-600">¿No tienes una cuenta? Registrate</Link>
              <Link to="/olvide-password" className="block text-center my-5 text-gray-600">Olvide mi contraseña</Link>
            </nav>

          </div>
   </>
  )
}

export default Login