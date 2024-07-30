import React from 'react';
import { Container, Grid, Typography, Box, Avatar } from '@mui/material';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', feedback: 'This app has made tracking flights so easy and convenient!', avatar: '/path/to/avatar1.jpg' },
    { name: 'Jane Smith', feedback: 'I love the real-time updates. It keeps me informed at all times.', avatar: '/path/to/avatar2.jpg' },
    { name: 'Michael Johnson', feedback: 'A must-have app for frequent travelers!', avatar: '/path/to/avatar3.jpg' },
  ];

  return (
    <Box sx={{ py: 8, backgroundImage: 'url(https://www.newdelhiairport.in/src/images/Maximise-your-sky-high-video-entertainment.jpg)', color: 'white', backgroundRepeat: 'no-repeat',backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 6, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box textAlign="center" p={3} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: 2 }}>
                <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 56, height: 56, mb: 2, mx: 'auto' }} />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {testimonial.name}
                </Typography>
                <Typography>{testimonial.feedback}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
