import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import kpmgLogo from "../../assets/images/Auction.KPMG_logo_blue.png";
import kpmgLoginImage from "../../assets/images/Auction.png";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/slices/loginSlice";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();

  useSelector((state) => state.login);


  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    let valid = true;

    if (username === "") {
      setUsernameError("This field is required");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (password === "") {
      setPasswordError("This field is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) {
      return;
    } else {
      const userData = {
        user: username,
      }
      dispatch(loginSuccess(userData));
    }

    

    navigate("/auction/home");
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

            <Typography>KPMG Auction</Typography>
            <form
              style={{ width: "100%", marginTop: "20px" }}
              noValidate
              onSubmit={handleLogin}
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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems:'center'}}>
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
                
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: "10px 0" }}
              >
                Login
              </Button>
            </form>
          </div>
        </Paper>
      </div>
    </Container>
  );
};

export default LoginPage;
