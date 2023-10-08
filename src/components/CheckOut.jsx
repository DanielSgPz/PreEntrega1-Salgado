import { CartContext } from "./CartContext";
import { useContext } from "react";
import React, { Component, useState } from "react"

export default function CheckOut() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [orderId, setOrderId] = useState();
    const [error, setError] = useState("");

    const { cart, tot, clearCart } = useContext(CartContext);

    const handleChange = event => {
        setName(event.target.value)
    }
    const handleChange2 = event => {
        setEmail(event.target.value)
    }
    const handleChange3 = event => {
        setPhone(event.target.value)
    }

    function crearOrden() {

        if (!name || !email || !phone) {
            setError("Por favor, complete todos los campos.");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            setError("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        const items = cart.map(item => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            cant: item.quantity,
            subtotal: item.price * item.quantity
        }));

        const db = getFirestore()
        const order = {
            buyer: { name: name, phone: phone, email: email },
            items: items,
            total: tot
        }

        const ordenesRef = collection(db, "ordenes");

        addDoc(ordenesRef, order).then(
            (result) => {
                setOrderId(result.id);
                clearCart();
            }
        )


    }

    if (orderId) {
        return (<h1>{`Su compra ha sido finalizada. Su ID de pedido es ${orderId}`}</h1>)
    }
    return (

        <div className="container col-4 mt-5 pb-5">
            <h1 className="text-center">Tus Datos</h1>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={crearOrden}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" value={name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={handleChange2} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="telefono" value={phone} onChange={handleChange3} />
                </div>
                <button type="submit" className="btn btn-success col-12 p-2">Confirmar compra</button>
            </form>
        </div>
    );
}