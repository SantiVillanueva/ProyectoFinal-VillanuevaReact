import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { FormNewImg } from "../FormNewImg/FormNewImg";

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    color: "black"
  },
  input: {
    marginBottom: "1rem",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },

};

export const FormNewProductComponent = () => {
  const [objeto, setObjeto] = useState({
    categoria: "",
    detalle: "",
    imagen: "",
    modelo: "",
    precio: 0,
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setObjeto((prevObjeto) => ({ ...prevObjeto, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const productCollection = collection(db, "products");
    addDoc(productCollection, objeto).then(({ id }) => console.log(id));
  };



  return (
    <form style={styles.container} onSubmit={handleSubmit}>
        <div>
        <label style={styles.label} htmlFor="categoria">Categoria:</label>
        <input
          type="text"
          id="categoria"
          name="categoria"
          value={objeto.categoria}
          onChange={handleChange}
        />
      </div>
      <div>
        <label  style={styles.label} htmlFor="detalle">Descripción:</label>
        <input style={styles.input} 
          type="text"
          id="detalle"
          name="detalle"
          value={objeto.detalle}
          onChange={handleChange}
        />
      </div>
      <div>
        <label  style={styles.label} htmlFor="imagen">Imagen:</label>
        <input style={styles.input} 
          type="file"
          id="imagen"
          name="imagen"
         
          onChange={e => FormNewImg(e.target.files[0])}
        />
      </div>
      <div>
        <label  style={styles.label} htmlFor="modelo">modelo:</label>
        <input style={styles.input} 
          type="text"
          id="modelo"
          name="modelo"
          value={objeto.modelo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label style={styles.label} htmlFor="precio">precio:</label>
        <input style={styles.input} 
          type="number"
          id="precio"
          name="precio"
          value={objeto.precio}
          onChange={handleChange}
        />
      </div>
   
      <button style={styles.button} type="submit">Subir objeto</button>
    </form>
  );
};
