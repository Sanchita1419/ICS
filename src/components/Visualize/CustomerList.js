import React, { useEffect, useState } from "react";
import classes from "./CustomerList.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { axiosInstance } from "../../config";
// const customerData = [
//   {
//     no: 1,
//     customerId: 12345,
//     customerName: "Customer 1",
//     servicePackage: "Standard",
//     address: "Address1",
//     person: "Person 1",
//     contact: 987654321,
//     gstinNo: 345678798,
//     status: "Active",
//   },
//   {
//     no: 2,
//     customerId: 12345,
//     customerName: "Customer 2",
//     servicePackage: "Standard",
//     address: "Address2",
//     person: "Person 2",
//     contact: 987654321,
//     gstinNo: 345678798,
//     status: "Suspended",
//   },
//   {
//     no: 3,
//     customerId: 12345,
//     customerName: "Customer 3",
//     servicePackage: "Standard",
//     address: "Address3",
//     person: "Person 3",
//     contact: 987654321,
//     gstinNo: 345678798,
//     status: "Active",
//   },
// ];
const CustomerList = () => {
  const [customerData, setCustomerData] = useState([]);
  const [filteredData, setFilteredData] = useState(customerData);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/customer");

      setCustomerData(response.data);
    };
    fetchData();
  }, []);
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const filteredCustomers = customerData.filter((value) =>
      value.customerName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredCustomers);
  }, [searchValue, customerData]);
  console.log("Customer", customerData);
  return (
    <div className={classes.customerList}>
      <div className={classes.cLHeader}>
        <h2>CustomerList</h2>
        <form>
          <input
            type="text"
            placeholder="Search By Customer Id"
            name="search"
            onChange={searchHandler}
          />
          {/* <button type="submit">
          </button> */}
          <SearchIcon style={{ color: "#114A62", marginRight: "5px" }} />
        </form>
      </div>
      <div className={classes.cLTable}>
        <table>
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Customer Id</th>
              <th>Customer name</th>
              <th>Service package</th>
              <th>Address</th>
              <th>Contact person</th>
              <th>Contact No.</th>
              <th>GSTIN No</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((c) => (
              <tr key={c.no}>
                <td>{c.no}</td>
                <td>{c.customerId}</td>
                <td>{c.customerName}</td>
                <td>{c.servicePackage}</td>
                <td>{c.address}</td>
                <td>{c.person}</td>
                <td>{c.contact}</td>
                <td>{c.gstinNo}</td>

                {/* <td>{c.status}</td> */}
                <td>
                  <button
                    className={`${classes.statusButton} ${
                      c.status === "Suspended"
                        ? classes.suspend
                        : classes.active
                    }`}
                  >
                    {c.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
