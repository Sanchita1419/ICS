import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal/Modal";
import classes from "./EditTrip.module.css";

const EditTrip = (props) => {
  const tripData = {
    TripID: 102,
    PlannedStartTime: ["Mon Nov 16 2020", "10:34:45"],
    PlannedEndTime: ["Tue Nov 17 2020", "09:00:00"],
    Veh_Reg_No: "MH01AV8866",
    TripStatus: "scheduled",
    CustomerName: "Uber",
    DriverID: [1, 3, null],
  };
  const navigate = useNavigate();
  const editTripHandler = () => {};
  const customerIdChangeHandler = () => {};
  const customerNameChangeHandler = () => {};
  const vehicleRegNoChangeHandler = () => {};
  const driverId1ChangeHandler = () => {};
  const driverId2ChangeHandler = () => {};
  const driverId3ChangeHandler = () => {};
  const startTimeChangeHandler = () => {};
  const endTimeChangeHandler = () => {};
  const cancelHandler = () => {
    navigate("/manage");
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.editTrip}>
        <h3>Edit Trip</h3>
        <form onSubmit={editTripHandler}>
          <div className={classes.inputBox}>
            <label>Customer Id</label>
            <input
              type="number"
              name="customerId"
              defaultValue={tripData.CustomerID}
              onChange={customerIdChangeHandler}
            />
          </div>
          <div className={classes.inputBox}>
            <label>Customer Name</label>
            <input
              type="text"
              name="customerName"
              defaultValue={tripData.CustomerName}
              onChange={customerNameChangeHandler}
              required
            />
          </div>
          <div className={classes.inputBox}>
            <label>Vehicle Reg No</label>
            <input
              type="text"
              name="vehicleRegNo"
              defaultValue={tripData.Veh_Reg_No}
              onChange={vehicleRegNoChangeHandler}
              required
            />
          </div>
          {/* <div className={classes.selectBox}>
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
          {content}
          </div> */}
          <div className={classes.inputBox}>
            <label>Driver Id 1</label>
            <input
              type="number"
              name="driverName1"
              defaultValue={tripData.DriverID[0]}
              onChange={driverId1ChangeHandler}
              required
            />
          </div>
          <div className={classes.inputBox}>
            <label>Driver Id 2</label>
            <input
              type="number"
              name="driverName2"
              defaultValue={tripData.DriverID[1]}
              onChange={driverId2ChangeHandler}
            />
          </div>
          <div className={classes.inputBox}>
            <label>Driver Id 3</label>
            <input
              type="number"
              name="driverName3"
              defaultValue={tripData.DriverID[2]}
              onChange={driverId3ChangeHandler}
            />
          </div>
          <div className={classes.inputBox}>
            <label>Start Time</label>
            <input
              type="datetime-local"
              name="startTime"
              defaultValue={tripData.PlannedStartTime}
              onChange={startTimeChangeHandler}
            />
          </div>
          <div className={classes.inputBox}>
            <label>End Time</label>
            <input
              type="datetime-local"
              name="endTime"
              defaultValue={tripData.PlannedEndTime}
              onChange={endTimeChangeHandler}
            />
          </div>

          <div className={classes.buttonContainer}>
            <button onClick={cancelHandler}>Cancel</button>
            <button>Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditTrip;
