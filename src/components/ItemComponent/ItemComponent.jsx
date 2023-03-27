import React from 'react';
import { productsData } from '../../json';
import { useState } from 'react'
import { Link } from 'react-router-dom';

export const ItemComponent = () => {
  const [items] = useState(productsData);
    return (
      <div className='cardContainer'>
      {items.map(e =>
        <div key={e.id} className= 'product'>
          <span><img className= 'productImg' src={e.imagen} alt="" /></span>
          <div className='productInfo'>
            <span >{e.modelo}</span>
            <span> $ {e.precio}</span>
            <Link className='link' to={`/item/${e.id}`} >Detalles del producto</Link>
          </div>

          
        </div>
      )}
    </div>
    );
  };