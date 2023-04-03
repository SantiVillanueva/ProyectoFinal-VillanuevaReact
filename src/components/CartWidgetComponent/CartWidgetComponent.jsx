import styles from "./CartWidgetComponent.module.css"
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context"

export const CartWidgetComponent = () => {
  const {itemCount} = useContext(CartContext);
  
  return (
   
    <div className = {styles.cartWidget}>
      <span className={styles.cartLenght}>{itemCount.qtyItems}</span>
      <Link to= "/Cart"> <div> <img className={styles.cartImg} src="../img/cart.png" alt="" /> </div> </Link>
    </div>
    
  )
}


