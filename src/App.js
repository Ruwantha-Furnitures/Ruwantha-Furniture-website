import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChartTest from "./components/Admin/common/ChartTest";
import Dashboard from "./components/Admin/Dashboard";
import Products from "./components/Admin/Products";

import Home from './components/web/customer/js/Home.jsx';
import Product from './components/web/customer/js/Product.jsx';
import AboutUs from './components/web/customer/js/About.jsx';
import ContactUs from './components/web/customer/js/Contact.jsx';
import Login from '../src/components/web/Common/js/Login.jsx';
import Signup from './components/web/customer/js/Signup.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/products" component={Products} />
          <Route exact path="/chart" component={ChartTest} />

          
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
