import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard";
import Products from "./components/Admin/Products";

import Home from './components/web/customer/js/Home.jsx';
import Product from './components/web/customer/js/Product.jsx';
import AboutUs from './components/web/customer/js/About.jsx';
import ContactUs from './components/web/customer/js/Contact.jsx';
import Login from '../src/components/web/Common/js/Login.jsx';
import Signup from './components/web/customer/js/Signup.jsx';

import Home from "./components/web/customer/js/Home";
import Product from "./components/web/customer/js/Product";
import AboutUs from "./components/web/customer/js/About";
import ContactUs from "./components/web/customer/js/Contact";
import Login from "./components/web/customer/js/Login";
import Signup from "./components/web/customer/js/Signup";
import test from "./components/Admin/test/test";
import ProductView from "./components/Admin/ProductView";

import ProductView from "./components/Admin/ProductView";
import ProductAdd from "./components/Admin/ProductAdd";
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
import ViewProfile from "./components/web/registeredCustomer/ViewProfile.jsx";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/products" component={Products} />
          <Route exact path="/dashboard/product/view" component={ProductView} />
          <Route exact path="/dashboard/product/add" component={ProductAdd} />
          <Route exact path="/dashboard/test" component={test} />

          <Route exact path="/home" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route exact path="/customer_home" component={Customer_Home} />
          <Route exact path="/customer_product" component={Customer_Product} />          
          <Route exact path="/customer_contact-us" component={Customer_ContactUs} />
          <Route exact path="/viewProfile" component={ViewProfile} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
