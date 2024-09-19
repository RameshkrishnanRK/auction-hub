import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import kpmgLogo from "../../assets/images/Auction.KPMG_logo_blue.png";
import kpmgLoginImage from "../../assets/images/Auction.png";
import { useDispatch, useSelector } from "react-redux";
import { registerSuccess } from "../../redux/slices/registerSlice"; 

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const dispatch = useDispatch();
  useSelector((state) => state.register); // Updated state selector for registration

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    let valid = true;

    if (username === "") {
      setUsernameError("This field is required");
      valid = false;
    } else {
      setUsernameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("This field is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (confirmPassword === "" || confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (!valid) {
      return;
    } else {
      const userData = {
        username,
        email,
      };
      dispatch(registerSuccess(userData)); // Dispatching registration success action
    }

    navigate("home");
  };
  return (
    <Container>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr", 
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div style={{ padding: "20px" }}>
          <img
            src={kpmgLoginImage}
            alt="Auction Illustration"
            style={{ width: "86%" }}
          />
        </div>
        <Paper elevation={6} style={{ padding: "20px" }}>
          <div style={{ textAlign: "center" }}>
            <img
              alt="KPMG Logo"
              src={kpmgLogo}
              style={{ fontSize: "12px", height: "65px" }}
            />

            <Typography>KPMG Auction - Register</Typography>
            <form
              style={{ width: "100%", marginTop: "20px" }}
              noValidate
              onSubmit={handleRegister}
            >
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={usernameError !== ""}
                helperText={usernameError}
              />

              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError !== ""}
                helperText={emailError}
              />

              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError !== ""}
                helperText={passwordError}
              />

<TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={confirmPasswordError !== ""}
                helperText={confirmPasswordError}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    value={rememberMe}
                    color="primary"
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                }
                label={<Typography variant="body2">Remember me</Typography>} 
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: "10px 0" }}
              >
                Register
              </Button>
              <span>Already have an account? {" "}</span>
              <Button color="inherit">
                <Link to="/login">Login here</Link>
              </Button>
            </form>
          </div>
        </Paper>
      </div>
    </Container>
  );
};

export default Register;