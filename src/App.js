import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";

function App() {
  useEffect(() => {
    const localUserData = JSON.parse(localStorage.getItem("userData"));

    if (localUserData) {
      console.log("New app thing was called!");
      props.getUserData(localUserData.user_id);
    }
  }, []);
  return (
    <Switch>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default connect(
  null,
  { getUserData }
)(App);
