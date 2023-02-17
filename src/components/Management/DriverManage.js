import React from "react";
import classes from "./DriverManage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link, useNavigate } from "react-router-dom";
const driverData = [
  {
    no: 1,
    name: "Driver 1",
    age: 30,
    gender: "Male",
    license: 7889787,
    registration: "Complete",
    status: "Active",
  },
  {
    no: 2,
    name: "Driver 2",
    age: 34,
    gender: "Male",
    license: 7845787,
    registration: "Incomplete",
    status: "Suspended",
  },
  {
    no: 3,
    name: "Driver 3",
    age: 40,
    gender: "Male",
    license: 7645717,
    registration: "Complete",
    status: "Suspended",
  },
];
const DriverManage = () => {
  const navigate = useNavigate();
  const handleAddDriver = () => {
    navigate("/manage/driver");
  };
  return (
    <div className={classes.dManage}>
      <div className={classes.dMHeader}>
        <h2>DriverManage</h2>
        <div className={classes.dMForm}>
          <div>
            <button className={classes.addButton} onClick={handleAddDriver}>
              Add Driver
            </button>
          </div>
          <form>
            <input
              type="text"
              placeholder="Search By license no"
              name="search"
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
      <div className={classes.dMTable}>
        <table>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>License no.</th>
              <th>Registration</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {driverData.map((d) => (
              <tr key={d.no}>
                <td>{d.no}</td>
                <td>{d.name}</td>
                <td>{d.age}</td>
                <td>{d.gender}</td>
                <td>{d.license}</td>
                <td>{d.registration}</td>
                <td>
                  <button
                    className={`${classes.statusButton} ${
                      d.status === "Suspended"
                        ? classes.suspend
                        : classes.active
                    }`}
                  >
                    {d.status}
                  </button>
                </td>
                <td>
                  <Link to={`/manage/driver/${d.license}`}>
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
  );
};

export default DriverManage;
