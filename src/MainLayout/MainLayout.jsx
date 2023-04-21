import React from 'react'


export const MainLayout = ({children}) => {



    const mainLayoutStyles = {
        backgroundColor:"white",
        color:"white",
        display: "flex",      
        flexDirection: "column",
        minHeight: "100vh",
        height: "fit-content",
        maxWidth: "100%",
       
    }
  return <div style={mainLayoutStyles}>{children}</div>;
  
}
