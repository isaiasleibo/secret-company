import React from 'react';
import '../css/imagenPrincipal.css';

export const ImagenPrincipal = () => {
  return (
    <div id="mainImg">
      <img src={require('../img/imagen-reepmlazable.webp')} alt="Imagen reemplazable" />
    </div>
  )
}
