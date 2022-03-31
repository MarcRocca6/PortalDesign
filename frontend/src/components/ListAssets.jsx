import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ListAssets = (props) => {
    return (
        <Container>
            {props.projectNames.map((projectRow, index) =>
                <Row style={assetRow} key={`logo${index}_1`}>
                    <Col style={assetCol}>
                        <Link to={`/product/${projectRow[0].replaceAll(" ", "+")}`} role="button"> 
                            <img style={assetColContent} 
                            src={`https://portal-redesign.s3.amazonaws.com/Services/${projectRow[0].replaceAll(" ", "+")}.png`} 
                            alt={`logo${index}_1`}>
                            </img>
                        </Link>
                    </Col>
                    <Col style={assetCol}>
                        <Link to={`/product/${projectRow[1].replaceAll(" ", "+")}`} role="button"> 
                            <img style={assetColContent} 
                            src={`https://portal-redesign.s3.amazonaws.com/Services/${projectRow[1].replaceAll(" ", "+")}.png`} 
                            alt={`logo${index}_2`}>
                            </img>
                        </Link> 
                    </Col>
                    <Col style={assetCol}>
                        <Link to={`/product/${projectRow[2].replaceAll(" ", "+")}`} role="button"> 
                            <img style={assetColContent} 
                            src={`https://portal-redesign.s3.amazonaws.com/Services/${projectRow[2].replaceAll(" ", "+")}.png`} 
                            alt={`logo${index}`}_3>
                            </img>
                        </Link>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default ListAssets;

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
  height: '60px',
  width: '130px',
  background: 'rgba(200,200,200,0.7)',
  border: 'solid 1px black',
}