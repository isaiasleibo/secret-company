import React from 'react';
import productos from '../json/products.json';
import '../css/productosDestacados.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export const ProductosDestacados = () => {
    const options = {
        items: 4,
        nav: true,
        rewind: true
    };

    return (
        <div id="productosDestacados">
            <h2>Productos destacados</h2>

            <div id='productos' items={4}>
                {
                    productos.map(item => {
                        return (
                            <div className="producto" key={item.id}>
                                <img src={require(`../img/products/${item.img[0]}.png`)} className='defaultImg' alt="" />
                                <img src={require(`../img/products/${item.img[1]}.png`)} className='detalle' alt="" />
                                <h3>{item.name}</h3>
                                <h4>{item.price}</h4>
                                <div id="buttonContainer">
                                    <button>Ver Producto</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
