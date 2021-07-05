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
import ProductSellProductForm from "./components/Dashboard/product/ProductSellProductForm";
import ProductSellCustomer from "./components/Dashboard/ProductSellCustomer";

// import test from "./components/Dashboard/test/test";
import DeliveryDriverView from "./components/Dashboard/DeliveryDriverView";

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
