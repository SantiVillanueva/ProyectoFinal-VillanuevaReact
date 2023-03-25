import styles from "./NavBarComponent.module.css"
import React from 'react'
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidgetComponent'

export const NavBarComponent = () => {
   

  



  return (
    <header className={styles.navBar} >
        <h1 className={styles.title}> MSV Serigrafía</h1>
        <ul className = {styles.menu} >
            <li className={styles.list}><a className={styles.menuLink} href="./">Remeras</a></li>
            <li className={styles.list}><a className={styles.menuLink} href="./">Buzos</a></li>
            <li className={styles.list}><a className={styles.menuLink} href="./">Gorras</a></li>
            <li className={styles.list}><a className={styles.menuLink} href="./">Contacto</a></li>
            <li className={styles.list}><a className={styles.menuLink} href="./">Nosotros</a></li>
        </ul>
            <CartWidgetComponent/>
    </header>
  )
}
