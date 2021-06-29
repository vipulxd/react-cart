import React from "react";
import data from "../components/Data/data.json";
import "../styles/home.css";
import {Link} from "react-router-dom";
function Home() {
  return (
    <div className="homeouter" style={{textDecoration: "none"}}>
      {data.map((items, index) => (
        <div className="homeouter2">
          <Link to={"/product/" + items.id}>
            <div className="homeouter12">
              <img src={items.imagerurl}></img>
            </div>
          </Link>
          <div className="homeouter123">
            <p>{items.prod_name}</p>
          </div>
          <div className="homeouter123">
            {"₹" + " " + items.price}
            <span>
              <button className="cardbutton">Add to cart</button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
