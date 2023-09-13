import {Link} from "react-router-dom";
function Registrar() {
  return (
    <>
        <div>
            <h1>
              Registrate con nosotros y empieza a invertir
            </h1>
        </div>

          {/* Formulario de registro */}
        <div className="mt-20 md:mt-1 shadow-xl px-5 py-4 rounded-xl bg-white">
        <form action="" className="mt-5">
              <div className="my-7">
                <label htmlFor="nombre"  className="uppercase text-gray-700 text-1xl block font-bold"> nombre </label>
                <input type="text" placeholder="Digite su nombre" id="nombre" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl"/>
              </div>

              <div className="my-7">
                <label htmlFor="apellido"  className="uppercase text-gray-700 text-1xl block font-bold"> apellido </label>
                <input type="text" placeholder="Digite su apellido" id="apellido" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl"/>
              </div>

              <div className="my-7">
                <label htmlFor="email"  className="uppercase text-gray-700 text-1xl block font-bold"> email </label>
                <input type="email" placeholder="Email de registro" id="email" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl"/>
              </div>

              <div className="my-7">
                <label htmlFor="password"  className="uppercase text-gray-700 text-1xl block font-bold"> contraseña </label>
                <input type="password" placeholder="Digite su contraseña" id="password" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl"/>
              </div>

              <div className="my-7">
                <label htmlFor="repetir-password"  className="uppercase text-gray-700 text-1xl block font-bold">repetir contraseña </label>
                <input type="password" placeholder="Repite tu contraseña" id="repetir-password" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl"/>
              </div>

              <div className="my-7">
                <label htmlFor="telefono"  className="uppercase text-gray-700 text-1xl block font-bold"> telefono </label>
                <input type="number" placeholder="Digite su número de teléfono" id="telefono" className="border w-full p-2 mt-3 bg-gray-200 rounded-xl"/>
              </div>


              <input type="submit" value="Crear cuenta" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-900 md:w-auto"/>
            </form>

            <nav className="mt-5 lg:flex justify-between">
              <Link to="/" className="block text-center my-5 text-gray-600">¿Ya tienes una cuenta? Inicia sesión</Link>
              <Link to="/olvide-password" className="block text-center my-5 text-gray-600">Olvide mi contraseña</Link>
            </nav>

        </div>

    </>
  )
}

export default Registrar