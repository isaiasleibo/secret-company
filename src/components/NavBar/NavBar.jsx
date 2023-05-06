import React, { useState } from 'react';
import './navBar.css';

// SVG
import { CartIcon } from '../../img/CartIcon';
import { HamburgerMenu } from '../../img/HamburgerMenu';
import { BottomArrow } from '../../img/BottomArrow';

export const NavBar = () => {
    const [mobileProductsActive, SetMPA] = useState("desactivated");

    function changeMPA() {
        if (mobileProductsActive === "desactivated") {
            SetMPA("active");
        } else {
            SetMPA("desactivated");
        }
    }

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

            <div id="mobileHeader">
                <div id="linksContainer">
                    <div className="link">
                        <a href="/">Inicio</a>
                    </div>
                    <div className={`link ${mobileProductsActive}`} onClick={changeMPA}>
                        <p href="/productos/">Productos <BottomArrow /></p>
                    </div>
                    <div id="productOptions" className={mobileProductsActive}>
                        <div className="option">
                            <a href="/productos/hoodies/">Hoodies</a>
                        </div>
                        <div className="option">
                            <a href="/productos/remeras/">Remeras</a>
                        </div>
                        <div className="option">
                            <a href="/productos/">Todos</a>
                        </div>
                    </div>
                    <div className="link">
                        <a href="/contacto/">Contacto</a>
                    </div>
                </div>
            </div>
        </>
    )
}
