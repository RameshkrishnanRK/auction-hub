import React from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import styles from './Browse.module.scss'
import { categories, products, regions } from "./data";
import ProductDetails from '../../../utils/ProductGridView'
import ControlPanel from "./ControlPanel";

const Browse = () => {
    return (
        <>
            <Box className={styles.container}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Sidebar categories={categories} regions={regions} />
                    </Grid>
                    <Grid item xs={9}>
                        <ControlPanel />
                        <div className={styles.productLists}>
                            {products.map(product => (
                                <ProductDetails
                                    key={product.id}
                                    image={product.image}
                                    title={product.title}
                                    currentBid={product.currentBid}
                                    timeRemaining={product.timeRemaining}
                                    isExpired={product.isExpired}
                                />
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>

    );
};

export default Browse;