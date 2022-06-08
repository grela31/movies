import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const pages = [{ text: 'Inicio', route: '/' }, { text: 'Peliculas', route: '/peliculas' }, { text: 'Mis Favoritas', route: '/my-favorites' }, { text: 'Usuarios', route: '/users' },];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const userId = sessionStorage.getItem('UserId');


  const navigate = useNavigate();
  const settings = [
    { text: 'Mis Favoritas', action: () => { navigate('/my-favorites') } },
    {
      text: 'Cerrar Sesión', action: () => {
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log('ok')
          sessionStorage.removeItem('Auth Token');
          sessionStorage.removeItem('UserId');
          sessionStorage.removeItem('Email');
          navigate('/');
        }).catch((error) => {
          // An error happened.
          console.log(error)
        });
      }
    }
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const createHandlePageItemClick = (route) => (_e) => {
    handleCloseNavMenu();
    navigate(route);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src="../imagenes/logopagina.png" width="250" height="100"></img>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ text, route }) => (
                <MenuItem key={text} onClick={createHandlePageItemClick(route)}>
                  <Typography textAlign="center">{text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ text, route }) => (
              <Button
                key={text}
                onClick={createHandlePageItemClick(route)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {text}
              </Button>
            ))}
          </Box>

          {userId && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button color="secondary" variant="contained" onClick={handleOpenUserMenu}>
                Hola, {sessionStorage.getItem('Email')}!
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ text, action }) => (
                <MenuItem key={text} onClick={action}>
                  <Typography textAlign="center">{text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;