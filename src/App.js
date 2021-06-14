import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./components/Admin/Dashboard";
import Products from "./components/Admin/Products";
import ProductView from "./components/Admin/ProductView";
import ProductAdd from "./components/Admin/ProductAdd";
import ProductSell from "./components/Admin/ProductSell";
import test from "./components/Admin/test/test";

import Home from "./components/web/customer/Home.jsx";
import Product from "./components/web/customer/Product.jsx";
import AboutUs from "./components/web/customer/About.jsx";
import ContactUs from "./components/web/customer/Contact.jsx";
import Login from "../src/components/web/Common/Login.jsx";
import Signup from "./components/web/customer/Signup.jsx";

import Customer_Home from "./components/web/registeredCustomer/CustomerHome.jsx";
import Customer_Product from "./components/web/registeredCustomer/CustomerProduct.jsx";
import Customer_ContactUs from "./components/web/registeredCustomer/CustomerContact.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/products" component={Products} />
          <Route exact path="/dashboard/product/view" component={ProductView} />
          <Route exact path="/dashboard/product/add" component={ProductAdd} />
          <Route exact path="/dashboard/product/sell" component={ProductSell} />
          <Route exact path="/dashboard/test" component={test} />

          <Route exact path="/home" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route exact path="/customer_home" component={Customer_Home} />
          <Route exact path="/customer_product" component={Customer_Product} />
          {/* <Route exact path="/customer_about-us" component={Customer_AboutUs} /> */}
          <Route
            exact
            path="/customer_contact-us"
            component={Customer_ContactUs}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
