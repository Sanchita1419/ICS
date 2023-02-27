import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Select from "react-select";
import classes from "./AddTrip.module.css";
const AddTrip = (props) => {
  const tripIdInputRef = useRef();
  const vehicleIdInputRef = useRef();
  const driverIdInputRef = useRef();

  const startTimeInputRef = useRef();
  const endTimeInputRef = useRef();
  const [selected, setSelected] = useState("");
  const [driverNo, setDriverNo] = useState(0);

  const navigate = useNavigate();
  const addVehicleHandler = (e) => {
    e.preventDefault();
    const enteredtripId = tripIdInputRef.current.value;
    const enteredvehicleId = vehicleIdInputRef.current.value;
    const entereddriverId = driverIdInputRef.current.value;

    const enteredstartTime = startTimeInputRef.current.value;
    const enteredendTime = endTimeInputRef.current.value;

    console.log("Adding");
    // console.log(enteredname, enteredage, enteredgender, enteredlicenseNo);
    navigate("/manage");
    tripIdInputRef.current.value = "";
    vehicleIdInputRef.current.value = "";
    driverIdInputRef.current.value = "";

    startTimeInputRef.current.value = "";
    endTimeInputRef.current.value = "";
  };
  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
  ];
  const handleChange = (selectedOption) => {
    setDriverNo(selectedOption.value);
  };
  let content = [];
  for (let i = 1; i <= driverNo; i++) {
    content.push(
      <div className={classes.inputBox}>
        <label>Driver Id {i}</label>
        <input type="text" name="driverId" ref={driverIdInputRef} />
      </div>
    );
  }
  console.log(driverNo);
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.addTrip}>
        <h3>Add Trip</h3>
        <form onSubmit={addVehicleHandler}>
          <div className={classes.inputBox}>
            <label>Trip Id</label>
            <input type="text" name="tripId" ref={tripIdInputRef} />
          </div>
          <div className={classes.inputBox}>
            <label>Vehicle Id</label>
            <input type="text" name="vehicleId" ref={vehicleIdInputRef} />
          </div>
          <div className={classes.selectBox}>
            <label>No. of drivers</label>

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderRadius: "10px",
                  marginTop: "5px",
                  backgroundColor: "rgb(219, 219, 219)",
                  border: "none",
                  height: "10px",
                }),
                option: (styles, { isFocused, isSelected }) => ({
                  ...styles,
                  backgroundColor: isSelected
                    ? "#114A62"
                    : "rgb(219, 219, 219)",
                }),
              }}
              options={options}
              onChange={handleChange}
            />
          </div>
          {content}
          <div className={classes.inputBox}>
            <label>Start Time</label>
            <input type="text" name="startTime" ref={startTimeInputRef} />
          </div>
          <div className={classes.inputBox}>
            <label>End Time</label>
            <input type="text" name="endTime" ref={endTimeInputRef} />
          </div>

          <div className={classes.buttonContainer}>
            <button onClick={props.onClose}>Cancel</button>
            <button>Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddTrip;
