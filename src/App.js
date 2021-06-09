import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChartTest from "./components/Admin/common/ChartTest";
import Dashboard from "./components/Admin/Dashboard";
import Products from "./components/Admin/Products";

import Home from "./components/web/customer/js/Home";
import Product from "./components/web/customer/js/Product";
import AboutUs from "./components/web/customer/js/About";
import ContactUs from "./components/web/customer/js/Contact";
import Login from "./components/web/customer/js/Login";
import Signup from "./components/web/customer/js/Signup";
import test from "./components/Admin/test/test";
import ProductView from "./components/Admin/ProductView";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/products" component={Products} />
          <Route exact path="/dashboard/product/view" component={ProductView} />
          <Route exact path="/dashboard/test" component={test} />

          <Route exact path="/home" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
