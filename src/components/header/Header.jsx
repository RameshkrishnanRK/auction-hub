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
import { logout } from "../../redux/slices/loginSlice";
import { useLocation } from "react-router-dom";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
    paddingLeft: `calc(1.5em + ${theme.spacing(4)})`,
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
  const handleMenuClick = (event) => {
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
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#337ab7 !important" }}
      className={styles.headerColor}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "55px !important",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img alt="kpmg" src={kpmgImage} style={{ marginRight: "20px" }} />
        </Box>
        {location.pathname === "/view" && (
        <Box sx={{ flexGrow: 1, maxWidth: "600px", margin: "0 20px" }}>
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
              placeholder="Search here…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
        )}

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {userData ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar sx={{ bgcolor: "#1768ac" }}>
                {userData?.user?.[0]?.toUpperCase()}
              </Avatar>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  ml: 1,
                  paddingRight:'1px',
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ lineHeight: "1.2" }}
                >
                  {userData?.user}
                </Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{ lineHeight: "1.2", mt: "2px" }}
                >
                  {userData?.role}
                </Typography>
              </Box>
              <IconButton onClick={handleMenuClick} sx={{ ml: 1 }}>
                <ArrowDropDownIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {userData?.role === "Auctioneer" ? (
                  <MenuItem onClick={() => handleMenuItemClick("/bidhistory")}>
                    Bid History
                  </MenuItem>
                ) : (
                  <MenuItem onClick={() => handleMenuItemClick("/auctionhistory")}>
                    Auction History
                  </MenuItem>
                )}
                <MenuItem onClick={() => handleMenuItemClick("/watchlists")}>
                  Watchlists
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          ) : (
            <>
              <Button color="inherit" className={styles.link} ml={2}>
                <Link to="/register">Register</Link>
              </Button>
              <Button color="inherit" className={styles.link} ml={2}>
                <Link to="/login">Login</Link>
              </Button>
            </>
          )}
        </Box>
      </Toolbar>

      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 3,
          minHeight: "45px !important",
        }}
      >
        <Typography variant="h6" noWrap component="div" className={styles.link}>
          <Link to="/">Home</Link>
        </Typography>
        <Typography variant="h6" noWrap className={styles.link} component="div">
          <Link to="/view">Browse</Link>
        </Typography>
        <Typography variant="h6" noWrap component="div" className={styles.link}>
          <Link to="/sell">Sell</Link>
        </Typography>
        <Typography variant="h6" noWrap component="div" className={styles.link}>
          <Link to="/about-us">About Us</Link>
        </Typography>
        <Typography variant="h6" noWrap component="div" className={styles.link}>
          <Link to="/contact-us">Contact Us</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
