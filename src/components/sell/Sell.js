import React, { useEffect } from 'react';
import { Box, Typography, Button, FormControl, Select, MenuItem, InputLabel, RadioGroup, FormControlLabel, Radio, Grid, OutlinedInput, Breadcrumbs } from '@mui/material';
import { styled } from '@mui/system';
import styles from './Sell.module.scss'
import { ChevronLeft } from '@mui/icons-material';
import { categoriesData, regionsData } from '../../data';
import Layout from "../../routing/components/Layout";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 0',
});
const FormSection = styled(Box)({
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});
const CustomButton = styled(Button)({
    display: 'block'
});

const Sell = () => {
    const navigate = useNavigate();
    const [step, setStep] = React.useState(1);
    const [category, setCategory] = React.useState('');
    const [subCategory, setSubCategory] = React.useState('');
    const [listingType, setListingType] = React.useState('');
    const [region, setRegion] = React.useState('');
    const [subCategoryList, setSubCategoryList] = React.useState([]);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [errors, setErrors] = React.useState({
        category: false,
        subCategory: false,
        listingType: false,
        region: false,
    });

    const [error, setError] = React.useState({
        title: false,
        description: false,
    })

    useEffect(() => {
        const selectedCategory = categoriesData.filter(data => (data.name === category))

        setSubCategoryList(selectedCategory[0]?.subcategories)
    }, [category])

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        setErrors(prevState => ({ ...prevState, category: false }))
    };

    const handleSubCategoryChange = (event) => {
        setSubCategory(event.target.value);
        setErrors(prevState => ({ ...prevState, subCategory: false }))
    };

    const handleListingTypeChange = (event) => {
        setListingType(event.target.value);
        setErrors(prevState => ({ ...prevState, listingType: false }))
    };

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
        setErrors(prevState => ({ ...prevState, region: false }))
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setError(prevState => ({ ...prevState, title: false }))
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleNext = () => {
        if (step === 1) {
            if (category && subCategory && listingType && region) {

                setStep(2)
            } else {
                if (!category) {
                    setErrors(prevState => ({ ...prevState, category: true }))
                }
                if (!subCategory) {
                    setErrors(prevState => ({ ...prevState, subCategory: true }))
                }
                if (!listingType) {
                    setErrors(prevState => ({ ...prevState, listingType: true }))
                }
                if (!region) {
                    setErrors(prevState => ({ ...prevState, region: true }))
                }
                return;
            }
        } else {
        }
    }

    const handleCreateListig = () => {
        if (step === 2) {
            if (title && description) {
                setErrors({})                
                navigate(`/auction/dashboard?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`);
            } else {
                if (!title) {
                    setErrors(prevState => ({ ...prevState, title: true }))
                }
                if (!description) {
                    setErrors(prevState => ({ ...prevState, description: true }))
                }
                return;
            }
        } else {
        }
    }

    return (
        <>
            <Layout>
                <>
                    <Box className={styles.breadcrumbs}>
                        <Box sx={{ paddingLeft: '5px', paddingTop: '10px' }}>
                            <Breadcrumbs className='breadcrumb' arial-label='breadcrumb'>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    Home
                                </Link>
                                <Link style={{ textDecoration: 'none' }}>
                                    Sell
                                </Link>
                            </Breadcrumbs>
                        </Box>
                    </Box>
                    <MainContainer marginLeft='2px'>
                        <div className={styles.mainContainer} >
                            <Box className={styles.title}>
                                <Grid container justifyContent="space-between" >
                                    <Grid item >
                                        <Typography variant="h5" gutterBottom fontSize='16px' >
                                            Create Listing - Step {step} of 2
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" gutterBottom >
                                            All fields marked with{" "} "
                                            <span style={{color: "red"}}>*</span>"are required.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>

                            {step === 1 &&
                                <>
                                    <FormSection mt={2} className={styles.categoryContainer}>
                                        <Box className={styles.title}>
                                            <Typography className={styles.typography} variant="body1" gutterBottom>
                                                Category <span>*</span>
                                            </Typography>
                                        </Box>
                                        <Grid container spacing={3}>
                                            <Grid item xs={4} sm={5}>
                                                <FormControl error={errors?.category} variant='outlined' className={styles.boxStyle} fullWidth margin="normal">
                                                    <InputLabel className={styles.boxStyle} >Select Category</InputLabel>
                                                    <Select value={category} onChange={handleCategoryChange} label="Select Category">
                                                        <MenuItem value="">
                                                            <em>Select Category</em>
                                                        </MenuItem>
                                                        {
                                                            categoriesData.map((data, index) => (
                                                                <MenuItem value={data.name} key={index}>
                                                                    {data.name}
                                                                </MenuItem>
                                                            ))
                                                        }
                                                    </Select>
                                                </FormControl>
                                                {errors?.category && <div style={{ color: 'red', padding: '3px 5px', marginTop: '-5px', marginLeft: '7px' }}>Category is Required</div>}
                                            </Grid>
                                            <Grid item xs={4} sm={5}>
                                                <FormControl error={errors?.subCategory} fullWidth margin="normal">
                                                    <InputLabel>Select Subcategory </InputLabel>
                                                    <Select value={subCategory} onChange={handleSubCategoryChange} label="Select Sub Category">
                                                        <MenuItem value="">
                                                            <em>Select Subcategory</em>
                                                        </MenuItem>
                                                        {subCategoryList && subCategoryList?.length > 0 && subCategoryList.map((data, index) => (
                                                            <MenuItem value={data} key={index}>{data}</MenuItem>
                                                        ))}
                                                    </Select>

                                                </FormControl>
                                                {errors?.category && <div style={{ color: 'red', padding: '3px 5px', marginTop: '-5px' }}>SubCategory is Required</div>}
                                            </Grid>
                                        </Grid>
                                    </FormSection>

                                    <FormSection className={styles.categoryContainer}>
                                        <Box className={styles.listtypetitle}>
                                            <Typography p={2} className={styles.typography} variant="body1" gutterBottom>
                                                Listing Type<span>*</span>
                                            </Typography>
                                        </Box>
                                        <FormControl error={errors?.listingType} component="fieldset" className={styles.radio}>
                                            <RadioGroup
                                                aria-label="listingType"
                                                name="listingType"
                                                value={listingType}
                                                onChange={handleListingTypeChange}
                                                className={styles.radioGroup}
                                            >
                                                <FormControlLabel value="auction" className={styles.radioColor} control={<Radio className={styles.radioColor} />} label="Auction" style={{ justifyContent: 'flex-start', color: 'black' }} />
                                                <FormControlLabel value="fixedPrice" className={styles.radioColor} control={<Radio className={styles.radioColor} />} label="Fixed Price" />
                                                <FormControlLabel value="classified" className={styles.radioColor} control={<Radio className={styles.radioColor} />} label="Classified" />
                                            </RadioGroup>
                                            {errors?.listingType && <div style={{ color: 'red', padding: '3px 5px' }}>Listing Type is required.</div>}
                                        </FormControl>
                                    </FormSection>

                                    <FormSection className={styles.categoryContainer}>
                                        <Box className={styles.title}>
                                            <Typography className={styles.typography} variant="body1" gutterBottom>
                                                Region<span>*</span>
                                            </Typography>
                                        </Box>
                                        <FormControl error={errors?.region} fullWidth margin="normal" className={styles.boxStyle}>
                                            <InputLabel className={styles.boxStyle}>Select Region </InputLabel>
                                            <Select className={styles.regionSelect} value={region} onChange={handleRegionChange} label="Select Region">
                                                <MenuItem value="" >
                                                    <em>Select Region</em>
                                                </MenuItem>
                                                {regionsData.map((data, index) => (
                                                    <MenuItem value={data.name} key={index}>{data.name}</MenuItem>
                                                ))}
                                            </Select>
                                            {errors?.region && <div style={{ color: 'red', padding: '3px 5px' }}>Region is required.</div>}
                                        </FormControl>
                                    </FormSection>

                                    <Box className={styles.title}>
                                        <CustomButton variant="contained" color="primary" onClick={handleNext}>
                                            Next
                                        </CustomButton>
                                    </Box>
                                </>
                            }

                            {step === 2 &&
                                <>
                                    <FormSection mt={2} className={styles.categoryContainer}>
                                        <Box className={styles.title}>
                                            <Typography className={styles.typography} variant="body1" gutterBottom>
                                                Standard Listing Fields
                                            </Typography>
                                        </Box>
                                        <Grid container spacing={2}>
                                            <Grid item xs={2}>

                                            </Grid>
                                            <Grid item xs={10}>
                                                <Box sx={{ marginLeft: 'auto' }}>
                                                    <Grid container alignItems="center">
                                                        <Grid item xs={2}>
                                                            <Typography sx={{ marginBottom: 0, textAlign: 'right' }} variant="body1" gutterBottom>
                                                                Title <span style={{ color: 'red' }}>*</span> :
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={10} sx={{ paddingRight: '20px' }}>
                                                            <FormControl error={error?.title} sx={{ m: 1, width: '100%' }} variant="outlined">
                                                                <OutlinedInput
                                                                    error={error?.title}
                                                                    size='small'
                                                                    id="outlined-adornment-weight"
                                                                    aria-describedby="outlined-weight-helper-text"
                                                                    inputProps={{
                                                                        'aria-label': 'Title',
                                                                    }}
                                                                    value={title}
                                                                    onChange={(event) => handleTitleChange(event)}
                                                                />
                                                            </FormControl>
                                                            {errors?.title && <div style={{ color: 'red', padding: '3px 5px', marginTop: '-5px' }}>Title is required</div>}

                                                        </Grid>
                                                    </Grid>

                                                    <Grid container alignItems="center">
                                                        <Grid item xs={2}>
                                                            <Typography sx={{ marginBottom: 0, textAlign: 'right' }} variant="body1" gutterBottom>
                                                                SubTitle :
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={10} sx={{ paddingRight: '20px' }}>
                                                            <FormControl sx={{ m: 1, width: '100%', backgroundColor: '#F8F9F9' }} variant="outlined">
                                                                <OutlinedInput
                                                                    value={title} 
                                                                    disabled                                                                  
                                                                    size='small'
                                                                    id="outlined-adornment-weight"
                                                                    aria-describedby="outlined-weight-helper-text"
                                                                    inputProps={{
                                                                        'aria-label': 'SubTitle',
                                                                    }}
                                                                />
                                                            </FormControl>
                                                        </Grid>
                                                    </Grid>

                                                    <Grid container alignItems="center" marginTop={'7px'}>
                                                        <Grid item xs={2}>
                                                        <Typography sx={{ marginBottom: 0, textAlign: 'right' }} variant="body1" gutterBottom>
                                                        Description <span style={{ color: 'red' }}>*</span> :
                                                            </Typography>                                                            
                                                        </Grid>
                                                        <Grid item xs={10} sx={{ paddingLeft: '2px', paddingRight: '20px' }}>

                                                            <FormControl error={error?.description} sx={{ m: 1, width: '100%' }} variant="outlined">
                                                                <OutlinedInput
                                                                    aria-label="minimum height"
                                                                    multiline={true}
                                                                    minRows={3}
                                                                    error={error?.description}
                                                                    size='small'
                                                                    id="outlined-adornment-weight"
                                                                    aria-describedby="outlined-weight-helper-text"
                                                                    inputProps={{
                                                                        'aria-label': 'Title',
                                                                    }}
                                                                    value={description}
                                                                    onChange={(event) => { handleDescriptionChange(event) }}
                                                                />
                                                            </FormControl>                                                           
                                                            {errors?.description && <div style={{ color: 'red', padding: '3px 5px', marginTop: '-5px' }}>Description is required</div>}
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </FormSection>

                                    <Box className={styles.title} sx={{ display: 'flex' }}>
                                        <Button onClick={() => { setStep(1) }} startIcon={<ChevronLeft />}>
                                            Back
                                        </Button>
                                        <Button variant='outlined' sx={{ mx: 5 }}>Save Draft</Button>
                                        <CustomButton variant="contained" color="primary" onClick={handleCreateListig}>
                                            Create Listing
                                        </CustomButton>
                                    </Box>
                                </>
                            }

                            <Box >
                                <Typography className={styles.footer} fontSize="small" >
                                © Copyright 2024 KPMG India. All Rights Reserved. No part of this web page may be reproduced in any way without the prior written permission of KPMG India.
                                </Typography>
                            </Box>
                        </div>
                        <ToastContainer />
                    </MainContainer>
                </>
            </Layout>

        </>
    );
};

export default Sell;
