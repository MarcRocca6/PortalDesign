import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const MaterialUISwitch = styled(Switch)(({ theme, ...props }) => ({
  width: 110,
  height: 34,
  padding: 7,
  "& .MuiFormGroup-root": {
      position: 'absolute',
      right: '20px',
  },
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(70px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 25 23"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M11 12l-7.071 7.071-1.414-1.414L8.172 12 2.515 6.343 3.929 4.93 11 12zm0 7h10v2H11v-2z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        background: 'linear-gradient(90deg, rgba(255,255,255,1) 33%, rgba(141,55,196,1) 93%)',
      }
    }
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: props.checked 
        ? "rgba(141,55,196)" 
        : "white",
    width: 32,
    height: 32,
    border: '1px solid rgba(141,55,196)',
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="21" width="21" viewBox="0 0 25 23"><path fill="${encodeURIComponent(
        "rgba(141,55,196)"
      )}" d="M10 10.5l1.038-3.635a1 1 0 0 1 1.924 0L14 10.5V12h.72a1 1 0 0 1 .97.757l1.361 5.447a8 8 0 1 0-10.102 0l1.362-5.447A1 1 0 0 1 9.28 12H10v-1.5zm2 9.5a7.952 7.952 0 0 0 3.265-.694L13.938 14h-3.876l-1.327 5.306A7.95 7.95 0 0 0 12 20zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>')`,    
    }
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(141,55,196,0.9612438725490196) 70%)',
    border: '1px solid rgba(141,55,196)',
    borderRadius: 20 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16
    },
    "&:before": {
      color: "#636363",
      left: '14px',
      fontSize: '9px',
      top: '55%',
      width: 'auto',
      fontWeight: 'bold',
      letterSpacing: '0.015em',
      fontFamily: 'Montserrat',
      content: props.checked ? "'Technical'" : "''"
    },
    "&:after": {
      right: 40,
      color: "white",
      fontSize: '9px',
      top: '55%',
      letterSpacing: '0.015em',
      fontFamily: 'Montserrat',
      width: '45px',
      marginRight: '-25px',
      content: ! props.checked ? "'Overview'" : "''"
    }
  }
}));

export default function ToggleSwitch(props) {

    const switchHandler = (event) => {
        props.setChecked(event.target.checked);
      };
  
    return (
      <FormGroup>
          <FormControlLabel label="" style={{position: 'absolute', right: '-20px', height: '100%'}}
              control={<MaterialUISwitch 
                          sx={{ m: 1 }} 
                          checked={props.checked} 
                          onChange={switchHandler} 
                          defaultChecked 
                      />}
          />
      </FormGroup>
    );
  }
  