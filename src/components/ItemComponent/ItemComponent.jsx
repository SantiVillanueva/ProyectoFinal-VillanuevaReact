import React from 'react';
import { Link } from 'react-router-dom';


export const ItemComponent = ({producto}) => {
 
    return (
      <div className='cardContainer'>
   
        <div key={producto.id} className= 'product'>
          <span><img className= 'productImg' src={producto.imagen} alt="" /></span>
          <div className='productInfo'>
            <span >{producto.modelo}</span>
            <span> $ {producto.precio}</span>
            <Link className='link' to={`/item/${producto.id}`} >Detalles del producto</Link>
          </div>
        
          
        </div>

    </div>
    );
  };