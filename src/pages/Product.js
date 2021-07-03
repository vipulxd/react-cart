import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import "../styles/product.css";
import data from "../components/Data/data.json";
import PaymentComponent from "../components/PaymentComponent/PaymentComponent";
import {useDispatch, useSelector} from "react-redux";
import {addprod} from "../redux";
function Product() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();
  const [details, setdetails] = useState({});
  const user = localStorage.getItem("user");

  function handleCart(id) {
    dispatch(addprod(id));
  }
  useEffect(() => {
    const item = data.find(item => item.id == id);
    setdetails(item);
  }, []);
  return (
    <div className="outofnameswow">
      <div className="product_outer">
        <div className="prod_inner img">
          <img
            style={{width: "100%", height: "100%"}}
            src={"http://localhost:3000/" + details.imageurl}
          ></img>
        </div>
        <div className="prod_inner prod_name">
          <div>{details.prod_name}</div>
        </div>
        <div className="prod_inner price">
          <div>{"₹" + details.price}</div>
        </div>
        <div className="prod_inner tagline">
          <div>{`"` + details.tagline + `"`}</div>
        </div>
        <div className="prod_inner buttons">
          <div className="prod_button">
            <div className="prod-bt">
              <button>
                {!user ? (
                  <p onClick={() => history.push("/authentication")}>
                    Login to buy
                  </p>
                ) : (
                  <p>
                    <PaymentComponent details />
                  </p>
                )}{" "}
              </button>
            </div>
            <div className="prod-bt">
              <button onClick={() => handleCart(details)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
