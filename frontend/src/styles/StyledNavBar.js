import styled from 'styled-components/macro';

const StyledNavBar = styled.div`
    a {
        padding-left: 15px;
        text-decoration: none;
    }

    strong {
        padding-left: 30px;
        padding-right: 30px;
        font-family: 'Montserrat';
        font-style: normal;
        text-decoration: none;
        color: #000000;
        font-weight: 700;
        line-height: 18px;
        font-size: 14px;
    }

    #navLogin {
        color: #EF6D5D;
    }

    .navBarRight {
        flex: 0;
    }

    #responsive-navbar-nav {
        margin-left: auto;
        margin-right: 0px !important;
    }

    .enlargeSmall {
        padding-left: 0px !important;
        color: #8d37c4;
    }

    .enlargeSmall:hover {
        font-size: 101% !important;
    }   

    @media (max-width: 992px) {
        .right-navlink {
            padding-top: 5px;
        }
        .enlargeSmall {
            padding-left: 5px;
        }
    }

    #navLogoContainer {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #navLogoContainer strong {
        padding-left: 0px;
        padding-right: 0px;
        color: #8d37c4;
        text-decoration: none;
    }

    #logoWe {
        font-weight: 400;
        text-decoration: none;
    }

    #logoSport {
        font-size: 22px;
        line-height: 33px;
        letter-spacing: -0.015em;
        text-decoration: none;
    }

    .profileIcon {
        color: #8d37c4;
        font-size: 35px;
        padding-left: 5px;
        padding-right: 5px;
        height: 100%;
    }
`;

export default StyledNavBar;