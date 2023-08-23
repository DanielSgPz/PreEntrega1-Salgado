import React from "react";


const ItemListContainer = ({ greeting }) => {
    return (
      <div>
        <h1 className="mt-3 text-center">{greeting}</h1>
      </div>
    );
  };
  
  export default ItemListContainer;