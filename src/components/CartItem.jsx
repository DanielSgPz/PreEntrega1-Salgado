import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function CartItem(key){
    const {removeItem} = useContext(CartContext);

    return(
        <ul>
            <li key={key.id}>{key.title}</li>
            <li>{key.description}</li>
            <li>Cantidad: {key.quantity}</li>
            <li>Precio: {key.price}</li>
            <li>Subtotal: {key.quantity * key.price}</li>
            <li><button onClick={() => removeItem(key.id)}>Eliminar Item</button></li>
        </ul>
    )
}