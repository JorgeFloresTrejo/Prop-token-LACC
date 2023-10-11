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
import Google from "./components/login/Google";
import InicioKyc from "./components/Kyc/InicioKyc/Iniciokyc";
import InfoTest from "./components/Kyc/Info/InfoTest";
import Financiero from "./components/Kyc/Financiero/Financiero";
import Documentos from "./components/Kyc/Documentos/DocAnverso";
import ValidarData from "./components/Kyc/ValidarData/ValidarData";
import WalletMenu from "./components/SessionMenu/WalletMenu";
import MainKyc from "./components/Kyc/MainKyc/Mainkyc";
import VistaInmueble from "./components/VistaInmueble/VistaInmueble";

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
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
              <Route path="google" element={<Google />} />
            </Route>
            {/* Vistas que no necesitan loggearse */}
            <Route path="/" element={<InicioLayout />}>
              <Route index element={<Inicio />} />
              <Route
                path="inmuebles"
                element={<InmuebleFinal mostrarBoton={true} />}
              />
              <Route path="inmuebles" element={<InmuebleFinal />} />
              <Route path="inicio-kyc" element={<InicioKyc />} />
              <Route path="infoTest-kyc" element={<InfoTest />} />
              <Route path="financiero-kyc" element={<Financiero />} />
              <Route path="documento-kyc" element={<Documentos />} />
              <Route path="Validar-kyc" element={<ValidarData />} />
              <Route path="sesion" element={<SessionMenu />} />
              <Route path="wallet-menu" element={<WalletMenu />} />
              <Route path="main-kyc" element={<MainKyc />} />
              <Route path="vistainmuebles" element={<VistaInmueble />} />
            </Route>

            {/**Vistas que necesitan logearse */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<SessionMenu />} />
              <Route
                path="propiedades/registrar/"
                element={<CrearInmueble />}
              />
              <Route path="inicio-kyc" element={<InicioKyc />} />
              <Route path="infoTest-kyc" element={<InfoTest />} />
              <Route path="financiero-kyc" element={<Financiero />} />
              <Route path="documento-kyc" element={<Documentos />} />
              <Route path="Validar-kyc" element={<ValidarData />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
