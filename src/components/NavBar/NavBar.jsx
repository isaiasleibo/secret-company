import React from 'react';
import './navBar.css';

// SVG
import { CartIcon } from '../../img/CartIcon';
import { HamburgerMenu } from '../../img/HamburgerMenu';

export const NavBar = () => {
    return (
        <>
            <header>
                <div id="HamburgerMenu">
                    <HamburgerMenu />
                </div>

                <nav id="headerLinks">
                    <div className="link">
                        <a href="/">Inicio</a>
                    </div>
                    <div className="link" id='productsOption'>
                        <a href="/">Productos</a>

                        <div id="productsOptions">
                            <div className="options">
                                <a href="/productos/hoodies/">Hoodies</a>
                                <a href='/productos/remeras/'>Remeras</a>
                                <a href='/productos/'>Todos</a>
                            </div>
                        </div>
                    </div>
                    <div className="link">
                        <a href="/contacto">Contacto</a>
                    </div>
                </nav>
                <div id="logoContainer">
                    <img src={require('../../img/logo.png')} alt="Logo" />
                </div>
                <div id="cartIconContainer">
                    <div id="cartIcon">
                        <CartIcon />
                    </div>
                    <div id="cartBubble"></div>
                </div>
            </header>
        </>
    )
}
