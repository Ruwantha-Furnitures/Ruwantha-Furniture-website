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
import Home from "./components/web/customer/Home/Home.jsx";
import Product from "./components/web/customer/Products/Product.jsx";
import ContactUs from "./components/web/customer/ContactUs/Contact.jsx";
import Login from "../src/components/web/Common/Login.jsx";
import Signup from "./components/web/customer/SignUp/Signup.jsx";

import Customer_Home from "./components/web/registeredCustomer/Home/CustomerHome.jsx";
import Customer_Product from "./components/web/registeredCustomer/Product/CustomerProduct.jsx";
import Customer_ContactUs from "./components/web/registeredCustomer/ContactUs/CustomerContact.jsx";
import ViewProfile from "./components/web/registeredCustomer/Profile/ViewProfile.jsx";
import Customer_Cart from "./components/web/registeredCustomer/BeforePayment/ShippingDetailsPage.jsx";

import View_Product from "./components/web/customer/Products/ViewProductDetails.jsx";
import View_Product_Details from "./components/web/registeredCustomer/Product/CustomerViewProductDetails";
import CustomerUpdateProfile from "./components/web/registeredCustomer/Profile/UpdateProfile.jsx";
import CustomerChangePassword from "./components/web/registeredCustomer/Profile/CustomerChangePassword.jsx";
import RecoveryPassword from "./components/web/registeredCustomer/PasswordRecovery/PasswordRecovery.jsx";
import CustomerPayment from "./components/web/registeredCustomer/Payment/PaymentForm.jsx";
import CustomerCheckout from "./components/web/registeredCustomer/Cart/ShippingDetailsPage.jsx";
import CustomerReviews from "./components/web/registeredCustomer/Reviews/CustomerReviewsPage.jsx";
import CustomerThankYou from "./components/web/registeredCustomer/Payment/ThankYouPage.jsx";
import PendingEmail from "./components/web/registeredCustomer/PasswordRecovery/Pending.jsx";

import ProductUpdate from "./components/Dashboard/ProductUpdate";
import ProductCategoryUpdate from "./components/Dashboard/ProductCategoryUpdate";
import ProductTypeUpdate from "./components/Dashboard/ProductTypeUpdate";
import ProductSellAmount from "./components/Dashboard/ProductSellAmount";
import OrderDetails from "./components/Dashboard/OrderDetails";
import DeliveryDriverUpdate from "./components/Dashboard/DeliveryDriverUpdate";
import CustomerMessages from "./components/Dashboard/CustomerMessages";
import CustomerMessageView from "./components/Dashboard/CustomerMessageView";
import DeliveryDriverNotifications from "./components/Dashboard/DeliveryDriverNotifications";

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
            path="/dashboard/product/sell/amount"
            component={ProductSellAmount}
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
            path="/dashboard/product/updateProductType"
            component={ProductTypeUpdate}
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
            path="/dashboard/product/updateProductCategory"
            component={ProductCategoryUpdate}
          />

          <Route
            exact
            path="/dashboard/purchaseOrders"
            component={PurchaseOrders}
          />

          {/* For Navigations Purpose */}
          <Route
            exact
            path="/dashboard/purchaseOrder/details"
            component={OrderDetails}
          />
          <Route
            exact
            path="/dashboard/completedOrder/details"
            component={OrderDetails}
          />
          <Route
            exact
            path="/dashboard/assigndOrder/details"
            component={OrderDetails}
          />
          <Route
            exact
            path="/dashboard/deliveryDriver/details"
            component={OrderDetails}
          />
          <Route
            exact
            path="/dashboard/deliveryDriverNotifications/details"
            component={OrderDetails}
          />
          {/* End Navigations Purpose */}

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
            path="/dashboard/customerMessages"
            component={CustomerMessages}
          />
          <Route
            exact
            path="/dashboard/customerMessage/view"
            component={CustomerMessageView}
          />

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
            path="/dashboard/deliveryDriver/viewOnly"
            component={DeliveryDriverView}
          />
          <Route
            exact
            path="/dashboard/deliveryDriverProfile"
            component={DeliveryDriverView}
          />

          <Route
            exact
            path="/dashboard/deliveryDriver/update"
            component={DeliveryDriverUpdate}
          />
          <Route
            exact
            path="/dashboard/deliveryDriverProfile/update"
            component={DeliveryDriverUpdate}
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
            path="/dashboard/deliveryDriver/notifications"
            component={DeliveryDriverNotifications}
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
          <Route exact path="/PendingEmail" component={PendingEmail} />
          
          <Route exact path="/customer_checkout" component={CustomerCheckout} />

          <Route exact path="/payment" component={CustomerPayment} />
          <Route exact path="/customer_reviews" component={CustomerReviews} />     
          <Route exact path="/customer_thankyou" component={CustomerThankYou} />     
                      
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
