import React from 'react';
import '../css/footer.css';

export const Footer = () => {
    const now = new Date();
    const currentYear = now.getFullYear();

    return (
        <footer>
            <div id="topFooter">
                <nav>
                    <p className='footerTitle'>Navegación</p>
                    <div id="links">
                        <a href="/">Inicio</a>
                        <a href="/">Productos</a>
                        <a href="/">Contacto</a>
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
            <p id='copy'>Secret Company - {currentYear}</p>
        </footer>
    )
}
