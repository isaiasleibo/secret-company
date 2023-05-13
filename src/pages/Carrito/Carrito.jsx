import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import ProductList from '../../database/connectDatabase';
import './carrito.css';

const Carrito = () => {
  const productos = ProductList();

  return (
    <>
      <NavBar />

      <div id="carritoContainer">
        <h1>Carrito</h1>

        <div id="carrito">
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Carrito