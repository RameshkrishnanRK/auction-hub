import React, { useState } from "react";
import PropTypes from "prop-types";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";

const Sidebar = ({ setSubCatData, setSubRegData }) => {
  const [openCategories, setOpenCategories] = useState({});
  const [openRegions, setOpenRegions] = useState({});
  const [checkedSubcategories, setCheckedSubcategories] = useState([]);
  const [checkedSubregions, setCheckedSubregions] = useState([]);

  const {
    data: categories = [], 
    loading: categoryLoading,
    error: categoryError,
  } = useSelector((state) => state.sidebar);

  const {
    data: regions = [], 
    loading: regionsLoading,
    error: regionsError,
  } = useSelector((state) => state.sideBarRegion);

  const handleCategoryClick = (categoryName) => {
    setOpenCategories((prevOpenCategories) => ({
      ...prevOpenCategories,
      [categoryName]: !prevOpenCategories[categoryName],
    }));
  };

  const handleRegionClick = (regionName) => {
    setOpenRegions((prevOpenRegions) => ({
      ...prevOpenRegions,
      [regionName]: !prevOpenRegions[regionName],
    }));
  };

  const handleSubcategoryCheck = (subcategoryName) => {
    const updatedCheckedSubcategories = checkedSubcategories.includes(subcategoryName)
      ? checkedSubcategories.filter((name) => name !== subcategoryName)
      : [...checkedSubcategories, subcategoryName];

    setCheckedSubcategories(updatedCheckedSubcategories);
    setSubCatData(updatedCheckedSubcategories);
  };

  const handleSubregionCheck = (subregionName) => {
    const updatedCheckedSubregions = checkedSubregions.includes(subregionName)
      ? checkedSubregions.filter((name) => name !== subregionName)
      : [...checkedSubregions, subregionName];

    setCheckedSubregions(updatedCheckedSubregions);
    setSubRegData(updatedCheckedSubregions);
  };
  return (
    <div className={styles.sideBarContainer}>
      <Paper className={styles.sidebarxCategories}>
        <Typography variant="h6" className={styles.sidebarCategoriesContent}>
          Categories
        </Typography>
        {categoryLoading && <Typography>Loading categories...</Typography>}
        {categoryError && <Typography>Error loading categories</Typography>}
        {!categoryLoading && !categoryError && (
          <List>
            {categories.map((category, index) => (
              <div key={index}>
                <ListItem button onClick={() => handleCategoryClick(category.name)}>
                  <ListItemText primary={`${category.name} (${category.quantity})`} />
                  {category.subcategories?.length > 0 ? (
                    openCategories[category.name] ? <ExpandLess /> : <ExpandMore />
                  ) : null}
                </ListItem>
                {category.subcategories?.length > 0 && (
                  <Collapse in={openCategories[category.name]} timeout="auto" unmountOnExit>
                    <List component="div" >
                      {category.subcategories.map((subcategory, subIndex) => (
                        <ListItem key={subIndex} sx={{padding:"0px 16px"}}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checkedSubcategories.includes(subcategory.name)}
                                onChange={() => handleSubcategoryCheck(subcategory.name)}
                                name={subcategory.name}
                                sx={{ transform: "scale(0.5)" }}
                              />
                              
                            }
                            label={
                              <Typography sx={{ fontSize: "12px"}}>
                                {subcategory.name}
                              </Typography>
                            }
                            sx={{ margin: 0, padding: 0 }}
                            />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </List>
        )}
      </Paper>
      <Paper className={styles.sidebarxRegions}>
        <Typography variant="h6" className={styles.sidebarRegionsContent}>
          Regions
        </Typography>
        {regionsLoading && <Typography>Loading regions...</Typography>}
        {regionsError && <Typography>Error loading regions</Typography>}
        {!regionsLoading && !regionsError && (
          <List>
            {regions.map((region, index) => (
              <div key={index}>
                <ListItem button onClick={() => handleRegionClick(region.name)}>
                  <ListItemText primary={`${region.name} (${region.quantity})`} />
                  {region.subregions?.length > 0 ? (
                    openRegions[region.name] ? <ExpandLess /> : <ExpandMore />
                  ) : null}
                </ListItem>
                {region.subregions?.length > 0 && (
                  <Collapse in={openRegions[region.name]} timeout="auto" unmountOnExit>
                    <List component="div" >
                      {region.subregions.map((subregion, subIndex) => (
                        <ListItem key={subIndex} sx={{padding:"0px 16px"}}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checkedSubregions.includes(subregion.name)}
                                onChange={() => handleSubregionCheck(subregion.name)}
                                name={subregion.name}
                                sx={{ transform: "scale(0.5)" }}
                              />
                            }
                            label={
                              <Typography sx={{ fontSize: "12px"}}>
                                {subregion.name}
                              </Typography>
                            }
                            sx={{ margin: 0, padding: 0 }}
                            />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </List>
        )}
      </Paper>
    </div>
  );
};

Sidebar.propTypes = {
  setSubCatData: PropTypes.func.isRequired,
  setSubRegData: PropTypes.func.isRequired,
};

export default Sidebar;