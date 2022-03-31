import * as React from 'react';
import { StyledExplorePage } from '../styles';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocationTextField from '../components/LocationTextField';
// import ToggleSwitch from '../components/ToggleSwitch';


function ControlledCarousel(props) {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let images = ["https://picsum.photos/1600/900?random=1", "https://picsum.photos/1600/900?random=2", "https://picsum.photos/1600/900?random="]

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {Object.values(images).map((img, i) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt={`Number ${i}`}
          />
          {/* <Carousel.Caption>
            <h3>{props.contents.title}</h3>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

function ImagesModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={headingStyle}>
          {props.contents.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ControlledCarousel
          contents = {props.contents}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const theme = createTheme();

export default function ExploreActivities() {
  
  // Search Values
  const [query, setQuery] = React.useState("");
  const [projectValue, setProjectValue] = React.useState([]);
  const [dateValue, setDateValue] = React.useState([null, null]);
  const [projectDetails, setProjectDetails] = React.useState([]);
	const [projectTags, setProjectTags] = React.useState([])
  const [modalShow, setModalShow] = React.useState(false);
  const [modalContents, setModalContents] = React.useState({})


  function createModal(index, title) {
    var copy = modalContents
    copy.title = title
    copy.index = index
    setModalContents(copy)
    setModalShow(true)
  }
	
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

//   React.useEffect(() => {
//     // Get List of all Projects
//     const idPromise = fetch('https://portal-redesign.herokuapp.com/project/list', {
//       method: 'GET',
//       headers: {
//         "Content-Type": "application/json",
//         'Authorization': `Bearer ${sessionStorage.token}`
//       },
//     })
//     idPromise.then((response) => {
//       if (response.status === 400) console.log('Error.!');
//       else if (response.status === 200) {
//         response.json().then((data) => {
//           // Get IDs of the projects
//           const projectyIDs = data.projecty_ids.reverse();
//           const temp_projectyDetails = []
//           // Get more information on each Project
//           let detailPromises = (id_list, index) => new Promise((resolve, reject) => {
//             return fetch('https://portal-redesign.herokuapp.com/projecty/get?project_id=' + id_list[index], {
//               method: 'GET',
//               headers: {
//                 "Content-Type": "application/json",
//                 'Authorization': `Bearer ${sessionStorage.token}`
//               },
//             }).then(nResponse => {
//               if (! nResponse.ok ) {console.log(nResponse.statusText)}
//               else {
//                 nResponse.json().then((nData) => {
//                   if (index === id_list.length - 1) {
//                     setProjectDetails(projectyDetails.concat(temp_projectyDetails));
//                     resolve(index);
//                   } else {
//                     temp_projectyDetails.push(nData)
//                     setProjectDetails(projectyDetails.concat(temp_projectyDetails));
//                     resolve(detailPromises(id_list, index+1));
//                   }
//                 });
//               }
//             });
//           }); 
//           detailPromises(projectIDs, 0).then(() => {});

//         });
//       }
//     });
//   }, [])

	// Whilst backend not functional
	React.useEffect(() => {
		setProjectTags ( [
			'Application Services',
			'Artificial Intelligence',
			'Automation',
			'Business Process Outsourcing',
			'Business Strategy',
			'Change Management',
			'Cloud',
			'Customer Experience',
			'Data & Analytics',
			'Digital Commerce',
			'Ecosystem Services',
			'Finance Consulting',
			'Industry X',
			'Infrastructure',
			'Marketing',
			'Mergers & Acquisitions (M&A)',
			'Metaverse',
			'Operating Models',
			'Security',
			'Supply Chain Management',
			'Sustainability',
			'Technology Consulting',
			'Technology Innovation',
			'Zero Based Budgeting (ZBB)'
		])

		setProjectDetails (Array(12)
			.fill(
				{
					name: "Lorem ipsum",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor congue facilisis. Sed consequat at turpis sed iaculis."
				}
			)
		)
	}, [])

  function submitPrimaryForm() {
    console.log(`Location: ${query}`)
    console.log(`DateTime: ${dateValue}`)
    console.log(`Project Tags: ${projectValue}`)
  }

  return (
    <div>
      <StyledExplorePage>
        <ThemeProvider theme={theme}>

        <CssBaseline />
        <main>

            <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
            >
                <Container maxWidth="sm">
                    <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
										style={{fontFamily: 'Montserrat'}}
                    >
                    Search Projects
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph style={{fontFamily: 'Montserrat'}}>
                    Search and explore for projects by project-tags, location, starting or concluding date.
                    </Typography>
                    <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    >
                    
                    <LocationTextField
                      query = {query}
                      setQuery = {setQuery}
                      dateValue = {dateValue}
                      setDateValue = {setDateValue}
                      projectValue = {projectValue}
                      setProjectValue = {setProjectValue}
                      projectsList = {projectTags}
                      submitPrimaryForm = {submitPrimaryForm}
                    />

                    </Stack>
                </Container>
            </Box>

            <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {Object.values(projectDetails).map((item, i) => (
                <Grid item className="eventContainers" key={i} xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                    <CardMedia
                        component="img"
                        image={`https://picsum.photos/1600/900?random=${i}`}
                        alt="random image"
                        style={{cursor: "pointer"}}
                        onClick={() => createModal(i, item['name'])}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item['name']}
                        </Typography>
                        <Typography>
                        <small>{item['description']}</small>
                        </Typography>
                    </CardContent>
                    <CardActions>            
                      <Link to={`/view/${getRandomInt(100000, 999999)}`} role="button" style={{textDecoration:"none"}}>
                        <Button size="small">View</Button>
                      </Link>
                      <Link to={`/view/${getRandomInt(100000, 999999)}`} role="button" style={{textDecoration:"none"}}>
                        <Button size="small" onClick={() => {sessionStorage.join = true}}>Join</Button>
                      </Link>
                    </CardActions>
                    </Card>
                </Grid>
              ))}
            </Grid>
            </Container>
        </main>
        </ThemeProvider>

        <ImagesModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          contents = {modalContents}
        />

      </StyledExplorePage>
    </div>
  );
}

const headingStyle = {
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  letterSpacing: '-0.015em',
}