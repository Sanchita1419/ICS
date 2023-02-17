import React from "react";
import classes from "./CustomerList.module.css";
import SearchIcon from "@mui/icons-material/Search";

const CustomerList = () => {
  return (
    <div className={classes.customerList}>
      <h2>CustomerList</h2>
      <div className={classes.cLHeader}>
        <form>
          <input
            type="text"
            placeholder="Search By Customer Id"
            name="search"
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerList;
