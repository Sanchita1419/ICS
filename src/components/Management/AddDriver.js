import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import classes from "./AddDriver.module.css";
const AddDriver = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const genderInputRef = useRef();
  const licenseNoInputRef = useRef();

  const navigate = useNavigate();
  const addVehicleHandler = (e) => {
    e.preventDefault();
    const enteredname = nameInputRef.current.value;
    const enteredage = ageInputRef.current.value;
    const enteredgender = genderInputRef.current.value;
    const enteredlicenseNo = licenseNoInputRef.current.value;

    console.log("Adding");
    console.log(enteredname, enteredage, enteredgender, enteredlicenseNo);
    navigate("/manage");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    genderInputRef.current.value = "";
    licenseNoInputRef.current.value = "";
  };
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.addDriver}>
        <h3>Add Driver</h3>
        <form onSubmit={addVehicleHandler}>
          <div className={classes.inputBox}>
            <label>Driver Name</label>
            <input type="text" name="driverName" ref={nameInputRef} />
          </div>
          <div className={classes.inputBox}>
            <label>Age</label>
            <input type="text" name="age" ref={ageInputRef} />
          </div>
          <div className={classes.inputBox}>
            <label>Gender</label>
            <input type="text" name="gender" ref={genderInputRef} />
          </div>
          <div className={classes.inputBox}>
            <label>License No.</label>
            <input type="text" name="license" ref={licenseNoInputRef} />
          </div>
          {/* <Input label="Driver Name" name="driverName" />
          <Input label="Age" name="age" />
          <Input label="Gender" name="gender" />
          <Input label="License No." name="license" /> */}
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
