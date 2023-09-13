import React from "react";
import { useEffect, useState } from "react";

function cargarDatosDesdeJSON() {
    return new Promise((resolve, reject) => {
        const jsonFile = '/productos.json';

        setTimeout(() => {
            fetch(jsonFile)
                .then((response) => response.json())
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        }, 2000);
    });
}


export default function MockAPI() {

    const [productos, setProductos] = useState([]);


    useEffect(() => {
        cargarDatosDesdeJSON()
            .then((data) => {
                setProductos(data); 
            })
            .catch((error) => {
                console.error('Fallo el archivo JSON:', error);
            });
    }, []);

    if (productos.length===0) {
        return (
            <div className="">
            <img src="ruta/a/tu/imagen-de-carga.gif" alt="Loading..." />
          </div>
            );
    }
    return (
        <div  className="row row-cols-1 row-cols-md-2 g-4 gap-4">
            {productos.map((producto, index) => (

                <div className="card" style={{ width: '18rem' }} key={producto.id}>
                <img src={producto.imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{producto.nombreProducto}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{producto.id}</h6>
                  <p className="card-text">{producto.descripcion}</p>
                  <p className="card-text">{producto.categoria}</p>
                  <p className="card-text">Valor: {producto.precio} USD</p>
                  <a href="#" className="btn btn-primary">Ver</a>
                </div>
              </div>
            ))}
        </div>
    );
}