import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} type="text" {...props.input} />
      {/* {...props.input}  to pass all other configuration data that we might receive from props.input to this input element here as props. This ensures that all the key value pairs in this input object which we receive on props.input are added as props to input*/}
    </div>
  );
});

export default Input;
