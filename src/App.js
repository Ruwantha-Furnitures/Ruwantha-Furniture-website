// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChartTest from "./components/Admin/common/ChartTest";
import Dashboard from "./components/Admin/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/chart" component={ChartTest} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
