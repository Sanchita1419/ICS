import React from "react";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import classes from "./AddVehicle.module.css";

const AddVehicle = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.addVehicle}>
        <h3>Add Vehicle</h3>
        <form>
          <Input label="Registration No." name="regNo" />
          <Input label="Vehicle Type" name="vehicleType" />
          <Input label="Associated Mobile No." name="mobileNo" />

          <div className={classes.buttonContainer}>
            <button onClick={props.onClose}>Cancel</button>
            <button>Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddVehicle;
