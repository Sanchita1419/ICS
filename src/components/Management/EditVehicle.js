import React from "react";
import { useParams } from "react-router-dom";

const EditVehicle = () => {
  const id = useParams();
  console.log(id);
  return <div>EditVehicle</div>;
};

export default EditVehicle;
