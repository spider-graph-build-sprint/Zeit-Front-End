import React from 'react';
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";


function App() {
  
  return (
    <BrowserRouter>

      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={Home}/>
      <Route path="/sign-up" component={SignUp}/>
      {/* <Route path="/login" component={Login}/> */}
    </BrowserRouter>

  );
}

export default App;
