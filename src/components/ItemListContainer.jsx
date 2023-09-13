import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    return (
      <div>
        <h1 className="mt-3 text-center">{greeting}</h1>
        <ItemList/>
      </div>
    );
  };
  
  export default ItemListContainer;