import React, { useState } from "react";
import classes from "./Management.module.css";
import CustomerManage from "./CustomerManage";

const ManageAdmin = () => {
  return (
    <div className={classes.management}>
      {/* <div className={classes.mSidebar}>
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
      </div> */}
      <div className={classes.mContainer}>
        <CustomerManage />
      </div>
    </div>
  );
};

export default ManageAdmin;
