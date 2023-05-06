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
        if (window.location.pathname.includes("productos/hoodies")) {
            setVariable("hoodie");
            setSection(true);
            setTitle("Hoodies");
        } else {
            setError(true);
        }
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
    } else {
        console.error("Error 404");
    }
}
