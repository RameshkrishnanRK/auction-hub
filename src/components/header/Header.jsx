import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import kpmgImage from "../../assets/images/Auction.KPMGLogo_1_.svg";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { logout } from "../../redux/slices/loginSlice";
import { useLocation } from "react-router-dom";
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

export default function Header({ setSearchTerm }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = React.useState("");
  const userData = useSelector((state) => state.login.user);
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <>
      <AppBar
        position="sticky"
        className={styles.headerColor}
        backgroundColor="#337ab7"
      >
        <Toolbar sx={{ minHeight: "55px !important" }} mt={3}>
          <img alt="kpmg" src={kpmgImage} />

          <Box sx={{ flexGrow: 1 }} />
          {location.pathname.includes("/view") && (
            <>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  onChange={(event) => {
                    setInputValue(event.target.value);
                    handleSearch();
                  }}
                  value={inputValue}
                  placeholder="Enter keywords…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </>
          )}
        </Toolbar>

        <Toolbar sx={{ minHeight: "55px !important" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className={styles.link}
          >
            <Link to="/">Home</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            className={styles.link}
            component="div"
            ml={3}
          >
            <Link to="/view">Browse</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className={styles.link}
            ml={3}
          >
            <Link to="/sell">Sell</Link>
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            className={styles.link}
            ml={3}
          >
            <Link to="/contact-us">Contact Us</Link>
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            className={styles.link}
            ml={3}
          >
            <Link to="/about-us">About Us</Link>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          {userData ? (
            <>
              <Tooltip title="open user menu">
                <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: "#337ab7" }}>
                    {userData?.user?.[0]?.toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={() => handleMenuItemClick("/myaccount")}>
                  History
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("/myaccount")}>
                  My Payments
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("/myaccount")}>
                  Watchlists
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  Logout
                  <LogoutOutlinedIcon
                    style={{ fontSize: "15px", paddingLeft: "4px" }}
                  />
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit" className={styles.link}>
                <Link to="/register">Register</Link>
              </Button>
              <Button color="inherit" className={styles.link}>
                <Link to="/login">Login</Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
