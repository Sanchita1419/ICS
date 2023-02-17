import React, { useState } from "react";
import classes from "./CustomerManage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Link, useNavigate } from "react-router-dom";
import AddCustomer from "./AddCustomer";
const customerData = [
  {
    no: 1,
    customerId: 12345,
    customerName: "Customer 1",
    servicePackage: "Standard",
    address: "Address1",
    contact: 987654321,
    gstinNo: 345678798,
    status: "Active",
  },
  {
    no: 2,
    customerId: 12345,
    customerName: "Customer 2",
    servicePackage: "Standard",
    address: "Address2",
    contact: 987654321,
    gstinNo: 345678798,
    status: "Suspended",
  },
  {
    no: 3,
    customerId: 12345,
    customerName: "Customer 3",
    servicePackage: "Standard",
    address: "Address3",
    contact: 987654321,
    gstinNo: 345678798,
    status: "Active",
  },
];

const CustomerManage = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate();
  const handleAddCustomer = () => {
    setShowAddForm(true);
    // navigate("/manage/customer");
  };
  const hideAddHandler = () => {
    setShowAddForm(false);
  };
  // const handleEditVehicle = (regNo) => {
  //   navigate(`/manage/vehicle/${regNo}`);
  // };
  return (
    <>
      <div className={classes.cManage}>
        <div className={classes.cMHeader}>
          <h2>Manage Customers</h2>
          <div className={classes.cMForm}>
            <div>
              <button className={classes.addButton} onClick={handleAddCustomer}>
                Add Customer
              </button>
            </div>
            <form>
              <input type="text" placeholder="Search By Name" name="search" />
              <button type="submit">
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>
        <div className={classes.cMTable}>
          <table>
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Customer Id</th>
                <th>Customer name</th>
                <th>Service package</th>
                <th>Address</th>
                <th>Contact</th>
                <th>GSTIN No</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((c) => (
                <tr key={c.no}>
                  <td>{c.no}</td>
                  <td>{c.customerId}</td>
                  <td>{c.customerName}</td>
                  <td>{c.servicePackage}</td>
                  <td>{c.address}</td>
                  <td>{c.contact}</td>
                  <td>{c.gstinNo}</td>

                  {/* <td>{c.status}</td> */}
                  <td>
                    <button
                      className={`${classes.statusButton} ${
                        c.status === "Suspended"
                          ? classes.suspend
                          : classes.active
                      }`}
                    >
                      {c.status}
                    </button>
                  </td>
                  <td>
                    <Link to={`/manage/customer/${c.customerId}`}>
                      <button
                        style={{ color: "#114a62" }}
                        className={classes.iconButton}
                      >
                        <EditRoundedIcon />
                      </button>
                    </Link>

                    <button
                      style={{ color: "#DC0000" }}
                      className={classes.iconButton}
                    >
                      <DeleteRoundedIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showAddForm && <AddCustomer onClose={hideAddHandler} />}
    </>
  );
};

export default CustomerManage;
