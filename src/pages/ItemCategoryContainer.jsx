import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { productsData } from '../json'
import { Link } from 'react-router-dom'

export const ItemCategoryContainer = () => {

  const { category } = useParams();
  const [items] = useState(productsData);
  const result = items.filter(e => e.categoria === category);
  return (
    <div className='cardContainer'>
      {
        result.map(e =>
          <div key={e.id} className= 'product'>
          <span><img className= 'productImg' src={e.imagen} alt=""/></span>
          <div className='productInfo'>
            <span>{e.modelo}</span>
            <span>$ {e.precio}</span>
            <Link className='link' to={`/item/${e.id}`}>Detalles del producto</Link>
          </div>
        </div>
        )
      }
    </div>
  )
}