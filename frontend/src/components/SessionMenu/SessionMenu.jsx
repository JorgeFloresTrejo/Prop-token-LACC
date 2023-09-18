
import "./SessionMenu.css";
import Loga from "../../images/logo1.png";


const SessionMenu = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="primer-div">
            <div className="loga">
              <img src={Loga} alt="logo" />
              <h3>
                <span>Inversion</span> Inmobiliaria
              </h3>
            </div>
            <div className="connection-wallet">
            </div>
          </div>
        </div>
      </div>
      <div className="mostrar-botones-contenido">
        <div className="botones">
          <div className="segundo-div">
            <div className="desplegable">
              <button className="menu-button"> Crear Token</button>
              <button className="menu-button">Inmuebles</button>
              <button className="menu-button">
                Wallets
              </button>
              <button className="menu-button">Mis activos</button>
              <button className="menu-button">configuracion</button>
              <button className="menu-button">Cerrar Session</button>
            </div>
          </div>
          <div className="tercer-div">
            </div>
          </div>
        </div>
      </div>
  );
};

export default SessionMenu;
