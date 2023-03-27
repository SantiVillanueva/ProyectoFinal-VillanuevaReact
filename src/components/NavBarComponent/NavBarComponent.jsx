import styles from "./NavBarComponent.module.css"
import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidgetComponent'


export const NavBarComponent = () => {
   
  return (
    <header className={styles.navBar} >
        <Link className={styles.title}  to='/' ><h1>MSV Serigrafía</h1></Link>
        <div className = {styles.menu} >
          
          <Link className={styles.list} to='/categoria/Remeras' >Remeras</Link>
          <Link className={styles.list} to='/categoria/Buzos' >Buzos</Link>
          <Link className={styles.list} to='/categoria/Gorras'>Gorras</Link>
          <Link className={styles.list} to='/Contacto' >Contacto</Link>
          
        </div>
            <CartWidgetComponent/>
    </header>
  )
}
