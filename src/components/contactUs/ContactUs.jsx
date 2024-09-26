import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
  Breadcrumbs,
} from "@mui/material";
import styles from "./ContactUs.module.scss";
import Layout from "../../routing/components/Layout";
import { Link } from "react-router-dom";
import { FiRefreshCcw } from "react-icons/fi";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  captcha: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const { firstName, lastName, email, captcha } = formState;
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = "First Name is required.";
    }

    if (!lastName) {
      newErrors.lastName = "Last Name is required.";
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
    <div>
      <Layout />
      <Box>
        <Box className={styles.box}>
          <Breadcrumbs>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link style={{ textDecoration: "none" }}>Contact Us</Link>
          </Breadcrumbs>
        </Box>
      </Box>
      <div className={styles.mainContainer}>
        <Box mt={8} className={styles.box1}>
          <Typography
            p={2}
            className={styles.title}
            marginLeft="15px"
            marginRight="25px"
          >
            Contact Us
          </Typography>
          <Box mt={8} className={styles.container} marginTop="20px">
            <Box p={5}>
              <Typography
                variant="body1"
                gutterBottom
                className={styles.disclaimer}
              >
                All fields marked with{" "} 
                <span style={{color: "red"}}>*</span> are required.
              </Typography>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { mb: 2, width: "100%" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="firstName"
                      label="First Name"
                      value={formState.firstName}
                      onChange={handleChange}
                      error={Boolean(errors.firstName)}
                      helperText={errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="lastName"
                      label="Last Name"
                      value={formState.lastName}
                      onChange={handleChange}
                      error={Boolean(errors.lastName)}
                      helperText={errors.lastName}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="email"
                      label="Email"
                      value={formState.email}
                      onChange={handleChange}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      multiline={true}
                      minRows={4}
                      required
                      id="message"
                      label="Message"
                      value={formState.message}
                      error={Boolean(errors.message)}
                      helperText={errors.message}
                      onChange={(e) =>
                        setFormState((prevState) => ({
                          ...prevState,
                          message: e.target.value,
                        }))
                      }
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="captcha"
                      label="Captcha"
                      value={formState.captcha}
                      onChange={handleChange}
                      error={Boolean(errors.captcha)}
                      helperText={errors.captcha}
                    />
                  </Grid>
                  <Grid item xs={6} mt={2}>
                    <Box display="flex" alignItems="center">
                      <Button
                        size="medium"
                        variant="contained"
                        className={styles.captchaBtn}
                        color="primary"
                      >
                        {captchaCode}
                      </Button>
                      <Button onClick={resetCaptcha}>
                        <FiRefreshCcw size={20} />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="center" mt={2}>
                  <Button type="submit" variant="contained" color="primary">
                    Send
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackBar} variant="filled" severity="success">
          Thank you for contacting us. we will reach out you shortly
        </Alert>
      </Snackbar>
      <Box className={styles.footer}>
        <Typography className={styles.footerText} fontSize="small">
        © Copyright 2024 KPMG India. All Rights Reserved. No part of this web page may be reproduced in any way without the prior written permission of KPMG India.
        </Typography>
      </Box>
    </div>
  );
};

export default ContactUs;
