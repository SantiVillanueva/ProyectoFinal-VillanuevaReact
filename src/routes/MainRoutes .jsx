import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {ItemDetailsContainer, ItemCategoryContainer, Contacto} from "../pages"
import { NavBarComponent, ItemListContainerComponent } from '../components'

export const MainRoutes  = () => {
  return (
    <Router>
        <NavBarComponent />

        <Routes>
            <Route exact path='/' element={<ItemListContainerComponent/>}/>
            <Route exact path='/item/:id' element={<ItemDetailsContainer/>}/>
            <Route exact path='/categoria/:category' element={<ItemCategoryContainer/>}/>
            <Route exact path='/contacto/' element={<Contacto/>}/>
            
        </Routes>
        
    </Router>
  )
}
