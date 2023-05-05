import React from 'react';
import '../css/navBar.css';

// SVG
import { CartIcon } from '../img/CartIcon';

export const NavBar = () => {
    return (
        <header>
            <nav id="headerLinks">
                <div className="link">
                    <a href="/">Inicio</a>
                </div>
                <div className="link">
                    <a href="#">Productos</a>
                </div>
                <div className="link">
                    <a href="#">Contacto</a>
                </div>
            </nav>
            <div id="logoContainer">
                <img src={require('../img/logo.png')} alt="Logo" />
            </div>
            <div id="cartIconContainer">
                <div id="cartIcon">
                    <CartIcon />
                </div>
                <div id="cartBubble"></div>
            </div>
        </header>
    )
}
