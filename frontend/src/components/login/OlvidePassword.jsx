import {Link} from "react-router-dom";

const OlvidePassword = () => {

  return (
    <>
    
        <div>
            <h1>
              Recupera el acceso a tu cuenta
            </h1>
        </div>

        <div className="mt-20 md:mt-2 shadow-xl px-5 py-4 rounded-xl bg-white">

            <form action="" className="mt-5">
              <div className="my-7">
                <label htmlFor="email"  className="uppercase text-gray-700 text-2xl block font-bold"> email </label>
                <input type="email" placeholder="Email de registro" id="email" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl"/>
              </div>

              <input type="submit" value="Enviar instrucciones" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto"/>
            </form>

            <nav className="mt-5 lg:flex justify-between">
              <Link to="/" className="block text-center my-5 text-gray-600">¿Ya tienes una cuenta? Inicia sesión</Link>
              <Link to="/registrar" className="block text-center my-5 text-gray-600">¿No tienes una cuenta? Registrate</Link>
            </nav>

          </div>

    </>
  )
}

export default OlvidePassword