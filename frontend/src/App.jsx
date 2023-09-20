import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./components/login/Login";
import Registrar from "./components/login/Registrar";
import OlvidePassword from "./components/login/OlvidePassword";
import ConfirmarCuenta from "./components/login/ConfirmarCuenta";


import AdminLayout from "./layout/adminLayout";


import InicioLayout from "./layout/InicioLayout";
import Inicio from "./components/Inicio/Inicio";
import MasInmueble from "./components/Inicio/MasInmueble/MasInmueble";
import FaqComponent from "./components/Inicio/PreguntasFrecuente/Pregunta";



import InmuebleFinal from "./components/InmuebleFinal/InmuebleFInal"
import Header from "./components/Header/Header"
import Inmueble from "./components/Inmuebles/Inmueble";
import SessionMenu from "./components/SessionMenu/SessionMenu";





function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<AuthLayout />}>
                <Route index element={< Login />} /> 
                <Route path="registrar" element={<Registrar />} /> 
                <Route path="olvide-password" element={<OlvidePassword />} /> 
                <Route path="confirmar/:id" element={<ConfirmarCuenta />} /> 
            </Route>

            {/* Vistas que no necesitan loggearse */}
            <Route path="/" element={<InicioLayout />}>
              <Route index element={<Inicio/>}/>
              <Route path="FaqComponent" element={<FaqComponent/>} /> 
            </Route>


          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
