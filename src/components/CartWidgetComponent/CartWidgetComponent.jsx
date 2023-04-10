import styles from "./CartWidgetComponent.module.css"
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context"
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
export const CartWidgetComponent = () => {
  const {itemCount} = useContext(CartContext);
  
  return (
    <Link to= "/Cart">
      <div className = {styles.cartWidget}>
        <span className={styles.cartNum}>{itemCount.qtyItems}</span>
        <div> <ShoppingCartTwoToneIcon/> </div> 
      </div>
    </Link>
  )
}


