import React, { useEffect, useState } from "react";
import classes from "./TripManage.module.css";
import { ClipLoader } from "react-spinners";
import SearchIcon from "@mui/icons-material/Search";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Link, useNavigate } from "react-router-dom";
import AddTrip from "./AddTrip";
import { axiosInstance } from "../../config";
// const TripData = [
//   {
//     no: 1,
//     tripId: 11111,
//     vehicleRegNo: 22222,
//     driverName: [33333, 55555, 66666],
//     startTime: "10:20",
//     endTime: "04:30",
//     status: "Ongoing",
//   },
//   {
//     no: 2,
//     tripId: 11111,
//     vehicleRegNo: 22222,
//     driverName: [33333],
//     startTime: "10:20",
//     endTime: "04:30",
//     status: "Completed",
//   },
//   {
//     no: 3,
//     tripId: 11111,
//     vehicleRegNo: 22222,
//     driverName: [33333, 55555],
//     startTime: "10:20",
//     endTime: "04:30",
//     status: "Scheduled",
//   },
// ];
const TripManage = () => {
  const [tripData, setTripData] = useState([]);
  // const [filteredData, setFilteredData] = useState(TripData);
  const [searchValue, setSearchValue] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let slNo = 0;

  //const navigate = useNavigate();

  /** Get all trip details */
  useEffect(() => {
    const getTrip = async () => {
      const response = await axiosInstance.get("/trip");
      console.log(response.data);
      setTripData(response.data);
      setIsLoading(false);
    };
    getTrip();
  }, []);

  /** Show or add form */
  const handleAddTrip = () => {
    setShowAddForm(true);
  };
  const hideAddHandler = () => {
    setShowAddForm(false);
  };

  /** Delete a trip */
  // const deleteTripHandler = (id) => {
  //   const trips = TripData.filter((t) => t.tripId === id);
  // };

  /** Search a trip */
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  // useEffect(() => {
  //   const filteredTrips = TripData.filter((value) =>
  //     value.customerName.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   setFilteredData(filteredTrips);
  // }, [searchValue]);
  // const newDate = new Date(tripData.PlannedStartTime.split(" ")[0]);
  // console.log(newDate);
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
              <SearchIcon style={{ color: "#114A62", marginRight: "5px" }} />
            </form>
          </div>
        </div>
        <div className={classes.tMTable}>
          {isLoading ? (
            <ClipLoader
              color="#114a62"
              loading
              cssOverride={{ textAlign: "center" }}
              size={150}
              speedMultiplier={0.5}
              // aria-label="Loading Spinner"
              // data-testid="loader"
            />
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Trip Id</th>
                  <th>Vehicle Reg No.</th>
                  <th>Driver Id</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tripData.map((t) => (
                  <tr key={slNo}>
                    <td>{slNo}</td>
                    <td>{t.TripID}</td>
                    <td>{t.Veh_Reg_No}</td>
                    <td>
                      {t.DriverID.map((d) => (
                        <>
                          <span>{d}</span>
                          <br />
                        </>
                      ))}
                    </td>
                    <td>{t.PlannedStartTime}</td>
                    <td>{t.PlannedEndTime}</td>
                    <td>
                      {t.TripStatus.toLowerCase() === "ongoing" && (
                        <button
                          className={`${classes.statusButton} ${classes.ongoing}`}
                        >
                          Ongoing
                        </button>
                      )}
                      {t.TripStatus.toLowerCase() === "completed" && (
                        <button
                          className={`${classes.statusButton} ${classes.completed}`}
                        >
                          Completed
                        </button>
                      )}
                      {t.TripStatus.toLowerCase() === "scheduled" && (
                        <button
                          className={`${classes.statusButton} ${classes.scheduled}`}
                        >
                          Scheduled
                        </button>
                      )}
                    </td>
                    <td>
                      <Link to={`/manage/trip/${t.TripId}}`}>
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
          )}
        </div>
      </div>
      {showAddForm && <AddTrip onClose={hideAddHandler} />}
    </>
  );
};

export default TripManage;
