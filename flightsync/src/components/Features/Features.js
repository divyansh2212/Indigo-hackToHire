import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Features = () => {
  const features = [
    { icon: <AccessTimeIcon fontSize="large" />, title: 'Real-Time Updates', description: 'Get instant updates on flight status.' },
    { icon: <NotificationsActiveIcon fontSize="large" />, title: 'Notifications', description: 'Receive timely notifications about your flight.' },
    { icon: <FlightTakeoffIcon fontSize="large" />, title: 'Easy Tracking', description: 'Track flights effortlessly with our intuitive interface.' },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'rgba(0, 0, 0, 0.9)', color: 'white' }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 6, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box textAlign="center">
                {feature.icon}
                <Typography variant="h6" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
                  {feature.title}
                </Typography>
                <Typography>{feature.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
