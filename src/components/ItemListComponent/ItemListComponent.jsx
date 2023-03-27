import React from 'react'
import { ItemComponent } from '../ItemComponent/ItemComponent';
import { productsData } from '../../json';


export const ItemListComponent = () => {
  return (
    <div >
      {productsData.map((producto) => (
        <ItemComponent key={producto.id} producto = {producto} />
      ))}
    </div>
    
  );
};