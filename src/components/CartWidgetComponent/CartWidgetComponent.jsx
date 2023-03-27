import styles from "./CartWidgetComponent.module.css"
import React from 'react'


export const CartWidgetComponent = () => {
  return (
    <div className = {styles.cartWidget}>
      <div className={styles.cartLenght}>0</div>
      <div> <img className={styles.cartImg} src="../img/cart.png" alt="" /> </div>
    </div>
  )
}
