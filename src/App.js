// WARNING in ./node_modules/react-router-dom/dist/index.js Module Warning (from ./node_modules/source-map-loader/dist/cjs.js): Failed to parse source map from 'index.js.map': SyntaxError: Unexpected end of JSON input

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Productos } from './pages/Productos';
import { Error404 } from './pages/Error404/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productos/:category/" element={<Productos />} />
        <Route exact path="/productos/" element={<Productos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
