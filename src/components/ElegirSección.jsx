import React from 'react';
import '../css/elegirSección.css';

export const ElegirSección = () => {
  return (
    <div id="elegirSeccion">
        <div className="section">
            <img src={require('../img/hoodies.png')} alt="" />
            <p>HOODIES</p>
        </div>
        <div className="section">
            <img src={require('../img/remeras.png')} alt="" />
            <p>REMERAS</p>
        </div>
    </div>
  )
}
