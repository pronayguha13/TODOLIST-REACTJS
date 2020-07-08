import React, { useRef } from "react";

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
          completed: false,
        };
        props.taskCreateHandler(task, e);
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
        autoFocus
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
