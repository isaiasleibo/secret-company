import React from 'react';
import './footer.css';

export const Footer = () => {
    return (
        <footer>
            <div id="topFooter">
                <nav>
                    <p className='footerTitle'>Navegación</p>
                    <div id="links">
                        <a href="/">Inicio</a>
                        <a href="/productos/">Productos</a>
                        <a href="/contacto">Contacto</a>
                    </div>
                </nav>

                <div id="contacto">
                    <p className='footerTitle'>Contáctanos</p>
                    <ul>
                        <li>secretcompanyarg@gmail.com</li>
                        <li>+54 3516 06-9608</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
