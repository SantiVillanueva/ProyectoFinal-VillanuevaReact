import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {ItemDetailsContainer, ItemCategoryContainer, Cart, Admin, Checkout} from "../pages"
import { NavBarComponent, ItemListComponent } from '../components'

export const MainRoutes  = () => {
  return (
    <Router>
        <NavBarComponent />

        <Routes>
            <Route exact path='/' element={<ItemListComponent/>}/>
            <Route exact path='/item/:productId' element={<ItemDetailsContainer/>}/>
            <Route exact path='/categoria/:category' element={<ItemCategoryContainer/>}/>
            <Route exact path='/Checkout/' element={<Checkout/>}/>
            <Route exact path='/cart/' element={<Cart/>}/>
            <Route exact path='/admin/' element={<Admin />}/>
            
        </Routes>
        
    </Router>
  )
}