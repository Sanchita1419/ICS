import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import SelectBox from "../UI/Select/SelectBox";
import classes from "./EditCustomer.module.css";

const EditCustomer = (props) => {
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate("/manage");
  };
  return (
    <Modal>
      <div className={classes.editCustomer}>
        <h3>Edit Customer</h3>
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
            <button onClick={cancelHandler}>Cancel</button>
            <button>Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditCustomer;
