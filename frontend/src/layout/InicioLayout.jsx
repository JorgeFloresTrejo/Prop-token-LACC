//Outlet es un componente y cuando entre a la ruta y cargue este componente AuthLayout,
// tambien me mostrará el contenido del subcomponente, osea del Login y los
import { Outlet } from 'react-router-dom'; 
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const InicioLayout = () => {

  return (
    <>
    <Header/>
        <main>
        {/*Outlet Espacio reservado para el contenido que forma parte de este layout */}
        <Outlet />  
        </main>
        
        <Footer/>      
    </>
  )
}

export default InicioLayout;