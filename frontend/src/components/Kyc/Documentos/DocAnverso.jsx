import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import './DocAnverso.css'; // Archivo CSS para estilos
//import '../Documentos/DocAnverso.css';
import '../Documentos/Doc.css';


import anverso from '../img/id-do-front.png';
import reverso from '../img/id-do-back.png';
import selfie from '../img/selfie2x.png';




function Documentos() {
  const [imagePreview, setImagePreview] = useState(null);

  
  const navigate = useNavigate();

  const avanzarPagina = () => {
    navigate('/ValidarData');
  };

  const retrocederPagina = () => {
    navigate(-1); // Navegar hacia atrás usando -1
  };


  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Leer la imagen seleccionada como URL de datos
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      // Limpiar la vista previa si se deselecciona la imagen
      setImagePreview(null);
    }
  };

  const [imagePreview2, setImagePreview2] = useState(null);

  const handleImageUpload2 = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Leer la imagen seleccionada como URL de datos
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview2(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      // Limpiar la vista previa si se deselecciona la imagen
      setImagePreview2(null);
    }
  };

  const [imagePreview3, setImagePreview3] = useState(null);

  const handleImageUpload3 = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Leer la imagen seleccionada como URL de datos
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview3(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      // Limpiar la vista previa si se deselecciona la imagen
      setImagePreview3(null);
    }
  };

  return (
    <div className='container'>
      <div className='image-card-container'>
        <div className="image-card1">
          <div className="image-preview-top1">
            <img src={anverso} alt="anverso1" />
            <p>Imagen Anversa</p>
          </div>
          <input
            type="file"
            accept="image/*"
            id="image-upload1"
            onChange={handleImageUpload}
          />
          {imagePreview && (
            <div className="image-preview1">
              <img src={imagePreview}
                alt="Preview1"
                style={{ maxWidth: '350px', maxHeight: '350px' }} // Ajusta estos valores según tus necesidades 
              />
            </div>
          )}
          {imagePreview ? null : <p>Ningún archivo seleccionado</p>}
          <label htmlFor="image-upload1" className="upload-button1">
            Cargar Imagen
          </label>
        </div>
        <div className="image-card2">
          <div className="image-preview-top2">
            <img src={reverso} alt="reverso2" />
            <p>Imagen Reverso</p>
          </div>
          <input
            type="file"
            accept="image/*"
            id="image-upload2"
            onChange={handleImageUpload2}
          />
          {imagePreview2 && (
            <div className="image-preview2">
              <img src={imagePreview2}
                alt="Preview2"
                style={{ maxWidth: '350px', maxHeight: '350px' }} // Ajusta estos valores según tus necesidades 
              />
            </div>
          )}
          {imagePreview ? null : <p>Ningún archivo seleccionado</p>}
          <label htmlFor="image-upload2" className="upload-button2">
            Cargar Imagen
          </label>
        </div>
        <div className="image-card3">
          <div className="image-preview-top3">
            <img src={selfie} alt="selfie3" />
            <p>Selfie con Documento</p>
          </div>
          <input
            type="file"
            accept="image/*"
            id="image-upload3"
            onChange={handleImageUpload3}
          />
          {imagePreview3 && (
            <div className="image-preview3">
              <img src={imagePreview3}
                alt="Preview3"
                style={{ maxWidth: '350px', maxHeight: '350px' }} // Ajusta estos valores según tus necesidades 
              />
            </div>
          )}
          {imagePreview ? null : <p>Ningún archivo seleccionado</p>}
          <label htmlFor="image-upload3" className="upload-button3">
            Cargar Imagen
          </label>
        </div>

      </div>

      <div className="submit-container">
        <button className="back-button" onClick={retrocederPagina}>
          Volver
        </button>
        <button className="submit-button" onClick={avanzarPagina}>
          Continuar
        </button>
      </div>

    </div>

  );
}

export default Documentos;





