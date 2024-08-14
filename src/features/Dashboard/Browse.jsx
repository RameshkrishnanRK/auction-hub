import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import styles from "./Browse.module.scss";
import { categoriesData, regionsData } from "../../jsonData";
import ControlPanel from "./ControlPanel";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSideBarStart, fetchSideBarFailure, fetchSideBarSuccess } from "../../redux/slices/sideBarCategorySlice";
import { fetchSideBarRegionsStart, fetchSideBarRegionsFailure, fetchSideBarRegionsSuccess } from "../../redux/slices/sideBarRegionSlice";
import Layout from "../../routing/components/Layout";

const Browse = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const pathSegments = pathname.split('/').filter((segment) => segment);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchCategories = () => {
            dispatch(fetchSideBarStart());
            try {
                //api call
                const data = categoriesData
                console.log("data: categories ", data)
                dispatch(fetchSideBarSuccess(data));
            } catch (error) {
                console.log("data: products error ", error)
                dispatch(fetchSideBarFailure());
            }
        }

        const fetchRegions = () => {
            dispatch(fetchSideBarRegionsStart());
            try {
                //api call
                const data = regionsData
                console.log("data: categories ", data)
                dispatch(fetchSideBarRegionsSuccess(data));
            } catch (error) {
                console.log("data: products error ", error)
                dispatch(fetchSideBarRegionsFailure());
            }
        }

        fetchCategories();
        fetchRegions();
        console.log('searchTerm: ', searchTerm)
    }, [dispatch, searchTerm]);

    return (
        <>
            <Layout setSearchTerm={setSearchTerm}>
            <Box className={styles.container}>
                <Box className={styles.breadcrumbs}>
                    <Breadcrumbs className={styles.breadcrumb} arial-label='breadcrumb'>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            Home
                        </Link>
                        <Link style={{ textDecoration: 'none' }}>
                            Browse
                        </Link>
                    </Breadcrumbs>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={9}>
                        <ControlPanel searchTerm={searchTerm} />
                    </Grid>
                </Grid>
            </Box>
        </Layout>
        </>

    );
};

export default Browse;
