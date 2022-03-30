import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import "./NavBar.css"

// import { Link, useHistory } from 'react-router-dom';

const Footer = (props) => {

  return (
    <Navbar style={navBar}>
      <Container style={navContainer} >

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
              <strong className="enlargeSmall" style={navText}>Contact</strong>
            </Link>

            <Link to="/about" role="button" style={navTextLink}>
              <strong className="enlargeSmall" style={navText}>Address</strong>
            </Link>

            <Link to="/assets" role="button" style={navTextLink}>
              <strong className="enlargeSmall" style={navText}>Social</strong>
            </Link>

          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Footer;


const navBar =
{
    display: 'block',
    position: 'absolute',
    bottom: '0',
    height: '6vh',
    width: '100%',
    backgroundColor: 'rgb(237, 237, 237)',
    border: '1px solid #fff',
    padding: '0px',
    maxWidth: '100%',
}
  
const navContainer = 
{
    margin: '0',
    maxWidth: '100%',
    height: '100%',
    padding: '0',
    paddingRight: '10%',
    paddingLeft: '10%',
}


const navLogoContainer =
{
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
