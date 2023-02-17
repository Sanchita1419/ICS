import React from "react";
import Management from "../components/Management/Management";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import ManageAdmin from "../components/Management/ManageAdmin";

const ManagementPage = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  return (
    <>
      <Header />
      {isAdmin ? <ManageAdmin /> : <Management />};
    </>
  );
};

export default ManagementPage;
