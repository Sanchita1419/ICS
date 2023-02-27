import React, { useEffect, useState } from "react";
import classes from "./DriverManage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link, useNavigate } from "react-router-dom";
import AddDriver from "./AddDriver";
const driverData = [
  {
    no: 1,
    name: "Driver 1",
    age: 30,
    gender: "Male",
    license: "7889787",
    registration: "Complete",
    status: "Active",
  },
  {
    no: 2,
    name: "Driver 2",
    age: 34,
    gender: "Male",
    license: "7845787",
    registration: "Incomplete",
    status: "Suspended",
  },
  {
    no: 3,
    name: "Driver 3",
    age: 40,
    gender: "Male",
    license: "7645717",
    registration: "Complete",
    status: "Suspended",
  },
];
const DriverManage = () => {
  const [filteredData, setFilteredData] = useState(driverData);
  const [searchValue, setSearchValue] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddDriver = () => {
    setShowAddForm(true);
    // navigate("/manage/customer");
  };
  const hideAddHandler = () => {
    setShowAddForm(false);
  };
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    const filteredDrivers = driverData.filter((value) =>
      value.license.includes(searchValue)
    );
    setFilteredData(filteredDrivers);
  }, [searchValue]);
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
              onChange={searchHandler}
            />
            <SearchIcon style={{ color: "#114A62", marginRight: "5px" }} />
            {/* <button type="submit">
            </button> */}
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
            {filteredData.map((d) => (
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
      {showAddForm && <AddDriver onClose={hideAddHandler} />}
    </div>
  );
};

export default DriverManage;
