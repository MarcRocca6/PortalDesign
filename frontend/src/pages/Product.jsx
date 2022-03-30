import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AiOutlineCheckCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import "./pages.css"

const Product = () => {

  return (
    <div style={pageContent}>
      <Container style={{margin: '0'}}>

        <Container style = {{height: '32vh',}}>
          <Row>
            <Col xs={5}>
              
              <h1 style={nameHeading}>Vertex AI</h1>
              <h3 style={smallHeading}>Build, deploy, and scale ML models faster, with pre-trained and custom tooling within a unified artificial intelligence platform.</h3>
              
              <h3 style ={smallBoldHeading}>A unified UI for the entire ML workflow</h3>
              <h3 style ={smallNormal}>Vertex AI brings together the Google Cloud services for building ML under one, unified UI and API. In Vertex AI, you can now easily train and compare models using AutoML or custom code training and all your models are stored in one central model repository. These models can now be deployed to the same endpoints on Vertex AI.</h3>

              <Container>
                <Row style={assetRow}>
                  <Col style={assetCol}>
                    <AiOutlineCheckCircle style={{height: '100%', 'color': 'green'}}/>
                    <div style={{fontSize: '12px', paddingLeft: '5px', position: 'relative', top: '25%', textAlign: 'left', height: '100%'}}> Unified UI</div>
                  </Col>
                  <Col style={assetCol}>
                    <AiOutlineCheckCircle style={{height: '100%', 'color': 'green'}}/>
                    <div style={{fontSize: '12px', paddingLeft: '5px', position: 'relative', top: '25%', textAlign: 'left', height: '100%'}}> Pre-trained APIs</div>
                  </Col>
                  <Col style={assetCol}>
                    <AiOutlineCheckCircle style={{height: '100%', 'color': 'green'}}/>
                    <div style={{fontSize: '12px', paddingLeft: '5px', position: 'relative', top: '25%', textAlign: 'left', height: '100%'}}> End-to-end integration</div>
                  </Col>
                </Row>
                <Row style={assetRow}>
                  <Col style={assetCol}>
                    <AiOutlineCheckCircle style={{height: '100%', 'color': 'green'}}/>
                    <div style={{fontSize: '12px', paddingLeft: '5px', position: 'relative', top: '25%', textAlign: 'left', height: '100%'}}> Open source frameworks</div>
                  </Col>
                  <Col style={assetCol}>
                    <AiOutlineCheckCircle style={{height: '100%', 'color': 'green'}}/>
                    <div style={{fontSize: '12px', paddingLeft: '5px', position: 'relative', top: '25%', textAlign: 'left', height: '100%'}}> Workbench</div>
                  </Col>
                  <Col style={assetCol}>
                    <AiOutlineCheckCircle style={{height: '100%', 'color': 'green'}}/>
                    <div style={{fontSize: '12px', paddingLeft: '5px', position: 'relative', top: '25%', textAlign: 'left', height: '100%'}}> Learning Containers	</div>
                  </Col>
                </Row>
              </Container>

              <Row style = {headButtonRow}>
                <Col><Button variant="primary" style={headButtons2}  size="lg" active>
                  Explore Demos
                </Button></Col>
                <Col><Button variant="secondary" style={headButtons1}  size="lg" active>
                  View Components
                </Button></Col>
              </Row>
            </Col>
            <Col >
              <Link to="/news" role="button">
                <img 
                  src='Graph.png'
                  alt="logo"
                  style={newsBox}
                  />
              </Link>
            </Col>
          </Row>
        </Container> 

        <div style={{paddingTop: '140px'}}></div>
        {/* <h1 style={bodyHeading}>Success Stories</h1> */}
        {/* <h3 style={smallHeading}>Edit Assets</h3> */}

      </Container>
    
    </div>
  )
};

export default Product;


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
  paddingTop: '60px',
}

const nameHeading = 
{
  bodyHeading,
  // fontStyle: 'italic',
  fontWeight: '600',
  textAlign: 'left',
  paddingLeft: '12px',
  Zindex:-1,
  position: 'relative',
}

const smallHeading = 
{
  bodyHeading,
  fontSize: '14px',
  fontStyle: 'italic',
  paddingLeft: '12px',
  color: 'rgba(0,0,0,0.6)',
  textAlign: 'left',
}

const smallBoldHeading =
{
  smallHeading,
  paddingTop: '30px',
  fontSize: '14px',
  textAlign: 'left',
  fontWeight: '600',
  paddingLeft: '12px',
}

const smallNormal = 
{
  smallHeading,
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '200',
  paddingLeft: '12px',
  textAlign: 'left',
}

const pageContent =
{
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '90vh',
  background: 'rgb(245 245 245)',
}

const assetRow =
{
  // padding: '50px',

}

const assetCol = 
{
  paddingLeft: '30px',
  paddingTop: '15px',
  paddingRight: '30px',
  display: 'flex',
}

const assetColContent =
{
  height: '80px',
  cursor: 'pointer',
  background: 'rgba(200,200,200,0.7)'
}

const headButtonRow =
{
  paddingTop: '60px',
}

const headButtons1 = 
{
  fontSize: "12px",
  color: "rgb(250,250,250)",
  width: '180px',
  height: '50px',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  backgroundColor: 'grey',
}

const headButtons2 = 
{
  fontSize: "12px",
  color: "rgb(250,250,250)",
  width: '180px',
  height: '50px',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  backgroundColor: '#A768CF',
}


const newsBox = 
{
  flex: 1,
  // marginBottom: '-70px',
  width: '640px',
  marginTop: '50px',
  paddingLeft: '155px',
  paddingRight: '-40px',
  height: '70%',
  
}

const leftnewsBox = 
{
  backgroundColor: "rgb(130,230,230)",
  flex: 1,
  height: '38vh',
  marginBottom: '-70px',
  position: 'absolute',
  width: '740px',
  marginTop: '-30px',
  left: 0,
  filter: 'blur(4px)',
  opacity: 0.3,
}