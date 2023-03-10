import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Select from "react-select";
import classes from "./AddTrip.module.css";
import { axiosInstance } from "../../config";
const AddTrip = (props) => {
  const customerIdInputRef = useRef();
  const customerNameInputRef = useRef();
  const vehicleRegNoInputRef = useRef();
  // const driversInputRef1 = useRef("");
  // const driversInputRef2 = useRef("");
  // const driversInputRef3 = useRef("");
  const driversInputRef1 = useRef(null);
  const driversInputRef2 = useRef(null);
  const driversInputRef3 = useRef(null);
  const startTimeInputRef = useRef();
  const endTimeInputRef = useRef();
  const [formIsValid, setFormIsValid] = useState("");
  const [driverNo, setDriverNo] = useState(0);

  const navigate = useNavigate();

  /** Adding new trip */
  const addTripHandler = async (e) => {
    e.preventDefault();
    const enteredcustomerId = customerIdInputRef.current.value;
    const enteredcustomerName = customerNameInputRef.current.value;
    const enteredvehicleRegNo = vehicleRegNoInputRef.current.value;
    // const entereddriverName1 = driversInputRef1.current.value;
    // const entereddriverName2 = driversInputRef2.current.value;
    // const entereddriverName3 = driversInputRef3.current.value;
    const entereddriverId1 = driversInputRef1.current.value;
    const entereddriverId2 = driversInputRef2.current.value;
    const entereddriverId3 = driversInputRef3.current.value;

    const enteredstartTime = startTimeInputRef.current.value.replace(/T/g, " ");
    const enteredendTime = endTimeInputRef.current.value.replace(/T/g, " ");
    // vehicle_No regex = ^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$
    console.log("Adding");
    // console.log(entereddriverName1, entereddriverName2, entereddriverName3);
    // console.log(entereddriverName1, entereddriverName2, entereddriverName3);
    const url =
      "https://2x8710joc3.execute-api.ap-south-1.amazonaws.com/addtrip";
    const newTripData = {
      PlannedStartTime: enteredstartTime,
      PlannedEndTime: enteredendTime,
      Veh_Reg_No: enteredvehicleRegNo,
      CustomerID: parseInt(enteredcustomerId),
      TripStatus: "Scheduled",
      // Driver_Name_1: entereddriverName1,
      // Driver_Name_2: entereddriverName2,
      // Driver_Name_3: entereddriverName3,
      DriverID_1: parseInt(entereddriverId1),
      DriverID_2: parseInt(entereddriverId2),
      DriverID_3: parseInt(entereddriverId3),

      CustomerName: enteredcustomerName,
    };
    console.log(JSON.stringify(newTripData));
    const response = await axiosInstance.post("/trip", newTripData);
    console.log(response.data.message);
    alert(response.data.message);
    window.location.reload();
    // try {
    //   const response = await fetch(url, {
    //     mode: "no-cors",
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(newTripData),
    //   });
    //   const responseJson = await response.json();
    //   console.log("response", responseJson);
    // } catch (err) {
    //   console.log(err);
    // }

    // await fetch(url, {
    //   mode: "no-cors",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newTripData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));

    // console.log(
    //   enteredstartTime + ":00",
    //   enteredendTime + ":00",
    //   enteredvehicleRegNo,
    //   enteredcustomerId,
    //   parseInt(entereddriverId1),
    //   parseInt(entereddriverId2),
    //   parseInt(entereddriverId3),
    //   enteredcustomerName
    // );

    customerIdInputRef.current.value = "";
    customerNameInputRef.current.value = "";
    vehicleRegNoInputRef.current.value = "";
    driversInputRef1.current.value = null;
    driversInputRef2.current.value = null;
    driversInputRef3.current.value = null;
    startTimeInputRef.current.value = "";
    endTimeInputRef.current.value = "";
  };
  // const options = [
  //   { value: 1, label: "1" },
  //   { value: 2, label: "2" },
  //   { value: 3, label: "3" },
  // ];
  // const handleChange = (selectedOption) => {
  //   setDriverNo(selectedOption.value);
  // };
  // let content = [];
  //for (let i = 1; i <= driverNo; i++) {
  //  if(i===1){
  //   const itemProps = {ref: driversInputRef1}
  //   } else if(i===2){
  //     const itemProps = {ref:driversInputRef2}
  //   } else{
  //     const itemProps={ref:driversInputRef3}
  //   }
  // content.push(
  //   <div className={classes.inputBox}>
  //     <label>Driver Name {i}</label>
  //     <input type="text" name="driverId" ref={driversInputRef[i]} />
  //   </div>
  // );
  //}
  console.log(driverNo);
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.addTrip}>
        <h3>Add Trip</h3>
        <form onSubmit={addTripHandler}>
          <div className={classes.inputBox}>
            <label>Customer Id</label>
            <input type="number" name="customerId" defaultValue={3} disabled />
          </div>
          <div className={classes.inputBox}>
            <label>Customer Name</label>
            <input
              type="text"
              name="customerName"
              defaultValue={"Uber"}
              ref={customerNameInputRef}
              required
            />
          </div>
          <div className={classes.inputBox}>
            <label>Vehicle Reg No</label>
            <input
              type="text"
              name="vehicleId"
              ref={vehicleRegNoInputRef}
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
              ref={driversInputRef1}
              required
            />
          </div>
          <div className={classes.inputBox}>
            <label>Driver Id 2</label>
            <input type="number" name="driverName2" ref={driversInputRef2} />
          </div>
          <div className={classes.inputBox}>
            <label>Driver Id 3</label>
            <input type="number" name="driverName3" ref={driversInputRef3} />
          </div>
          <div className={classes.inputBox}>
            <label>Start Time</label>
            <input
              type="datetime-local"
              name="startTime"
              ref={startTimeInputRef}
              required
            />
          </div>
          <div className={classes.inputBox}>
            <label>End Time</label>
            <input
              type="datetime-local"
              name="endTime"
              ref={endTimeInputRef}
              required
            />
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
