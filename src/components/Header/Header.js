import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AssignmentIcon from "@mui/icons-material/Assignment";
import logoImage from "../../images/LOGO.png";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import StorageIcon from "@mui/icons-material/Storage";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/authRedux";
const Header = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate("/");
    window.location.reload();
  };
  console.log("IsAdmin", isAdmin);
  return (
    <div className={classes.nav}>
      <div className={classes.left}>
        <NavLink to="/" className={classes.navLink}>
          <img src={logoImage} className={classes.logo} alt="logo" />
        </NavLink>
      </div>
      <div className={classes.navMenu}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "rgb(231, 231, 231)" : "white",
            borderBottom: isActive ? "2px solid white" : "none",
          })}
          className={classes.navLink}
        >
          {/* <BarChartIcon /> */}
          <BarChartIcon className={classes.icon} />
          Dashboard
        </NavLink>
        <NavLink
          to={isAdmin ? "/visualize-admin" : "/visualize"}
          style={({ isActive }) => ({
            color: isActive ? "rgb(231, 231, 231)" : "white",
            borderBottom: isActive ? "2px solid white" : "none",
          })}
          className={classes.navLink}
        >
          <PieChartIcon className={classes.icon} />
          Visualization
        </NavLink>
        <NavLink
          to={isAdmin ? "/manage-admin" : "/manage"}
          style={({ isActive }) => ({
            color: isActive ? "rgb(231, 231, 231)" : "white",
            borderBottom: isActive ? "2px solid white" : "none",
          })}
          className={classes.navLink}
        >
          <StorageIcon className={classes.icon} />
          Management
        </NavLink>
        <NavLink
          to="/subscription"
          style={({ isActive }) => ({
            color: isActive ? "rgb(231, 231, 231)" : "white",
            borderBottom: isActive ? "2px solid white" : "none",
            pointerEvents: "none",
          })}
          className={classes.navLink}
        >
          <LocalOfferIcon className={classes.icon} />
          Subscriptions
        </NavLink>
        <NavLink
          to="/reports"
          style={({ isActive }) => ({
            color: isActive ? "rgb(231, 231, 231)" : "white",
            borderBottom: isActive ? "2px solid white" : "none",
            pointerEvents: "none",
          })}
          className={classes.navLink}
        >
          <AssignmentIcon className={classes.icon} />
          Reports
        </NavLink>
      </div>
      <div className={classes.right}>
        <div>
          <SearchIcon className={classes.icon} />
          <ChatBubbleOutlineIcon className={classes.icon} />
          <NotificationsIcon className={classes.icon} />
          <PowerSettingsNewIcon
            className={classes.icon}
            onClick={handleLogout}
          />
        </div>
        <div className={classes.profile}>
          <div className={classes.details}>
            <span>Someone</span>
            <span style={{ fontSize: "0.8rem" }}>IT Admin</span>
          </div>

          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
            className={classes.img}
            alt="userImage"
          />
          <span>{/* <KeyboardArrowDownIcon /> */}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
