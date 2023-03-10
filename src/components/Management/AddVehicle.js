// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { axiosInstance } from "../../config";
// import Modal from "../UI/Modal/Modal";
// import classes from "./AddVehicle.module.css";

// const AddVehicle = (props) => {
//   const regNoInputRef = useRef();
//   const vehicleTypeInputRef = useRef();
//   const mobileNoInputRef = useRef();
//   // const [errorMobileNo, setErrorMobileNo] = useState(false);
//   // const [errorRegNo, setErrorRegNo] = useState(false);

//   const navigate = useNavigate();
//   // const validRegNo = "^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$";
//   // const validMobileNo = "/^(+d{1,3}[- ]?)?d{10}$/";
//   const addVehicleHandler = async (e) => {
//     e.preventDefault();
//     const enteredregNo = regNoInputRef.current.value;
//     const enteredvehicleType = vehicleTypeInputRef.current.value;
//     const enteredmobileNo = mobileNoInputRef.current.value;
//     // if (enteredregNo.match(validRegNo)) {
//     //   setErrorRegNo(false);
//     // } else {
//     //   setErrorRegNo(true);
//     // }
//     // if (enteredmobileNo.match(validMobileNo)) {
//     //   setErrorMobileNo(false);
//     // } else {
//     //   setErrorMobileNo(true);
//     // }
//     console.log("Adding");
//     console.log(enteredregNo, enteredvehicleType, enteredmobileNo);
//     const newVehicleData = {
//       Veh_Reg_No: enteredregNo,
//       MobileNumber: enteredmobileNo,
//       VehType: enteredvehicleType,
//       VehStatus: "ACTIVE",
//       CustomerID: "3",
//     };
//     console.log(JSON.stringify(newVehicleData));
//     const response = await axiosInstance.post("/vehicle", newVehicleData);
//     console.log(response.data.message);
//     alert(response.data.message);
//     window.location.reload();
//     // navigate("/manage");
//     regNoInputRef.current.value = "";
//     vehicleTypeInputRef.current.value = "";
//     mobileNoInputRef.current.value = "";
//   };
//   return (
//     <Modal onClose={props.onClose}>
//       <div className={classes.addVehicle}>
//         <h3>Add Vehicle</h3>
//         <form onSubmit={addVehicleHandler}>
//           <div className={classes.inputBox}>
//             <label>Customer Id</label>
//             <input type="text" name="cusId" defaultValue={3} disabled />
//           </div>
//           <div className={classes.inputBox}>
//             <label>Registration No.</label>
//             <input type="text" name="regNo" ref={regNoInputRef} required />
//             {/* {errorRegNo && (
//               <p className={classes.errorText}>
//                 Enter valid Registration number
//               </p>
//             )} */}
//           </div>
//           <div className={classes.inputBox}>
//             <label>Vehicle Type</label>
//             <input
//               type="text"
//               name="vehicleType"
//               ref={vehicleTypeInputRef}
//               required
//             />
//           </div>
//           <div className={classes.inputBox}>
//             <label>Associated Mobile No.</label>
//             <input
//               type="text"
//               name="mobileNo"
//               ref={mobileNoInputRef}
//               required
//             />
//             {/* {errorMobileNo && (
//               <p className={classes.errorText}>Enter valid Mobile number</p>
//             )} */}
//           </div>
//           {/* <Input label="Registration No." name="regNo" />
//           <Input label="Vehicle Type" name="vehicleType" />
//           <Input label="Associated Mobile No." name="mobileNo" /> */}

//           <div className={classes.buttonContainer}>
//             <button onClick={props.onClose}>Cancel</button>
//             <button>Save</button>
//           </div>
//         </form>
//       </div>
//     </Modal>
//   );
// };

// export default AddVehicle;

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config";
import Modal from "../UI/Modal/Modal";
import classes from "./AddVehicle.module.css";
import Select from "react-select";

