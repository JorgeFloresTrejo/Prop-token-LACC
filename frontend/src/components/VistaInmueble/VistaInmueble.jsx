import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './VistaInmueble.css';
import casa from '../../images/casa.jpg';
import token from '../../images/Datos.png';
import Descripcion from '../../images/Descripcion.png';
import Documentos from '../../images/Documentos.png';
import Localizacion from '../../images/Localizacion.png';
import finan from '../../images/finan.png';
import sv from '../../images/el-salvador.png'

const VistaInmueble = () => {

  const [infoVisible, setInfoVisible] = useState(false);
  const [infoContent, setInfoContent] = useState('');

  function mostrarInfo(info) {
    setInfoContent(info);
    setInfoVisible(true);
  }

  function ocultarInfo() {
    setInfoVisible(false);
  }
  
  return (
    <div className="containera">

      <Carousel className="caru">
        <div className="mage">
          <img className="img-carousel" src={casa} alt="Descripción de la imagen 1" />
          <p className="legend">Descripción de la imagen 1</p>
        </div>
        <div className="mage">
          <img className="img-carousel" src={casa} alt="Descripción de la imagen 2" />
          <p className="legend">Descripción de la imagen 2</p>
        </div>
        <div className="mage">
          <img className="img-carousel" src={casa} alt="Descripción de la imagen 3" />
          <p className="legend">Descripción de la imagen 3</p>
        </div>
        <div className="mage">
          <img className="img-carousel" src={casa} alt="Descripción de la imagen 4" />
          <p className="legend">Descripción de la imagen 4</p>
        </div>
      </Carousel>

      <div className="content-container"> 

        <div className="cardmueble">

          <h2 className='titulo'>El Cuco, San Miguel.</h2>

          <div className="conp">

            <p className="cuco" style={{ display: 'inline', }}>
              El salvador
              <img src={sv} className='salvador' style={{ display: 'inline', verticalAlign: 'middle' }} />
            </p>

            <p className="finan" style={{ display: 'inline' }}>
              FINANCIADO
              <img src={finan} className='salvador' style={{ display: 'inline', verticalAlign: 'middle' }} />
            </p>

          </div>

          <div className="centro">
            <p className="precioreal" style={{ display: 'inline' }}>
              $ 56,903
            </p>
          </div>

          <div className="precio-container">

            <div className="izquierda">
              <p className="precio">Precio Token</p>
              <br />
              <p className="precio">Rentabilidad de alquiler anual</p>
              <br />
              <p className="precio">Plusvalía tras venta</p>
              <br />
              <p className="precio">APY total</p>
              <br />
              <p className="precio">Inicio Renta</p>
              <br />
              <p className="precio">Rendimientos</p>
              <br />
            </div>

            <div className="derecha">
              <p className="precio">$ 99.99</p>
              <br />
              <p className="precio">$ 9.11%</p>
              <br />
              <p className="precio">$ 7.8%</p>
              <br />
              <p className="precio">13.005%</p>
              <br />
              <p className="precio">30/01/2023</p>
              <br />
              <p className="precio">6193.05</p>
              <br />
            </div>

          </div>

        </div>

        <div className="w-3/5  border-gray-200 border-dashed rounded-lg dark:border-gray-700  m-5">
        <div className="datosmostrar">
        

          <div className="enlace" onClick={() => mostrarInfo("Información de Descripción")}>
            <li href="">Descripción</li>
            <img className="token" src={Descripcion} alt="Descripción" />
          </div>

          <div className="enlace" onClick={() => mostrarInfo("Locación del activo")}>
            <li href="" className='loca' >
              Localización
            </li>
            <img className="token" src={Localizacion} alt="Localización" />
          </div>

          <div className="enlace" onClick={() => mostrarInfo("Información de Datos del Token")}>
            <li href="">Datos del token</li>
            <img className="token" src={token} alt="Datos del token" />
          </div>

          <div className="enlace" onClick={() => mostrarInfo("Información de Documentos")}>
            <li href="">Documentos</li>
            <img className="token" src={Documentos} alt="Documentos" />
          </div>
        </div>
        
        {infoVisible && (
          <div className="informacion">
            <p>{infoContent}</p>
            <button onClick={ocultarInfo} >Cerrar</button>
          </div>
        )}
      </div>
      </div>
    </div>

  );
};

export default VistaInmueble;
