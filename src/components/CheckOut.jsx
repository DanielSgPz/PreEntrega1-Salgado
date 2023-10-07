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

  function crearOrden(){

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
      buyer: {name: name, phone: phone, email: email},
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

  if(orderId){
    return (<h1>{`Su compra ha sido finalizada. Su ID de pedido es ${orderId}`}</h1>)
  }


    return (
        <div>
            <h1>Tus Datos</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} >
                <label>Nombre
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <label>Email
                    <input type="email" value={email} onChange={handleChange2} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" />
                </label>
                <label>Telefono
                    <input type="text" value={phone} onChange={handleChange3} />
                </label>
                <button onClick={crearOrden}>Confirmar compra</button>
            </form>
        </div>
    );
}