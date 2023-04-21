import React, {useContext} from 'react'
import { CartButtonPay, CartDetail } from '../components'
import Loader from '../components/Loader/Loader';
import {useNavigate } from "react-router-dom";
import { collection, getDoc, doc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context";



const fetchProductsByIds = async (ids) => {
  const db = getFirestore();
  const productRefs = ids.map((id) => doc(collection(db, "products"), id));

  const productSnapshots = await Promise.all(
    productRefs.map((productRef) => getDoc(productRef))
  );

  const products = productSnapshots.map((productSnapshot) => {
    if (productSnapshot.exists()) {
      return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
      return null;
    }
  });

  return products.filter((product) => product !== null);
};

export const Cart = () => {
 
  const [productsData, setProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const { itemCount } = useContext(CartContext);
  React.useEffect(() => {
    const ids = itemCount.products.map((product) => product.productId);
    fetchProductsByIds(ids)
      .then((res) => setProductsData(res))
      .catch((err) => console.log("error"))
      .then(() => setLoading(false));
  }, [itemCount.products]);


  const findQtyByProductId = (productId) => {
    const item = itemCount.products.find(
      (item) => item.productId === productId
    );
    return item ? item.qty : 0;
  };

 
  const total = productsData
    .map((product) => product.precio * findQtyByProductId(product.id))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/Checkout", { state: total });
  };

  return loading ? (
    <Loader />
  ) : (
    <div>
      <div>
        {productsData.map((producto) => (
          <CartDetail
            key={producto.id}
            producto={producto}
            qty={itemCount.products.find(
              (item) => item.productId === producto.id
            )}
          />
        ))}
      </div>
      <div>
        <CartButtonPay total={total} onClick={handleCheckoutClick} />
      </div>
    </div>
  );
};
