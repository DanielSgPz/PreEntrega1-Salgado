import { Link } from "react-router-dom";


export default function ItemList({productos}) {
  
    return (
        <>
            <div  className="row row-cols-1 row-cols-md-2 g-4 gap-4">
            {productos.map((producto) => (

                <div className="card" style={{ width: '18rem' }} key={producto.id}>
                <img src={producto.imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{producto.nombreProducto}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">{producto.id}</h6>
                  <p className="card-text">{producto.descripcion}</p>
                  <p className="card-text">{producto.categoria}</p>
                  <p className="card-text">Valor: {producto.precio} USD</p>
                  <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver</Link>
                </div>
              </div>
            ))}
        </div>
        </>
    );
}