import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const CartWidget = () => {
    return (
        <>
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </>
    );
}

export default CartWidget;