import styled from 'styled-components/macro';

const StyledExplorePage = styled.div`

    .eventContainers {
        border-radius: 35px;
    }

    #searchContainer {
        display: flex;
        justify-content: center;
        border: 1px solid #bdbdbd;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
    }

    .locationInputLabel {
        background: #ffffff00;
        color: black;
        font-weight: bold;
        font-size: 12px;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        line-height: 1.4375em;
        letter-spacing: 0.00938em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 133%;
    }

    .locationInput {
        border: 0px;
        background: #ffffff00;
        font: inherit;
        letter-spacing: inherit;
        padding: 3px 0 5px;
        box-sizing: content-box;
        background: none;
        height: 1.4375em;
        margin: 0;
        -webkit-tap-highlight-color: transparent;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        display: block;
        min-width: 0;
        width: 100%;
        color: black;
        font-size: 15px !important;
        font-weight: 400;
        padding-right: 120px;
    }

    #searchIcon {
        background: linear-gradient(90deg,rgb(141 55 196) 19%,rgb(255 0 194) 100%);
        margin: auto;
        margin-right: 10px;
        // margin-left: -55px;
    }

    #searchIcon:hover {
        height: 45px;
        width: 45px;
    }

    locationInput:focus, input:focus{
        outline: none;
    }

    .dateInputBox {
        margin: 0;
        width: fit-content;
    }

    .searchBox {
        width: 200px;
        margin-left: 10px;
        padding: 10px;
        padding-bottom: 0px;
        margin: 0px;
        border-radius: 50px;
        padding-left: 30px;
        font-size: 15px !important;
        transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    }

    #dropSearchBox {
        width: 200px;
        padding: 0;
        margin: 0;
        margin-top: 5px;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        color: #000000;
        transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    }

    #dropSearchBox:hover {
        background: #edeaea;
        cursor: pointer;
    }

    #dropSearchBox:focus {
        background: #edeaea;
    }

    .dropdownLabel {
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-size: 12px;
        font-weight: 'bold';
        width: 180px;
    }

    .searchBox:focus {
        background: #80808026;
        cursor: pointer;
    }

    .searchBox:hover {
        background: #80808026;
        cursor: pointer;
    }

    .borderRight {
        border-right: 1px solid #aaaaaa;
    }

    .TextField-without-border-radius fieldset {
        border-radius: 25px;
    }

    .searchBox .MuiOutlinedInput-root{
        border-radius: 50px;
     }
    
    .finalSearchBox {
        margin-right: -60px;
    }

    #projectSelectBox {
        padding-right: 10px;
    }

    #projectPlaceholder {
        position: absolute;
        padding-top: 20px;
        height: 1.4375em;
        color: #a5a5a5;
        font-size: 15px !important;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
    }

`;

export default StyledExplorePage;