import { useState } from "react";

export default function ItemCount({ stock, inicial, onAdd }) {
    const [cantidad, setCantidad] = useState(inicial);

    const incremento = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const decremento = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className='col-auto'>
                    <button className='btn btn-secondary' onClick={decremento}>-</button>
                </div>
                <div className='col-auto '>
                    <h3 className='mx-3'>{cantidad}</h3>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-secondary' onClick={incremento}>+</button>
                </div>
            </div>
            <div className='mt-3'>
                <div className='col'>
                    <button className='btn btn-success' onClick={() => onAdd(cantidad)} disabled={!stock}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
            </>
        /* 
               <div className='Contador'>
                   <div className='Controles'>
                       <button onClick={decremento}> - </button>
                       <h3>{cantidad}</h3>
                       <button onClick={incremento}> + </button>
                   </div>
                   <div >
                       <button className='escalar' onClick={() => onAdd(cantidad)} disabled={!stock}>
                           Agregar al carrito
                       </button>
                   </div>
              </div> */
    )
}