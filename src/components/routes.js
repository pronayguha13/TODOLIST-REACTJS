import React from "react";
import { Router } from "@reach/router";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import Login from "./Login";

const BaseRouter = (props) => {
  return (
    <Router>
      <HomePage path="/home" />
      <Login path="/login" />
      <SignUp path="/signup" />
    </Router>
  );
};
export default BaseRouter;
