import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AiOutlineCheckCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Product = ({ ...props }) => {

  const productName = props.match.params.projectid.replaceAll("+", " ");

  const descriptorStyles = [
    [
      'Unified UI',
      'Pre-trained APIs',
      'End-to-end integration',
    ],[
      'Open source frameworks',
      'Workbench',
      'Learning Containers',
    ]
  ]

  return (
    <div style={pageContent}>
      <Container style={{margin: '0'}}>

        <Container style = {{height: '32vh',}}>
          <Row>
            <Col xs={5}>
              
              <h1 style={nameHeading}>{productName}</h1>
              <h3 style={smallHeading}>Build, deploy, and scale ML models faster, with pre-trained and custom tooling within a unified artificial intelligence platform.</h3>
              <h3 style ={smallBoldHeading}>A unified UI for the entire ML workflow</h3>
              <h3 style ={smallNormal}>{productName} brings together the Google Cloud services for building ML under one, unified UI and API. In {productName}, you can now easily train and compare models using AutoML or custom code training and all your models are stored in one central model repository. These models can now be deployed to the same endpoints on Vertex AI.</h3>

              <Container style={descriptorContainer}>
                {descriptorStyles.map((descriptor, index) =>
                  <Row>
                    <Col style={assetCol}>
                      <AiOutlineCheckCircle style={{height: '20px', 'color': 'green'}}/>
                      <div style={descriptorStyle}>{descriptor[0]}</div>
                    </Col>
                    <Col style={assetCol}>
                      <AiOutlineCheckCircle style={{height: '20px', 'color': 'green'}}/>
                      <div style={descriptorStyle}>{descriptor[1]}</div>
                    </Col>
                    <Col style={assetCol}>
                      <AiOutlineCheckCircle style={{height: '20px', 'color': 'green'}}/>
                      <div style={descriptorStyle}>{descriptor[2]}</div>
                    </Col>
                  </Row>
                )}
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
                  src='https://portal-redesign.s3.amazonaws.com/Assets/Graph.png'
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
  paddingBottom: '200px',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '90vh',
  background: 'rgb(245 245 245)',
}
const assetCol = 
{
  paddingLeft: '30px',
  paddingTop: '15px',
  paddingRight: '30px',
  display: 'flex',
}
const headButtonRow =
{
  paddingTop: '60px',
  width: '40vw',
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
  width: '540px',
  paddingRight: '-40px',
  position: 'absolute',
  margin: 'auto',
  marginTop: '70px',
  marginLeft: '40px',
}
const descriptorStyle = 
{
  fontSize: '12px', 
  paddingLeft: '5px', 
  position: 'relative', 
  top: '25%', 
  textAlign: 'left', 
  height: '100%',
  marginTop: 'auto'
}
const descriptorContainer = 
{
  width: '400px',
  flexDirection: 'row',
  display: 'flex'
}