import React from "react";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import SelectBox from "../UI/Select/SelectBox";
import classes from "./AddCustomer.module.css";

const AddCustomer = (props) => {
  const options = [
    { value: "standard", label: "Standard" },
    { value: "Gold", label: "Gold" },
    { value: "Premium", label: "Premium" },
  ];
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.addCustomer}>
        <h3>Add Customer</h3>
        <form>
          <Input label="Customer Id" name="customerId" />
          <Input label="Customer Name" name="customerName" />
          {/* <Input label="Service package" name="servicePackage" /> */}
          <SelectBox />
          <Input label="Address" name="address" />

          <Input label="Contact Person" name="contactperson" />
          <Input label="Contact" name="contact" />
          <Input label="GSTIN Number" name="gstinNo" />

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