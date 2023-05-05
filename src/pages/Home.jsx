import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { ImagenPrincipal } from '../components/ImagenPrincipal';
import { ProductosDestacados } from '../components/ProductosDestacados';
import { VerTodos } from '../components/VerTodos';
import { ElegirSección } from '../components/ElegirSección';

export const Home = () => {
  return (
    <>
      <NavBar />
      <ImagenPrincipal />
      <main>
        <ProductosDestacados />
        <VerTodos />
        <ElegirSección />
      </main>
      <Footer />
    </>
  )
}
