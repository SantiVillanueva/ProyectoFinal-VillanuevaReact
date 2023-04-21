import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import { Link } from 'react-router-dom'
import Loader from '../components/Loader/Loader';


export const ItemCategoryContainer = () => {
  const { category } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [productData, setProductData] = useState([]);
  React.useEffect(() =>{
    const db = getFirestore();
    const result = query(
      collection(db, "products"),
      where ("categoria", "==", category),
     
    ) 
    getDocs(result)
    .then(products =>{
      if(products.length === 0){
        console.log("err");
      }
      setProductData(products.docs.map(doc => ({id: doc.id, ...doc.data()})));
    }).catch(err=> console.log(err))
    .then(() => {
      setLoading(false);
    });
  }, [category, setProductData])




  return loading ? (
    <Loader/>
  ) : ( 
    <div className='cardContainer'>
      {
        productData.map(e =>
          <div key={e.id} className= 'product'>
          <span><img className= 'productImg' src={e.imagen} alt=""/></span>
          <div className='productInfo'>
            <span>{e.modelo}</span>
            <span>$ {e.precio}</span>
            <Link className='link' to={`/item/${e.id}`}>Detalles del producto</Link>
          </div>
        </div>
        )
      }
      
    </div>
  )
}