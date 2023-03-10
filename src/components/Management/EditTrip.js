import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../config";
import Modal from "../UI/Modal/Modal";
import classes from "./EditTrip.module.css";
import { ClipLoader } from "react-spinners";

const EditTrip = (props) => {
  const params = useParams();
  const tripId = params.id;
  console.log(params.id);
  const [tripData, setTripData] = useState({});
  useEffect(() => {
    const fetchTrip = async (id) => {
      const response = await axiosInstance.get("/trip/" + id);
      setTripData(response.data.data[0]);
    };
    fetchTrip(tripId);
  }, [tripId]);
  //console.log(tripData.TripStatus.toLowerCase());
  // const [tripData, setTripData] = useState({
  //   TripID: 102,
  //   PlannedStartTime: ["Mon Nov 16 2020", "10:34:45"],
  //   PlannedEndTime: ["Tue Nov 17 2020", "09:00:00"],
  //   Veh_Reg_No: "MH01AV8866",
  //   TripStatus: "scheduled",
  //   CustomerName: "Uber",
  //   DriverID: [1, 3, null],
  // });
  console.log(tripData);
  const navigate = useNavigate();

  const editTripHandler = async (e) => {
    e.preventDefault();
    console.log(tripData);
    if (window.confirm("Are you sure want to update this trip?")) {
      const response = await axiosInstance.put("/trip/" + tripId, tripData);
      alert(response.data.message);
    }
    navigate("/manage");
  };
  // const customerIdChangeHandler = () => {};
  //const customerNameChangeHandler = () => {};
  const vehicleRegNoChangeHandler = (e) => {
    setTripData({
      ...tripData,
      Veh_Reg_No: e.target.value,
    });
  };
  const driverId1ChangeHandler = (e) => {
    setTripData({
      ...tripData,
      DriverID_1: parseInt(e.target.value),
    });
  };
  const driverId2ChangeHandler = (e) => {
    if (e.target.value === "") {
      setTripData({
        ...tripData,
        DriverID_2: null,
      });
    } else {
      setTripData({
        ...tripData,
        DriverID_2: parseInt(e.target.value),
      });
    }
  };
  const driverId3ChangeHandler = (e) => {
    if (e.target.value === "") {
      setTripData({
        ...tripData,
        DriverID_3: null,
      });
    } else {
      setTripData({
        ...tripData,
        DriverID_3: parseInt(e.target.value),
      });
    }
  };
  const startTimeChangeHandler = (e) => {
    setTripData({
      ...tripData,
      PlannedStartTime: e.target.value.replace(/T/g, " "),
    });
  };
  const endTimeChangeHandler = (e) => {
    setTripData({
      ...tripData,
      PlannedEndTime: e.target.value.replace(/T/g, " "),
    });
  };
  const statusChangeHandler = (e) => {
    setTripData({
      ...tripData,
      TripStatus: e.target.value,
    });
  };
  const cancelHandler = () => {
    navigate("/manage");
  };
  const dateToString = (date) => {
    const fDate = new Date(date).toISOString();
    return fDate.split(".")[0];
  };

  return (
    <>
      {Object.keys(tripData).length === 0 ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ClipLoader
            color="#114a62"
            loading
            cssOverride={{ textAlign: "center" }}
            size={150}
            speedMultiplier={0.5}
            // aria-label="Loading Spinner"
            // data-testid="loader"
          />
        </div>
      ) : (
        <Modal onClose={props.onClose}>
          <div className={classes.editTrip}>
            <h3>Edit Trip</h3>
            <form onSubmit={editTripHandler}>
              {/* <div className={classes.inputBox}>
                <label>Customer Id</label>
                <input
                  type="number"
                  name="customerId"
                  defaultValue={tripData.CustomerID}
                  // onChange={customerIdChangeHandler}
                />
              </div> */}
              {/* <div className={classes.inputBox}>
                <label>Customer Name</label>
                <input
                  type="text"
                  name="customerName"
                  defaultValue={tripData.CustomerName}
                  //onChange={customerNameChangeHandler}
                  // style={{ cursor: "not-allowed" }}
                  required
                  disabled
                />
              </div> */}
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
                  defaultValue={
                    tripData.DriverID_1 === null ? "" : tripData.DriverID_1
                  }
                  onChange={driverId1ChangeHandler}
                  required
                />
              </div>
              <div className={classes.inputBox}>
                <label>Driver Id 2</label>
                <input
                  type="number"
                  name="driverName2"
                  defaultValue={
                    tripData.DriverID_2 === null ? "" : tripData.DriverID_2
                  }
                  onChange={driverId2ChangeHandler}
                />
              </div>
              <div className={classes.inputBox}>
                <label>Driver Id 3</label>
                <input
                  type="number"
                  name="driverName3"
                  defaultValue={
                    tripData.DriverID_3 === null ? "" : tripData.DriverID_3
                  }
                  onChange={driverId3ChangeHandler}
                />
              </div>
              <div className={classes.inputBox}>
                <label>Start Time</label>
                <input
                  type="datetime-local"
                  name="startTime"
                  //defaultValue={dateToString(tripData.PlannedStartTime)}
                  defaultValue={tripData.PlannedStartTime}
                  onChange={startTimeChangeHandler}
                  required
                />
              </div>
              <div className={classes.inputBox}>
                <label>End Time</label>
                <input
                  type="datetime-local"
                  name="endTime"
                  // defaultValue={dateToString(tripData.PlannedEndTime)}
                  defaultValue={tripData.PlannedEndTime}
                  onChange={endTimeChangeHandler}
                  required
                />
              </div>
              <div className={classes.inputRadio}>
                <div className={classes.inputRadioOption}>
                  <input
                    type="radio"
                    name="radioButton1"
                    value="Scheduled"
                    id="radioSelect1"
                    style={{ margin: "0 5px 2px 0" }}
                    onChange={statusChangeHandler}
                    checked={tripData.TripStatus.toLowerCase() === "scheduled"}
                  />
                  <label for="radioSelect1">Scheduled</label>
                </div>
                <div className={classes.inputRadioOption}>
                  <input
                    type="radio"
                    name="radioButton2"
                    value="Cancelled"
                    id="radioSelect2"
                    style={{ margin: "0 5px 2px 0" }}
                    onChange={statusChangeHandler}
                    checked={tripData.TripStatus.toLowerCase() === "cancelled"}
                  />
                  <label for="radioSelect2">Cancelled</label>
                </div>
              </div>
              <div className={classes.buttonContainer}>
                <button onClick={cancelHandler}>Cancel</button>
                <button>Save</button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default EditTrip;
