import React from "react";
import { MenuItem, Select } from "@mui/material";
import "./SelectInput.scss";

const SelectInput = ({ value, onChange, options, placeholder }) => (
  <Select value={value} onChange={onChange} displayEmpty className="controlPanelSelect">
    <MenuItem value="" disabled>
      {placeholder}
    </MenuItem>
    {options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </Select>
);

export default SelectInput;
