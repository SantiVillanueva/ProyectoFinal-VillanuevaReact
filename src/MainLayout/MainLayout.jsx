import React, {useContext} from 'react'
import { ThemeContext } from '../context';

export const MainLayout = ({children}) => {

const {isDarkMode} = useContext(ThemeContext);



    const mainLayoutStyles = {
        backgroundColor: isDarkMode ? "white" : "black",
        color: isDarkMode ?  "black" : "white",
        display: "flex",      
        flexDirection: "column",
        minHeight: "100vh",
        height: "fit-content",
        maxWidth: "100%",
       
    }
  return <div style={mainLayoutStyles}>{children}</div>;
  
}
