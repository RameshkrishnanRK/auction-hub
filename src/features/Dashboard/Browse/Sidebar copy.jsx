import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import styles from './Sidebar.module.scss'
import { useDispatch, useSelector } from "react-redux";


const Sidebar1 = () => {
    const [openCategories, setOpenCategories] = useState({});

    const { data: categories, loading: categoryLoading, error: categoryError } = useSelector((state) => state.sidebar);
    const { data: regions, loading: regionsLoading, error: regionsError } = useSelector((state) => state.sideBarRegion);

    const handleCategoryClick = (categoryName) => {
        setOpenCategories((prevOpencategories) => ({
            ...prevOpencategories,
            [categoryName]: !prevOpencategories[categoryName]
        }));
    };
    return (
        <>
            <div className={styles.sideBarContainer}>
                <Paper className={styles.sidebarxCategories}>
                    <Typography variant="h6" className={styles.sidebarCategoriesContent}>Categories</Typography>
                    <div className={styles.scrollable}>
                        <List>
                            {categories.map((category, index) => (
                                <div key={index}>
                                    <ListItem button onClick={() => handleCategoryClick(category.name)}>
                                        <ListItemText primary={`${category.name} (${category.quantity})`} />
                                        {category.subcategories ? (openCategories[category.name] ? <ExpandLess /> : <ExpandMore />) : null}
                                    </ListItem>
                                    {category.subcategories && (
                                        <Collapse in={openCategories[category.name]} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {category.subcategories.map((subregion, subIndex) => (
                                                    <ListItem key={subIndex} className={styles.nested}>
                                                        <ListItemText primary={subregion} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Collapse>
                                    )}
                                </div>
                            ))}
                        </List>
                    </div>
                </Paper>
                <Paper className={styles.sidebarxRegions}>
                    <Typography variant="h6" className={styles.sidebarRegionsContent}>Regions</Typography>
                    <div className={styles.scrollable}>
                        <List>
                            {regions.map((region, index) => (
                                <div key={index}>
                                    <ListItem button onClick={() => handleCategoryClick(region.name)}>
                                        <ListItemText primary={`${region.name} (${region.quantity})`} />
                                        {region.subcategories ? (openCategories[region.name] ? <ExpandLess /> : <ExpandMore />) : null}
                                    </ListItem>
                                    {region.subregions && (
                                        <Collapse in={openCategories[region.name]} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {region.subregions.map((subcategory, subIndex) => (
                                                    <ListItem key={subIndex} className={styles.nested}>
                                                        <ListItemText primary={subcategory} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Collapse>
                                    )}
                                </div>
                            ))}
                        </List>
                    </div>
                </Paper>
                {/* <Paper className={styles.sidebarxRegions}>
                    <Typography variant="h6" className={styles.sidebarRegionsContent}>Regions</Typography>
                    <div className={styles.scrollable}>
                        <List>
                            {regions.map((region, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={`${region.name} (${region.quantity})`} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Paper> */}
            </div>
        </>

    );
};

Sidebar1.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired
            // subcategories: PropTypes.arrayOf(PropTypes.string)
        })
    ).isRequired,
    regions: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
};

export default Sidebar1;