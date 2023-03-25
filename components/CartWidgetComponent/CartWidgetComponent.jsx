import styles from "./CartWidgetComponent.module.css"
import React from 'react'
import cart from "../../img/cart.png"


export const CartWidgetComponent = () => {
  return (
    <div className = {styles.cartWidget}>
      <div className={styles.cartLenght}>0</div>
      <div> <img className={styles.cartImg} src={cart} alt="" /> </div>
    </div>
  )
}
