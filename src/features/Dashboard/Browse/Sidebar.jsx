import React, { useState } from "react";
import PropTypes from 'prop-types';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import styles from './Sidebar.module.scss'


const Sidebar = ({ categories, regions }) => {
    const [openCategories, setOpenCategories] = useState({});

    const handleCategoryClick = (categoryName) => {
        setOpenCategories((prevOpencategories) => ({
            ...prevOpencategories,
            [categoryName]: !prevOpencategories[categoryName]
        }));
    };
    return (
        <>
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
                                {/* <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {category.subcategories.map((subcategory, subIndex) => (
                                                <ListItem key={subIndex}  style={{paddingLeft: 32}} className={styles.nested}>
                                                    <ListItemText primary={subcategory} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse> */}
                                {category.subcategories && (
                                    <Collapse in={openCategories[category.name]} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {category.subcategories.map((subcategory, subIndex) => (
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
            <Paper className={styles.sidebarxRegions}>
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
            </Paper>
        </>

    );
};

Sidebar.propTypes = {
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

export default Sidebar;