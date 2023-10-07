import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where } from "firebase/firestore"



export default function ItemDetailContainer(props) {
    const [prodId, setProductId] = useState();
    const { id } = useParams();

    
  useEffect(() => {
    const database = getFirestore();
    const q = query(collection(database, "productos"), where("id", "==", id));


    getDocs(q).then((snapshot) => {
      if(snapshot.size !== 0){
        const item = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductId(item);
      }})

}, [id]);  


    if (prodId == null) {
        return (
            <div className="text-center">
                <img src="/loading/loader.gif" alt="Loading..." />
            </div>
        );
    }
    return (
        <main>
            <h1>{props.greeting}</h1>
            <ItemDetail producto={prodId}></ItemDetail>
        </main>
    )
}