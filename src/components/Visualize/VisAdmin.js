import React from "react";
import CustomerList from "./CustomerList";
import classes from "./Visualize.module.css";

const VisAdmin = () => {
  return (
    <div className={classes.visualize}>
      <div className={classes.vContainer}>
        <CustomerList />
      </div>
    </div>
  );
};

export default VisAdmin;
