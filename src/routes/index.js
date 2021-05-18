import React from "react";
import { Route, Switch } from "react-router-dom";
import Product from "../pages/Product.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

export default function() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/SignIn" component={SignIn} />
      <Route exact path="/product" component={Product} />
      <Route path="/product/:id" component={ProductDetail} />
    </Switch>
  );
}
