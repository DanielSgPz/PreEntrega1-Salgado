import React from "react";

import { useContext, useState } from "react";
import ItemQuantity from './ItemQuantity';
import { Link } from 'react-router-dom';
import { CartContext } from "./CartContext";


export default function ItemDetail({ producto }) {
    const {id, nombreProducto, imagen, descripcion, categoria, precio } = producto[0];

    const [cantidadAdd, setCantidadAdd] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (cantidadAdd) => {
        setCantidadAdd(cantidadAdd);
        const item = {id, nombreProducto, imagen, descripcion, categoria, precio};
        addItem(item, cantidadAdd);
    }

        return (

            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            <div className="card text-black">
                                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                                <img src={imagen}
                                    className="card-img-top" alt={nombreProducto} />
                                <div className="card-body">
                                    <div className="text-center">
                                        <h5 className="card-title">{nombreProducto}</h5>
                                        <p className="text-muted mb-4">{descripcion}</p>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <span>Tipo: </span><span>{categoria} </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between font-weight-bold mt-4">
                                        <span>Precio</span><span>$ {precio} </span>
                                    </div>
                                    <div className="text-center">
                                        {
                                            cantidadAdd > 0 ? (<Link to="/cart"><button className='btn btn-success' to="/cart" >Terminar Compra</button></Link>) :
                                                (<ItemQuantity inicial={1} stock={1000} onAdd={(cantidad) => handleOnAdd(cantidad)} />)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }