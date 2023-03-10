import React, { useEffect, useState } from "react";
import classes from "./VehicleManage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import AddVehicle from "./AddVehicle";
import { axiosInstance } from "../../config";

const VehicleManage = () => {
  const [vehicleData, setVehicleData] = useState([]);
  const [filteredData, setFilteredData] = useState(vehicleData);
  const [searchValue, setSearchValue] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddVehicle = () => {
    setShowAddForm(true);
  };

  useEffect(() => {
    const getVehicle = async () => {
      const response = await axiosInstance.get("/vehicle");
      console.log(response.data);
      setVehicleData(response.data);
      setIsLoading(false);
    };
    getVehicle();
  }, []);
  console.log(vehicleData);
  const hideAddHandler = () => {
    setShowAddForm(false);
  };

  // const handleEditVehicle = (Veh_Reg_No) => {
  //   navigate(`/manage/vehicle/${Veh_Reg_No}`);
  // };
  /** Delete a vehicle */
  const deleteVehicleHandler = async (id) => {
    console.log(id);
    if (window.confirm("Are you sure want to delete this vehicle?")) {
      // console.log("deleting");
      const response = await axiosInstance.delete("/vehicle", {
        data: { id: id },
      });
      console.log(response);
      alert(response.data.message);
      window.location.reload();
    } else {
    }
  };
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };
  // useEffect(() => {
  //   const filteredVehicles = vehicleData.filter((value) =>
  //     value.Veh_Reg_No.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   setFilteredData(filteredVehicles);
  // }, [searchValue, vehicleData]);
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
            <input
              type="text"
              placeholder="Search By Reg No."
              name="search"
              onChange={searchHandler}
            />
            <SearchIcon style={{ color: "#114A62", marginRight: "5px" }} />
            {/* <button type="submit">
            </button> */}
          </form>
        </div>
      </div>
      <div className={classes.vMTable}>
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
                <th>Reg No.</th>
                <th>Vehicle type</th>
                <th>Associated Mobile no.</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicleData.map((v) => (
                <tr key={v.slNo}>
                  <td>{v.slNo}</td>
                  <td>{v.Veh_Reg_No}</td>
                  <td>{v.VehType}</td>
                  <td>{v.MobileNumber}</td>
                  <td>
                    {v.VehStatus.toLowerCase() === "in service" && (
                      <button
                        className={`${classes.statusButton} ${classes.inService}`}
                      >
                        {v.VehStatus.toLowerCase()}
                      </button>
                    )}
                    {v.VehStatus.toLowerCase() === "out of service" && (
                      <button
                        className={`${classes.statusButton} ${classes.outOfService}`}
                      >
                        {v.VehStatus.toLowerCase()}
                      </button>
                    )}
                    {v.VehStatus.toLowerCase() === "suspended" && (
                      <button
                        className={`${classes.statusButton} ${classes.suspended}`}
                      >
                        {v.VehStatus.toLowerCase()}
                      </button>
                    )}

                    {/* <button
                      className={`${classes.statusButton} ${
                        v.VehStatus.toUpperCase() === "SUSPENDED"
                          ? classes.suspend
                          : classes.active
                      }`}
                    >
                      {v.VehStatus.toUpperCase()}
                    </button> */}
                  </td>
                  <td>
                    <Link to={`/manage/vehicle/${v.Veh_Reg_No}`}>
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
                      onClick={() => deleteVehicleHandler(v.Veh_Reg_No)}
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
      {showAddForm && <AddVehicle onClose={hideAddHandler} />}
    </div>
  );
};

export default VehicleManage;
