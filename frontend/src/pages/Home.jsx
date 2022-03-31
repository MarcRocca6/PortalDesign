import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsPersonCircle} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ListAssets from '../components/ListAssets';
import { StyledHome } from '../styles';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import Grid from '@mui/material/Grid';

const Home = () => {

  const [date, setDate] = React.useState(new Date());
  const [projectNames, setProjectNames] = React.useState([]);

  // Whilst backend is not setup.
  React.useEffect(() => {
    setProjectNames ( [
      [
        "Application+Delivery (AD) Assets",
        "Automatic Ticket Assignment",
        "Automatic Ticket Resolver"
      ]
    ] )
  }, [])

  return (
    <StyledHome>
      <div id="pageContent">
        <Container style={{margin: '0'}}>

          <Container id="banner">
            <Row style={{width: '100vw'}}>
              <Col>
                <img 
                  src="https://portal-redesign.s3.amazonaws.com/Assets/Grad.jpg"
                  alt="logo"
                  id="leftnewsBox"
                />
                <h1 id="nameHeading" className="bodyHeading">Welcome Julie</h1>
              </Col>
              <Col>
                <Row id="headButtonRow">
                  <Col><Button id="headButtons" size="lg" active>
                    Raise a Support Request
                  </Button></Col>
                  <Col><Button id="headButtons" size="lg" active>
                    Search For AIOps Assets
                  </Button></Col>
                  <Col><Button id="headButtons" size="lg" active>
                    FAQ's
                  </Button></Col>
                </Row>
              </Col>

            </Row>
          </Container> 

          <Container style={{paddingTop: '150px', marginBottom: "-50px"}}>
            <Row>
              <Col>
                <Link to="/accenture-leader" role="button"> 
                  <img 
                    src="https://portal-redesign.s3.amazonaws.com/Assets/HeadingBox.png"
                    alt="logo"
                    id="headingBox"
                  />
                </Link>
              </Col>
              <Col>
                <LocalizationProvider dateAdapter={AdapterDateFns} className="middle">
                  <div id="calenderText">myWizard App Release Calendar</div>
                  <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
                </LocalizationProvider>
              </Col>
            </Row>
          </Container>

          <Row>
            <h1 className="bodyHeading">Pinned Assets</h1>
            <ListAssets projectNames={projectNames}></ListAssets>
          </Row>


        </Container>
      
      </div>
    </StyledHome>
  )
};

export default Home;
