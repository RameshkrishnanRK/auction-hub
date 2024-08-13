import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import styles from "./Browse.module.scss";
import { categoriesData, regionsData } from "./jsonData";
import ControlPanel from "./ControlPanel";
import { Link, useLocation } from "react-router-dom";
import Layout from "../../../routing/components/Layout";
import { useDispatch } from "react-redux";
import { fetchSideBarStart, fetchSideBarFailure, fetchSideBarSuccess } from "../../../redux/slices/sideBarCategorySlice";
import { fetchSideBarRegionsStart, fetchSideBarRegionsFailure, fetchSideBarRegionsSuccess } from "../../../redux/slices/sideBarRegionSlice";

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
        console.log(searchTerm)
    }, [dispatch,searchTerm]);

    return (
        <>
            <Layout setSearchTerm={setSearchTerm}/>
            <Box className={styles.container}>
                <Box className={styles.breadcrumbs}>
                    {/* <Breadcrumbs className='breadcrumb' arial-label='breadcrumb'>
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
                       
                    </Breadcrumbs> */}
                    <Breadcrumbs className={styles.breadcrumb} arial-label='breadcrumb'>
                        <Link to="/" style={{textDecoration:'none'}}>
                            Home
                        </Link>
                        <Link style={{textDecoration:'none'}}>
                            Browse
                        </Link>
                        
                        {/* <Typography color="text.primary" href="/browse">Browse</Typography> */}
                    </Breadcrumbs>
                </Box>
                <Grid container spacing={3}>

                    <Grid item xs={3}>

                         <Sidebar /> 
                        {/* <UpdatedSidebar/> */}
                    </Grid>
                    <Grid item xs={9}>
                        <ControlPanel searchTerm={searchTerm} />
                    </Grid>
                </Grid>
            </Box>

        </>

    );
};

export default Browse;
