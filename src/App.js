import "./styles/App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Navbar from "./pages/Home Components/Navbar";

import Auth from "./pages/Auth";

// >>>>>>> 1c5238e0e947784ca6a1f9f74e66f35547ed19c6
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/product/:id" exact>
          <Product />
        </Route>
        <Route path="/authentication" exact>
          <Auth />
        </Route>

        {/* <Route path="/" exact component={Home} />
        <Route path="/product/:prod_id" exact component={Product} />
        <Route path="/Cart" exact component={Cart} /> */}
        {/* >>>>>>> 1c5238e0e947784ca6a1f9f74e66f35547ed19c6 */}
      </Switch>
    </Router>
  );
}

export default App;
