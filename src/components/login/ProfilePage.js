import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import Layout from '../../routing/components/Layout';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = profile.firstName ? "" : "First Name is required.";
    tempErrors.lastName = profile.lastName ? "" : "Last Name is required.";
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(profile.email) ? "" : "Email is not valid.";
    tempErrors.phone = profile.phone.length === 10 ? "" : "Phone number must be 10 digits.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSave = () => {
    if (validate()) {
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
    <Layout>    
    
    <Container maxWidth="xs">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          My Profile Details
        </Typography>
        <form>
          <TextField
            label="First Name"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
          <TextField
            label="Email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          {isEditing ? (
            <Button variant="contained" color="primary" onClick={handleSave} >
              Save
            </Button>
          ) : (
            <Button variant="contained" color="secondary" onClick={handleEdit}>
              Edit
            </Button>
          )}
        </form>
      </Box>
    </Container>
    </Layout></>
  );
};

export default ProfilePage;
