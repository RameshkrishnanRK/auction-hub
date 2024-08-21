import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";

const Sidebar = ({ subCatData, setSubCatData }) => {
  const [openCategories, setOpenCategories] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: categories,
    loading: categoryLoading,
    error: categoryError,
  } = useSelector((state) => state.sidebar);
  const {
    data: regions,
    loading: regionsLoading,
    error: regionsError,
  } = useSelector((state) => state.sideBarRegion);

  localStorage.setItem("subCatData", subCatData);
  useEffect(() => {
    if (subCatData) {      
    }
  }, [subCatData]);

  const handleSubcategoryClick = (event, newView) => {

    if (newView !== null) {
      setSubCatData(newView);
    }
  };

  const handleCategoryClick = (categoryName) => {
    setOpenCategories((prevOpencategories) => ({
      ...prevOpencategories,
      [categoryName]: !prevOpencategories[categoryName],
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
  z-index:1;
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
  z-index:10;
}

@media (min-width: 768px){
  .side-menu{
    transform: translateX(0);
  }
  .menu-toggle{
    display: none;
  }
}

@media (max-width: 767px){
  .side-menu{
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
            <Typography
              variant="h6"
              className={styles.sidebarCategoriesContent}
            >
              Categories
            </Typography>
            <div className={styles.scrollable}>
              {categoryLoading && <Typography>Loading...</Typography>}
              {categoryError && (
                <Typography>Error loading categories</Typography>
              )}
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
                                    <ListItemText
                                      style={{ cursor: "pointer" }}
                                      valu={subcategory.name}
                                      onClick={(e) =>
                                        handleSubcategoryClick(
                                          e,
                                          subcategory.name,
                                        )
                                      }
                                      primary={subcategory.name}
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
              {regionsLoading && <Typography>Loading...</Typography>}
              {regionsError && <Typography>Error loading regions</Typography>}
              {!regionsLoading && !regionsError && (
                <List>
                  {regions.map((region, index) => (
                    <div key={index}>
                      <ListItem
                        button
                        onClick={() => handleCategoryClick(region.name)}
                      >
                        <ListItemText
                          primary={`${region.name} (${region.quantity})`}
                        />
                        {region.subregions && region.subregions.length > 0 ? (
                          openCategories[region.name] ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )
                        ) : null}
                      </ListItem>
                      {region.subregions && region.subregions.length > 0 && (
                        <Collapse
                          in={openCategories[region.name]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            {region.subregions.map((subregion, subIndex) => (
                              <ListItem
                                key={subIndex}
                                className={styles.nested}
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
          </Paper>
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      subcategories: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
  regions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      subregions: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
};

export default Sidebar;
