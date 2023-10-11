import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Info.css';



function Info() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [sexo, setSexo] = useState('masculino');
  const [documento, setDocumento] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [fechaNacimientoFocused, setFechaNacimientoFocused] = useState(false);
  const [prefijo, setPrefijo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [showPrefijoLabel, setShowPrefijoLabel] = useState(false);
  const [showTelefonoLabel, setShowTelefonoLabel] = useState(false);
  const [paisResidencia, setPaisResidencia] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');

  const navigate = useNavigate();

  const avanzarPagina = () => {
    navigate('/financiero-kyc');
  };

  const retrocederPagina = () => {
    navigate(-1); // Navegar hacia atrás usando -1
};
 
  const handlePrefijoFocus = () => {
    setShowPrefijoLabel(true);
  };

  const handlePrefijoBlur = () => {
    if (!prefijo) {
      setShowPrefijoLabel(false);
    }
  };

  const handleTelefonoFocus = () => {
    setShowTelefonoLabel(true);
  };

  const handleTelefonoBlur = () => {
    if (!telefono) {
      setShowTelefonoLabel(false);
    }
  };
 


  const opcionesPaises = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Canadá",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Ecuador",
    "Estados Unidos de America",
    "El Salvador",
    "Guatemala",
    "Honduras",
    "Nicaragua",
    "México",
    "Perú",
    "Panamá",
    "Uruguay",
    "Venezuela",
    // Agrega más países según sea necesario
  ];

  return (
    <div className='informacion-container'>
      <h2>Formulario</h2>
      
        <form>
          <div className='input-container'>
            <label htmlFor="nombre" className='label-hidden'>Nombre: </label><br/>
            <input 
              type="text"
              id="nombre"
              name="nombre" 
              placeholder="Nombre" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)}
              onFocus={() => document.querySelector('label[for="nombre"]').classList.remove('label-hidden')}
              onBlur={() => {
                if (!nombre) {
                  document.querySelector('label[for="nombre"]').classList.add('label-hidden');
                }
              }}
            />
          </div>
          <div>
            <label htmlFor='apellido' className='label-hidden'>Apellido:</label>
            <input 
              type="text" 
              id="apellido" 
              name="apellido" 
              placeholder="Apellido" 
              value={apellido} 
              onChange={(e) => setApellido(e.target.value)}
              onFocus={() => document.querySelector('label[for="apellido"]').classList.remove('label-hidden')}
              onBlur={() => {
                if (!apellido) {
                  document.querySelector('label[for="apellido"]').classList.add('label-hidden');
                }
              }}

            />
          </div>
          <div>
            <label htmlFor='sexo' className='label-hidden'>Sexo:</label>
            <select 
              id="sexo" 
              name="sexo" 
              value={sexo} 
              onChange={(e) => setSexo(e.target.value)}
              onFocus={() => document.querySelector('label[for="sexo"]').classList.remove('label-hidden')}
              onBlur={() => {
                if (!sexo) {
                  document.querySelector('label[for="sexo"]').classList.add('label-hidden');
                }
              }}
              >
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
          <div>
            <label htmlFor='documento' className='label-hidden'>Documento de Identidad:</label>
            <input 
              type="text" 
              id="documento" 
              name="documento" 
              placeholder='Documento de Identidad' 
              value={documento} 
              onChange={(e) => setDocumento(e.target.value)}
              onFocus={() => document.querySelector('label[for="documento"]').classList.remove('label-hidden')}
              onBlur={() => {
                if (!documento) {
                  document.querySelector('label[for="documento"]').classList.add('label-hidden');
                }
              }}
            />
          </div>
          <div className='fecha-container'>
            <label  className={fechaNacimiento ? '' : 'label-hidden'}>
              Fecha de Nacimiento:
            </label>
            <DatePicker
              id="fechaNacimiento"
              name="fechaNacimiento"
              placeholderText="Fecha de Nacimiento"
              selected={fechaNacimiento}
              onChange={(date) => setFechaNacimiento(date)}
              onFocus={() => setFechaNacimientoFocused(true)}
              onBlur={() => setFechaNacimientoFocused(false)}
            />
          </div>
          <div className='phone-container'>
            <div className='phone-input'>
              {showTelefonoLabel && (
                <label htmlFor='telefono'>Número de Teléfono:</label>
              )}
              <input
                type="text"
                className='prefix-input'
                id="prefijo"
                name="prefijo"
                placeholder='Prefijo'
                value={prefijo}
                onChange={(e) => setPrefijo(e.target.value)}
                onFocus={handlePrefijoFocus}
                onBlur={handlePrefijoBlur}
              />
            </div>  
            <div className='phone-input'>  
              <input
                type="text"
                className='phone-input'
                id="telefono"
                name="telefono"
                placeholder='Número de Teléfono'
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                onFocus={handleTelefonoFocus}
                onBlur={handleTelefonoBlur}
              />
            </div>
          </div>

          <div>
            {paisResidencia && (
              <label htmlFor="paisResidencia">País de Residencia:</label>
            )}
            <select
              id="paisResidencia"
              name="paisResidencia"
              value={paisResidencia}
              onChange={(e) => setPaisResidencia(e.target.value)}
            >
              <option value="">Seleccione su País de Residencia</option>
              {opcionesPaises.map((pais, index) => (
                <option key={index} value={pais}>
                  {pais}
                </option>
              ))}
            </select>
          </div>


          <div>
            <label htmlFor='ciudad' className='label-hidden'>Ciudad:</label>
            <input 
              type="text" 
              id="ciudad" 
              name="ciudad" 
              placeholder='Ciudad' 
              value={ciudad} 
              onChange={(e) => setCiudad(e.target.value)} 
              onFocus={() => document.querySelector('label[for="ciudad"]').classList.remove('label-hidden')}
              onBlur={() => {
                if (!ciudad) {
                  document.querySelector('label[for="ciudad"]').classList.add('label-hidden');
                }
              }}  
            />
          </div>
          <div>
            <label htmlFor='codigoPostal' className='label-hidden'>Código Postal:</label>
            <input 
              type="text" 
              id="codigoPostal" 
              name="codigoPostal" 
              placeholder='Código Postal' 
              value={codigoPostal} 
              onChange={(e) => setCodigoPostal(e.target.value)} 
              onFocus={() => document.querySelector('label[for="codigoPostal"]').classList.remove('label-hidden')}
              onBlur={() => {
                if (!codigoPostal) {
                  document.querySelector('label[for="codigoPostal"]').classList.add('label-hidden');
                }
              }}
              />
          </div>
          <div>
            <label htmlFor='nacionalidad' className='label-hidden'>Nacionalidad:</label>
            <input 
              type="text" 
              id="nacionalidad" 
              name="nacionalidad" 
              placeholder='Nacionalidad' 
              value={nacionalidad} 
              onChange={(e) => setNacionalidad(e.target.value)} 
              onFocus={() => document.querySelector('label[for="nacionalidad"]').classList.remove('label-hidden')}
              onBlur={() => {
                if (!nacionalidad) {
                  document.querySelector('label[for="nacionalidad"]').classList.add('label-hidden');
                }
              }}
              />
          </div>
        </form>
      <div className="submit-container">
        <button className="back-button" onClick={retrocederPagina}>
          Volver
        </button>
        <button className="submit-button" onClick={avanzarPagina}>
          Continaur
        </button>
      </div>
      

      




    </div>
  );
}

export default Info;
