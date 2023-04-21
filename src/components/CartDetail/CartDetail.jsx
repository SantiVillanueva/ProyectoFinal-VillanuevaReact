import React from 'react'

const styles ={
    product: {
        display: "flex",
        flexDireccion: "row",
        margin: "20px",
        padding: "20px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:  "#8cadc0",
        borderRadius: "1rem",
        width: "50%"
    },
    productImg: {
        display: "flex",
        width: "20%",
        height: "20%"
        
    },
    productInfo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "1rem",
        backgroundColor: "#989DA3",
        boxShadow: "1px 1px 3px black",
        width: "40%",
        height: "40%",
        fontSize: "20px"
    },
  
  }

export const CartDetail = ({producto, qty}) => {
  return (
    <div style={styles.product}>
        <img style={styles.productImg} src={producto.imagen} alt="" />
        <div style={styles.productInfo}>
            <p >{producto.modelo}</p>
            <p> Precio por unidad: $ {producto.precio}</p>
            <p>Cantidad: {qty.qty}</p>
        </div>
    </div>
    
  )
}
