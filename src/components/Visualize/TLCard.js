import React from "react";
import classes from "./TLCard.module.css";
import locations from "../../images/locations.png";

const TLCard = () => {
  return (
    <div className={classes.tLCard}>
      <div className={classes.tLCardHeading}>
        07 Feb 2023 8.41 PM - 9.30PM | 5 km{" "}
      </div>
      <div className={classes.tLCardBody}>
        <div className={classes.tLCardImg}>
          <img src={locations} />
        </div>
        <div className={classes.tLCardDetail}>
          <div className={classes.tLPlaceA}>Place A</div>
          <br />
          <div className={classes.tLPlaceB}>Place B</div>
        </div>
      </div>
      <div className={classes.tLCardFooter}>
        <p>Trip Id : 1234569</p>
      </div>
    </div>
  );
};

export default TLCard;
