import React from "react";
import { useParams } from "react-router-dom";
import productos from "../../productos.json";


export default function Item() {
    
    const { id } = useParams();
    const productoDetalle = productos.find((producto) => producto.id === id);
    
    return (
        <section style={{backgroundColor: "#eee"}}>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <div className="card text-black">
                            <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                            <img src={productoDetalle.imagen}
                                className="card-img-top" alt={productoDetalle.nombreProducto} />
                            <div className="card-body">
                                <div className="text-center">
                                    <h5 className="card-title">{productoDetalle.nombreProducto}</h5>
                                    <p className="text-muted mb-4">{productoDetalle.descripcion}</p>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <span>Tipo: </span><span>{productoDetalle.categoria} </span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                    <span>Precio</span><span>$ {productoDetalle.precio} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}