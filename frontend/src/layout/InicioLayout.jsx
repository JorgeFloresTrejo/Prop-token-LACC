//Outlet es un componente y cuando entre a la ruta y cargue este componente AuthLayout,
// tambien me mostrará el contenido del subcomponente, osea del Login y los
import { Outlet } from 'react-router-dom'; 
import  Navbars from '../components/Header2/Navbars';
import Footer2 from '../components/Footer2/Footer2';

const InicioLayout = () => {

  return (
    <>
        <Navbars/>
        <main>
        {/*Outlet Espacio reservado para el contenido que forma parte de este layout */}
        <Outlet />  
        </main>
        <Footer2/>      
    </>
  )
}

export default InicioLayout;