import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import ItemList from "./ItemList";



export default function ItemListContainer(props) {

  const [newProductos, setProductos] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
  const database = getFirestore();
  const productsRef = collection(database, "productos");

  if(!id){
    getDocs(productsRef).then((snapshot) => {
      if(snapshot.size !== 0){
          const sortedCateg = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          sortedCateg.sort((a, b) => a.nombreProducto.localeCompare(b.nombreProducto));
          setProductos(sortedCateg);
      }
  })
  }
  else{
    const db = getFirestore();
    const q = query(collection(db, "productos"), where("categoria", "==", id));

    getDocs(q).then((snapshot) => {
      if(snapshot.size !== 0){
        const sortedCateg = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        sortedCateg.sort((a, b) => a.id - b.id); 
        setProductos(sortedCateg);
      }else{
          console.log("No se encontro datos");
      }})

  }
  }, [id]);  

    if (newProductos.length == 0) {
      return (
        <div className="text-center">
          <img src="/loading/loader.gif" alt="Loading..." />
        </div>
      );
    }

  return (
    <div>
      <h1 className="mt-3 text-center">{props.greeting}</h1>
      <ItemList productos={newProductos} />
    </div>
  );
}
