import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsPersonCircle} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div style={pageContent}>
      <Container style={{margin: '0'}}>

        <Container style = {banner}>
          <Row>
            <Col xs={7}>
              <img 
                src="Grad.jpg"
                alt="logo"
                style={leftnewsBox}
              />
              <h1 style={nameHeading}>Welcome Julie</h1>
            </Col>
            <Col>
              <Row style = {headButtonRow}>
                <Col><Button style={headButtons} size="lg" active>
                  Raise a Support Request
                </Button></Col>
                <Col><Button style={headButtons} size="lg" active>
                  Search For AIOps Assets
                </Button></Col>
                <Col><Button style={headButtons} size="lg" active>
                  FAQ's
                </Button></Col>
              </Row>
            </Col>

          </Row>
        </Container> 

        <div style={calenderText}>myWizard App Release Calendar</div>
        <img 
          src="Cal.png"
          alt="logo"
          style={calender}
        />
        <img 
          src="HeadingBox.png"
          alt="logo"
          style={headingBox}
        />
        <div style = {{height: '110px'}}></div>
        <div style={pinnedHeaders}>
          <h1 style={bodyHeading}>Pinned Assets</h1>
          <h3 style={smallHeading}>Edit Assets</h3>
        </div>

        <Container style={assets}>
          <Link to="/product" role="button"> 
            <Row style={assetRow}>
              <Col style={assetCol}>
                <img style={assetColContent} src="1.png" alt="logo"></img>
              </Col>
              <Col style={assetCol}>
                <img style={assetColContent} src="2.png" alt="logo"></img>
              </Col>
              <Col style={assetCol}>
                <img style={assetColContent} src="3.png" alt="logo"></img>
              </Col>
              <Col style={assetCol}>
                <img style={assetColContent} src="4.png" alt="logo"></img>
              </Col>
            </Row>
            <Row style={assetRow}>
              <Col style={assetCol}>
                <img style={assetColContent} src="5.png" alt="logo"></img>
              </Col>
              <Col style={assetCol}>
                <img style={assetColContent} src="6.png" alt="logo"></img>
              </Col>
              <Col style={assetCol}>
                <img style={assetColContent} src="7.png" alt="logo"></img>
              </Col>
              <Col style={assetCol}>
                <img style={assetColContent} src="8.png" alt="logo"></img>
              </Col>
            </Row>
          </Link> 
        </Container>

      </Container>
    
    </div>
  )
};

export default Home;

const calenderText = 
{
  top: '230px',
  right: '170px',
  position: 'absolute',
  color: "#A768CF",
  fontWeight: '600',
}

const calender = 
{
  top: '270px',
  right: '120px',
  position: 'absolute',
  width: '330px',
  height: '280px',
}

const headingBox = 
{
  top: '230px',
  backgroundColor: 'grey',
  left: '100px',
  position: 'absolute',
  width: '700px',
  height: '320px',
  borderRadius: '20px',
}

const bodyHeading = 
{
  fontFamily: 'Montserrat',
  fontSize: '48px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '72px',
  letterSpacing: '-0.015em',
  textAlign: 'center',
  color: '#000000',
  paddingTop: '30px',
}

const nameHeading = 
{
  bodyHeading,
  height: '100%',
  color: 'white',
  // fontStyle: 'italic',
  fontWeight: '600',
  textAlign: 'left',
  paddingLeft: '12px',
  paddingBottom: '40px',
  Zindex:-1,
  position: 'relative',
  paddingTop: '20px',
}

const smallHeading = 
{
  bodyHeading,
  fontSize: '14px',
  // fontStyle: 'italic',
  cursor: 'pointer',
  color: 'rgba(0,0,0,0.6)',
  textDecoration: 'underline',
}

const pageContent =
{
  display: 'flex',
  flexGrow: 1,
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '90vh',
  background: 'rgb(245 245 245)',
}

const assetRow =
{
  padding: '10px',
  paddingBottom: '00px',
  // paddingTp: '20px'
}

const assetCol = 
{
  paddingLeft: '10px',
  paddingRight: '10px',
}

const assetColContent =
{
  height: '80px',
  width: '240px',
  cursor: 'pointer',
  background: 'rgba(200,200,200,0.7)'
}

const headButtonRow =
{
  paddingTop: '10px',
}

const headButtons = 
{
  fontSize: "12px",
  color: "#A768CF",
  backgroundColor: 'rgb(250,250,250)',
  width: '140px',
  height: '70px',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
}

const newsBox = 
{
  backgroundColor: "rgb(230,230,230)",
  flex: 1,
  height: '38vh',
  marginBottom: '-70px',
  position: 'absolute',
  width: '440px',
  marginTop: '-30px',
  right: 0,
  
}

const leftnewsBox = 
{
  backgroundColor: "rgb(130,230,230)",
  flex: 1,
  height: '15vh',
  width: '100vw',
  marginBottom: '-70px',
  position: 'absolute',
  marginTop: '-30px',
  left: 0,
  opacity: 0.9,
}

const banner =
{
  height: '32vh',
  position: 'absolute',
  top: '100px',
  left: '0px',
}

const assets = {
  height: '32vh',
  position: 'absolute',
  bottom: '-50px',
  left: '40px',
}

const pinnedHeaders = {
  position: 'absolute',
  left: '550px',
}