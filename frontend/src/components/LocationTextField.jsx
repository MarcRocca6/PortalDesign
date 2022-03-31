import React, { useEffect, useRef } from "react";

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';

import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles } from "@material-ui/core/styles";
// import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 300,
    border: 0,
  },
  indeterminateColor: {
    color: "#ef665d",
    border: 0,
  },
  selectAllText: {
    fontWeight: 500
  },
  selectedAll: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      padding: 0,
      border: 0,
      // color: 'red',
    }
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
    border: 0,
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center",
    border: 0,
  },
  variant: "menu"
};


let autoComplete;

const loadScript = (url, callback) => {

  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["(cities)"], componentRestrictions: { country: "aus" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

const popElementStyle = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
}

const LocationTextField = ({  query, setQuery, 
                              dateValue, setDateValue,
                              projectValue, setProjectValue,
                              projectsList,
                              submitPrimaryForm }) => {
  const theme = useTheme();
  const autoCompleteRef = useRef(null);
  const googleMapsApiKey="AIzaSyATUOI1Rqf7A5g6mWIegyKugZNzL37138o"
  const [popFlag, setPopFlag] = React.useState([false, false]);
  const [popLocFlag, setPopLocFlag] = React.useState(false);
  const [popProjectFlag, setPopProjectFlag] = React.useState(false);
  const [projectPlaceholderFlag, setProjectPlaceholderFlag] = React.useState(true);

  const classes = useStyles();

  const isAllSelected = projectsList.length > 0 && projectValue.length === projectsList.length;

  const handleProjectChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setProjectValue(projectValue.length === projectsList.length ? [] : projectsList);
      return;
    }
    setProjectValue(value);
  };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  useEffect(() => {
    if (projectValue.length === 0) {
      setProjectPlaceholderFlag(false)
    } else {
      setProjectPlaceholderFlag(true)
    }
  }, [projectValue])

  const popElement = (index) => {
    var old = popFlag
    old[index] = true
    setPopFlag(old);
  };
  const unpopElement = (index) => {
    var old = popFlag
    old[index] = false
    setPopFlag(old);
  };

  return (
    <>
      <Box
        component="form"
        id="searchContainer"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >




        {/* 
        FIRST INPUT FIELD: LOCATION FIELD

        */}
        <div className = "searchBox borderRight" style={popLocFlag ? popElementStyle : {}} >
          <div className = "locationInputLabel">Location</div>
          <input
            className = "locationInput"
            ref={autoCompleteRef}
            onChange={event => setQuery(event.target.value)}
            onFocus={() => setPopLocFlag(true)}
            onBlur={() => setPopLocFlag(false)}
            placeholder="enter an area"
            value={query}
          />
        </div>
        



        {/* 
        SECOND INPUT FIELD: Project FIELD

        */}
        <div 
          id="projectSelectBox" 
          className='searchBox borderRight'
          onFocus={() => setPopProjectFlag(true)}
          onBlur={() => setPopProjectFlag(false)}
          style={popProjectFlag ? popElementStyle : {}}
        >
          <FormControl style={{border: 0}}>

            <InputLabel 
              id="mutiple-select-label"
              className = "dropdownLabel"
              style={{fontWeight: 'bold', color: 'black', paddingTop: '2px'}}
            >
              Select a Project Tag
            </InputLabel>
            <div 
              id="projectPlaceholder" 
              style={projectPlaceholderFlag ? {display: 'none'} : {}}
            >choose project tag</div>
            <Select
              labelId="mutiple-select-label"
              multiple
              variant="standard"
              value={projectValue}
              
              onChange={handleProjectChange}
              renderValue={(projectValue) => projectValue.join(", ")}
              MenuProps={MenuProps}
              id="dropSearchBox"
              style={{width: '150px', marginTop: '0'}}
              InputProps={{ 
                style: { 
                  color: 'black',
                },
                disableUnderline: true, 
              }}
              disableUnderline = 'true' 
            >
              <MenuItem
                value="all"
                classes={{
                  root: isAllSelected ? classes.selectedAll : ""
                }}
                style={{display: 'flex'}}
              >
                <ListItemIcon>
                  <Checkbox
                    style={{color: '#ef665d'}}
                    classes={{ indeterminate: classes.indeterminateColor }}
                    checked={isAllSelected}
                    indeterminate={
                      projectValue.length > 0 && projectValue.length < projectsList.length
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.selectAllText }}
                  primary="Select All"
                />
              </MenuItem>
              {projectsList.map((option) => (
                <MenuItem 
                  key={option} 
                  value={option} 
                  id='A'
                  style={{display: 'flex', fontStyle: 'italic'}}
                >
                  <ListItemIcon>
                    <Checkbox style={{color: '#ef665d'}} checked={projectValue.indexOf(option) > -1} />
                  </ListItemIcon>
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>





        {/* 
        THIRD/FOURTH INPUT FIELD: DATE FIELD

        */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack className="dateInputBox">
            <DesktopDateRangePicker
              startText="Desktop start"
              inputFormat="dd/MM/yyyy"
              placeholder="Add dates"
              value={dateValue}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField  {...startProps}
                    className="searchBox borderRight"
                    label="From Date"
                    id="standard-size-normal"
                    placeholder="Add dates"
                    variant="standard"
                    onFocus={() => popElement(0)}
                    onBlur={() => unpopElement(0)}
                    style={popFlag[0] ? popElementStyle : {}}
                    InputProps={{ 
                      style: { 
                        color: 'black' 
                      },
                      disableUnderline: true
                    }}
                    InputLabelProps={{
                      style: { 
                        color: 'black',
                        fontWeight: 'bold',
                        padding: '14px',
                        paddingBottom: '0px',
                        paddingLeft: '40px',
                      },
                      shrink: true
                    }}
                  />
                  <TextField  {...endProps}
                    // label="Filled"
                    className="searchBox finalSearchBox"
                    label="To Date"
                    id="standard-size-normal"
                    placeholder="Add dates"
                    variant="standard"
                    onFocus={() => popElement(1)}
                    onBlur={() => unpopElement(1)}
                    style={popFlag[1] ? popElementStyle : {}}
                    InputProps={{ 
                      style: { 
                        color: 'black' 
                      },
                      disableUnderline: true, 
                    }}
                    InputLabelProps={{
                      style: { 
                        color: 'black',
                        fontWeight: 'bold',
                        padding: '14px',
                        paddingBottom: '0px',
                        paddingLeft: '40px',
                      },
                      shrink: true
                    }}
                  />
                  <IconButton 
                    aria-label="delete" 
                    id="searchIcon" 
                    onClick={submitPrimaryForm}
                  >
                    <Search 
                      style={{color: 'white'}} 
                    />
                  </IconButton>  
                </React.Fragment>
              )}
            />
          </Stack>
        </LocalizationProvider>
      </Box>

    </>
  );
}

export default LocationTextField;