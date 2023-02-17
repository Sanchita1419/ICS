import React from "react";
import { useSelector } from "react-redux";
import DashAdmin from "../components/Dashboard/DashAdmin";
import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/Header/Header";
const DashboardPage = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  console.log(isAdmin);
  return (
    <>
      <Header />
      {isAdmin ? <DashAdmin /> : <Dashboard />};
    </>
  );
};

export default DashboardPage;
