import Box from "./../../images/box.png";
import Wallet from "./../../images/wallet.png";
import Rendimiento from "./../../images/rendimientos.png";
import Venta from "./../../images/venta.png";
import Reinversion from "./../../images/reinversion.png";
import Uno from "./../../images/1.png.png";
import Dos from "./../../images/2.png.png";
import Tres from "./../../images/3.png.png";

import Card from "./Card/Card";
import Facilidad from "./Facilidad/Facilidad";
import MasInmueble from "./MasInmueble/MasInmueble";

import "./Inicio.css";
import Imagen from "./ImagenHeader/Imagen";
import Imgdeposito from "./ImagenDeposito/Imgdeposito";
import FaqComponent from "./Fqa/Pregunta";
import InmuebleFinal from "../InmuebleFinal/InmuebleFInal";

const Inicio = () => {
  return (
    <>
      <Imagen />
      <p className="ini">Invierte como los grandes gracias a la tecnología</p>
      <div className="card">
        <Card
          imagen={Box}
          titulo={"Búsqueda"}
          descripcion={"Seleccionamos las mejores oportunidades para vender."}
        />
        <Card
          imagen={Wallet}
          titulo={"Tokenización"}
          descripcion={
            "Tokenizamos tu propiedad  para que cualquier inversor pueda articipar."
          }
        />
        <Card
          imagen={Rendimiento}
          titulo={"Rendimiento"}
          descripcion={"Repartimos rendimientos mensuales del alquiler."}
        />
        <Card
          imagen={Venta}
          titulo={"Venta final"}
          descripcion={
            "Vendemos el inmueble en el plazo marcado y repartimos plusvalías"
          }
        />
        <Card
          imagen={Reinversion}
          titulo={"Reinversión"}
          descripcion={
            "Invierte tus rendimientos mensuales y multiplica el capital inicial invertido"
          }
        />
      </div>
      <div className="info-info">
        <p>
          Despreocúpate de todo proceso; búsqueda de inmuebles, firmas, bancos,
          reformas, búsqueda de inquilino, gestione el día a día PropToken LAC,
          lo hace todo por ti y tu tranquilida
        </p>
      </div>

      <div className="inmueble-inmueble flex">
        <div className="inmueble-inmueble_card w-full mx-8">
          <div className="w-full p-2 text-center bg-blue-400 rounded-lg">
            <h2 className="text-white shadow-lg ">Lista destacadas</h2>
            <h3 className="text-white text-shadow-md">
              Una colección seleccionada de nuestras propiedades
            </h3>
          </div>
          <div className="inmueblefinal-final-final">
            <InmuebleFinal mostrarBoton={false} />
          </div>

          <div className="w-full p-2 text-center  rounded-lg ">
            <a href="/inmuebles" className="ver-listado">
              Ver listado
            </a>
          </div>
        </div>
      </div>

      <div className="facilidad-facilidad my-8">
        <div className="w-full p-2 text-center  rounded-lg my-8">
          <h6>¿Qué tan fácil es invertir?</h6>
        </div>

        <div className="facilidad-card-flex">
          <Facilidad
            imagen={Uno}
            titulo="Regístrate"
            descripcion="Sólo necesitas un email para entrar en un nuevo universo. A partir de ahí te ayudaremos en cada paso"
          />
          <Facilidad
            imagen={Dos}
            titulo="Selecciona el inmueble a invertir"
            descripcion="Diversifica tu portfolio invirtiendo en uno o varios inmuebles; la oferta de tokens varía; ¡algunos inmuebles duran pocos minutos!"
          />
          <Facilidad
            imagen={Tres}
            titulo="Adquiere tus tokens"
            descripcion="Una vez elijas tu inmueble, pued einvertir con cripto, guardo tus tokens e irás recibiendo tus rendimientos todos los meses"
          />
        </div>
        <a href="/inmuebles" className="ver-listado">
          Empieza Invertir
        </a>
      </div>
      <Imgdeposito />
      <MasInmueble />

      <FaqComponent />
    </>
  );
};

export default Inicio;
