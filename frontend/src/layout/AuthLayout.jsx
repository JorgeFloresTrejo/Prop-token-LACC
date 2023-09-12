//Outlet es un componente y cuando entre a la ruta y cargue este componente AuthLayout,
// tambien me mostrará el contenido del subcomponente, osea del Login y los
import { Outlet } from 'react-router-dom'; 

const AuthLayout = () => {

  return (
    <>

        <h1>Desde auth layout</h1>
        {/*Outlet Espacio reservado para el contenido que forma parte de este layout */}
        <Outlet />  

    </>
  )
}

export default AuthLayout;