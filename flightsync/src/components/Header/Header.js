import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <FlightIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          FlightSync
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Features</Button>
        <Button color="inherit">Contact</Button>
        <Button color="secondary" variant="outlined">Get Started</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
