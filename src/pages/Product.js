import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "../styles/product.css";
import data from "../components/Data/data.json";
import PaymentComponent from "../components/PaymentComponent/PaymentComponent";
function Product() {
  const {id} = useParams();
  const [details, setdetails] = useState({});
  console.log(details);
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
                <PaymentComponent details />
                {/* this is the key add this in .env  
                "pk_test_51IyivBSBevftQuaAIhrFBQ1b90xAYfqVkysZyDXshrS6vG7I8lAxJgQw7zVgaxexgNLbnXTDTyQjEiJXweZXRTIq00eBPB3M1M" */}
              </button>
            </div>
            <div className="prod-bt">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
