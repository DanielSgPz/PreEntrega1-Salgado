import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


export default function CartWidget(){
    const {totalCant, totQuantity} = useContext(CartContext);

    return (
        <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="badge rounded-pill badge-notification bg-danger">{totalCant}</span>
        </Link>
    );
}