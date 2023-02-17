import React from "react";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import classes from "./AddCustomer.module.css";
const AddCustomer = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.addCustomer}>
        <h3>Add Customer</h3>
        <form>
          <Input label="Customer Id" name="customerId" />
          <Input label="Customer name" name="customerName" />
          <Input label="Service package" name="servicePackage" />
          <Input label="Address" name="address" />
          {/* <div className={classes.inputGroup}> */}
          <Input label="Contact" name="contact" />
          <Input label="GSTIN number" name="gstinNo" />
          {/* </div> */}
          <div className={classes.buttonContainer}>
            <button onClick={props.onClose}>Cancel</button>
            <button>Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddCustomer;
