import React,{ useRef } from 'react';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import './error404.css';

export const Error404 = () => {
  const footer = useRef();
  const header = useRef();

  return (
    <>
      <NavBar  /> 
      <main id="error404">
        <h1>Error 404</h1>
      </main>
      <Footer />
    </>
  )
}
