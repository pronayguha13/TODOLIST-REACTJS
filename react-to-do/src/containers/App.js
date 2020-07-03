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

  const createTaskHandler = (task) => {
    axios
      .post("https://reacttodo-63df2.firebaseio.com/todos.json", task)
      .then(() =>
        axios
          .get("https://reacttodo-63df2.firebaseio.com/todos.json")
          .then((res) => {
            // setTask(res.data);
            console.log("res", res);
            setTask(res.data);
          })
      );
  };
  const deleteTaskHandler = (id) => {
    const deletedTask = Object.keys(task)[id];
    console.log("deleteTodoHandler -> deletedTask", deletedTask);
    const shouldDeleteTask = window.confirm(
      "Do you really want to delete the task ?"
    );
    if (shouldDeleteTask) {
      axios
        .delete(
          `https://reacttodo-63df2.firebaseio.com/todos/${deletedTask}.json`
        )
        .then(() =>
          axios
            .get("https://reacttodo-63df2.firebaseio.com/todos.json")
            .then((res) => {
              // setTask(res.data);
              console.log("res", res);
              setTask(res.data);
            })
        );
    }
  };

  const completedTaskHandler = (id) => {
    const taskList = task;
    let editedTask = Object.values(taskList)[id];
    console.log("completedTaskHandler -> editedTask", editedTask);
    editedTask.editedAt = new Date();
    editedTask.completed = !editedTask.completed;
    console.log("completedTaskHandler -> editedTask", editedTask);
    axios
      .put(
        `https://reacttodo-63df2.firebaseio.com/todos/${
          Object.keys(task)[id]
        }.json`,
        editedTask
      )
      .then(() =>
        axios
          .get("https://reacttodo-63df2.firebaseio.com/todos.json")
          .then((res) => {
            // setTask(res.data);
            console.log("res", res);
            setTask(res.data);
          })
      );
  };
  return (
    <div className="App">
      <p>This is My React To Do App</p>
      <FormLayout taskCreateHandler={createTaskHandler} />
      <TaskDisplay
        taskList={task}
        deleteTaskHandler={deleteTaskHandler}
        completedTaskHandler={completedTaskHandler}
      />
    </div>
  );
};
export default App;
