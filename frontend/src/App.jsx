import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./components/login/Login";
import Registrar from "./components/login/Registrar";
import OlvidePassword from "./components/login/OlvidePassword";
import ConfirmarCuenta from "./components/login/ConfirmarCuenta";

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route index element={< Login />} /> 
                <Route path="registrar" element={<Registrar />} /> 
                <Route path="olvide-password" element={<OlvidePassword />} /> 
                <Route path="confirmar/:id" element={<ConfirmarCuenta />} /> 
            </Route>

            {/* Asi seguría el orden de las rutas para cuando acceda */}
            {/* <Route path="/admin" element={<AdminLayout />}>
                <Route index element={< Perfil />} /> 
 
            </Route> */}
            
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
