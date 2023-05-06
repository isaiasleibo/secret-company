import React, { useState, useEffect } from 'react';
import './productosSection.css';
import productos from '../../../json/products.json';
import { SearchIcon } from '../../../img/SearchIcon';

export const ProductosSection = ({ section, title }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Identificar sección 
  useEffect(() => {
    if (section === "") {
      setItems(productos);
    } else {
      const itemsFiltrados = productos.filter(item => item.tipo === section);
      setItems(itemsFiltrados);
    }
  }, [section]);

  // Filtros
  const filterHigherLower = () => {
    const itemsOrdenados = [...items].sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    setItems(itemsOrdenados);
  };

  const filterLowerHigher = () => {
    const itemsOrdenados = [...items].sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    setItems(itemsOrdenados);
  };

  // Función para manejar el cambio en el input de búsqueda
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    const itemsFiltrados = productos.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setItems(itemsFiltrados);
  };

  // Estructura
  return (
    <>
      <div id="productsFilterContainer">
        <div id="inputContainer">
          <input type="text" placeholder="Buscar" value={searchTerm} onChange={handleSearchTermChange} />
          <SearchIcon />
        </div>
        <div id="priceFilter">
          <button onClick={filterHigherLower}>Mayor a menor</button>
          <button onClick={filterLowerHigher}>Menor a mayor</button>
        </div>
      </div>

      <div id="productosSection">
        <h2>Productos</h2>
        <h1>{title}</h1>

        <div id="productos">
          {
            items.map(item => {
              return (
                <div className="producto" key={item.id}>
                  <img src={require(`../../../img/products/${item.img[0]}.png`)} className='defaultImg' alt="" />
                  <img src={require(`../../../img/products/${item.img[1]}.png`)} className='detalle' alt="" />
                  <h3>{item.name}</h3>
                  <h4>{item.price}</h4>
                  <div id="buttonContainer">
                    <button>Ver Producto</button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
};
