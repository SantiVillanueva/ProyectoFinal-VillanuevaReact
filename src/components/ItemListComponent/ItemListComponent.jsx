import React from 'react'
import { ItemComponent } from '../ItemComponent/ItemComponent';
import {collection, getDocs, getFirestore } from "firebase/firestore";

export const ItemListComponent = () => {
  const [productsData, setProductsData] = React.useState([]);
  //console.log(productsData); aca si funciona

React.useEffect (()=>{
  const db = getFirestore();
  const itemsCollection = collection(db, "products");

  getDocs(itemsCollection)
    .then((products) => {
      if(products.length === 0){
        console.log("no products")
      } 
    
      setProductsData (
        products.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      
    }) 
    .catch (err => console.log (err))
    .then(() => {
      console.log(productsData); //no funciona revisar

    });
}, []);

  return (
    <div >
      {productsData.map((producto) => (
        <ItemComponent key={producto.id} producto = {producto} />
      ))}
    </div>
    
  );
};