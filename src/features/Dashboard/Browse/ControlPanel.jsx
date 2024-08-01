import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import styles from "./ControlPanel.scss";
import { filterByOptions, sortOptions } from "./data";
import SelectInput from "../../../ui/select-input/SelectInput";
import ToggleView from "../../../ui/toggle-view/ToggleView";

const ControlPanel = () => {
  const [view, setView] = useState("grid");
  const [status, setStatus] = useState("active");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handleStatusChange = (event, newStatus) => {
    setStatus(newStatus);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box
      className={styles.controlPanel}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      style={{ borderRadius: "4px", backgroundColor: "#e6e6e6", height: "61px", padding: "10px" }}
    >
      <ToggleView value={view} onChange={handleViewChange} />

      <Tabs
        value={status}
        onChange={handleStatusChange}
        aria-label="status tabs"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab value="active" label="Active" />
        <Tab value="completed" label="Completed" />
      </Tabs>

      <Box display="flex" alignItems="center">
        <SelectInput
          value={filter}
          onChange={handleFilterChange}
          options={filterByOptions}
          placeholder="Filter By"
        />
        <SelectInput
          value={sort}
          onChange={handleSortChange}
          options={sortOptions}
          placeholder="Ending Soon"
        />
      </Box>
    </Box>
  );
};

export default ControlPanel;
