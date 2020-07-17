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
        style={{ borderRadius: 10, marginLeft: 20 }}
      />
      <div className="input-group-append">
        <button
          // className="btn "
          style={{
            outline: "none",
            border: "none",
            background: "none",
            marginLeft: 10,
          }}
          type="button"
          id="button-addon2"
          onClick={clearInputHandler}
        >
          <img
            src="/icons/icons8-plus-40.png"
            alt="Add"
            style={{ height: 30 }}
          />
        </button>
      </div>
    </div>
  );
};
export default FormLayout;
