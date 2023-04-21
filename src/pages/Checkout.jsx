import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc} from "firebase/firestore";
import { CartContext } from "../context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//Los datos son enviados a la base de firebase, para almacenar un metodo de contacto y contactar con el comprador.

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#989DA3",
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
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  message: {
    margin: "1rem 0",
    padding: "1rem",
    backgroundColor: "#d4edda",
    border: "1px solid #c3e6cb",
    borderRadius: "5px",
    color: "#155724",
    fontWeight: "bold",
  },
};
export const Checkout = () => {

  const [paymentSuccess, setPaymentSuccess] = React.useState(false);
  const [paymentId, setPaymentId] = React.useState("");

  const { itemCount } = React.useContext(CartContext);
  const navigate = useNavigate();

  const location = useLocation();
  const total = location.state;
  const handleSubmit = (e) => {
    e.preventDefault();



    const newSale= {
      nombre: e.target.nombre.value,
      mail: e.target.mail.value,
      telefono: e.target.telefono.value,
      total: total,
      products: itemCount,
    };
    const db = getFirestore();
    const productCollection = collection(db, "sales");
    addDoc(productCollection, newSale)
      .then(({ id }) => {
        setPaymentSuccess(true);
        setPaymentId(id);

      })
      .catch((err) => console.log(err))
     
  };
  React.useEffect(() => {
    if (paymentSuccess) {
      const timer = setTimeout(() => {
        toast.success("Pago realizado con éxito!");
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [paymentSuccess, navigate]);
  return (

    <div style={styles.container}>
    <h1 style={styles.heading}>Metodo de pago</h1>
    <p>Deje su información de contacto y será contactado para poder pagar</p>
    <form onSubmit={handleSubmit}>
      <div>
        <label style={styles.label} htmlFor="name">
          Nombre:
        </label>
        <input style={styles.input} type="text" id="nombre" name="nombre" />
      </div>
      <div>
        <label style={styles.label} htmlFor="mail">
          Mail:
        </label>
        <input style={styles.input} type="text" id="mail" name="mail" />
      </div>
      <div>
        <label style={styles.label} htmlFor="telefono">
          Telefono:
        </label>
        <input
          style={styles.input}
          type="text"
          id="telefono"
          name="telefono"
        />
      </div>
      <button style={styles.button}>
         `Pagar $${total}`
      </button>
      {paymentSuccess && (
        <div style={styles.message}>
          <ToastContainer />
          Pago realizado con éxito!
        </div>
      )}
    </form>
  </div>
)}