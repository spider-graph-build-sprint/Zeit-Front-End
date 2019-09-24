import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getUserData } from "./actions/getUserData";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

function App(props) {
  useEffect(() => {
    const localUserData = JSON.parse(localStorage.getItem("userData"));

    if (localUserData) {
      console.log("New app thing was called!");
      props.getUserData(localUserData.user_id);
    }
  }, []);
  return (
    <>
      <NavBar />
      <Switch>
        {/* <Route path="/" component={NavBar} /> */}
        <Route exact path="/" render={() => <Home />} />
        <Route path="/dashboard" render={props => <Dashboard/>}/>
        <Route path="/sign-up" render={props => <SignUp {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
      </Switch>
    </>
  );
}

export default connect(
  null,
  { getUserData }
)(App);
