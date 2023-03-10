import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../config";
import Modal from "../UI/Modal/Modal";
import classes from "./EditVehicle.module.css";
import { ClipLoader } from "react-spinners";

const EditVehicle = (props) => {
  const params = useParams();
  const vehicleId = params.id;
  console.log(params.id);
  const [vehicleData, setVehicleData] = useState({});
  useEffect(() => {
    const fetchVehicle = async (id) => {
      const response = await axiosInstance.get("/vehicle/" + id);
      console.log(response.data);
      setVehicleData(response.data[0]);
    };
    fetchVehicle(vehicleId);
  }, [vehicleId]);
  const navigate = useNavigate();
  const validMobileNo = /^[0-9]{10}$/;
  const checkMobileNo = (value) => validMobileNo.test(value);
  const [formValidity, setFormValidity] = useState({
    mobileNo: true,
  });
  const mobileChangeHandler = (e) => {
    setVehicleData({
      ...vehicleData,
      MobileNumber: e.target.value,
    });
  };
  const statusChangeHandler = (e) => {
    setVehicleData({
      ...vehicleData,
      VehStatus: e.target.value,
    });
  };
  const cancelHandler = () => {
    navigate("/manage");
  };
  const editVehicleHandler = async (e) => {
    e.preventDefault();
    console.log(vehicleData);
    if (window.confirm("Are you sure want to update this vehicle?")) {
      const response = await axiosInstance.put(
        "/vehicle/" + vehicleId,
        vehicleData
      );
      alert(response.data.message);
    }
    navigate("/manage");
  };
  return (
    <>
      {Object.keys(vehicleData).length === 0 ? (
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
          <div className={classes.editVehicle}>
            <h3>Edit Vehicle</h3>
            <form onSubmit={editVehicleHandler}>
              {/* <div className={classes.inputBox}>
                <label>Customer Id</label>
                <input type="text" name="cusId" defaultValue={3} disabled />
              </div> */}
              <div className={classes.inputBox}>
                <label>Registration No.</label>
                <input
                  type="text"
                  name="regNo"
                  defaultValue={vehicleData.Veh_Reg_No}
                  disabled
                />
              </div>
              <div className={classes.inputBox}>
                <label>Vehicle Type</label>
                <input
                  type="text"
                  name="vehicleType"
                  defaultValue={vehicleData.VehType}
                  disabled
                />
              </div>
              <div className={classes.inputBox}>
                <label>Associated Mobile No.</label>
                <input
                  type="text"
                  name="mobileNo"
                  defaultValue={vehicleData.MobileNumber}
                  onChange={mobileChangeHandler}
                />
              </div>
              <div className={classes.inputRadio}>
                {/* <div className={classes.inputRadioOption}>
                  <input
                    type="radio"
                    name="radioButton1"
                    value="Active"
                    id="radioSelect1"
                    style={{ margin: "0 5px 2px 0" }}
                    onChange={statusChangeHandler}
                    checked={vehicleData.vehStatus === "ACTIVE"}
                  />
                  <label for="radioSelect1">Active</label>
                </div> */}
                <div className={classes.inputRadioOption}>
                  <input
                    type="radio"
                    name="radioButton1"
                    value="In service"
                    id="radioSelect1"
                    style={{ margin: "0 5px 2px 0" }}
                    onChange={statusChangeHandler}
                    checked={
                      vehicleData.VehStatus.toLowerCase() === "in service"
                    }
                  />
                  <label for="radioSelect3">In Service</label>
                </div>
                <div className={classes.inputRadioOption}>
                  <input
                    type="radio"
                    name="radioButton2"
                    value="Out Of service"
                    id="radioSelect2"
                    style={{ margin: "0 5px 2px 0" }}
                    onChange={statusChangeHandler}
                    checked={
                      vehicleData.VehStatus.toLowerCase() === "out of service"
                    }
                  />
                  <label for="radioSelect3">Out of Service</label>
                </div>
                <div className={classes.inputRadioOption}>
                  <input
                    type="radio"
                    name="radioButton3"
                    value="Suspended"
                    id="radioSelect3"
                    style={{ margin: "0 5px 2px 0" }}
                    onChange={statusChangeHandler}
                    checked={
                      vehicleData.VehStatus.toLowerCase() === "suspended"
                    }
                  />
                  <label for="radioSelect3">Suspended</label>
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

export default EditVehicle;
