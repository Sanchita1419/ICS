// import HelpIcon from "@mui/icons-material/Help";
// import React, { useEffect, useRef, useState } from "react";
// import BarChart2 from "../Chart/BarChart2";
// import BarCharts from "../Chart/BarCharts";
// import ScatterChart from "../Chart/ScatterCharts";
// import DropdownButtons from "../UI/DropdownButtons";
// import classes from "./Visualize.module.css";
// import VisualizeButtons from "./VisualizeButtons";
// import GraphCard from "../UI/GraphCard";
// import { axiosInstance } from "../../config";

// const graphData = [
//   {
//     id: 1,
//     type: "defect 1",
//     value: 20,
//   },
//   {
//     id: 2,
//     type: "defect 2",
//     value: 10,
//   },
//   {
//     id: 3,
//     type: "defect 3",
//     value: 30,
//   },
// ];
// const plantData = {
//   name: "Plant",
//   actions: ["Plant 1", "Plant 2", "Plant 3"],
// };
// const lineData = {
//   name: "Line",
//   actions: ["Line 1", "Line 2", "Line 3"],
// };
// const deviceData = {
//   name: "Device",
//   actions: ["Device 1", "Device 2", "Device 3"],
// };
// const Visualize = () => {
//   // const [value, setValue] = useState("");
//   const [filters, setFilters] = useState({});
//   const [totalParts, setTotalParts] = useState(0);
//   const scatterRef = useRef();

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axiosInstance.get("/data/totalparts");
//       setTotalParts(response.data);
//       console.log(response.data);
//     };
//     fetchData();
//   }, []);

//   const handleFilter = (name, value) => {
//     setFilters({ ...filters, [name]: value });
//   };

//   const sendValue = (value, name) => {
//     handleFilter(name, value);
//     console.log(value);
//     console.log(name);
//   };

//   // console.log(filters);
//   return (
//     <div className={classes.visualize}>
//       <div className={classes.visualizeHeader}>
//         <h2>Visualization</h2>
//         <div className={classes.buttonContainer}>
//           <DropdownButtons data={plantData} sendValue={sendValue} />
//           <DropdownButtons data={lineData} sendValue={sendValue} />
//           <DropdownButtons data={deviceData} sendValue={sendValue} />
//           <HelpIcon
//             style={{ color: "#114A62", margin: "0 15px", fontSize: "2.2rem" }}
//           />
//         </div>
//       </div>
//       <div className={classes.visualizeContainer}>
//         <div className={classes.row}>
//           <div className={classes.graphContainer}>
//             <h3>Defect view</h3>
//             <ScatterChart ref={scatterRef} />
//             <div className={classes.visualizeButtonContainer}>
//               <VisualizeButtons forwardRef={scatterRef} />
//             </div>
//           </div>
//           <div className={classes.graphContainer}>
//             <h3>Defect view per shift</h3>
//             <BarCharts />
//             <div className={classes.visualizeButtonContainer}>
//               <VisualizeButtons />
//             </div>
//           </div>
//         </div>
//         <div className={classes.row}>
//           <div className={`${classes.graphContainer} ${classes.disabled}`}>
//             <h3>Parts Inspected</h3>
//             <BarChart2 />
//             <div className={classes.visualizeButtonContainer}>
//               <VisualizeButtons />
//             </div>
//           </div>
//           <div className={classes.graphContainer}>
//             <h3>Total Parts Inspected</h3>
//             <div className={classes.totalParts}>{totalParts}</div>
//             <div>
//               <span>Cumulative</span>
//               <span>
//                 <label className={classes.switch}>
//                   <input type="checkbox" />
//                   <span className={`${classes.slider} ${classes.round}`}></span>
//                 </label>
//               </span>
//               <span>Shift</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className={classes.visualizeContainer}>
//         <div className={classes.row}>
//           <GraphCard>
//             <h3>Defect view</h3>
//             <ScatterChart ref={scatterRef} />
//             <div className={classes.visualizeButtonContainer}>
//               <VisualizeButtons forwardRef={scatterRef} />
//             </div>
//           </GraphCard>

//           <GraphCard>
//             <h3>Defect view per shift</h3>
//             <BarCharts />
//             <div className={classes.visualizeButtonContainer}>
//               <VisualizeButtons />
//             </div>
//           </GraphCard>
//         </div>
//         <div className={classes.row}>
//           <GraphCard>
//             <h3>Parts Inspected</h3>
//             <BarChart2 />
//             <div className={classes.visualizeButtonContainer}>
//               <VisualizeButtons />
//             </div>
//           </GraphCard>
//           <GraphCard>
//             <h3>Total Parts Inspected</h3>
//             <div className={classes.totalParts}>100</div>
//             <div>
//               <span>Cumulative</span>
//               <span>
//                 <label className={classes.switch}>
//                   <input type="checkbox" />
//                   <span className={`${classes.slider} ${classes.round}`}></span>
//                 </label>
//               </span>
//               <span>Shift</span>
//             </div>
//           </GraphCard>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Visualize;

import React, { useState } from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import PlaceIcon from "@mui/icons-material/Place";
import classes from "./Visualize.module.css";
import VehicleList from "./VehicleList";
import TripList from "./TripList";
import DriverList from "./DriverList";
import { NavLink } from "react-router-dom";
const Visualize = () => {
  const [container, setContainer] = useState("vehicle");
  const [active, setActive] = useState("item1");
  const handleVehicle = (item) => {
    setContainer("vehicle");
  };
  const handleDriver = (item) => {
    setContainer("driver");
  };
  const handleTrip = () => {
    setContainer("trip");
  };
  const setActiveItem = (item) => {
    if (item !== active) {
      setActive(item);
    } else {
      setActive(""); // handle click on currently active item
    }
    console.log(item);
  };
  console.log("active", active);
  return (
    <div className={classes.visualize}>
      <div className={classes.vSidebar}>
        <div
          className={`${classes.vSidebarItem} ${
            active === "item1" ? classes.active : ""
          }`}
          onClick={() => {
            handleVehicle();
            setActiveItem("item1");
          }}
        >
          <DirectionsCarIcon />
          <span>Vehicle list</span>
        </div>
        <div
          className={`${classes.vSidebarItem} ${
            active === "item2" ? classes.active : ""
          }`}
          onClick={() => {
            handleDriver();
            setActiveItem("item2");
          }}
        >
          <PeopleIcon />
          <span>Driver list</span>
        </div>
        <div
          className={`${classes.vSidebarItem} ${
            active === "item3" ? classes.active : ""
          }`}
          onClick={() => {
            handleTrip();
            setActiveItem("item3");
          }}
        >
          <PlaceIcon />
          <span>Trips</span>
        </div>
      </div>
      <div className={classes.vContainer}>
        {container === "vehicle" && <VehicleList />}
        {container === "driver" && <DriverList />}
        {container === "trip" && <TripList />}
      </div>
    </div>
  );
};

export default Visualize;
