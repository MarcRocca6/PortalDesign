import styled from 'styled-components/macro';

const StyledPageContent = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 90vh;
    background: rgb(248 248 248);
    text-align: left;

    #headingCenter {
        display: flex;
        height: 100%;
        padding-top: 45px;
        justify-content: center;
        font-family: 'Montserrat';
        font-size: 48px;
        font-style: normal;
    }

    #homeHeadingCenter {
        height: 100%;
        padding: 100px;
        justify-content: center;
        font-family: 'Montserrat';
        font-size: 48px;
        font-style: normal;
    }

    .globalFont {
        font-family: 'Montserrat';
        font-style: normal;
    }

    #editButton {
        background-color: var(--portal-purple);
        font-family: 'Montserrat';
        font-style: normal;
        font-size: 12px;
    }

    #loginHeading {
        padding-top: 30px;
        font-family: 'Montserrat';
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 72px;
        letter-spacing: -0.015em;
        text-align: center;
        color: #000000;
    }

    @media (min-width: 992px) {
        #background-img-right {
            background-image: url("https://portal-redesign.s3.amazonaws.com/Assets/login_left.svg");
            height: 330px;
            width: 330px;
            right: 0px;
            bottom: 0;
            position: absolute;
        }
    
        #background-img-left {
            background-image: url("https://portal-redesign.s3.amazonaws.com/Assets/login_right.svg");
            height: 330px;
            width: 330px;
            left: 0px;
            bottom: 0;
            position: absolute;
        }
    }
    
    #loginCard {
        padding-top: 40px;
        margin: auto;
        margin-top: -100px;
        width: 400px;
    }

    .background-color-theme {
        background-color: var(--wesport-pink);
    }
`;

export default StyledPageContent;