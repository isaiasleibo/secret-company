import React from 'react';
import './elegirSeccion.css';

export const ElegirSeccion = () => {
  return (
    <div id="elegirSeccion">
      <a href="/hoodies">
        <div className="section">
          <img src={require('../../../img/hoodies.png')} alt="" />
          <p>HOODIES</p>
        </div>
      </a>
      <a href="/">
        <div className="section">
          <img src={require('../../../img/remeras.png')} alt="" />
          <p>REMERAS</p>
        </div>
      </a>
    </div>
  )
}
