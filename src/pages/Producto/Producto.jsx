import React, { useState, useEffect, useRef } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Error404 } from '../Error404/Error404';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';
import './producto.css';

export const Producto = () => {
    const [productB, setProductB] = useState(false);
    const [product, setProduct] = useState({});
    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cachedProducts = JSON.parse(localStorage.getItem('productosCache'));
        if (cachedProducts) {
            setProducts(cachedProducts);
            setLoading(false);
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
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (productos.length > 0) {
            productos.map(item => {
                if (window.location.pathname === `/producto/${item.id}/` || window.location.pathname === `/producto/${item.id}`) {
                    setProduct(item);
                    setProductB(true);
                }

                return null;
            })
        }
    }, [productos])

    const talleS = useRef();
    const talleM = useRef();
    const talleL = useRef();
    const [TSClass, setTSC] = useState("active");
    const [TMClass, setTMC] = useState("desactive");
    const [TLClass, setTLC] = useState("desactive");

    function changeClass(talle) {
        setTSC("desactive");
        setTMC("desactive");
        setTLC("desactive");

        if (talle === talleS) {
            setTSC("active");
        } else if (talle === talleM) {
            setTMC("active");
        } else if (talle === talleL) {
            setTLC("active");
        }
    }


    if (loading) {
        return (
            <>
                <NavBar />
                <p id='loading'>Estamos cargando el producto...</p>
                <Footer />
            </>
        )
    } else if (productB) {
        return (
            <>
                <NavBar />

                <div id="productoContainer">
                    <div id="producto">
                        <img src={require(`../../img/products/${product.img[0]}`)} alt="" />
                        <div id="info">
                            <h1>{product.name}</h1>
                            <h2>{product.price}</h2>
                            <div id="tallesContainer">
                                <p id='tallesTitle'>Talles:</p>
                                <div id="talles">
                                    <button ref={talleS} className={TSClass} onClick={() => { changeClass(talleS) }}>
                                        <p>S</p>
                                    </button>
                                    <button ref={talleM} className={TMClass} onClick={() => { changeClass(talleM) }}>
                                        <p>M</p>
                                    </button>
                                    <button ref={talleL} className={TLClass} onClick={() => { changeClass(talleL) }}>
                                        <p>L</p>
                                    </button>
                                </div>
                            </div>

                            <button id='addToCart'>
                                <p>Añadir al carrito</p>
                            </button>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    } else {
        return <Error404 />;
    }
}
