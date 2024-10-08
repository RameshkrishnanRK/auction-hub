import React, { useState } from "react";
import { Box, Breadcrumbs, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "../../../components/login/myAccount.module.scss";

const AccountPage = () => {
  const storedUserData = JSON.parse(localStorage.getItem("userData")) || {};
  const [formData, setFormData] = useState({
    firstName: storedUserData.firstName || "",
    lastName: storedUserData.lastName || "",
    email: storedUserData.email || "",
    mobile: storedUserData.mobile || "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First Name is required";
    if (!formData.lastName) formErrors.lastName = "Last Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.mobile) {
      formErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = "Mobile number should be 10 digits";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      localStorage.setItem("userData", JSON.stringify(formData));
      alert("User details updated successfully");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <Box className={styles.box}>
        <Breadcrumbs>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/account" style={{ textDecoration: "none" }}>
            Account
          </Link>
        </Breadcrumbs>
      </Box>

      <div style={{ paddingLeft: "55px", paddingTop: "10px" }}>
        <h2>Account Details</h2>

        <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            error={!!errors.mobile}
            helperText={errors.mobile}
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "20px" }}
          >
            Update Details
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;