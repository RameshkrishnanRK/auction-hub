import { GridViewOutlined } from "@mui/icons-material";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ListIcon from "@mui/icons-material/List";
import styles from "./ControlPanel.scss";
import { filterByOptions, sortOptions } from "../../jsonData";
import GridView from "./GridView";
import ListView from "./ListView";
import filteredProducts from '../Dashboard/Browse'

const ControlPanel = ({ subCatData, searchTerm, subRegData , products, setFilteredProducts}) => {
  const [view, setView] = useState("grid");
  const [status, setStatus] = useState("active");
  const [filter, setFilter] = useState("all");
  const [sortData, setSortData] = useState("");


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
    setSortData(event.target.value);
  };
  useEffect(()=> {
    let filtered = products;
    if ( subCatData.length >0) {
      filtered = filtered.filter((product)=>
      subCatData.includes(product.subCatType));
    }
    if (subRegData.length >0){
      filtered = filtered.filter ((product)=>
      subRegData.includes(product.subRegType));
    }
    // if (status){
    //   filtered = filtered.filter((product)=> product.status === status);
    // }
    // if (filter !== "all"){
    //   filtered = filtered.filter ((product)=>product.type === filter);
    // }
    // if (sortData === "price-lowest"){
    //   filtered = filtered.sort((a,b) => a.currentBid - b.currentBid);
    // } else if (sortData === "price-highest"){
    //   filtered = filtered.sort((a,b) => b.currentBid - a.currentBid);
    // } else if (sortData === "title-a-to-z") {
    //   filtered = filtered.sort ((a,b)=> a.title.localCompare(b.title));
    // } else if (sortData === "title-z-to-a"){
    //   filtered = filtered.sort((a,b)=> b.title.localeCompare(a.title));
    // }
    setFilteredProducts(filtered);
  }, [subCatData, subRegData, products, setFilteredProducts]);
  return (
    <div>
      <Box
        className={styles.controlPanel}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        style={{
          borderRadius: "4px",
          backgroundColor: "#e6e6e6",
          height: "40px",
          padding: "10px",
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={view}
          exclusive
          onChange={handleViewChange}
          aria-label="view"
          className={styles.viewToggleGroup}
          size="small"
          sx={{
            "& .MuiToggleButton-root": {
              "&.Mui-selected": {
                backgroundColor: "#1768ac",
                color: "#ffffff",
              },
              "&:not(.Mui-selected)": {
                backgroundColor: "#ffffff",
                color: "#1768ac",
              },
            },
          }}
        >
          <ToggleButton
            value="grid"
            aria-label="grid view"
            className={view === "grid" ? "active" : ""}
            sx={{
              backgroundColor: view === "grid" ? "#1768ac" : "#ffffff",
              color: view === "grid" ? "#ffffff" : "#1768ac",
            }}
          >
            <GridViewOutlined />
          </ToggleButton>
          <ToggleButton
            value="list"
            aria-label="list view"
            className={view === "list" ? "active" : ""}
            sx={{
              backgroundColor: view === "list" ? "#ffffff" : "#1768ac",
              color: view === "list" ? "#1768ac" : "#ffffff",
            }}
          >
            <ListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Tabs
          value={status}
          onChange={handleStatusChange}
          aria-label="status tabs"
          sx={{
            borderRadius: "5px",
            "& .MuiTab-root": {
              minWidth: 120,
              minHeight: 30,
              padding: 0,
              lineHeight: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          style={{ minHeight: "20px" }}
        >
          <Tab
            value="active"
            label="Active"
            sx={{
              backgroundColor: status === "active" ? "#1768ac" : "#ffffff",
              "&.Mui-selected": {
                color: status === "active" ? "#ffffff" : "#1768ac",
              },
            }}
            style={{ minHeight: "40px" }}
          />
          <Tab
            value="completed"
            label="Completed"
            sx={{
              backgroundColor: status === "completed" ? "#1768ac" : "#ffffff",
              "&.Mui-selected": {
                color: status === "completed" ? "#ffffff" : "#1768ac",
              },
            }}
            style={{ minHeight: "40px" }}
          />
        </Tabs>
        <Box display="flex" alignItems="center">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="filter-by">Filter By</InputLabel>
            <Select
              labelId="filter-by"
              value={filter}
              label="Filter By"
              onChange={handleFilterChange}
              displayEmpty
              className={styles.controlPanelSelect}
              sx={{
                backgroundColor: "#ffffff",
              }}
            >
              {filterByOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="sort-by">Sort By</InputLabel>
            <Select
              labelId="sort-by"
              value={sortData}
              label="Sort By"
              onChange={handleSortChange}
              displayEmpty
              className={styles.controlPanelSelect}
              sx={{
                backgroundColor: "#ffffff",
              }}
            >
              {sortOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      {view === "grid" ? (
        <GridView
        products={filteredProducts}
          subCatData={subCatData}
          subRegData={subRegData}
          searchTerm={searchTerm}
          status={status}
          filter={filter}
          sortData={sortData}
        />
      ) : (
        <ListView
        products={filteredProducts}
          subCatData={subCatData}
          subRegData={subRegData}
          searchTerm={searchTerm}
          status={status}
          filter={filter}
          sortData={sortData}
        />
      )}
    </div>
  );
};

export default ControlPanel;
