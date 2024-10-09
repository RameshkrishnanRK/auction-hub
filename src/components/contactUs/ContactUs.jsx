import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import styles from "./ContactUs.module.scss";
import Layout from "../../routing/components/Layout";
import { FiRefreshCcw } from "react-icons/fi";

const initialFormState = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
  message: "",
  captcha: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileNumberRegex = /^[0-9]{10}$/;

const ContactUs = () => {
  const generateCaptcha = () => Math.random().toString(36).substring(2, 8);

  const [formState, setFormState] = useState(initialFormState);
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [openSnackBar, setOpenSnackBar] = useState(false);
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
      setOpenSnackBar(true);
      setFormState(initialFormState);
      resetCaptcha();
    }
  };

  const validateForm = () => {
    const { firstName, lastName, mobileNumber, email, captcha } = formState;
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = "First Name is required.";
    }

    if (!lastName) {
      newErrors.lastName = "Last Name is required.";
    }

    if (!mobileNumber) {
      newErrors.mobileNumber = "Mobile Number is required.";
    } else if (!mobileNumberRegex.test(mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid 10-digit mobile number.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (captcha !== captchaCode) {
      newErrors.captcha = "Please solve the CAPTCHA correctly.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptchaCode(newCaptcha);
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <Layout />
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: "url(/images/GetInTouchWithUs.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          maxWidth: "800px",
          mx: "auto",
          p: 2,
          mt: 1,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" mb={1} textAlign="center" color="#337ab7">
          Get in touch with us
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="firstName"
                label="First Name"
                value={formState.firstName}
                onChange={handleChange}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                id="lastName"
                label="Last Name"
                value={formState.lastName}
                onChange={handleChange}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                id="mobileNumber"
                label="Mobile Number"
                value={formState.mobileNumber}
                onChange={handleChange}
                error={Boolean(errors.mobileNumber)}
                helperText={errors.mobileNumber}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                id="email"
                label="Email"
                value={formState.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="message"
                label="Message"
                multiline
                rows={4}
                value={formState.message}
                onChange={handleChange}
                error={Boolean(errors.message)}
                helperText={errors.message}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                id="captcha"
                label="Captcha"
                value={formState.captcha}
                onChange={handleChange}
                error={Boolean(errors.captcha)}
                helperText={errors.captcha}
                fullWidth
                size="small"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap="4px"
              >
                <Box
                  size="medium"
                  variant="contained"
                  className={styles.captchaBtn}
                  sx={{
                    backgroundColor: 'none',
                    color: 'black',
                    fontStyle:'italic',
                    border:'0px',
                    padding:'8px 0px',
                    boxShadow:'none',
                    transform:'rotate(-10deg)',
                    width:"auto",
                    display:'inline-block'

                  }}
                >
                  {captchaCode}
                </Box>
                <box onClick={resetCaptcha} size="small" variant="outlined" >
                  <FiRefreshCcw size={14} />
                </box>
              </Box>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Button type="submit" variant="contained" color="primary">
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackBar}
          variant="filled"
          severity="success"
          sx={{ width: "100%" }}
        >
          Thank you for contacting us. We will reach out to you shortly.
        </Alert>
      </Snackbar>
      <Box className={styles.footer}>
        <Typography className={styles.footerText} fontSize="small">
          © Copyright 2024 KPMG India. All Rights Reserved. No part of this web
          page may be reproduced in any way without the prior written permission
          of KPMG India.
        </Typography>
      </Box>
    </div>
  );
};

export default ContactUs;
