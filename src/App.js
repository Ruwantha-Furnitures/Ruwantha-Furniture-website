// import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChartTest from "./components/Admin/common/ChartTest";
import Dashboard from "./components/Admin/Dashboard";

import Home from './components/web/customer/js/Home';
import Product from './components/web/customer/js/Product';
import AboutUs from './components/web/customer/js/About';
import ContactUs from './components/web/customer/js/Contact';
import Login from './components/web/customer/js/Login';
import Signup from './components/web/customer/js/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
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
