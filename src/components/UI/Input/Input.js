import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.inputBox}>
      <label>{props.label}</label>
      <input type="text" name="props.name" />
    </div>
  );
};

export default Input;
