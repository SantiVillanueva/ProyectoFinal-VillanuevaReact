import styles from "./ItemListContainerComponent.module.css"
import React from 'react'

export const ItemListContainerComponent = (props) => {
  return (
  <div className={styles.itemList}> Buenas {props.greeting}  </div>
  )
}
