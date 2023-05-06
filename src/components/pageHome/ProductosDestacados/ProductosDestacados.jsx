import React from 'react';
import productos from '../../../json/products.json';
import './productosDestacados.css';


export const ProductosDestacados = () => {
    return (
        <div id="productosDestacados">
            <h2>Productos destacados</h2>

            <div id='productos' items={4}>
                {
                    productos.map(item => {
                        if (item.destacado) {
                            return (
                                <div className="producto" key={item.id}>
                                    <img src={require(`../../../img/products/${item.img[0]}.png`)} className='defaultImg' alt="" />
                                    <img src={require(`../../../img/products/${item.img[1]}.png`)} className='detalle' alt="" />
                                    <h3>{item.name}</h3>
                                    <h4>{item.price}</h4>
                                    <div id="buttonContainer">
                                        <button>Ver Producto</button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
