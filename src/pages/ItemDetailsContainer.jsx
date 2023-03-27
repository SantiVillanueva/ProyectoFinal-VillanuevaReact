import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { productsData } from '../json'
export const ItemDetailsContainer = () => {

    const {id} = useParams();
    const [items] = useState(productsData);
    const result = items.find(e => e.id === id);
    const detalle = result.detalle;
    const elementosDetalle = detalle.split(" - ");



  return ( 
    <div className='productDetails'>
      <div key={result.id}>
          <div><img className='productImg' src={result.imagen} alt="" /></div>
          <div  className='productInfo'>
            <span >{result.modelo}</span>
            <span>{elementosDetalle.map((elemento) => (
            <p>{elemento}</p>
          ))}</span>
            <span > Precio: $ {result.precio}</span>
            <span><Link className='link' to={`/`}>Volver atrás</Link></span>
          </div>
    </div>
    </div>
  )
}