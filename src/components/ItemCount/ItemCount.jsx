import React, { useContext } from 'react'
import { CartContext } from '../../context';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
const styles = {
  buttons:{
    display: "flex",
    flexDireccion: "row",
    padding: "5px",
    alingItems: "center",
    justifyContent: "center"

  },
  buttonsMoreLess:{
    margin: "10px",
    padding: "6px",
    fontSize: "20px"   

  },
  stateData:{
   fontSize: "25px",
    padding: "12px",
    fontWeight: "bold",
    color: "green"
  },
  add:{
    margin: "10px"
  }
}

export const CartButtons = () => {
    const[state, setState] = React.useState(1);
    const {productId} = useParams();
    const {itemCount, setItemCount} = useContext(CartContext);

const handleMoreClick = () => {
    if(state === 9)return; 
    setState (state + 1);
}
const handleLessClick = () => {
    if(state === 1)return; 
    setState (state - 1);
    
}


const addToCart = () => {
    const existingProduct = itemCount.products.find(
      (p) => p.productId === productId
    );
    if (existingProduct) {
      existingProduct.qty += state;
    } else {
      const newProduct = {
        productId,
        qty: state,
      };
      setItemCount((prevState) => ({
        qtyItems: prevState.qtyItems + state,
        products: [...prevState.products, newProduct],
      }));
    }
  };

return (
    <div style={styles.buttons}>
      <Button color="success" variant="contained" style={styles.buttonsMoreLess} onClick = {handleLessClick}>-</Button>
      <div style={styles.stateData}>{state}</div>
      <Button color="success" variant="contained" style={styles.buttonsMoreLess} onClick = {handleMoreClick}>+</Button>
   
    <Button style={styles.add} onClick={addToCart} variant="contained" color="success">
    Agregar al carrito
      </Button>
    </div>
  )
}
