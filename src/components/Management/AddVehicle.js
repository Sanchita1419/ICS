import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import classes from "./AddVehicle.module.css";

const AddVehicle = (props) => {
  const regNoInputRef = useRef();
  const vehicleTypeInputRef = useRef();
  const mobileNoInputRef = useRef();
  const navigate = useNavigate();
  const addVehicleHandler = (e) => {
    e.preventDefault();
    const enteredregNo = regNoInputRef.current.value;
    const enteredvehicleType = vehicleTypeInputRef.current.value;
    const enteredmobileNo = mobileNoInputRef.current.value;
    console.log("Adding");
    console.log(enteredregNo, enteredvehicleType, enteredmobileNo);
    regNoInputRef.current.value = "";
    vehicleTypeInputRef.current.value = "";
    mobileNoInputRef.current.value = "";
    navigate("/manage");
  };
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.addVehicle}>
        <h3>Add Vehicle</h3>
        <form onSubmit={addVehicleHandler}>
          <div className={classes.inputBox}>
            <label>Registration No.</label>
            <input type="text" name="regNo" ref={regNoInputRef} />
          </div>
          <div className={classes.inputBox}>
            <label>Vehicle Type</label>
            <input type="text" name="vehicleType" ref={vehicleTypeInputRef} />
          </div>
          <div className={classes.inputBox}>
            <label>Associated Mobile No.</label>
            <input type="text" name="mobileNo" ref={mobileNoInputRef} />
          </div>
          {/* <Input label="Registration No." name="regNo" />
          <Input label="Vehicle Type" name="vehicleType" />
          <Input label="Associated Mobile No." name="mobileNo" /> */}

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
