import React from "react";
import { Box, Breadcrumbs, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import styles from "./Browse.module.scss";
import { categories, regions } from "./data";
import ControlPanel from "./ControlPanel";
import { Link, useLocation } from "react-router-dom";
import Layout from "../../../routing/components/Layout";

const Browse = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const pathSegments = pathname.split('/').filter((segment) => segment);
    
    return (
        <>
        <Layout/>
            <Box className={styles.container}>
                <Box className={styles.breadcrumbs}>
                    <Breadcrumbs className='breadcrumb' arial-label='breadcrumb'>
                        <Link to="/">
                            Home
                        </Link>
                        {pathSegments.map((segment, index) => {
                            const to = `/${pathSegments.slice(0, index + 1).join('/')}`;
                            return (
                                <Link to={to}>
                                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                                </Link>
                            )
                        })}
                        {/* <Typography color="text.primary" href="/browse">Browse</Typography> */}
                    </Breadcrumbs>
                </Box>
                <Grid container spacing={3}>

                    <Grid item xs={3}>

                        <Sidebar categories={categories} regions={regions} />
                    </Grid>
                    <Grid item xs={9}>
                        <ControlPanel />
                    </Grid>
                </Grid>
            </Box>
            <Breadcrumbs className='breadcrumb' arial-label='breadcrumb'>
                <Link to="/">
                    Home
                </Link>
                {pathSegments.map((segment, index) => {
                    const to = `/${pathSegments.slice(0, index + 1).join('/')}`;
                    return (
                        <Link to={to}>
                            {segment.charAt(0).toUpperCase() + segment.slice(1)}
                        </Link>
                    )
                })}
                {/* <Typography color="text.primary" href="/browse">Browse</Typography> */}
            </Breadcrumbs>
        </>

    );
};

export default Browse;
