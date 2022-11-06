import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import "boxicons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
      {/* <Login /> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
