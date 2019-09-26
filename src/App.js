import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AddGraph from "./components/AddGraph";
import Dashboard from "./components/Dashboard";
// import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        {/*<Route exact path="/" render={() => <Home />} />*/}
        <Route path="/sign-up" render={props => <SignUp {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/add-graph" component={AddGraph}/>
        <Redirect from="/" to="/profile" />
      </Switch>
    </>
  );
}

export default App;
