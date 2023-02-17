import React from "react";
import classes from "./TripList.module.css";
import SearchIcon from "@mui/icons-material/Search";
import TLCard from "./TLCard";
import TLDetails from "./TLDetails";

const TripList = () => {
  return (
    <div className={classes.tripList}>
      <div className={classes.tLHeader}>
        <h2>List of Trips</h2>
        <form>
          <input type="text" placeholder="Search By trip Id" name="search" />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
      <div className={classes.tLDetails}>
        <div className={classes.tripLeft}>
          <TLCard />
          <TLCard />
          <TLCard />
          <TLCard />
          <TLCard />
          <TLCard />
          <TLCard />
        </div>
        <div className={classes.tripRight}>
          <TLDetails />
        </div>
      </div>
    </div>
  );
};

export default TripList;
