import React from 'react';
import { NavBar } from '../components/NavBar';
import { ImagenPrincipal } from '../components/ImagenPrincipal';
import { ProductosDestacados } from '../components/ProductosDestacados';
import { VerTodos } from '../components/VerTodos';

export const Home = () => {
  return (
    <>
      <NavBar />
      <ImagenPrincipal />
      <main>
        <ProductosDestacados />
        <VerTodos />
      </main>
    </>
  )
}
