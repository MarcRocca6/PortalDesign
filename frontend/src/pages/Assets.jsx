import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillArrowRightCircleFill, BsSlack } from "react-icons/bs";
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./pages.css"

const Home = () => {
  const [query, setQuery] = useState('');
  const [database, setDatabase] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [toggle, setToggle] = useState(true);

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
  }, [])

  const onChangeQuery = (text) => {
    setQuery(text)
    if (text.length > 1) {
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

  const getToggleColours = () => {
    if (toggle) { return ['light', 'dark']}
    else { return ['dark', 'light']}
  }
  function switchToggle () {
    if (toggle) {setToggle(false)}
    else {setToggle(true)}
  }

  function handleSubmit (event) {
    event.preventDefault();
  }
  
  return (
    <div style={pageContent}>
      
      <Container style={{margin: '0'}}>

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
                <BsFillArrowRightCircleFill 
                  style={enterLogo}
                />
                <div style = {toggleContainer}>
                  <button 
                    style = {toggles} type="button" 
                    class={`btn btn-${getToggleColours()[0]}`}
                    onClick={(e) => switchToggle(e.target.value)}
                  >Overview</button>
                  <button 
                    style = {toggles} type="button" 
                    class={`btn btn-${getToggleColours()[1]}`}
                    onClick={(e) => switchToggle(e.target.value)}
                  >Technical</button>
                </div>

            </Form.Group>
          </Form>
          
            {suggestions.length !== 0
              &&
              <Container style={resultsContainer} className="col-md-12 justify-content-md-center">
                {suggestions && suggestions.map((suggestion, i) =>
                  <Link to="/product" role="button"> 
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
                        {toggle
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

            {suggestions.length === 0 
              &&
              query.length !== 0  
              &&
              <div 
                className="col-md-12 justify-content-md-center" 
                style={{textAlign: 'left', paddingLeft: '70px', color: 'rgba(0,0,0,0.7)'}}
              >{`No results found for ${query}`}
              </div>
            }

            {suggestions.length === 0 
              &&
              <div style={{height: '100px'}}></div>
            }
          
          <div style={smallBreak}></div>

          <h1 style={bodyHeading}>Assets Categories</h1>

          <Container>
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

const pageContent =
{
  display: 'flex',
  flexGrow: 1,
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  height: '85vh',
  background: 'rgb(248 248 248)',
}
const enterLogo = 
{
  display: 'flex',
  position: 'absolute',
  flex: '1',
  fontSize: '22px',
  right: '10px',
  height: '100%',
  color: '#8D37C4',
  marginLeft: '8px',
  cursor: 'pointer',
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
  position: 'relative',
  display: 'flex',
  flex: '1',
  width: '100%',
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

const assetRow =
{
  padding: '50px',
  paddingBottom: '20px',
  paddingTop: '20px'
}

const assetCol = 
{
  paddingLeft: '30px',
  paddingRight: '30px',
}

const assetColContent =
{
  height: '80px',
  width: '220px',
  background: 'rgba(200,200,200,0.7)'
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
  marginTop: '-40px',
  borderRadius: '15px',
  maxHeight: '380px',
  overflowY: 'scroll',
}

const toggleContainer = 
{
  display: 'flex',
  position: 'absolute',
  flex: '1',
  right: '45px',
  marginTop: '9px',
  borderWidth: '2px',
  borderColor: '#212529',
  background: '#212529',
  borderStyle: 'solid',
  borderRadius: '15px'
}

const toggles = 
{
  height: '25px',
  width: '100%',
  verticalAlign: 'middle',
  marginTop: 'auto',
  marginBottom: 'auto',
  borderRadius: '15px',
  textAlign: 'center',
  fontSize: '9px',
}