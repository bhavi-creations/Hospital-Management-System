import React from 'react';
import Header from './Header';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const createCard = () => (
  <React.Fragment>
    <CardContent sx={{ backgroundColor: '#ffcccc', padding: 2 }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
      </Typography>
      <Typography variant="h5" component="div">
        Admin 
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {/* adjective */}
      </Typography>
      <Typography variant="body2">
        {/* well meaning and kindly. */}
        <br />
        {/* {'"a benevolent smile"'} */}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const NursePanel = () => {
  return (
    <>
      <Header />
      <Container> 
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' , mt:5 }}>
      Nurse Panel
        </Typography>
      <p>
        {/* Welcome to the administrative panel. */}

      </p>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={2}>
          {[...Array(9)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined" sx={{ boxShadow: 3 }}>
                {createCard()}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Container>
    </>
  );
};

export default NursePanel;

