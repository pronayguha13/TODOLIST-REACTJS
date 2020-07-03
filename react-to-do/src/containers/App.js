import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import FormLayout from "../components/formLayout";
import TaskDisplay from "../components/DisplayTaskLayout";

const App = (props) => {
  const [task, setTask] = useState([]);
  console.log("App -> task", task, typeof task);

  useEffect(() => {
    axios
      .get("https://reacttodo-63df2.firebaseio.com/todos.json")
      .then((res) => {
        // setTask(res.data);
        console.log("res", res);
        setTask(res.data);
      });
  }, []);

  return (
    <div className="App">
      <p>This is My React To Do App</p>
      <FormLayout />
      <TaskDisplay taskList={task} />
    </div>
  );
};
export default App;
