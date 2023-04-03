import React, { useContext } from 'react'
import { CartContext } from '../../context';
import { useParams } from 'react-router-dom';

export const CartButtons = () => {
const {itemCount, setItemCount} = useContext(CartContext);
const[state, setState] = React.useState(1);
const {productId} = useParams();

const handleMoreClick = () => {
    if(state === 9)return; 
    setState (state + 1);
}
const handleLessClick = () => {
    if(state === 1)return; 
    setState (state - 1);
    
}

const handleOnChange  = (e) => {
    console.log(e.target.value)
    
}

const addToCar = () =>{
    const existingProduct = itemCount.products.find(
        (p)=> p.productId === productId
        );

    if(existingProduct) {
        existingProduct.qty += state;
    }else{
        const newProduct ={
            productId,
            qty: state,
        }
        setItemCount((prevState)=>({
            qtyItems: prevState.qtyItems + state,
            products: [...prevState.products, newProduct],
          
        }))
    }
   
}

return (
    <div>
    <button onClick = {handleLessClick}>sacar</button>
    <input onChange={handleOnChange} placeholder= "agregar" value={state} readOnly/>
    <button onClick={handleMoreClick}>agregar</button>
    <button onClick={addToCar}>Agregar al carrito</button>
    </div>
  )
}
