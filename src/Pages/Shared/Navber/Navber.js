import React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Box } from '@mui/material';

const Navber = () => {
  const {user,logOut}=useAuth();
  const btn={
    textDecoration:"none"
  }
    return (
 <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <Link style={btn} to="/appointment">
            <Button sx={{color:"white"}} color="inherit" >Appointment</Button>
          </Link>
           <Link style={btn} to="/home">
            <Button sx={{color:"white"}} color="inherit" >Home</Button>
          </Link>
         
          {
            user?.email?
            <Box>
              <NavLink style={{textDecoration:"none",color:"white"}} to="/dashboard"><Button color="inherit">DashBoard</Button></NavLink>
               <Button onClick={logOut} color="inherit">Logout</Button>
            </Box>
             :
              <NavLink style={{textDecoration:"none",color:"white"}} to="/login"><Button color="inherit">Login</Button></NavLink>
          }
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navber;