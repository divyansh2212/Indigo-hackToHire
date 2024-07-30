import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(https://media.npr.org/assets/img/2021/10/06/gettyimages-1302813215_wide-a248aa0418c5154e72d6a555f556bf5d99e7cac7.jpg?s=1100&c=50&f=jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: 2,
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
        Move in Sync with FlightSync
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mb: 4, textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)' }}>
        Stay updated with real-time flight status and notifications
      </Typography>
      <Button variant="contained" color="secondary" size="large" sx={{ mt: 4 }}>
        Get Started
      </Button>
    </Box>
  );
};

export default Hero;
