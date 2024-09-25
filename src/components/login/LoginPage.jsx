import React, { useState, useEffect } from "react";
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import kpmgLogo from "../../assets/images/Auction.KPMG_logo_blue.png";
import kpmgLoginImage from "../../assets/images/Auction.png";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/slices/loginSlice";
import { fetchRoles } from "../../redux/slices/roleSlice"; 

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [role, setRole] = useState(""); 
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [roleError, setRoleError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const roles = useSelector((state) => state.roles.roles); 

  
  useEffect(() => {
    dispatch(fetchRoles()); 
  }, [dispatch]);

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

    if (role === "") {
      setRoleError("Please select a role");
      valid = false;
    } else {
      setRoleError("");
    }

    if (!valid) return;

    const userData = {
      user: username,
      role: role,
      rememberMe,
    };
    dispatch(loginSuccess(userData));
    if (rememberMe){
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      sessionStorage.setItem("userData", JSON.stringify(userData));
    }

    localStorage.setItem("role", role);

    navigate("/view", { state: { role: role } });
  };
  const storedUserData= JSON.stringify(localStorage.getItem("userData")) || JSON.parse(sessionStorage.getItem("userData"));
  if (storedUserData){
    console.log("Stored User Details:", storedUserData);
  }

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
              <FormControl
                variant="standard"
                fullWidth
                margin="normal"
                error={roleError !== ""}
              >
                <InputLabel id="role-label">Select Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  {roles.length > 0 ? (
                    roles.map((r) => (
                      <MenuItem key={r.id} value={r.name}>
                        {r.name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="" disabled>
                      Loading roles...
                    </MenuItem>
                  )}
                </Select>
                {roleError && (
                  <Typography variant="body2" color="error">
                    {roleError}
                  </Typography>
                )}
              </FormControl>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
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