import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import SelectBox from "../UI/Select/SelectBox";
import Select from "react-select";
import classes from "./EditCustomer.module.css";
const customerData = [
  {
    no: 1,
    customerId: "12345",
    customerName: "Customer 1",
    servicePackage: "Standard",
    address: "Address1",
    person: "Person 1",
    contact: 987654321,
    gstinNo: 345678798,
    status: "Active",
  },
  {
    no: 2,
    customerId: "12346",
    customerName: "Customer 2",
    servicePackage: "Gold",
    address: "Address2",
    person: "Person 2",
    contact: 987654321,
    gstinNo: 345678798,
    status: "Suspended",
  },
  {
    no: 3,
    customerId: "12347",
    customerName: "Customer 3",
    servicePackage: "Standard",
    address: "Address3",
    person: "Person 3",
    contact: 987654321,
    gstinNo: 345678798,
    status: "Active",
  },
];
const EditCustomer = (props) => {
  const [name, setName] = useState("");
  const [servicePackage, setServicePackage] = useState("");
  const [address, setAddress] = useState("");
  const [person, setPerson] = useState("");
  const [contact, setContact] = useState("");
  const [gstin, setGstin] = useState("");
  const navigate = useNavigate();
  const cId = useParams();

  const customers = customerData.filter((c) => {
    return c.customerId === cId.id;
  });
  const [status, setStatus] = useState(customers[0].status);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const servicePackageChangeHandler = (e) => {
    setServicePackage(e.value);
  };
  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };
  const personChangeHandler = (e) => {
    setPerson(e.target.value);
  };
  const contactChangeHandler = (e) => {
    setContact(e.target.value);
  };
  const gstinChangeHandler = (e) => {
    setGstin(e.target.value);
  };
  const statusChangeHandler = (e) => {
    setStatus(e.target.value);
    // setIsActive(e.target.value);
  };
  // console.log(isActive);

  const editCustomerHandler = (e) => {
    e.preventDefault();

    console.log(name, servicePackage, address, person, contact, gstin, status);
  };
  const cancelHandler = () => {
    navigate("/manage");
  };
  const options = [
    { value: "Standard", label: "Standard" },
    { value: "Gold", label: "Gold" },
    { value: "Premium", label: "Premium" },
  ];
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.editCustomer}>
        <h3>Edit Customer</h3>
        <form onSubmit={editCustomerHandler}>
          <div className={classes.inputBox}>
            <label>Customer Id</label>
            <input
              type="text"
              name="customerId"
              value={cId.id}
              disabled
              style={{ backgroundColor: "#C7BCA1" }}
            />
          </div>
          <div className={classes.inputBox}>
            <label>Customer Name</label>
            <input
              type="text"
              name="customerId"
              defaultValue={customers[0].customerName}
              onChange={nameChangeHandler}
            />
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
                  color: "#114A62",
                }),
                option: (styles, { isFocused, isSelected }) => ({
                  ...styles,
                  backgroundColor: isSelected
                    ? "#114A62"
                    : "rgb(219, 219, 219)",
                  color: isSelected ? "white" : "#114A62",
                }),
              }}
              options={options}
              defaultValue={{
                value: customers[0].servicePackage,
                label: customers[0].servicePackage,
              }}
              onChange={servicePackageChangeHandler}
            />
          </div>
          {/* <SelectBox onChange={props.onChange} /> */}
          <div className={classes.inputBox}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              defaultValue={customers[0].address}
              onChange={addressChangeHandler}
            />
          </div>
          <div className={classes.inputBox}>
            <label>Contact Person</label>
            <input
              type="text"
              name="person"
              defaultValue={customers[0].person}
              onChange={personChangeHandler}
            />
          </div>
          <div className={classes.inputBox}>
            <label>Contact Number</label>
            <input
              type="text"
              name="contact"
              defaultValue={customers[0].contact}
              onChange={contactChangeHandler}
            />
          </div>
          <div className={classes.inputBox}>
            <label>GSTIN Number</label>
            <input
              type="text"
              name="customerId"
              defaultValue={customers[0].gstinNo}
              onChange={gstinChangeHandler}
            />
          </div>
          <p style={{ margin: "0 15px" }}>Status</p>
          <div className={classes.inputRadio}>
            <div className={classes.inputRadioOption}>
              <input
                type="radio"
                name="radioButton1"
                value="Active"
                id="radioSelect1"
                style={{ margin: "0 5px 2px 0" }}
                onChange={statusChangeHandler}
                checked={status === "Active"}
              />
              <label for="radioSelect1">Active</label>
            </div>
            <div className={classes.inputRadioOption}>
              <input
                type="radio"
                name="radioButton2"
                value="Suspended"
                id="radioSelect2"
                style={{ margin: "0 5px 2px 0" }}
                onChange={statusChangeHandler}
                checked={status === "Suspended"}
              />
              <label for="radioSelect2">Suspended</label>
            </div>
          </div>
          {/* <Input label="Customer Id" name="customerId" />
          <Input label="Customer Name" name="customerName" />
          <SelectBox />
          <Input label="Address" name="address" />

          <Input label="Contact Person" name="contactperson" />
          <Input label="Contact" name="contact" />
          <Input label="GSTIN Number" name="gstinNo" /> */}

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
