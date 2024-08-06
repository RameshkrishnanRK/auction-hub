import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Grid,Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/system';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import styles from './ContactUs.module.scss';

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const ContentContainer = styled(Container)({
  flex: '1',
});

const Textarea = styled(BaseTextareaAutosize)(
  () => `
    box-sizing: border-box;
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid grey;
  `
);

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  captcha: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactUs = () => {
  const generateCaptcha = () => Math.random().toString(36).substring(2, 8);

  const [formState, setFormState] = useState(initialFormState);
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [openSnackBar,setOpenSnackBar]=useState(false)
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      setOpenSnackBar(true)
      setFormState(initialFormState)
      resetCaptcha()
    }
  };

  const validateForm = () => {
    const { firstName, lastName, email, captcha } = formState;
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = 'First Name is required.';
    }

    if (!lastName) {
      newErrors.lastName = 'Last Name is required.';
    }

    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (captcha !== captchaCode) {
      newErrors.captcha = 'Please solve the CAPTCHA correctly.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptchaCode(newCaptcha);
  };

  const handleCloseSnackBar=()=>{
    setOpenSnackBar(false)
  }


  return (
    <MainContainer>
      <ContentContainer className= {styles.mainContainer }>
        <Box mt={2}>
          <Typography p={3} gutterBottom className={styles.title}>
            Contact Us
          </Typography>
          <Box mt={8} className={styles.container}>
            <Box p={5}>
              <Typography variant="body1" gutterBottom className={styles.disclaimer}>
                All fields marked with "*" are required.
              </Typography>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { mb: 2, width: '100%' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Grid container spacing={1} sx={{alignItems:'center'}} >
                  <Grid xs={2}>
                    <Typography variant="body2" className={styles.text}>
                      First Name <span>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      required
                      id="firstName"
                      value={formState.firstName}
                      onChange={handleChange}
                      error={Boolean(errors.firstName)}
                      helperText={errors.firstName}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} sx={{alignItems:'center'}}>
                  <Grid xs={2}>
                    <Typography variant="body2" className={styles.text}>
                      Last Name <span>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={5} >
                    <TextField
                      required
                      id="lastName"
                      value={formState.lastName}
                      onChange={handleChange}
                      error={Boolean(errors.lastName)}
                      helperText={errors.lastName}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} sx={{alignItems:'center'}}>
                  <Grid xs={2}>
                    <Typography variant='body2' className={styles.text}>
                      Email <span>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      required
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} sx={{alignItems:'center'}}>
                  <Grid xs={2}>
                    <Typography mt={2} className={styles.text}>
                      Message
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Textarea
                      minRows={3}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((prevState) => ({
                          ...prevState,
                          message: e.target.value,
                        }))
                      }
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} mt={3} sx={{alignItems:'center'}}>
                  <Grid xs={2}>
                    <Typography variant="body2" className={styles.text}>
                      Captcha
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      required
                      id="captcha"
                      value={formState.captcha}
                      onChange={handleChange}
                      error={Boolean(errors.captcha)}
                      helperText={errors.captcha}
                    />
                  </Grid>
                  <Grid item xs={4} mt={2}>
                    <Box display="flex" alignItems="center">
                      <Grid item xs={2}>
                        <Typography>{captchaCode}</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Button onClick={resetCaptcha}>Reset</Button>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end" mt={2}>
                  <Button type="submit" variant="contained" color="primary">
                    Send
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ContentContainer>
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar} anchorOrigin={{vertical:'top',horizontal:'right'}} >
        <Alert onClose={handleCloseSnackBar} severity='success' >
          Form Submitted Successfully
        </Alert>
      </Snackbar>
      <Box className={styles.footer}>
        <Typography className={styles.footerText}>
          All Rights Reserved. No part of this web page may be reproduced in any way without the prior written permission of KPMG India.
        </Typography>
      </Box>
    </MainContainer>
  );
};

export default ContactUs;
