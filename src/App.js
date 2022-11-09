import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";

import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Restaurants from "./pages/Restaurants";
import Food from "./pages/Food";
import Cart from "./pages/Cart";

import Navbar from "./components/Navbar";

function App(props) {
  return (
    <div className="todoapp stack-large">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/signin" component={SignIn} />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/food" component={Food} />
        <Route path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
export default App;
