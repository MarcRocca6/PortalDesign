import React from 'react';
import PropTypes from 'prop-types';
import { StyledPageContent } from '../styles';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Login = ({ setAuth, ...props }) => {

  function handleSubmit (event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log(data)

    // fetch('https://portal-redesign.herokuapp.com/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email: data.get('email').toLowerCase(),
    //     password: data.get('password'),
    //   })
    // })
    // .then(response => {
    //   if (response.ok) {
    //     response.json().then((data) => {
    //       sessionStorage.token = data.token;
    //       sessionStorage.user_id = data.user_id;
    //       setAuth(data.token)
    //       props.history.push('/');
    //     });
    //   } else {
    //     console.log(response.statusText, response.status);
    //     if (response.status === 400 || response.status === 403) {
    //       alert("Error. Invalid email address or password");
    //     }
    //   }
    // })
    
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
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/forgot-password" role="button" style={{textDecoration: 'none'}}>
                    <Typography variant="body2" color="text.secondary" align="left" {...props}>
                      {"Forgot password?"}
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" role="button" style={{textDecoration: 'none'}}>
                    <Typography variant="body2" color="text.secondary" align="right" {...props}>
                      {"Don't have an account? Sign Up"}
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

Login.propTypes = {
  setAuth: PropTypes.func,
  history: PropTypes.func,
};

export default Login;
