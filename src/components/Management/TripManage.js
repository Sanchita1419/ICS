import React from "react";
import classes from "./TripManage.module.css";
import SearchIcon from "@mui/icons-material/Search";
const TripManage = () => {
  return (
    <div className={classes.tManage}>
      <h2>TripManage</h2>
      <div className={classes.tMHeader}>
        <form>
          <input type="text" placeholder="Search By driver Id" name="search" />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TripManage;
