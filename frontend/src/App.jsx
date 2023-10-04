import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import AdminLayout from "./layout/AdminLayout";
import Login from "./components/login/Login";
import Registrar from "./components/login/Registrar";
import OlvidePassword from "./components/login/OlvidePassword";
import ConfirmarCuenta from "./components/login/ConfirmarCuenta";
import CrearInmueble from "./components/crearInmueble/CrearInmueble";
import NuevoPassword from "./components/login/NuevoPassword";

import { AuthProvider } from "./context/AuthProvider";

import Inicio from "./components/Inicio/Inicio";
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
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />}/>
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            {/* Vistas que no necesitan loggearse */}
            <Route path="/" element={<InicioLayout />}>
              <Route index element={<Inicio />} />
              <Route path="inmuebles" element={<InmuebleFinal />} />
            </Route>

            {/**Vistas que necesitan logearse */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<SessionMenu />} />
              <Route
                path="propiedades/registrar/"
                element={<CrearInmueble />}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
