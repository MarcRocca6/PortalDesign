import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { BsPersonCircle, BsBoxArrowInRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { StyledNavBar } from '../styles';

// import { Link, useHistory } from 'react-router-dom';

const NavBar = ({ authDetails, ...props }) => {

  var loggedIn = false;
  console.log(authDetails)
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
    <StyledNavBar>
      <Navbar bg="light" expand="lg">
        <Container>

          <Link to="/" role="button" style={navTextLink}>
            <div style={navLogoContainer}>
              <strong style={blackLogoText}>myWizard AiOps</strong>
              <strong style={pinkLogoText}>Portal</strong>
            </div>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id="responsive-navbar-nav">

              <Link to="/" role="button">
                  <strong class="enlargeSmall">Home</strong>
              </Link>
              <Link to="/assets" role="button">
                  <strong class="enlargeSmall">Search Assets</strong>
              </Link>
              <Link to="/explore-projects" role="button">
                  <strong class="enlargeSmall">Search Projects</strong>
              </Link>
              
              {/* {loggedIn
                  ? <>
                      <Link to="/assets" role="button">
                        <strong class="enlargeSmall">Assets</strong>
                      </Link>
                      <Link to="/support-requests" role="button">
                        <strong class="enlargeSmall">Support Request</strong>
                      </Link>
                    </>
                  : <Link to="/login" role="button">
                      <strong class="enlargeSmall">Log In</strong>
                    </Link>
              } */}


            </Nav>

            <Nav>
              {loggedIn
                  ? <>
                      <Link to="/profile" role="button" className="right-navlink">
                        <BsPersonCircle class="d"/>
                        {/* <strong id="navLogin">Login</strong> */}
                      </Link>
                    </>
                  : <>
                      <Link to="/login" role="button" className="right-navlink">
                        <BsBoxArrowInRight class="profileIcon"/>
                      </Link>
                    </>
              }
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledNavBar>
  );
}

export default NavBar;


const navLogoContainer =
{
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const blackLogoText = 
{
  paddingLeft: '5px',
  textDecoration: 'none',
  color: 'rgb(0,0,0,0.8)',
  fontWeight: '400',
  fontStyle: 'normal',
  lineHeight: '18px',
  paddingRight: 0,
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
  padding: 0,
}
const navTextLink =
{
  paddingLeft: '15px',
  textDecoration: 'none',
}
