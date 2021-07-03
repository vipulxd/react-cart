import React, {useState, useEffect} from "react";

import {useSelector} from "react-redux";
import "../styles/Cart.css";

import {useHistory} from "react-router-dom";
function Cart() {
  const history = useHistory();
  const [cartprods, setcartprods] = useState();
  const items = useSelector(state => state.productsincart);
  console.log(cartprods);
  useEffect(() => {
    if (items.length > 0) {
      setcartprods(items);
    } else {
    }
  }, []);
  return (
    <div className="cart_o">
      {cartprods ? (
        <div>
          {cartprods.map(item => {
            return (
              <div className="cart_outer_outer">
                <div className="cart_outer">
                  <div className="cart_child imagegrid">
                    <img
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      src={"http://localhost:3000/" + item.imageurl}
                    ></img>
                  </div>
                  <div className="cart_child prodname">{item.prod_name}</div>
                  <div className="cart_child buttonn prodname">
                    <button onClick={() => history.push("/product/" + item.id)}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{textAlign: "center"}}>
          <h1 className="errormeg">No product in Cart</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
