import React from "react";
import Select from "react-select";
import classes from "./SelectBox.module.css";
const options = [
  { value: "standard", label: "Standard" },
  { value: "Gold", label: "Gold" },
  { value: "Premium", label: "Premium" },
];
const SelectBox = (props) => {
  return (
    <div className={classes.selectBox}>
      <label>Service Package</label>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "10px",
            marginTop: "5px",
            backgroundColor: "rgb(219, 219, 219)",
            border: "none",
            height: "10px",
          }),
          option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            backgroundColor: isSelected ? "#114A62" : "rgb(219, 219, 219)",
          }),
        }}
        options={options}
      />
    </div>
  );
};

export default SelectBox;
