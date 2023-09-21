import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import productos from "../../productos.json"

function MockAPI(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        resolve(productos);
      } else {
        const productosEncontrados = productos.filter((item) => {
          return item.categoria === id; 
        });
        resolve(productosEncontrados);
      }
    }, 2000);
  });
}

export default function ItemListContainer(props) {

  const [newProductos, setProductos] = useState();
  const { id } = useParams();

    useEffect(() => {
      setProductos(null);
      MockAPI(id).then((res) => setProductos(res));
    }, [id]);

    if (!newProductos) {
      return (
        <div className="text-center">
          <img src="/loading/loader.gif" alt="Loading..." />
        </div>
      );
    }

  return (
    <div>
      <h1 className="mt-3 text-center">{props.greeting}</h1>
      <ItemList productos={newProductos} />
    </div>
  );
}
