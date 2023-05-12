import React, { useEffect, useState } from 'react';
import './productosDestacados.css';
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const ProductosDestacados = () => {
    const [productos, setProducts] = useState([]);

    useEffect(() => {
        const cachedProducts = JSON.parse(localStorage.getItem('productosCache'));
        if (cachedProducts) {
            setProducts(cachedProducts);
        }

        const db = getFirestore();
        const query = collection(db, "products");

        getDocs(query).then((querySnapshot) => {
            const results = [];
            querySnapshot.forEach((doc) => {
                results.push(doc.data());
            });

            localStorage.setItem('productosCache', JSON.stringify(results));

            setProducts(results);
        });
    }, []);

    return (
        <div id="productosDestacados">
            <h2>Productos destacados</h2>

            <div id='productos'>
                {
                    productos.map(item => {
                        if (item.destacado) {
                            return (
                                <div className="producto" key={item.id}>
                                    <a href={`/producto/${item.id}`}>
                                        <img src={require(`../../../img/products/${item.img[0]}`)} className='defaultImg' alt="" />
                                        <img src={require(`../../../img/products/${item.img[1]}`)} className='detalle' alt="" />
                                        <h3>{item.name}</h3>
                                        <h4>{item.price}</h4>
                                        <div id="buttonContainer">
                                            <button>Ver Producto</button>
                                        </div>
                                    </a>

                                </div>
                            )
                        }

                        return null;
                    })
                }
            </div>
        </div>
    )
}
