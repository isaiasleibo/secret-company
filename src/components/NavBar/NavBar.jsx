import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

// SVG
import { CartIcon } from '../../img/CartIcon';
import { HamburgerMenu } from '../../img/HamburgerMenu';
import { BottomArrow } from '../../img/BottomArrow';
import { CloseMenu } from '../../img/CloseMenu';

export const NavBar = () => {
    const [mobileProductsActive, SetMPA] = useState("desactivated");
    const MHButton = useRef();
    const [openMenuStyle, setOpenMenuStyle] = useState("hideMobileHeader");

    useEffect(() => {
        const buttonRef = MHButton.current;
      
        function handleClick() {
          setOpenMenuStyle(prevOpenMenuStyle => {
            if (prevOpenMenuStyle === "showMobileHeader") {
              return "hideMobileHeader";
            } else {
              return "showMobileHeader";
            }
          });
      
          buttonRef.removeEventListener('click', handleClick);
      
          setTimeout(() => {
            buttonRef.addEventListener('click', handleClick);
          }, 500);
        }
      
        buttonRef.addEventListener('click', handleClick);
      
        return () => {
          buttonRef.removeEventListener('click', handleClick);
        };
      }, []);
      
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
                <div id="HamburgerMenu" ref={MHButton}>
                    {openMenuStyle === "hideMobileHeader" ? <HamburgerMenu /> : <CloseMenu />}
                </div>

                <nav id="headerLinks">
                    <div className="link">
                        <Link to="/">Inicio</Link>
                    </div>
                    <div className="link" id='productsOption'>
                        <Link to="/">Productos</Link>

                        <div id="productsOptions">
                            <div className="options">
                                <Link to="/productos/hoodies/">Hoodies</Link>
                                <Link to='/productos/remeras/'>Remeras</Link>
                                <Link to='/productos/'>Todos</Link>
                            </div>
                        </div>
                    </div>
                    <div className="link">
                        <Link to="/contacto">Contacto</Link>
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

            <div id="mobileHeader" style={{animationName: openMenuStyle}}>
                <div id="linksContainer">
                    <div className="link">
                        <Link to="/">Inicio</Link>
                    </div>
                    <div className={`link ${mobileProductsActive}`} onClick={changeMPA}>
                        <p href="/productos/">Productos <BottomArrow /></p>
                    </div>
                    <div id="productOptions" className={mobileProductsActive}>
                        <div className="option">
                            <Link to="/productos/hoodies">Hoodies</Link>
                        </div>
                        <div className="option">
                            <Link to="/productos/remeras">Remeras</Link>
                        </div>
                        <div className="option">
                            <Link to="/productos/">Todos</Link>
                        </div>
                    </div>
                    <div className="link">
                        <Link to="/contacto/">Contacto</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
