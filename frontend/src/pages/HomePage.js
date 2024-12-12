import React from 'react';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/images/club.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>
            Connect with DJs Like Never Before
          </Typography>
          <Typography variant="h5" gutterBottom>
            Request your favorite songs and tip DJs directly from your phone
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/signup"
            sx={{ mt: 3 }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <MusicNoteIcon color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h6" gutterBottom>
                Real-Time Song Requests
              </Typography>
              <Typography>
                Send song requests instantly and see them in the DJ's queue.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <MusicNoteIcon color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h6" gutterBottom>
                Secure Tipping
              </Typography>
              <Typography>
                Tip your favorite DJs securely through our integrated payment system.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <MusicNoteIcon color="primary" sx={{ fontSize: 50 }} />
              <Typography variant="h6" gutterBottom>
                Geolocation Access
              </Typography>
              <Typography>
                Automatically connect with DJs at your current venue using geolocation.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 5 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            What Users Are Saying
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3 }}>
                <Typography variant="body1">
                  "This app made my night! Got to hear all my favorite songs."
                </Typography>
                <Typography variant="subtitle1" align="right">
                  - Alex
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3 }}>
                <Typography variant="body1">
                  "Tipping the DJ has never been easier. Love the real-time requests!"
                </Typography>
                <Typography variant="subtitle1" align="right">
                  - Jamie
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3 }}>
                <Typography variant="body1">
                  "A must-have app for every party-goer."
                </Typography>
                <Typography variant="subtitle1" align="right">
                  - Taylor
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default HomePage;
