import React from 'react'
import { ItemComponent } from '../ItemComponent/ItemComponent';
import {collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from '../Loader/Loader';

export const ItemListComponent = () => {
  const [productsData, setProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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
      setLoading(false);

    });
}, []);

  return loading ? (
    <Loader/>
  ) : (
    <div className='cardContainer'>
      {productsData.map((producto) => (
        <ItemComponent key={producto.id} producto = {producto} />
      ))}
    </div>
    
  );
};