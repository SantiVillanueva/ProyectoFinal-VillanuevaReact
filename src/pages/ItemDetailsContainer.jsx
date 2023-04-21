import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { CartButtons } from '../components'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import Loader from '../components/Loader/Loader'

const styles ={
  product: {
      display: "flex",
      flexDireccion: "row",
      margin: "60px",
      padding: "20px",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:  "#8cadc0",
      borderRadius: "1rem",
  },
  productImg: {
      display: "flex",
      width: "50%",
      height: "50%"
      
  },
  productInfo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      borderRadius: "1rem",
      backgroundColor: "#989DA3",
      boxShadow: "1px 1px 3px black",
      width: "40%",
      height: "40%",
      fontSize: "20px"
  },
  productTitle: {
    fontSize: "30px",
    padding: "12px",
  },
  productPrice: {
    margin: "10px",
    fontSize: "22px"
  }
}
export const ItemDetailsContainer = () => {
  const [loading, setLoading] = React.useState(true);
  const { productId } = useParams();
  const [productData, setProductData] = React.useState({});
  
  React.useEffect(()=>{
    const db = getFirestore();
    const docRef = doc(db, "products", productId);
    
    getDoc(docRef)
    .then((product) => {
      if(!product.exists()){
        console.log("no existe el producto")
      }
      setProductData({ id: product.id, ...product.data() });

    })
    .catch(err => console.log(err))
    .then (()=> {setLoading(false)})
  }, [productId])


  return loading ? (
   <Loader/>
  ) : ( 
    <div style={styles.product}>
      
        <div><img  src={productData.imagen} alt="" /></div>
        <div style={styles.productInfo}>
          <span style={styles.productTitle}>{productData.modelo}</span>
          <span>{productData.detalle}</span>
          <span style={styles.productPrice}>Precio: $ {productData.precio}</span>
          <CartButtons />
          <span><Link className='link' to={`/`}>Volver atrás</Link></span>
        </div>
     
    </div>
  )
}