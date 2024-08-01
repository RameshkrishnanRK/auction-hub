import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { GridViewOutlined, List } from "@mui/icons-material";
import "./ToggleView.scss";

const ToggleView = ({ value, onChange }) => (
  <ToggleButtonGroup
    value={value}
    exclusive
    onChange={onChange}
    aria-label="view"
    className="viewToggleGroup"
  >
    <ToggleButton value="grid" aria-label="grid view" className={value === "grid" ? "active" : ""}>
      <GridViewOutlined />
    </ToggleButton>
    <ToggleButton value="list" aria-label="list view" className={value === "list" ? "active" : ""}>
      <List />
    </ToggleButton>
  </ToggleButtonGroup>
);

export default ToggleView;