const AddVehicle = (props) => {
  const validRegNo = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
  // const validMobileNo = "/^(+d{1,3}[- ]?)?d{10}$/";
  const validMobileNo = /^[0-9]{10}$/;
  const checkRegNo = (value) => validRegNo.test(value);
  //const checkMobileNo = (value) => value.trim().length === 10;
  const checkMobileNo = (value) => validMobileNo.test(value);

  const [formValidity, setFormValidity] = useState({
    regNo: true,
    mobileNo: true,
  });
  const [enteredvehicleType, setEnteredvehicleType] = useState("");
  const regNoInputRef = useRef();
  // const vehicleTypeInputRef = useRef();
  const mobileNoInputRef = useRef();
  const navigate = useNavigate();

  const vehTypeChangeHandler = (selected) => {
    setEnteredvehicleType(selected.value);
  };
  const addVehicleHandler = async (e) => {
    e.preventDefault();
    const enteredregNo = regNoInputRef.current.value;
    // const enteredvehicleType = vehicleTypeInputRef.current.value;
    const enteredmobileNo = mobileNoInputRef.current.value;

    const enteredregNoIsValid = checkRegNo(enteredregNo);
    console.log(enteredregNoIsValid);
    const enteredMobileNoIsValid = checkMobileNo(enteredmobileNo);
    setFormValidity({
      regNo: enteredregNoIsValid,
      mobileNo: enteredMobileNoIsValid,
    });
    const formIsValid = enteredregNoIsValid && enteredMobileNoIsValid;
    console.log(enteredMobileNoIsValid);
    if (!formIsValid) {
      // console.log("invalid");
      return;
    }
    console.log("Adding");

    const newVehicleData = {
      Veh_Reg_No: enteredregNo,
      MobileNumber: enteredmobileNo,
      VehType: enteredvehicleType,
      VehStatus: "In service",
      CustomerID: "3",
    };
    console.log(JSON.stringify(newVehicleData));
    const response = await axiosInstance.post("/vehicle", newVehicleData);
    console.log(response.data.message);
    alert(response.data.message);
    window.location.reload();
    navigate("/manage");
    regNoInputRef.current.value = "";
    mobileNoInputRef.current.value = "";
    setEnteredvehicleType("");
  };
  const options = [
    { value: "PA-SEDAN", label: "PA-SEDAN" },
    { value: "PA-HATCHBACK", label: "PA-HATCHBACK" },
    { value: "PA-SUV", label: "PA-SUV" },
    { value: "TR-MINI", label: "TR-MINI" },
    { value: "TR-TANKER", label: "TR-TANKER" },
    { value: "TR-MEDIUM", label: "TR-MEDIUM" },
    { value: "TR-CARGE", label: "TR-CARGE" },
  ];
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.addVehicle}>
        <h3>Add Vehicle</h3>
        <form onSubmit={addVehicleHandler}>
          <div className={classes.inputBox}>
            <label>Customer Id</label>
            <input type="text" name="cusId" defaultValue={3} disabled />
          </div>
          <div className={classes.inputBox}>
            <label>Registration No.</label>
            <input type="text" name="regNo" ref={regNoInputRef} required />
            {!formValidity.regNo && (
              <p className={classes.errorText}>
                Enter valid Registration number
              </p>
            )}
          </div>
          {/* <div className={classes.inputBox}>
            <label>Vehicle Type</label>
            <input
              type="text"
              name="vehicleType"
              ref={vehicleTypeInputRef}
              required
            />
          </div> */}
          <div className={classes.selectBox}>
            <label>Vehicle Type</label>

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
              onChange={vehTypeChangeHandler}
            />
            {/* {content} */}
          </div>
          <div className={classes.inputBox}>
            <label>Associated Mobile No.</label>
            <input
              type="text"
              name="mobileNo"
              ref={mobileNoInputRef}
              required
            />
            {!formValidity.mobileNo && (
              <p className={classes.errorText}>Enter valid Mobile number</p>
            )}
            {/* {errorMobileNo && (
              <p className={classes.errorText}>Enter valid Mobile number</p>
            )} */}
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
