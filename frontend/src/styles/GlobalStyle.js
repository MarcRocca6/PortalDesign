import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
    /* css variables accessable on all pages */
    :root {
        --portal-purple: #EF6D5D;
    }
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
`;

export default GlobalStyle;