import React, { useState } from "react";
import classes from "./VehicleManage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Link, useNavigate } from "react-router-dom";
import AddVehicle from "./AddVehicle";
const vehicleData = [
  {
    no: 1,
    regNo: "KA19EQ2893",
    vehicleType: "Truck",
    mobileNo: "9876543210",
    status: "Active",
  },
  {
    no: 2,
    regNo: "KA19YT2845",
    vehicleType: "Truck",
    mobileNo: "9675432210",
    status: "Suspended",
  },
  {
    no: 3,
    regNo: "KA19KQ5638",
    vehicleType: "Truck",
    mobileNo: "9846592110",
    status: "Active",
  },
  {
    no: 4,
    regNo: "KA19KY5634",
    vehicleType: "Truck",
    mobileNo: "9752374098",
    status: "Active",
  },
  {
    no: 5,
    regNo: "KA19ER9035",
    vehicleType: "Truck",
    mobileNo: "9752356392",
    status: "Suspended",
  },
  {
    no: 6,
    regNo: "KA19ER7309",
    vehicleType: "Truck",
    mobileNo: "9756309098",
    status: "Active",
  },
  {
    no: 7,
    regNo: "KA19WS8934",
    vehicleType: "Truck",
    mobileNo: "9752345097",
    status: "Active",
  },
];

const VehicleManage = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const handleAddVehicle = () => {
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
    <div className={classes.vManage}>
      <div className={classes.vMHeader}>
        <h2>Manage Vehicle</h2>
        <div className={classes.vMForm}>
          <div>
            <button className={classes.addButton} onClick={handleAddVehicle}>
              Add Vehicle
            </button>
          </div>
          <form>
            <input type="text" placeholder="Search By Reg No." name="search" />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
      <div className={classes.vMTable}>
        <table>
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Reg No.</th>
              <th>Vehicle type</th>
              <th>Associated Mobile no.</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicleData.map((v) => (
              <tr key={v.no}>
                <td>{v.no}</td>
                <td>{v.regNo}</td>
                <td>{v.vehicleType}</td>
                <td>{v.mobileNo}</td>
                {/* <td>{v.status}</td> */}
                <td>
                  <button
                    className={`${classes.statusButton} ${
                      v.status === "Suspended"
                        ? classes.suspend
                        : classes.active
                    }`}
                  >
                    {v.status}
                  </button>
                </td>
                <td>
                  <Link to={`/manage/vehicle/${v.regNo}`}>
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
      {showAddForm && <AddVehicle onClose={hideAddHandler} />}
    </div>
  );
};

export default VehicleManage;
