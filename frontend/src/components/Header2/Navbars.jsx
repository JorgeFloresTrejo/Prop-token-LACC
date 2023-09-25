import { useState } from "react";
import Logo from "../../images/logo1.png"
import { Link } from "react-router-dom";
const  Navbars=()=> {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú en dispositivos móviles
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <nav className="bg-white dark:bg-blue-400 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <div className="flex items-center">
          <img
            src={Logo}
            className="h-16 mr-1"
            alt="Flowbite Logo"
            width="90px"
            
          />
          <div className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Prop
          </span>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue">
            Token
          </span>
          </div>
        </div>
        <div className="flex md:order-2">
              <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full ..." to="/login">
              Acceder
            </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className={`w-5 h-5 transition-transform transform ${
                menuOpen ? 'rotate-0' : '-rotate-90'
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:block md:items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="w-full flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-16 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-blue-400 dark:border-gray-700">
          
            <li>   
              <Link className="block py-2.5 pl-3 pr-4 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-bluedark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/">
              Inicio
            </Link></li>
            
            <li>   
              <Link className="block py-2.5 pl-3 pr-4 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-bluedark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="inmuebles">
              Inmuebles
            </Link></li>
            <li>   
              <Link className="block py-2.5 pl-3 pr-4 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-bluedark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/login">
              Comprar
            </Link></li>
            <li>   
              <Link className="block py-2.5 pl-3 pr-4 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue md:p-0 md:dark:hover:text-bluedark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/login">
              Vender
            </Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default  Navbars;