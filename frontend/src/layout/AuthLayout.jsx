//Outlet es un componente y cuando entre a la ruta y cargue este componente AuthLayout,
// tambien me mostrará el contenido del subcomponente, osea del Login y los
import { Outlet } from 'react-router-dom'; 

const AuthLayout = () => {

  return (
    <>

        <main className="container mx-auto  md:grid md:grid-cols-2 mt-2 gap-16 p-7 ">
        {/*Outlet Espacio reservado para el contenido que forma parte de este layout */}
        <Outlet />  
        </main>

    </>
  )
}

export default AuthLayout;