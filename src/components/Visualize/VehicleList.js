import React, { useEffect, useState } from "react";
import classes from "./VehicleList.module.css";
import SearchIcon from "@mui/icons-material/Search";
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
const VehicleList = () => {
  const [filteredData, setFilteredData] = useState(vehicleData);
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    const filteredVehicles = vehicleData.filter((value) =>
      value.regNo.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredVehicles);
  }, [searchValue]);
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
              onChange={searchHandler}
            />
            <SearchIcon style={{ color: "#114A62", marginRight: "5px" }} />
            {/* <button type="submit">
            </button> */}
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
            {filteredData.map((v) => (
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
