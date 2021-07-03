import React, {useState, useEffect} from "react";
import Navbar from "./Home Components/Navbar";
import {useSelector} from "react-redux";
function Cart() {
  const [cartprods, setcartprods] = useState();
  const items = useSelector(state => state.productsincart);

  useEffect(() => {
    if (items.length > 0) {
      setcartprods(items);
    } else {
      function defaultdisplay() {
        return <h1>add something</h1>;
      }
    }
  }, []);
  return (
    <div>
      {cartprods ? (
        <div>
          {cartprods.map(item => {
            return (
              <div>
                <h3>{item.prod_name}</h3>
                <h4>{item.price}</h4>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </div>
  );
}

export default Cart;
