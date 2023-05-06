import React, { useState, useEffect } from 'react';
import { Error404 } from './Error404/Error404';
import { NavBar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer/Footer';
import { ProductosSection } from '../components/pageProductos/ProductosSection/ProductosSection';

export const Productos = () => {
    const [section, setVariable] = useState("");
    const [haySection, setSection] = useState(false);
    const [title, setTitle] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {

        // Identificar ruta
        function checkSection() {
            if (window.location.pathname === "/productos/hoodies/" || window.location.pathname === "/productos/hoodies") {
                setVariable("hoodie");
                setSection(true);
                setTitle("Hoodies");
                return;
            } 
            
            if (window.location.pathname === "/productos/" || window.location.pathname === "/productos") {
                setVariable("");
                setSection(true);
                setTitle("Todos");
                return;
            }

            setError(true);
        }

        checkSection();
    }, [setVariable, setSection]);

    if (error) {
        return <Error404 />;
    } else if (haySection) {
        return (
            <>
                <NavBar />
                <main>
                    <ProductosSection section={section} title={title} />
                </main>
                <Footer />
            </>
        );
    }
}
