import React from "react";
import classes from "./VehicleList.module.css";
import SearchIcon from "@mui/icons-material/Search";
const vehicleData = [
  {
    no: 1,
    regNo: 12345678,
    vehicleType: "Truck",
    mobileNo: "9876543210",
    status: "Active",
  },
  {
    no: 2,
    regNo: 12346848,
    vehicleType: "Truck",
    mobileNo: "9675432210",
    status: "Suspended",
  },
  {
    no: 3,
    regNo: 18345578,
    vehicleType: "Truck",
    mobileNo: "9846592110",
    status: "Active",
  },
];
const VehicleList = () => {
  return (
    <div className={classes.vehicleList}>
      <div className={classes.vLHeader}>
        <h2>Vehicle List</h2>
        <div className={classes.vLForm}>
          <form>
            <input
              type="text"
              placeholder="Search By Registration no."
              name="search"
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
      {/* <input
                type="text"
                // placeholder="&#128269;"
                //placeholder={`${(<SearchIcon />)}${"Search by Registration No."}`}
                //  onChange={handleChange}
                //  value={searchInput}
              >
                
              </input> */}
      <div className={classes.vTable}>
        <table>
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Reg No.</th>
              <th>Vehicle type</th>
              <th>Associated Mobile no.</th>
              <th>Status</th>
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
              </tr>
            ))}
            {/* <tr>
              <td>1</td>
              <td>12345678</td>
              <td>Truck</td>
              <td>9876543210</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>2</td>
              <td>12345675</td>
              <td>Truck</td>
              <td>9873545210</td>
              <td>Suspended</td>
            </tr>
            <tr>
              <td>3</td>
              <td>12345670</td>
              <td>Truck</td>
              <td>9873565910</td>
              <td>Active</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleList;
