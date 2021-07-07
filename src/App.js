import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Dashboard Components
import Dashboard from "./components/Dashboard/DashboardHome";
import Products from "./components/Dashboard/Products";
import ProductView from "./components/Dashboard/ProductView";
import ProductAdd from "./components/Dashboard/ProductAdd";
import ProductSell from "./components/Dashboard/ProductSell";
import ProfileChangePassword from "./components/Dashboard/ProfileChangePassword";
import Customers from "./components/Dashboard/Customers";
import ProductTypeAdd from "./components/Dashboard/ProductTypeAdd";
import ProductCategoryAdd from "./components/Dashboard/ProductCategoryAdd";
import CustomerProfile from "./components/Dashboard/CustomerProfile";
import PurchaseOrders from "./components/Dashboard/PurchaseOrders";
import DeliveryDrivers from "./components/Dashboard/DeliveryDrivers";
import DeliveryDriverProfile from "./components/Dashboard/DeliveryDriverProfile";
import DeliveryDriverDeliveries from "./components/Dashboard/DeliveryDriverDeliveries";
import ProductTypeView from "./components/Dashboard/ProductTypeView";
import ProductCategoryView from "./components/Dashboard/ProductCategoryView";

import AssignOrderDriver from "./components/Dashboard/AssignOrderDriver";
import AssignDriver from "./components/Dashboard/AssignDriver";
import CompletedOrders from "./components/Dashboard/CompletedOrders";
import DeliveryDriverAvalability from "./components/Dashboard/DeliveryDriverAvalability";
// import ProductSellProductForm from "./components/Dashboard/product/ProductSellProductForm";
import ProductSellCustomer from "./components/Dashboard/ProductSellCustomer";

// import test from "./components/Dashboard/test/test";
import DeliveryDriverView from "./components/Dashboard/DeliveryDriverView";

// Web Components
import Home from "./components/web/customer/Home.jsx";
import Product from "./components/web/customer/Product.jsx";
import ContactUs from "./components/web/customer/Contact.jsx";
import Login from "../src/components/web/Common/Login.jsx";
import Signup from "./components/web/customer/Signup.jsx";

import Customer_Home from "./components/web/registeredCustomer/CustomerHome.jsx";
import Customer_Product from "./components/web/registeredCustomer/CustomerProduct.jsx";
import Customer_ContactUs from "./components/web/registeredCustomer/CustomerContact.jsx";
import ViewProfile from "./components/web/registeredCustomer/ViewProfile.jsx";
import Customer_Cart from "./components/web/registeredCustomer/ViewCart.jsx";

import View_Product from "./components/web/customer/ViewProductDetails.jsx";
import View_Product_Details from "./components/web/registeredCustomer/CustomerViewProductDetails";
import CustomerUpdateProfile from "./components/web/registeredCustomer/UpdateProfile.jsx";
import CustomerChangePassword from "./components/web/registeredCustomer/CustomerChangePassword.jsx";
import RecoveryPassword from "./components/web/registeredCustomer/PasswordRecovery.jsx";
import CustomerPayment from "./components/web/registeredCustomer/PaymentForm.jsx";
import CustomerCheckout from "./components/web/registeredCustomer/CustomerCheckoutDeteails.jsx";
import ProductUpdate from "./components/Dashboard/ProductUpdate";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Dashboard */}
          <Route exact path="/dashboard" component={Dashboard} />
          {/* Dashboard-Product */}
          <Route exact path="/dashboard/products" component={Products} />
          <Route exact path="/dashboard/product/view" component={ProductView} />
          <Route exact path="/dashboard/product/add" component={ProductAdd} />
          <Route
            exact
            path="/dashboard/product/update"
            component={ProductUpdate}
          />
          <Route
            exact
            path="/dashboard/product/sell/product"
            component={ProductSell}
          />
          <Route
            exact
            path="/dashboard/product/sell/customer"
            component={ProductSellCustomer}
          />
          <Route
            exact
            path="/dashboard/product/addProductType"
            component={ProductTypeAdd}
          />

          <Route
            exact
            path="/dashboard/product/viewProductType"
            component={ProductTypeView}
          />

          <Route
            exact
            path="/dashboard/product/addProductCategory"
            component={ProductCategoryAdd}
          />

          <Route
            exact
            path="/dashboard/product/viewProductCategory"
            component={ProductCategoryView}
          />

          <Route
            exact
            path="/dashboard/purchaseOrders"
            component={PurchaseOrders}
          />
          <Route
            exact
            path="/dashboard/completedOrders"
            component={CompletedOrders}
          />
          <Route
            exact
            path="/dashboard/assignListOrderDriver"
            component={AssignOrderDriver}
          />
          <Route
            exact
            path="/dashboard/assignDriver"
            component={AssignDriver}
          />

          {/* Dashboard-Profiles Section*/}
          <Route
            exact
            path="/dashboard/profile/changePassword"
            component={ProfileChangePassword}
          />

          {/* Dashboard-Customer Section */}
          <Route exact path="/dashboard/customers" component={Customers} />

          <Route
            exact
            path="/dashboard/customer/detials"
            component={CustomerProfile}
          />

          {/* Dashboard-Dilvery Drivers Section*/}
          <Route
            exact
            path="/dashboard/deliveryDrivers"
            component={DeliveryDrivers}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/view"
            component={DeliveryDriverView}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/profile"
            component={DeliveryDriverProfile}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/deliveries"
            component={DeliveryDriverDeliveries}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/availablity"
            component={DeliveryDriverAvalability}
          />

          {/* Web */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route exact path="/customer_home" component={Customer_Home} />
          <Route exact path="/customer_product" component={Customer_Product} />
          <Route
            exact
            path="/customer_contact-us"
            component={Customer_ContactUs}
          />
          <Route exact path="/viewProfile" component={ViewProfile} />
          <Route exact path="/cart" component={Customer_Cart} />

          <Route exact path="/viewProductPage" component={Customer_Product} />
          <Route exact path="/viewProduct" component={View_Product} />
          <Route
            exact
            path="/viewProductDetail"
            component={View_Product_Details}
          />
          <Route
            exact
            path="/changepassword"
            component={CustomerChangePassword}
          />

          <Route
            exact
            path="/updateProfile"
            component={CustomerUpdateProfile}
          />
          <Route exact path="/recoveryPassword" component={RecoveryPassword} />
          <Route exact path="/customer_checkout" component={CustomerCheckout} />

          <Route exact path="/payment" component={CustomerPayment} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
