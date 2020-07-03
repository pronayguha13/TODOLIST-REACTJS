import React from "react";
import { ListGroup, ListGroupItem, Spinner, Button } from "reactstrap";

const TaskDisplay = (props) => {
  console.log("TaskDisplay -> props", props);
  const displayListHandler = () => {
    const { taskList } = props;
    console.log("displayListHandler -> taskList", typeof taskList);
    if (taskList !== null && taskList !== undefined) {
      if (Object.keys(taskList) && Object.keys(taskList).length) {
        return (
          <div>
            {Object.keys(taskList) && Object.keys(taskList).length ? (
              <ListGroup>
                {Object.keys(taskList).map((task, index) => (
                  <ListGroupItem key={index}>
                    {taskList[task].taskTitle}
                    <Button
                      style={{ float: "right", marginLeft: "10px" }}
                      color="success"
                      value="Done"
                    >
                      Mark as Done
                    </Button>
                    <Button
                      style={{ float: "right" }}
                      color="danger"
                      value="Delete"
                    >
                      Delete
                    </Button>
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <Spinner role="grow" />
            )}
          </div>
        );
      } else {
        return null;
      }
    } else {
      return <h1>No Task </h1>;
    }
  };

  return displayListHandler();
};

export default TaskDisplay;
