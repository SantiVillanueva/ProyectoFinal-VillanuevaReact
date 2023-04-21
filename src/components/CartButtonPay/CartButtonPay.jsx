import React from 'react'
import Button from '@mui/material/Button';

const styles ={
    cartPay:{
        display: "flex",
        margin: "10px",
        color: "black",
        padding: "20px",    
        alingItems: "center",
        justifyContent: "center",
        fontSize: "25px"
    },
    button:{
        display: "flex",
        margin: "20px"
    },
    total:{
        display: "flex",
        margin: "20px"
    }

}


export const CartButtonPay = ({total, onClick}) => {
  return (
    <div style={styles.cartPay}>
        <div style={styles.total}>Total a pagar: ${total}</div>
        <Button style={styles.button} onClick={onClick} variant="contained" color="success">
            Pagar
        </Button>
    </div>
  )
}
