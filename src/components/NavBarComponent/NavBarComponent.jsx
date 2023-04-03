import styles from "./NavBarComponent.module.css"
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidgetComponent'
import {ThemeContext} from "../../context/ThemeContext"

// llamar themeContext y ver que onda todo esa movida modo oscuro
export const NavBarComponent = () => {
  
  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext)

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  }
  
  return (
    <header className={styles.navBar} >
        <Link className={styles.title}  to='/' ><h1>MSV Serigrafía</h1></Link>
        <div className = {styles.menu} >
          
          <Link className={styles.list} to='/categoria/Remeras' >Remeras</Link>
          <Link className={styles.list} to='/categoria/Buzos' >Buzos</Link>
          <Link className={styles.list} to='/categoria/Gorras'>Gorras</Link>
          <Link className={styles.list} to='/Contacto' >Contacto</Link>
          
        </div>
            <div>
              <CartWidgetComponent/>
              <button onClick={handleThemeChange}>{isDarkMode ? "light" : "dark"}</button>
            </div>  
    </header>
  )
}
