import React, { useState } from "react";
import classes from "./Management.module.css";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import PlaceIcon from "@mui/icons-material/Place";
import VehicleManage from "./VehicleManage";
import DriverManage from "./DriverManage";
import TripManage from "./TripManage";

const Management = () => {
  const [container, setContainer] = useState("trip");
  const [active, setActive] = useState("item3");
  const handleVehicle = () => {
    setContainer("vehicle");
  };
  const handleDriver = () => {
    setContainer("driver");
  };
  const handleTrip = () => {
    setContainer("trip");
  };
  const setActiveItem = (item) => {
    if (item !== active) {
      setActive(item);
    } else {
      setActive(""); // handle click on currently active item
    }
    console.log(item);
  };
  return (
    <div className={classes.management}>
      <div className={classes.mSidebar}>
        <div
          className={`${classes.mSidebarItem} ${
            active === "item1" ? classes.active : ""
          }`}
          onClick={() => {
            handleVehicle();
            setActiveItem("item1");
          }}
        >
          <DirectionsCarIcon />
          <span>Manage Vehicle</span>
        </div>
        <div
          className={`${classes.mSidebarItem} ${
            active === "item2" ? classes.active : ""
          }`}
          onClick={() => {
            handleDriver();
            setActiveItem("item2");
          }}
        >
          <PeopleIcon />
          <span>Manage Driver</span>
        </div>
        <div
          className={`${classes.mSidebarItem} ${
            active === "item3" ? classes.active : ""
          }`}
          onClick={() => {
            handleTrip();
            setActiveItem("item3");
          }}
        >
          <PlaceIcon />
          <span>Manage Trips</span>
        </div>
      </div>
      <div className={classes.mContainer}>
        {container === "vehicle" && <VehicleManage />}
        {container === "driver" && <DriverManage />}
        {container === "trip" && <TripManage />}
      </div>
    </div>
  );
};

export default Management;
