import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';


const Login = ({ setAuth, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tickbox, setTickbox] = useState('');

  function validateForm () {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      if (password.length > 0) return true;
    }
    return false;
  }

  function handleSubmit (event) {
    event.preventDefault();

    // Entering a fake email and token whilst backend not set up
    sessionStorage.userEmail = "BLANK_EMAIL";
    setAuth("BLANK_TOKEN")
    props.history.push('/');

    // Whilst the backend has not been set up
    // fetch('http://localhost:5005/user/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: email.toLowerCase(),
    //     password: password,
    //   })
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       response.json().then((data) => {
    //         sessionStorage.userToken = data.token;
    //         sessionStorage.userEmail = email;
    //         setAuth(data.token)
    //         props.history.push('/');
    //       });
    //     } else {
    //       response.json().then((err) => {
    //         console.log(err);
    //         alert(err.error);
    //       });
    //     }
    //   })
  }

  return (
    <div style={pageContent}>
      <Container style={{paddingTop: '40px'}} className="col-md-12 justify-content-md-center">
        <div className="Login card text-black">
          <h1 style={heading} className="text-center padding-bottom-xl" >Login</h1>
          <div className="card-body p-md-5">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="LoginEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted" style={{ fontSize: '0.6em' }}>
                  We will never share your personal information with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="LoginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="LoginCheckbox">
                <Form.Check
                  type="checkbox"
                  value={tickbox} onChange={(e) => setTickbox(e.target.checked)}
                  label="Keep me logged in"
                />
              </Form.Group>
              <Button style={{backgroundColor: '#A768CF'}} type="submit" disabled={!validateForm()}>
                Log in
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;

Login.propTypes = {
  setAuth: PropTypes.func,
};

const pageContent =
{
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '85vh',
  background: 'rgb(248 248 248)',
  textAlign: 'left',
}

const heading = 
{
  paddingTop: '30px',
  fontFamily: 'Montserrat',
  fontSize: '48px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '72px',
  letterSpacing: '-0.015em',
  textAlign: 'center',
  color: '#000000',

}