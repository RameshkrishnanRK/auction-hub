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
import kpmgImage from '../../assets/images/Auction.KPMGLogo_1_.svg';
import './Header.scss'
import { MENUS_LIST } from '../../constants/constants';
import { Breadcrumbs } from '@mui/material';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
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
    const location = useLocation();
    const pathname = location.pathname;
    const pathSegments = pathname.split('/').filter((segment) => segment);

    return (
        <>
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
                            <Link to="/">
                                Home
                            </Link>
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '30px', textDecoration: 'none !important' }}
                        >
                            <Link to="/browse">
                                Browse
                            </Link>
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '30px' }}
                        >

                            <Link to="/sell">
                                Sell
                            </Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button sx={{ marginRight: '20px' }} color="inherit"><Link to="/sign-up">
                                SignUp
                            </Link></Button>
                        <Button sx={{ marginRight: '20px' }} color="inherit">
                        <Link to="/register">
                                Register
                            </Link>
                        </Button>
                        <Button color="inherit">
                        <Link to="/login">
                                Login
                            </Link>
                        </Button>
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
                            <Link to="/contact-us">
                                Contact Us
                            </Link>
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: '30px' }}
                        >
                            <Link to="/about-us">
                                About Us
                            </Link>
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
            <Breadcrumbs className='breadcrumb' arial-label='breadcrumb'>
                <Link to="/">
                    Home
                </Link>
                {pathSegments.map((segment, index) => {
                    const to = `/${pathSegments.slice(0, index + 1).join('/')}`;
                    return (
                        <Link to={to}>
                            {segment.charAt(0).toUpperCase() + segment.slice(1)}
                        </Link>
                    )
                })}
                {/* <Typography color="text.primary" href="/browse">Browse</Typography> */}
            </Breadcrumbs>
        </>
    );
}
