import React from "react";
import HomePage from "./HomePage";
import BaseRouter from "./routes";
const Application = (props) => {
  const user = null;
  return user ? <HomePage /> : <BaseRouter />;
};
export default Application;
