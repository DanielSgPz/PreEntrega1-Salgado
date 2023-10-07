import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";


export default function Cart() {

    const { cart, clearCart, totQuantity, tot, total, totalCant } = useContext(CartContext);


    if (!totQuantity) {
        return (
            <div className="">
                <h1>No hay productos en el carrito</h1>
                <Link to="/">Volver</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} title={p.title} {...p} />)}
            <h3>Total: $ {tot}</h3>
            <h3>Total unidades: {totQuantity}</h3>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <Link to="/checkout">Finalizar compra</Link>

        </div>

    );
}