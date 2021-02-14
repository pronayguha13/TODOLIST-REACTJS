import React from "react";

import "./App.css";
import Header from "../components/HeaderBar/HeaderBar";
import Application from "../components/application";
import { UserProvider } from "../providers/userProvider";

const App = (props) => {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Application />
      </div>
    </UserProvider>
  );
};
export default App;
