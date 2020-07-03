import React, { useRef } from "react";
import axios from "axios";

const FormLayout = (props) => {
  const ref = useRef(null);

  const clearInputHandler = (e) => {
    if (ref.current.value !== "") {
      const shouldAddTask = window.confirm("Do you really want to add task ?");
      if (shouldAddTask) {
        console.log("ref.current.value ->", ref.current.value);
        const task = {
          taskTitle: ref.current.value,
          createdAt: new Date(),
        };
        axios
          .post("https://reacttodo-63df2.firebaseio.com/todos.json", task)
          .then((res) => console.log("res.data", res.data));
        ref.current.value = "";
      }
    } else {
      window.alert("Please Add task");
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        ref={ref}
        className="form-control"
        placeholder="Enter Your Task"
        aria-label="Enter Your Task"
        aria-describedby="button-addon2"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={clearInputHandler}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default FormLayout;
