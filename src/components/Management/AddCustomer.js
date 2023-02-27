import React, { useRef, useState } from "react";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import SelectBox from "../UI/Select/SelectBox";
import Select from "react-select";
import classes from "./AddCustomer.module.css";
import { useNavigate } from "react-router-dom";

const AddCustomer = (props) => {
  const [selected, setSelected] = useState("");
  const idInputRef = useRef();
  const nameInputRef = useRef();
  const packageInputRef = useRef();
  const addressInputRef = useRef();
  const personInputRef = useRef();
  const contactInputRef = useRef();
  const gstinInputRef = useRef();
  const navigate = useNavigate();
  const options = [
    { value: "Standard", label: "Standard" },
    { value: "Gold", label: "Gold" },
    { value: "Premium", label: "Premium" },
  ];

  const handleChange = (selectedOption) => {
    setSelected(selectedOption.value);
  };
  const addCustomerHandler = (e) => {
    e.preventDefault();
    const enteredId = idInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    // const enteredpackage = packageInputRef.current.value;
    const enteredaddress = addressInputRef.current.value;
    const enteredperson = personInputRef.current.value;
    const enteredcontact = contactInputRef.current.value;
    const enteredgstin = gstinInputRef.current.value;
    console.log(
      enteredId,
      enteredName,
      selected,
      enteredaddress,
      enteredcontact,
      enteredgstin,
      enteredperson
    );
    idInputRef.current.value = "";
    nameInputRef.current.value = "";
    addressInputRef.current.value = "";
    personInputRef.current.value = "";
    contactInputRef.current.value = "";
    gstinInputRef.current.value = "";
    setSelected("");
    navigate("/manage-admin");
  };

  console.log(selected);
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.addCustomer}>
        <h3>Add Customer</h3>
        <form onSubmit={addCustomerHandler}>
          <div className={classes.inputBox}>
            <label>Customer Id</label>
            <input type="text" name="customerId" ref={idInputRef} />
          </div>
          <div className={classes.inputBox}>
            <label>Customer Name</label>
            <input type="text" name="customerId" ref={nameInputRef} />
          </div>
          <div className={classes.selectBox}>
            <label>Service Package</label>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderRadius: "10px",
                  marginTop: "5px",
                  backgroundColor: "rgb(219, 219, 219)",
                  border: "none",
                  height: "10px",
                }),
                option: (styles, { isFocused, isSelected }) => ({
                  ...styles,
                  backgroundColor: isSelected
                    ? "#114A62"
                    : "rgb(219, 219, 219)",
                }),
              }}
              options={options}
              onChange={handleChange}
            />
          </div>
          {/* <SelectBox onChange={props.onChange} /> */}
          <div className={classes.inputBox}>
            <label>Address</label>
            <input type="text" name="adress" ref={addressInputRef} />
          </div>
          <div className={classes.inputBox}>
            <label>Contact Person</label>
            <input type="text" name="customerId" ref={personInputRef} />
          </div>
          <div className={classes.inputBox}>
            <label>Contact Number</label>
            <input type="text" name="customerId" ref={contactInputRef} />
          </div>
          <div className={classes.inputBox}>
            <label>GSTIN Number</label>
            <input type="text" name="customerId" ref={gstinInputRef} />
          </div>
          {/* <Input label="Customer Id" name="customerId" innerRef={idInputRef} />
          <Input label="Customer Name" name="customerName" innerRef={nameInputRef} />
          <SelectBox innerRef={packageInputRef} />
          <Input label="Address" name="address" innerRef={addressInputRef} />

          <Input
            label="Contact Person"
            name="contactperson"
            innerRef={personInputRef}
          />
          <Input label="Contact" name="contact" innerRef={contactInputRef} />
          <Input label="GSTIN Number" name="gstinNo" innerRef={gstinInputRef} /> */}

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
