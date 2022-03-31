import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { StyledEngineProvider } from '@mui/material/styles';
import ToggleSwitch from '../components/ToggleSwitch';
import ListAssets from '../components/ListAssets';


const Assets = () => {
  const [query, setQuery] = useState('');
  const [database, setDatabase] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [projectNames, setProjectNames] = useState([]);
  const [checked, setChecked] = React.useState(false);

  // Whilst backend is not setup.
  React.useEffect(() => {
    const loadDatabase = async () => {
      fetch("./db.json").then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        setDatabase(data)
      }).catch(err => {
        console.log("Error Reading data " + err);
      });
    }
    loadDatabase();

    setProjectNames ( [
      [
        "Application+Delivery (AD) Assets",
        "Automatic Ticket Assignment",
        "Automatic Ticket Resolver"
      ],[
        "Chatbot",
        "Cloud Chaser",
        "SAP-ABAP",
      ],[
        "Ticket Analysis",
        "Chatbot",
        "Application Delivery (AD) Assets",
      ]
    ] )
    
  }, [])

  const onChangeQuery = (text) => {
    setQuery(text)
    if (text.length > 0) {
      let matches = []
      var object = database["Projects"]
      for (const count in object) {
        var projectStr = object[count]["Name"] + object[count]["About"];
        const regex = new RegExp(`${text}`, "gi");
        if (projectStr.match(regex)) matches.push(object[count])
      }
      setSuggestions(matches)
    }
    if (text === "") { setSuggestions([]) }
  }

  function handleSubmit (event) {
    event.preventDefault();
  }
  
  return (
    <div style={pageContent}>
      <div className="card text-black">
        <Container style={{padding: '100px'}}>

        <h1 style={bodyHeading}>Assets Categories</h1>

        <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" style={searchContainer} controlId="LoginEmail">
                  <Form.Control
                    autoFocus
                    type="search"
                    placeholder="Search AiOps Assets"
                    value={query}
                    style={searchText}
                    onChange={(e) => onChangeQuery(e.target.value)}
                  />
                  <AiOutlineSearch 
                    style={searchLogo}
                  />
                  <StyledEngineProvider injectFirst>
                    <ToggleSwitch checked={checked} setChecked={setChecked} />
                  </StyledEngineProvider>

              </Form.Group>
            </Form>
            
              {suggestions.length !== 0
                &&
                <Container style={resultsContainer} className="col-md-12 justify-content-md-center">
                  {suggestions && suggestions.map((suggestion, i) =>
                    <Link to={`/product/${suggestion["Name"]}`.replaceAll(" ", "_")} role="button" style={{textDecoration: 'none'}}> 
                      <Row style = {{paddingTop: "25px"}} key={suggestion["Image"]}>
                        <Col>
                          <img 
                          src={suggestion["Image"]}
                          alt="logo"
                          style={logoQuery}
                          />
                        </Col>
                        <Col xs={10}>
                            <div style={NameProjQuery}>{suggestion["Name"]}</div>
                            {!checked
                              ? <div style={AboutProjQuery}>{suggestion["About"]}</div>
                              : <>
                                  <div style={AboutProjQuery}>{suggestion["Compatibility"]}</div>
                                  <a 
                                    style={AboutProjQuery} 
                                    href={suggestion["Documentation"]} 
                                    target="_blank" rel="noreferrer">Documentation
                                  </a>
                                </>
                            }
                        </Col>
                      </Row>
                    </Link>
                  )}
                </Container>
              }
            
            <div style={smallBreak}></div>

            <ListAssets projectNames={projectNames}></ListAssets>

        </Container>
      </div>
    </div>
  )
};

export default Assets;

const pageContent =
{
  display: 'flex',
  flexGrow: 1,
  overflow: 'auto',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '90vh',
  background: '#ededed',
}
const searchLogo =
{
  display: 'flex',
  position: 'absolute',
  flex: '1',
  fontSize: '25px',
  left: '10px',
  height: '100%',
  color: '#8D37C4',
  marginLeft: '8px',
  cursor: 'pointer',
}

const searchContainer =
{
  display: 'flex',
  flex: '1',
  width: '60vw',
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const searchText = 
{
  paddingLeft: '70px',
  borderRadius: '25px',
  textDecoration: 'none',
  color: 'rgba(141, 55, 196, 0.7)',
  fontWeight: '500',
  fontStyle: 'normal',
  lineHeight: '18px',
  fontSize: '14px',
  height: '45px',
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
  paddingBottom: '25px',
  paddingTop: '10px',
}

const smallBreak = 
{
  height: '30px',
}

const logoQuery = 
{
  display: 'flex',
  width: '50px',
  cursor: 'pointer',
}

const NameProjQuery = 
{
  display: 'flex',
  fontFamily: 'Montserrat',
  fontSize: '15px',
  fontStyle: 'normal',
  cursor: 'pointer',
  fontWeight: '1000',
  lineHeight: '20px',
  letterSpacing: '-0.015em',
}

const AboutProjQuery = 
{
  display: 'flex',
  fontFamily: 'Montserrat',
  textAlign: 'left',
  fontSize: '11px',
  fontStyle: 'italic',
  fontWeight: '400',
  cursor: 'pointer',
  lineHeight: '20px',
  letterSpacing: '-0.015em',
  color: 'black',
  textDecoration: 'none',
}

const resultsContainer = 
{
  backgroundColor: "rgba(240, 240, 240)",
  paddingLeft: '40px',
  paddingTop: '20px',
  paddingBottom: '15px',
  borderRadius: '15px',
  maxHeight: '380px',
  overflowY: 'scroll',
  position: 'relative',
  width: '60vw',
  marginTop: '-10px',
}
