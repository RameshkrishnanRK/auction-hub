import React from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import ControlPanel from "./ControlPanel";
import ProductDetails from '../../../utils/ProductGridView';
import { categories, products, regions } from "./data";
import styles from './Browse.module.scss';

const Browse = () => {
    return (
            <Box className={styles.container}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <Sidebar categories={categories || []} regions={regions || []} />
                    </Grid>
                    <Grid item xs={9}>
                        <ControlPanel />
                        <div className={styles.productLists}>
                        {(products || []).map(({ id, image, title, currentBid, timeRemaining, isExpired }) => (
                            <ProductDetails
                                key={id}
                                image={image}
                                title={title}
                                currentBid={currentBid}
                                timeRemaining={timeRemaining}
                                isExpired={isExpired}
                            />
                        ))}
                        </div>
                    </Grid>
                </Grid>
            </Box>
    );
};

export default Browse;