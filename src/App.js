import "./styles/App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Navbar from "./pages/Home Components/Navbar";
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route> 
        <Route path="/cart" exact>
          <Cart/>
        </Route> 
        <Route path="/product" exact>
          <Product/>
        </Route> 
        
      </Switch>
    </Router>

  );
}

export default App;
