import React from "react";
import classes from "./DriverList.module.css";
import SearchIcon from "@mui/icons-material/Search";
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
const DriverList = () => {
  return (
    <div className={classes.driverList}>
      <div className={classes.dLHeader}>
        <h2>Driver List</h2>
        <form>
          <input
            type="text"
            placeholder="Search By driver name"
            name="search"
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
      <div className={classes.dTable}>
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
                {/* <td>{d.status}</td> */}
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverList;
{
  /* <tr>
              <td>1</td>
              <td>Driver 1</td>
              <td>30</td>
              <td>Male</td>
              <td>7889787</td>
              <td>Complete</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Driver 2</td>
              <td>30</td>
              <td>Male</td>
              <td>7889787</td>
              <td>Incomplete</td>
              <td>Active</td>
            </tr> */
}
