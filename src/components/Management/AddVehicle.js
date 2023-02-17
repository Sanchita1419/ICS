import React from "react";
import classes from "./AddVehicle.module.css";

const AddVehicle = () => {
  return (
    <div className={classes.addSection}>
      <div className={classes.vehicleInfo}>
        <h3>Add new vehicle</h3>
        {/* <i class="icon ion-ios-ionic-outline" aria-hidden="true"></i> */}
      </div>
      <form
        action="#"
        method="POST"
        className={classes.addVehicle}
        name="signupform"
      >
        <ul>
          <li>
            <label for="customerId"></label>
            <input
              type="text"
              className={classes.inputFields}
              id="customerId"
              name="customerId"
              placeholder="Customer Id"
              value=""
              //   oninput="return userNameValidation(this.value)"
              required
            />
          </li>
          <li>
            <label for="regNo"></label>
            <input
              type="text"
              class={classes.inputFields}
              id="regNo"
              name="regNo"
              placeholder="Registration No."
              value=""
              //oninput="return passwordValidation(this.value)"
              required
            />
          </li>
          <li>
            <label for="vehicleType"></label>
            <input
              type="text"
              className={classes.inputFields}
              id="vehicleType"
              name="vehicleType"
              placeholder="Vehicle Type"
              value=""
              required
            />
          </li>
          <li id="center-btn">
            <input
              type="submit"
              className={classes.addButton}
              name="join"
              alt="Join"
              value="Add"
            />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default AddVehicle;
