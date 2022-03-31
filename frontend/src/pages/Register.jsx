import React from 'react';
import PropTypes from 'prop-types';
import { StyledPageContent } from '../styles';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Register = ({ setAuth, ...props }) => {

  function handleSubmit (event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const proxyurl = "https://add-cors-proxy.herokuapp.com/"; 
    fetch(proxyurl + 'https://we-sport-backend.herokuapp.com/auth/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        first_name: data.get('firstName'),
        last_name: data.get('lastName'),
        email: data.get('email'),
        password: data.get('password'),
      }),
    })
    .then(response => {
      if (response.ok) {
        response.json().then((returnData) => {
          sessionStorage.token = returnData.token;
          sessionStorage.user_id = returnData.user_id;
          setAuth(returnData.token)
          props.history.push('/');
        });
      } else {
        console.log(response);
      }
    })
    
  }

  return (
    <StyledPageContent>

      <ThemeProvider theme={theme}>
      <Container component="main" style={{marginTop: '-170px'}} maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar 
            sx={{ m: 1, bgcolor: 'secondary.main' }}
            className={"background-color-theme"}  
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" role="button" style={{textDecoration: 'none'}}>
                  <Typography variant="body2" color="text.secondary" align="right" {...props}>
                    {"Already have an account? Sign In"}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

      <div id="background-img-right"></div>
      <div id="background-img-left"></div>

    </StyledPageContent>
  );
}

Register.propTypes = {
  setAuth: PropTypes.func,
  history: PropTypes.func,
};

export default Register;
