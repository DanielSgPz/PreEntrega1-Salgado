import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import emptyCartSvg from "../assets/img/utilities/cart-cross.svg";

export default function Cart() {

    const { cart, clearCart, totQuantity, tot } = useContext(CartContext);

    if (!totQuantity) {
        return (
            <div className="text-center flex-col flex-column d-flex align-items-center">
                <h1>No hay productos en el carrito</h1>
                <img src={emptyCartSvg} alt="Empty Cart" style={{ height: "250px" }} />
                <Link className="btn btn-success col-1" to="/">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container pt-3 pb-5">
            <div className="text-center">
                {cart.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </div>

            <div className="col-12">
                <div className="card mb-4">
                    <div className="card-header py-3">
                        <h5 className="mb-0">Resumen de compra</h5>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Cantidad de productos
                                <span>{totQuantity}</span>
                            </li>                          
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>Total</strong>
                                </div>
                                <span><strong>$ {tot}</strong></span>
                            </li>
                        </ul>

                        <button className="btn btn-secondary btn-lg float-start" onClick={() => clearCart()}>Limpiar Carrito</button>

                        <Link to="/checkout" className="btn btn-primary btn-lg btn-block float-end">Finalizar compra</Link>

                    </div>
                </div>
            </div>
        </div>
    );
}