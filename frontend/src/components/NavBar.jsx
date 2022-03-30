import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { BsPersonCircle} from 'react-icons/bs';
import { Link } from 'react-router-dom';

import "./NavBar.css"

// import { Link, useHistory } from 'react-router-dom';

const NavBar = ({ authDetails, ...props }) => {
  var loggedIn = false;
  if (!authDetails || authDetails == null || authDetails === 'undefined') {
    loggedIn = false
  } else { loggedIn = true}

  // const history = useHistory()
  // function logoutAction (e) {
  //   e.preventDefault()
  //   const token = sessionStorage.userToken;
  //   // const token = React.useContext(AuthContext);
  //   fetch('http://localhost:5005/user/auth/logout', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + token,
  //     },
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         response.json().then((data) => {
  //           sessionStorage.userToken = data.token;
  //           history.push('/');
  //           props.setAuth(null)
  //           sessionStorage.clear();
  //           localStorage.clear();
  //         });
  //       } else {
  //         response.json().then((err) => {
  //           console.log(err);
  //           alert(err.error);
  //         });
  //       }
  //     })
  // }

  return (
    <Navbar style={navContent} collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Link to="/" role="button" style={navTextLink}>
          <div style={navLogoContainer}>
            <strong style={blackLogoText}>myWizard AiOps</strong>
            <strong style={pinkLogoText}>Portal</strong>
          </div>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>

            <Link to="/" role="button" style={navTextLink}>
              <strong class={"enlargeSmall"} style={navText}>Home</strong>
            </Link>

            <Link to="/about" role="button" style={navTextLink}>
              <strong class={"enlargeSmall"}style={navText}>About</strong>
            </Link>

            {loggedIn
              ? <>
                  <Link to="/assets" role="button" style={navTextLink}>
                    <strong class={"enlargeSmall"}style={navText}>AIOps Assets</strong>
                  </Link>
                  <Link to="/support-requests" role="button" style={navTextLink}>
                    <strong class={"enlargeSmall"} style={navText}>Support Request</strong>
                  </Link>
                </>
              : <Link to="/login" role="button" style={navTextLink}>
                  <strong class={"enlargeSmall"} style={navText}>Log In</strong>
                </Link>
            }

           

            <Link to="/profile" role="button" style={navTextLink}>
              <BsPersonCircle style={profileIcon}/>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

const navContent = 
{
  height: '7vh',
}
const navLogoContainer =
{
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const profileIcon =
{
  color: '#8D37C4',
  fontSize: '35px',
  paddingLeft: '5px',
  paddingRight: '5px',
  height: '100%',
}
const navText =
{
  paddingLeft: '8px',
  paddingRight: '8px',
  textDecoration: 'none',
  color: '#8D37C4',
  fontWeight: '700',
  fontStyle: 'normal',
  lineHeight: '18px',
  fontSize: '14px',
}
const blackLogoText = 
{
  paddingLeft: '5px',
  textDecoration: 'none',
  color: 'rgb(0,0,0,0.8)',
  fontWeight: '400',
  fontStyle: 'normal',
  lineHeight: '18px',
}
const pinkLogoText =
{
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '22px',
  lineHeight: '33px',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  letterSpacing: '-0.015em',
  color: '#8D37C4',
}

const navTextLink =
{
  paddingLeft: '15px',
  textDecoration: 'none',
}
