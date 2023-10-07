import React from "react";
import Item from "./Item";


export default function ItemList({productos}) {
  
    return (
        <>
            <div  className="row row-cols-1 row-cols-md-2 g-4 gap-4">
            {productos.map((producto) => (
              <Item key={producto.id} producto= {producto}/>
            ))}
        </div>
        </>
    );
}