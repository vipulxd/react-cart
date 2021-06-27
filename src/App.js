import "./styles/App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:prod_id" exact component={Product} />
        <Route path="/Cart" exact component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
