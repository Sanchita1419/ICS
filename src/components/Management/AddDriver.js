import React from "react";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import classes from "./AddDriver.module.css";
const AddDriver = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.addDriver}>
        <h3>Add Driver</h3>
        <form>
          <Input label="Driver Name" name="driverName" />
          <Input label="Age" name="age" />
          <Input label="Gender" name="gender" />
          <Input label="License No." name="license" />
          <div className={classes.buttonContainer}>
            <button onClick={props.onClose}>Cancel</button>
            <button>Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddDriver;
