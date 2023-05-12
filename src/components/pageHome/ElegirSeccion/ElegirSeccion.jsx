import React from 'react';
import './elegirSeccion.css';

export const ElegirSeccion = () => {
  return (
    <div id="elegirSeccion">
      <a href="/productos/hoodies/">
        <div className="section">
          <img src={require('../../../img/hoodies.webp')} alt="" />
          <p>HOODIES</p>
        </div>
      </a>
      <a href="/productos/remeras/">
        <div className="section">
          <img src={require('../../../img/remeras.webp')} alt="" />
          <p>REMERAS</p>
        </div>
      </a>
    </div>
  )
}
