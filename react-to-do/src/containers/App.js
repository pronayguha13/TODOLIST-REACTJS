import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import FormLayout from "../components/formLayout";
import TaskDisplay from "../components/DisplayTaskLayout";

const App = (props) => {
  const [task, setTask] = useState([]);
  const [couCt, setCount] = useState(0);
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

  const setCountHandler = (value) => {
    setCount(value);
  };
  return (
    <div className="App">
      <p>This is My React To Do App</p>
      <FormLayout countHandler={() => setCountHandler()} />
      <TaskDisplay taskList={task} />
    </div>
  );
};
export default App;
