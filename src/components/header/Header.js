import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import kpmgImage from '../../images/Auction.KPMGLogo_1_.svg'
import './Header.css'
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="relative" className="header-color">
                <Toolbar sx={{ marginTop: '10px' }}>
                    <img alt="kpmg" src={kpmgImage} />
                </Toolbar>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Home
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '30px' }}
                    >
                        Browse
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '30px' }}
                    >

                        Sell
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button sx={{ marginRight: '20px' }} color="inherit">SignUp</Button>
                    <Button sx={{ marginRight: '20px' }} color="inherit">Register</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                <Divider sx={{
                    marginRight: 3,
                    marginLeft: 3,
                    borderColor: 'grey',
                    borderWidth: '1px'
                }} />
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '30px' }}
                    >
                        About Us
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Enter keywords…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button variant="contained" color="primary" sx={{ marginLeft: '10px' }}>
                        Search
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
