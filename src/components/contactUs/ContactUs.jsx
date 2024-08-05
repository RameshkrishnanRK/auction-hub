import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button,Grid } from '@mui/material';
import { styled } from '@mui/system';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import styles from './ContactUs.module.scss'
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

const ContactUs = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [captchaCode, setCaptchaCode] = useState('6lQ4tk');
  const [error, setError] = useState('');

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
      console.log('Form Data:', formState);
      alert('Form submitted successfully!');
      setFormState(initialFormState);
    } else {
      alert('Please fill all required fields and solve the CAPTCHA.');
    }
  };

  const validateForm = () => {
    const { firstName, lastName, email, message, captcha } = formState;
    if (!firstName || !lastName || !email || !message || captcha !== captchaCode) {
      setError('Please fill all required fields and solve the CAPTCHA correctly.');
      return false;
    }
    setError('');
    return true;
  };

  const resetCaptcha = () => {
    const newCaptcha = Math.random().toString(36).substring(2, 8);
    setCaptchaCode(newCaptcha);
  };

  return (
    <MainContainer>
      <ContentContainer>
        <Box mt={8}>
          <Typography
            p={3}
            gutterBottom
            className={styles.title}
           
          >
            Contact Us
          </Typography>
          <Box mt={8} className={styles.container}>
            <Box p={5}>
            <Typography variant="body1" gutterBottom>
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
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                    <Typography mt={2} className={styles.text}>First Name
                    <span >*</span>
                </Typography>
                    </Grid>
                    <Grid item xs={5}> <TextField
                required
                id="firstName"
            
                value={formState.firstName}
                onChange={handleChange}
              /></Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                    <Typography mt={2} className={styles.text}>Last Name
                    <span>*</span>
                </Typography>
                    </Grid>
                    <Grid item xs={5}> <TextField
                required
                id="lastName"
            
                value={formState.lastName}
                onChange={handleChange}
              /></Grid>
                </Grid>
                
             
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                    <Typography mt={2} className={styles.text}>Email
                    <span>*</span>
                </Typography>
                    </Grid>
                    <Grid item xs={5}> <TextField
                required
                id="email"
            
                value={formState.email}
                onChange={handleChange}
              /></Grid>
                </Grid>
               
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                    <Typography mt={2}className={styles.text}>Message
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
                <Grid container spacing={1} mt={3}>
                    <Grid item xs={2}>
                    <Typography mt={2} className={styles.text}>Captcha
                   
                </Typography>
                    </Grid>
                    <Grid item xs={5}> <TextField
                required
                id="captcha"
            
                value={formState.captcha}
                onChange={handleChange}
              /></Grid>
              <Grid item xs={4} mt={2}>
              <Box display="flex" alignItems="center">
                        <Grid item xs={2}> <Typography>{captchaCode}</Typography></Grid>
                     
                     <Grid item xs={2}> <Button onClick={resetCaptcha}>Reset</Button></Grid>
                    </Box>
              </Grid>
                </Grid>
             
              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}
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
      <Box className={styles.footer} >
        <Typography className={styles.footerText}>          All Rights Reserved. No part of this web page may be reproduced in any way without the prior written permission of KPMG India.
        </Typography>
        </Box>
    </MainContainer>
  );
};

export default ContactUs;