import React from "react";
import { ListGroup, ListGroupItem, Spinner, Button } from "reactstrap";
import styles from "./displayLayout.module.css";

const TaskDisplay = (props) => {
  const displayListHandler = () => {
    const { taskList } = props;
    if (taskList !== null && taskList !== undefined) {
      if (Object.keys(taskList) && Object.keys(taskList).length) {
        return (
          <div>
            {Object.keys(taskList) && Object.keys(taskList).length ? (
              <ListGroup>
                {Object.keys(taskList).map((task, index) => (
                  <ListGroupItem key={index} className>
                    <p
                      className={
                        !taskList[task].completed ? "" : styles.strikethrough
                      }
                    >
                      {taskList[task].taskTitle}
                    </p>
                    <Button
                      style={{ float: "right", marginLeft: "10px" }}
                      color="success"
                      value="Done"
                      onClick={() => props.completedTaskHandler(index)}
                    >
                      Mark as Done
                    </Button>
                    <Button
                      style={{ float: "right" }}
                      color="danger"
                      value="Delete"
                      onClick={() => props.deleteTaskHandler(index)}
                    >
                      Delete
                    </Button>
                    <hr />
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : null}
          </div>
        );
      } else {
        return <Spinner role="grow" />;
      }
    } else {
      return <h1>No Task </h1>;
    }
  };

  return displayListHandler();
};

export default TaskDisplay;
