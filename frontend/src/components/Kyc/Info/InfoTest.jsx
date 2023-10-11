import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




function InfoTest() {
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
    <div className="informacion-container mx-auto rounded-xl shadow-lg bg-blue-300 shadow-blue-700 max-w-xl mt-20 mb-10">
      <h2 className="text-3xl font-semibold mb-6 ml-5">Datos Personales</h2>

      <form className='mb-5'>
        <div className="mb-4 ml-5 mr-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
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
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 ml-5 mr-4">
          <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido:</label>
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
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 ml-5 mr-4">
          <label htmlFor="sexo" className="block text-sm font-medium text-gray-700">Sexo:</label>
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
            className="w-full p-2 border rounded-lg"
          >
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>
        <div className="mb-4 ml-5 mr-4">
          <label htmlFor="documento" className="block text-sm font-medium text-gray-700">Documento de Identidad:</label>
          <input
            type="text"
            id="documento"
            name="documento"
            placeholder="Documento de Identidad"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            onFocus={() => document.querySelector('label[for="documento"]').classList.remove('label-hidden')}
            onBlur={() => {
              if (!documento) {
                document.querySelector('label[for="documento"]').classList.add('label-hidden');
              }
            }}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 ml-5 mr-4">
          <label className={fechaNacimiento ? '' : 'label-hidden'}>Fecha de Nacimiento:</label>
          <DatePicker
            id="fechaNacimiento"
            name="fechaNacimiento"
            placeholderText="Fecha de Nacimiento"
            selected={fechaNacimiento}
            onChange={(date) => setFechaNacimiento(date)}
            onFocus={() => setFechaNacimientoFocused(true)}
            onBlur={() => setFechaNacimientoFocused(false)}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 ml-5 mr-80">
          {showTelefonoLabel && (
            <label htmlFor="telefono">Número de Teléfono:</label>
          )}
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            id="prefijo"
            name="prefijo"
            placeholder="Prefijo"
            value={prefijo}
            onChange={(e) => setPrefijo(e.target.value)}
            onFocus={handlePrefijoFocus}
            onBlur={handlePrefijoBlur}
          />
        </div>
        <div className="mb-4 ml-5 mr-4">
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            id="telefono"
            name="telefono"
            placeholder="Número de Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            onFocus={handleTelefonoFocus}
            onBlur={handleTelefonoBlur}
          />
        </div>
        <div className="mb-4 ml-5 mr-4">
          {paisResidencia && (
            <label htmlFor="paisResidencia">País de Residencia:</label>
          )}
          <select
            id="paisResidencia"
            name="paisResidencia"
            value={paisResidencia}
            onChange={(e) => setPaisResidencia(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Seleccione su País de Residencia</option>
            {opcionesPaises.map((pais, index) => (
              <option key={index} value={pais}>
                {pais}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 ml-5 mr-4">
          <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700">Ciudad:</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            placeholder="Ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            onFocus={() => document.querySelector('label[for="ciudad"]').classList.remove('label-hidden')}
            onBlur={() => {
              if (!ciudad) {
                document.querySelector('label[for="ciudad"]').classList.add('label-hidden');
              }
            }}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 ml-5 mr-4">
          <label htmlFor="codigoPostal" className="block text-sm font-medium text-gray-700">Código Postal:</label>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            placeholder="Código Postal"
            value={codigoPostal}
            onChange={(e) => setCodigoPostal(e.target.value)}
            onFocus={() => document.querySelector('label[for="codigoPostal"]').classList.remove('label-hidden')}
            onBlur={() => {
              if (!codigoPostal) {
                document.querySelector('label[for="codigoPostal"]').classList.add('label-hidden');
              }
            }}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 ml-5 mr-4">
          <label htmlFor="nacionalidad" className="block text-sm font-medium text-gray-700">Nacionalidad:</label>
          <input
            type="text"
            id="nacionalidad"
            name="nacionalidad"
            placeholder="Nacionalidad"
            value={nacionalidad}
            onChange={(e) => setNacionalidad(e.target.value)}
            onFocus={() => document.querySelector('label[for="nacionalidad"]').classList.remove('label-hidden')}
            onBlur={() => {
              if (!nacionalidad) {
                document.querySelector('label[for="nacionalidad"]').classList.add('label-hidden');
              }
            }}
            className="w-full p-2 border rounded-lg"
          />
        </div>
      </form>
      <div className="submit-container mb-15">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2" onClick={retrocederPagina}>
          Volver
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={avanzarPagina}>
          Continuar
        </button>
      </div>
    </div>
  
  );
}

export default InfoTest;
