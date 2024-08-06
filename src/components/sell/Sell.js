import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, FormControl, Select, MenuItem, InputLabel, RadioGroup, FormControlLabel, Radio, Grid, OutlinedInput } from '@mui/material';
import { styled } from '@mui/system';
import styles from './Sell.module.scss'
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { ChevronLeft } from '@mui/icons-material';
import { categories,regions } from '../../features/Dashboard/Browse/data';
const MainContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '20px',
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

const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Sell = () => {

    const [step, setStep] = React.useState(1);
    const [category, setCategory] = React.useState('');
    const [subCategory, setSubCategory] = React.useState('');
    const [listingType, setListingType] = React.useState('');
    const [region, setRegion] = React.useState('');
    const [subCategoryList, setSubCategoryList] = React.useState([]);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    useEffect(() => {
        const selectedCategory = categories.filter(data => (data.name === category))
        console.log(selectedCategory, "sel36")

        setSubCategoryList(selectedCategory[0]?.subcategories)

    }, [category])

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSubCategoryChange = (event) => {
        setSubCategory(event.target.value);
    };

    const handleListingTypeChange = (event) => {
        setListingType(event.target.value);
    };

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleNext = () => {
        // console.log('Step', category, subCategory, listingType, region)
        if(step === 1){
            if(category && subCategory && listingType && region){
                setStep(2)
            }else{
                return;
            }
        }else{
            console.log(category, subCategory, listingType, region, title,description)
        }
    }

    console.log("sub57", subCategoryList)

    return (
        <MainContainer>
            <Container className={styles.mainContainer}>
                <Box className={styles.title}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Typography variant="h5" gutterBottom>
                                Create Listing - Step {step} of 2
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" gutterBottom>
                                All fields marked with "*" are required.
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
                                    <FormControl variant='outlined' className={styles.boxStyle} fullWidth margin="normal">
                                        <InputLabel className={styles.boxStyle} >Select Category</InputLabel>
                                        <Select value={category} onChange={handleCategoryChange} label="Select Category">
                                            <MenuItem value="">
                                                <em>Select Category</em>
                                            </MenuItem>

                                            {
                                                categories.map((data, index) => (
                                                    <MenuItem value={data.name} key={index}>
                                                        {data.name}
                                                    </MenuItem>
                                                ))
                                            }


                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4} sm={5}>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel>Select Subcategory</InputLabel>
                                        <Select value={subCategory} onChange={handleSubCategoryChange} label="Select Sub Category">
                                            <MenuItem value="">
                                                <em>Select Subcategory</em>
                                            </MenuItem>
                                            {subCategoryList && subCategoryList?.length > 0 && subCategoryList.map((data, index) => (
                                                <MenuItem value={data} key={index}>{data}</MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </FormSection>

                        <FormSection className={styles.categoryContainer}>
                            <Box className={styles.listtypetitle}>
                                <Typography className={styles.typography} variant="body1" gutterBottom>
                                    Listing Type<span>*</span>
                                </Typography>
                            </Box>
                            <FormControl component="fieldset" className={styles.radio}>
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
                            </FormControl>
                        </FormSection>

                        <FormSection className={styles.categoryContainer}>
                            <Box className={styles.title}>
                                <Typography className={styles.typography} variant="body1" gutterBottom>
                                    Region<span>*</span>
                                </Typography>
                            </Box>
                            <FormControl fullWidth margin="normal" className={styles.boxStyle}>
                                <InputLabel className={styles.boxStyle}>Select Region </InputLabel>
                                <Select className={styles.regionSelect} value={region} onChange={handleRegionChange} label="Select Region">
                                    <MenuItem value="" >
                                        <em>Select Region</em>
                                    </MenuItem>
                                    {regions.map((data, index) => (
                                        <MenuItem value={data.name} key={index}>{data.name}</MenuItem>
                                    ))}
                                </Select>
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
                                                    Title <span>*</span> :
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={10} sx={{ paddingRight: '20px' }}>
                                                <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                                    <OutlinedInput
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
                                            </Grid>
                                        </Grid>

                                        <Grid container alignItems="center">
                                            <Grid item xs={2}>
                                                <Typography sx={{ marginBottom: 0, textAlign: 'right' }} variant="body1" gutterBottom>
                                                    SubTitle <span>*</span> :
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={10} sx={{ paddingRight: '20px' }}>
                                                <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
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

                                        <Grid container alignItems="center">
                                            <Grid item xs={2}>
                                                <Typography sx={{ marginBottom: 0, textAlign: 'right' }} variant="body1" gutterBottom>
                                                    Description <span>*</span> :
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={10} sx={{ paddingLeft: '10px', paddingRight: '10px' }}>
                                                <Textarea value={description} onChange={(event) => {handleDescriptionChange(event)}} sx={{ width: '100%' }} aria-label="minimum height" minRows={3} />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </FormSection>

                        <Box className={styles.title} sx={{ display: 'flex' }}>
                            {/* <Button onClick={() => {setStep(1)}}>back</Button> */}
                            <Button onClick={() => {setStep(1)}} startIcon={<ChevronLeft />}>
                                Back
                            </Button>
                            <Button variant='outlined' sx={{ mx: 5 }}>Save Draft</Button>
                            <CustomButton variant="contained" color="primary" onClick={handleNext}>
                                Create Listing
                            </CustomButton>
                        </Box>
                    </>
                }

                <Box >
                    <Typography className={styles.footer} >
                        All Rights Reserved. No part of this web page may be reproduced in any way without the prior written permission of KPMG India.
                    </Typography>
                </Box>

            </Container>
        </MainContainer>
    );
};

export default Sell;