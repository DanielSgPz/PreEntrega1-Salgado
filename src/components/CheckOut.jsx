import { CartContext } from "./CartContext";
import { useContext } from "react";
import React, { Component, useState, useEffect } from "react"
import { collection, getFirestore, addDoc } from "firebase/firestore"

export default function CheckOut() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [orderId, setOrderId] = useState();
    const [error, setError] = useState("");

    const { cart, tot, clearCart } = useContext(CartContext);
    console.log(cart);

    const handleChange = event => {
        setName(event.target.value)
    }
    const handleChange2 = event => {
        setEmail(event.target.value)
    }
    const handleChange3 = event => {
        setPhone(event.target.value)
    }

    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [logData, setLogData] = useState(null);

    useEffect(() => {
        if (cart.length > 0) {
            const items = cart.map(item => ({
                id: item.id,
                nombreProducto: item.nombreProducto,
                descripcion: item.descripcion,
                precio: item.precio,
                quantity: item.quantity,
                subtotal: item.precio * item.quantity
            }));
            setLogData(items);
        }
    }, [cart]);

    function crearOrden(event) {

        event.preventDefault();


        if (!name || !email || !phone) {
            setError("Por favor, complete todos los campos.");
            return;
        }


        if (!emailPattern.test(email)) {
            setError("Por favor, ingrese un correo electrónico válido.");
            return;
        }
        console.log("antes de agregar: ", logData);
        const items = logData.map(item => ({
            id: item.id,
            nombreProducto: item.nombreProducto,
            descripcion: item.descripcion,
            precio: item.precio,
            quantity: item.quantity,
            subtotal: item.precio * item.quantity
        }));

        console.log("agregado los items: ", items);

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
    useEffect(() => {
        if (logData) {
            console.log("Datos del carrito:", logData);
        }
    }, [logData]);

    if (orderId) {
        return (
            <div className="container col-4 mt-5 pb-5">
                <div className="text-center">
                    <h1 className="mt-3">Compra Exitosa!</h1>
                    <h3>
                        Su compra ha sido finalizada. Su ID de pedido es {orderId}
                    </h3>
                </div>
            </div>
        );
    }
    return (

        <div className="container col-4 mt-5 pb-5">
            <h1 className="text-center">Tus Datos</h1>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={(event) => crearOrden(event)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" value={name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={handleChange2} />
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