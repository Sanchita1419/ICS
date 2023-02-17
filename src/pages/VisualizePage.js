import React from "react";
import Visualize from "../components/Visualize/Visualize";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import VisAdmin from "../components/Visualize/VisAdmin";

const VisualizePage = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  return (
    <>
      <Header />
      {isAdmin ? <VisAdmin /> : <Visualize />};
    </>
  );
};

export default VisualizePage;
