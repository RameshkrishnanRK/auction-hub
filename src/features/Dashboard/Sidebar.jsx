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

  FormControlLabel,
  Checkbox,
} from "@mui/material";
import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";

const Sidebar = ({  setSubCatData,  setSubRegData }) => {
  const [openCategories, setOpenCategories] = useState({});
  const [openRegions, setOpenRegions] = useState({});
  // const [view, setView] = useState("main"); // "main", "subcategory", or "subregion"
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedRegion, setSelectedRegion] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedSubregions, setSelectedSubregions] = useState([]);

  const {
    data: categories = [], // default to empty array if data is undefined
    loading: categoryLoading,
    error: categoryError,
  } = useSelector((state) => state.sidebar);
  const {
    data: regions = [], // default to empty array if data is undefined
    loading: regionsLoading,
    error: regionsError,
  } = useSelector((state) => state.sideBarRegion);

  // const handleSubcategoryClick = (subcategory) => {
  //   const updatedSubcategories = [...selectedSubcategories];
  //   if (updatedSubcategories.includes(subcategory)) {
  //     const index = updatedSubcategories.indexOf(subcategory);
  //     updatedSubcategories.splice(index, 1);
  //   } else {
  //     updatedSubcategories.push(subcategory);
  //   }
  //   setSelectedSubcategories(updatedSubcategories);
  //   setSubCatData(updatedSubcategories);
  //   // setSubCatData(subcategory);
  //   // setSelectedCategory(subcategory);
  //   // setView("subcategory");
  // };

  // const handleSubRegionClick = (subregion) => {
  //   const updatedSubregions = [...selectedSubregions];
  //   if (updatedSubregions.includes(subregion)) {
  //     const index = updatedSubregions.indexOf(subregion);
  //     updatedSubregions.splice(index, 1);
  //   } else {
  //     updatedSubregions.push(subregion);
  //   }
  //   setSelectedSubregions(updatedSubregions);
  //   setSubRegData(updatedSubregions);
  //   // setSelectedRegion(subregion);
  //   // setView("subregion");
  // };

  const handleCategoryClick = (category) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleRegionClick = (region) => {
    setOpenRegions((prevState) => ({
      ...prevState,
      [region]: !prevState[region],
    }));
  };

  const handleSubcategoryChange =(subcategory) => {
    const updatedSubcategories= selectedSubcategories.includes(subcategory)
      ? selectedSubcategories.filter((cat) => cat !== subcategory)
      : [...selectedSubcategories, subcategory];
      setSelectedSubcategories(updatedSubcategories);
      setSubCatData(updatedSubcategories);    
  };

  const handleSubregionChange =(subregion) => {
    const updatedSubregions= selectedSubregions.includes(subregion)
      ? selectedSubregions.filter((reg) => reg !== subregion)
      : [...selectedSubregions, subregion];
      setSelectedSubregions(updatedSubregions);
      setSubCatData(updatedSubregions);    
  };
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className={styles.sideBarContainer}>
      <Paper className={styles.sidebarxCategories}>
        <Typography variant="h6" className={styles.sidebarCategoriesContent}>
          Categories
        </Typography>
        <div className={styles.scrollable}>
          {categoryLoading && <Typography>Loading categories...</Typography>}
          {categoryError && <Typography>Error loading categories</Typography>}
          {!categoryLoading && !categoryError && (
            <List>
              {categories.map((category, index) => (
                <div key={index}>
                  <ListItem
                    button
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    <ListItemText
                      primary={`${category.name} (${category.quantity})`}
                    />
                    {category.subcategories &&
                    category.subcategories.length > 0 ? (
                      openCategories[category.name] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItem>
                  {category.subcategories &&
                    category.subcategories.length > 0 && (
                      <Collapse
                        in={openCategories[category.name]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {category.subcategories.map(
                            (subcategory, subIndex) => (
                              <ListItem
                                key={subIndex}
                                className={styles.nested}
                              >
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={selectedSubcategories.includes(
                                        subcategory.name
                                      )}
                                      onChange={() =>
                                        handleSubcategoryChange(subcategory.name)
                                      }
                                    />
                                  }
                                  label={subcategory.name}
                                />
                              </ListItem>
                            ),
                          )}
                        </List>
                      </Collapse>
                    )}
                </div>
              ))}
            </List>
          )}
        </div>
      </Paper>
      <Paper className={styles.sidebarxRegions}>
        <Typography variant="h6" className={styles.sidebarRegionsContent}>
          Regions
        </Typography>
        <div className={styles.scrollable}>
          {regionsLoading && <Typography>Loading regions...</Typography>}
          {regionsError && <Typography>Error loading regions</Typography>}
          {!regionsLoading && !regionsError && (
            <List>
              {regions.map((region, index) => (
                <div key={index}>
                  <ListItem
                    button
                    onClick={() => handleRegionClick(region.name)}
                  >
                    <ListItemText
                      primary={`${region.name} (${region.quantity})`}
                    />
                    {region.subregions && region.subregions.length > 0 ? (
                      openRegions[region.name] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItem>
                  {region.subregions && region.subregions.length > 0 && (
                    <Collapse
                      in={openRegions[region.name]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {region.subregions.map((subregion, subIndex) => (
                          <ListItem key={subIndex} className={styles.nested}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={selectedSubregions.includes(
                                    subregion.name,
                                  )}
                                  onChange={() =>
                                    handleSubregionChange(subregion.name)
                                  }
                                />
                              }
                              label={subregion.name}
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
        </div>
      </Paper>
    </div>
  );
};

Sidebar.propTypes = {
  subCatData: PropTypes.string,
  setSubCatData: PropTypes.func.isRequired,
  subRegData: PropTypes.string,
  setSubRegData: PropTypes.func.isRequired,
};

export default Sidebar;
