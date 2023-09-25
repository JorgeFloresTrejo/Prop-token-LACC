import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import AdminLayout from "./layout/adminLayout";
import Login from "./components/login/Login";
import Registrar from "./components/login/Registrar";
import OlvidePassword from "./components/login/OlvidePassword";
import ConfirmarCuenta from "./components/login/ConfirmarCuenta";
import NuevoPassword from "./components/login/nuevoPassword";

import { AuthProvider } from "./context/AuthProvider"; 

import Footer from "./components/Footer/Footer";
import Inicio from "./components/Inicio/Inicio";
import Header from "./components/Header/Header";
import Inmueble from "./components/Inmuebles/Inmueble";
import InmuebleFinal from "./components/InmuebleFinal/InmuebleFInal";
import InicioLayout from "./layout/InicioLayout";
import SessionMenu from "./components/SessionMenu/SessionMenu";


function App() {
  return (
    <>

      <BrowserRouter>
       <AuthProvider>
        <Routes>
   
          <Route path="/login" element={<AuthLayout />}>
            <Route index element={< Login />} /> 
            <Route path="registrar" element={<Registrar />} /> 
            <Route path="olvide-password" element={<OlvidePassword />} /> 
            <Route path="olvide-password/:token" element={<NuevoPassword />} /> 
            <Route path="confirmar/:id" element={<ConfirmarCuenta />} /> 
          </Route>  
 

          {/* Vistas que no necesitan loggearse */}
          <Route path="/" element={<InicioLayout />}>
            <Route index element={<Inicio />} />
            <Route path="inmuebles" element={<InmuebleFinal />} />
          </Route>

          {/**Vistas que necesitan logearse */}
<<<<<<< HEAD
          <Route path="Inicio" element={<AdminLayout />}>
=======
          <Route path="/admin" element={<AdminLayout />}>
>>>>>>> 35c7fa7e578fbc2430294ba0c858c67356f41a13
            <Route index element={<SessionMenu />} />
          </Route>

        </Routes>
        </AuthProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
