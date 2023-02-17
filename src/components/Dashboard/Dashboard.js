import { ListItemIcon } from "@mui/material";
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { axiosInstance } from "../../config";
// import { authActions } from "../../redux/authRedux";
// import Button from "../UI/Button";
import StorageIcon from "@mui/icons-material/Storage";
import classes from "./Dashboard.module.css";
const Dashboard = () => {
  // const [img, setImg] = useState();
  // const dispatch = useDispatch();
  // const handleLogOut = () => {
  //   dispatch(authActions.logout());
  // };
  // const handleShow = async () => {
  //   const response = await axiosInstance.get("/data");
  //   const image = response.data.lowlight_image;
  //   const newImg = `data:image/jpg;base64,${image}`;
  //   setImg(newImg);
  // };
  return (
    <div className={classes.dashboard}>
      <div className={classes.dbHeader}>
        <h2>Dashboard</h2>
      </div>
      <div className={classes.dbCardContainer}>
        <div className={classes.dbCard}>
          <p className={classes.name}>
            <ListItemIcon style={{ minWidth: "35px", color: "#114A62" }}>
              <StorageIcon />
            </ListItemIcon>
            Total Trips
          </p>
          <p className={classes.value}>20</p>
        </div>
        <div className={classes.dbCard}>
          <p className={classes.name}>
            <ListItemIcon style={{ minWidth: "35px", color: "#114A62" }}>
              <StorageIcon />
            </ListItemIcon>
            Total Vehicles
          </p>
          <p className={classes.value}>20</p>
        </div>
        <div className={classes.dbCard}>
          <p className={classes.name}>
            <ListItemIcon style={{ minWidth: "35px", color: "#114A62" }}>
              <StorageIcon />
            </ListItemIcon>
            Total Drivers
          </p>
          <p className={classes.value}>20</p>
        </div>
        <div className={classes.dbCard}>
          <p className={classes.name}>
            <ListItemIcon style={{ minWidth: "35px", color: "#114A62" }}>
              <StorageIcon />
            </ListItemIcon>
            Overall Alertness
          </p>
          <p className={classes.value}>20</p>
        </div>
        <div className={classes.dbCard}>
          <p className={classes.name}>
            <ListItemIcon style={{ minWidth: "35px", color: "#114A62" }}>
              <StorageIcon />
            </ListItemIcon>
            Overall Driving
          </p>
          <p className={classes.value}>20</p>
        </div>
        <div className={classes.dbCard}>
          <p className={classes.name}>
            <ListItemIcon style={{ minWidth: "35px", color: "#114A62" }}>
              <StorageIcon />
            </ListItemIcon>
            Overall Incident
          </p>
          <p className={classes.value}>20</p>
        </div>
      </div>
      <div className={classes.dbGraphContainer}>Graph Event type vs time</div>
    </div>
  );
};

export default Dashboard;
