import React, { useState, useEffect } from "react";
import { firestore } from "../firebase.js";
import FormLayout from "../components/formLayout";
import TaskDisplay from "../components/DisplayLayout/DisplayTaskLayout";

const HomePage = (props) => {
  const [Task, setTask] = useState([]);
  const db = firestore;
  db.settings({
    timestampsInSnapshots: true,
  });

  useEffect(() => {
    getTaskHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTaskHandler = () => {
    db.collection("todos")
      .get()
      .then((tasks) => {
        const newTasks = [];
        tasks.forEach((task) => {
          newTasks.push(task.data());
        });
        console.log("newTasks", newTasks);
        setTask(newTasks);
      });
  };

  const createTaskHandler = (task, event) => {
    event.preventDefault();

    db.collection("todos")
      .add({
        taskTitle: task.taskTitle,
        createdAt: task.createdAt,
        completed: task.completed,
      })
      .then(() => {
        alert("Task Created ");
        getTaskHandler();
      })
      .catch((err) => console.log("Cant add todo as:", err));
  };

  const deleteTaskHandler = (id) => {
    const deletedTask = Task[id];
    console.log("deleteTodoHandler -> deletedTask", deletedTask);
    const shouldDeleteTask = window.confirm(
      "Do you really want to delete the task ?"
    );
    if (shouldDeleteTask) {
      db.collection("todos")
        .where("taskTitle", "==", deletedTask["taskTitle"])
        .get()
        .then((qs) => {
          qs.forEach((dTask) => {
            dTask.ref
              .delete()
              .then(() => getTaskHandler())
              .catch((err) => console.log("Error removing document", err));
          });
        })
        .catch((error) => {
          console.log("error getting documents:", error);
        });
    }
  };

  const completedTaskHandler = (id) => {
    const editedTask = Task[id];
    console.log("completedTaskHandler -> editedTask", editedTask);
    editedTask.completed = !editedTask.completed;
    console.log("completedTaskHandler -> editedTask", editedTask);
    db.collection("todos")
      .where("taskTitle", "==", editedTask["taskTitle"])
      .get()
      .then((qs) => {
        qs.forEach((dTask) => {
          dTask.ref
            .update({
              completed: editedTask.completed,
            })
            .then(() => getTaskHandler())
            .catch((err) => console.log("Error Updating document", err));
        });
      })
      .catch((error) => {
        console.log("error getting documents:", error);
      });
  };
  return (
    <>
      <FormLayout taskCreateHandler={createTaskHandler} />
      <TaskDisplay
        taskList={Task}
        deleteTaskHandler={deleteTaskHandler}
        completedTaskHandler={completedTaskHandler}
      />
    </>
  );
};
export default HomePage;
