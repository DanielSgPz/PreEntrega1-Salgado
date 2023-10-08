import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function CartItem(product) {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nombre del Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Subtotal</th>
                                <th>Eliminar Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={product.product.imagen} alt={product.product.nombreProducto} className="img-fluid" style={{ height: "75px" }} />
                                </td>
                                <td>{product.product.nombreProducto}</td>
                                <td>{product.product.quantity}</td>
                                <td>${product.product.precio}</td>
                                <td>${product.product.quantity * product.product.precio}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => removeItem(product.product.id)}>Eliminar Item</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}