import React from "react";
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";
import styles from "./displayLayout.module.css";

const TaskDisplay = (props) => {
  const displayListHandler = () => {
    const { taskList } = props;
    if (taskList !== null && taskList !== undefined) {
      if (Object.keys(taskList) && Object.keys(taskList).length) {
        return (
          <div>
            {Object.keys(taskList) && Object.keys(taskList).length ? (
              <ListGroup
                style={{ listStyle: "none", border: "none", margin: "auto" }}
              >
                {Object.keys(taskList).map((task, index) => (
                  <ListGroupItem
                    key={index}
                    style={{
                      border: "none",
                      outline: "none",
                      marginBottom: 10,
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <p
                      className={
                        !taskList[task].completed ? null : styles.strikethrough
                      }
                    >
                      {taskList[task].taskTitle}
                    </p>
                    <button className={styles.checkedBtn}>
                      <img
                        src="/icons/icons8-checked-50.png"
                        alt="Checked"
                        style={{
                          width: 30,
                          height: 30,
                          background: "none",
                        }}
                        onClick={() => props.completedTaskHandler(index)}
                      />
                    </button>

                    <button className={styles.DeleteBtn}>
                      <img
                        src="/icons/delete-dustbin.png"
                        alt=""
                        style={{
                          width: 30,
                          height: 30,
                          top: 5,
                          // float: "right",
                        }}
                        onClick={() => props.deleteTaskHandler(index)}
                      />
                    </button>
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
