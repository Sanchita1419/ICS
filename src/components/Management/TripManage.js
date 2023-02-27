import React, { useEffect, useState } from "react";
import classes from "./TripManage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Link, useNavigate } from "react-router-dom";
import AddTrip from "./AddTrip";
const TripData = [
  {
    no: 1,
    tripId: 11111,
    vehicleId: 22222,
    driverId: [33333, 55555, 66666],
    startTime: "10:20",
    endTime: "04:30",
    status: "Ongoing",
  },
  {
    no: 1,
    tripId: 11111,
    vehicleId: 22222,
    driverId: [33333],
    startTime: "10:20",
    endTime: "04:30",
    status: "Completed",
  },
  {
    no: 1,
    tripId: 11111,
    vehicleId: 22222,
    driverId: [33333, 55555],
    startTime: "10:20",
    endTime: "04:30",
    status: "Yet to start",
  },
];
const TripManage = () => {
  const [filteredData, setFilteredData] = useState(TripData);
  const [searchValue, setSearchValue] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const navigate = useNavigate();
  const handleAddTrip = () => {
    setShowAddForm(true);
    // navigate("/manage/customer");
  };
  const hideAddHandler = () => {
    setShowAddForm(false);
  };
  // const deleteTripHandler = (id) => {
  //   const trips = TripData.filter((t) => t.tripId === id);
  // };
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  // useEffect(() => {
  //   const filteredTrips = TripData.filter((value) =>
  //     value.customerName.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   setFilteredData(filteredTrips);
  // }, [searchValue]);

  return (
    <>
      <div className={classes.tManage}>
        <div className={classes.tMHeader}>
          <h2>Manage Trips</h2>
          <div className={classes.tMForm}>
            <div>
              <button className={classes.addButton} onClick={handleAddTrip}>
                Add Trips
              </button>
            </div>
            <form>
              <input
                type="text"
                placeholder="Search By Trip Id"
                name="search"
                onChange={searchHandler}
              />
              {/* <button type="submit">
              </button> */}
              <SearchIcon style={{ color: "#114A62", marginRight: "5px" }} />
            </form>
          </div>
        </div>
        <div className={classes.tMTable}>
          <table>
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Trip Id</th>
                <th>Vehicle Id</th>
                <th>Driver Id</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((t) => (
                <tr key={t.no}>
                  <td>{t.no}</td>
                  <td>{t.tripId}</td>
                  <td>{t.vehicleId}</td>
                  {/* <td>{t.driverId}</td> */}
                  <td>
                    {t.driverId.map((d) => (
                      <>
                        <span>{d}</span>
                        <br />
                      </>
                    ))}
                  </td>
                  <td>{t.startTime}</td>
                  <td>{t.endTime}</td>
                  <td>
                    {/* <button
                      className={`${classes.statusButton} ${
                        c.status === "Suspended"
                          ? classes.suspend
                          : classes.active
                      }`}
                    >
                      {c.status}
                    </button> */}
                    <td>
                      {t.status === "Ongoing" && (
                        <button
                          className={`${classes.statusButton} ${classes.ongoing}`}
                        >
                          {t.status}
                        </button>
                      )}
                      {t.status === "Completed" && (
                        <button
                          className={`${classes.statusButton} ${classes.completed}`}
                        >
                          {t.status}
                        </button>
                      )}
                      {t.status === "Yet to start" && (
                        <button
                          className={`${classes.statusButton} ${classes.toStart}`}
                        >
                          {t.status}
                        </button>
                      )}
                    </td>
                  </td>
                  <td>
                    <Link to={`/manage/trip/${t.tripId}}`}>
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
                      // onClick={() => deleteTripHandler(t.tripId)}
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
      {showAddForm && <AddTrip onClose={hideAddHandler} />}
    </>
  );
};

export default TripManage;
