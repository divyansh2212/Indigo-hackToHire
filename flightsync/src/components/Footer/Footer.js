import React from 'react';
import { Box, Typography, Link, Container, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              FlightSync
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              © 2024 FlightSync. All rights reserved.
            </Typography>
            <Box>
              <IconButton color="inherit" href="https://facebook.com">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              Home
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              Features
            </Link>
            <Link href="#contact" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              Contact
            </Link>
            <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              Get Started
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
