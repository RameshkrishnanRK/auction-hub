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
  Button,
} from "@mui/material";
import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";

const Sidebar = ({ subCatData, setSubCatData, subRegData, setSubRegData }) => {
  const [openCategories, setOpenCategories] = useState({});
  const [openRegions, setOpenRegions] = useState({});
  const [view, setView] = useState("main"); // "main", "subcategory", or "subregion"
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleSubcategoryClick = (subcategory) => {
    setSubCatData(subcategory);
    setSelectedCategory(subcategory);
    setView("subcategory");
  };

  const handleSubRegionClick = (subregion) => {
    setSubRegData(subregion);
    setSelectedRegion(subregion);
    setView("subregion");
  };

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <style>
        {`
          .side-menu {
            top: 40;
            left: 0;
            height: 100%;
            color: white;
            transition: transform 0.3s ease;
            transform: translateX(-100%);
            z-index: 1;
          }
          .side-menu.open {
            transform: translateX(0);
          }
          .menu-toggle {
            position: absolute;
            top: 20px;
            right: -50px;
            background-color: #333;
            color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            font-size: 24px;
            transition: right 0.3s ease;
            z-index: 10;
          }

          @media (min-width: 768px) {
            .side-menu {
              transform: translateX(0);
            }
            .menu-toggle {
              display: none;
            }
          }

          @media (max-width: 767px) {
            .side-menu {
              width: 200px;
            }
            .menu-toggle {
              right: -45px;
            }
          }
        `}
      </style>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          =
        </button>
        <div className={styles.sideBarContainer}>
          <Paper className={styles.sidebarxCategories}>
            {view === "main" && (
              <>
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
                          <ListItem button onClick={() => handleCategoryClick(category.name)}>
                            <ListItemText primary={`${category.name} (${category.quantity})`} />
                            {category.subcategories && category.subcategories.length > 0 ? (
                              openCategories[category.name] ? <ExpandLess /> : <ExpandMore />
                            ) : null}
                          </ListItem>
                          {category.subcategories && category.subcategories.length > 0 && (
                            <Collapse in={openCategories[category.name]} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {category.subcategories.map((subcategory, subIndex) => (
                                  <ListItem
                                    key={subIndex}
                                    className={styles.nested}
                                    onClick={() => handleSubcategoryClick(subcategory.name)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <ListItemText primary={subcategory.name} />
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
              </>
            )}
            {view === "subcategory" && (
              <>
                <Button onClick={() => setView("main")} variant="contained" color="primary">
                  Back to Categories
                </Button>
                {selectedCategory && (
                  <Typography variant="subtitle1" className={styles.selectedCategory}>
                    Selected Category: {selectedCategory}
                  </Typography>
                )}
                <Typography variant="h6" className={styles.sidebarCategoriesContent}>
                  Regions
                </Typography>
                <div className={styles.scrollable}>
                  {regionsLoading && <Typography>Loading regions...</Typography>}
                  {regionsError && <Typography>Error loading regions</Typography>}
                  {!regionsLoading && !regionsError && (
                    <List>
                      {regions.map((region, index) => (
                        <div key={index}>
                          <ListItem button onClick={() => handleRegionClick(region.name)}>
                            <ListItemText primary={`${region.name} (${region.quantity})`} />
                            {region.subregions && region.subregions.length > 0 ? (
                              openRegions[region.name] ? <ExpandLess /> : <ExpandMore />
                            ) : null}
                          </ListItem>
                          {region.subregions && region.subregions.length > 0 && (
                            <Collapse in={openRegions[region.name]} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {region.subregions.map((subregion, subIndex) => (
                                  <ListItem
                                    key={subIndex}
                                    className={styles.nested}
                                    onClick={() => handleSubRegionClick(subregion.name)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <ListItemText primary={subregion.name} />
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
              </>
            )}
          </Paper>
          <Paper className={styles.sidebarxRegions}>
            {view === "main" && (
              <>
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
                          <ListItem button onClick={() => handleRegionClick(region.name)}>
                            <ListItemText primary={`${region.name} (${region.quantity})`} />
                            {region.subregions && region.subregions.length > 0 ? (
                              openRegions[region.name] ? <ExpandLess /> : <ExpandMore />
                            ) : null}
                          </ListItem>
                          {region.subregions && region.subregions.length > 0 && (
                            <Collapse in={openRegions[region.name]} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {region.subregions.map((subregion, subIndex) => (
                                  <ListItem
                                    key={subIndex}
                                    className={styles.nested}
                                    onClick={() => handleSubRegionClick(subregion.name)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <ListItemText primary={subregion.name} />
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
              </>
            )}
            {view === "subregion" && (
              <>
                <Button onClick={() => setView("main")} variant="contained" color="primary">
                  Back to Regions
                </Button>
                {selectedRegion && (
                  <Typography variant="subtitle1" className={styles.selectedRegion}>
                    Selected Region: {selectedRegion}
                  </Typography>
                )}
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
                          <ListItem button onClick={() => handleCategoryClick(category.name)}>
                            <ListItemText primary={`${category.name} (${category.quantity})`} />
                            {category.subcategories && category.subcategories.length > 0 ? (
                              openCategories[category.name] ? <ExpandLess /> : <ExpandMore />
                            ) : null}
                          </ListItem>
                          {category.subcategories && category.subcategories.length > 0 && (
                            <Collapse in={openCategories[category.name]} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {category.subcategories.map((subcategory, subIndex) => (
                                  <ListItem
                                    key={subIndex}
                                    className={styles.nested}
                                    onClick={() => handleSubcategoryClick(subcategory.name)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <ListItemText primary={subcategory.name} />
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
              </>
            )}
          </Paper>
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  subCatData: PropTypes.string,
  setSubCatData: PropTypes.func.isRequired,
  subRegData: PropTypes.string,
  setSubRegData: PropTypes.func.isRequired,
};

export default Sidebar;
