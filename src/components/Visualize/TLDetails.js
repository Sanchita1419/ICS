import React from "react";
import map from "../../images/map.png";
import classes from "./TLDetails.module.css";
const TLDetails = () => {
  return (
    <div className={classes.tLDetails}>
      <div className={classes.tLMap}>
        <img src={map} alt="map" />
      </div>
      <div className={classes.tLDetailHeader}>
        Details
        <hr />
        <div className={classes.tLDetail}>
          <div className={classes.driverDetail}>
            <p>Driver name: Driver 1</p>
            <p>License No. : 2872782</p>
          </div>
          <div className={classes.vehicleDetail}>
            <p>Vehicle Type : Truck</p>
            <p>Registration No: KA15YT8907</p>
          </div>
        </div>
      </div>
      <div className={classes.tLAnalysis}>Analysis</div>
    </div>
  );
};

export default TLDetails;
