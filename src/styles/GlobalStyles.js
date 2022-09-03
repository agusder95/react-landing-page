import { createGlobalStyle } from 'styled-components';
import colors from './colors.js'

export const GlobalStyles = createGlobalStyle`
    html {
    box-sizing: border-box;
    
    }
    *, *:before, *:after {
        box-sizing: inherit;
        font-family: 'Noto Sans JP', sans-serif;
    }
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overscroll-behavior: none;
        font-family: 'Noto Sans JP', sans-serif;
        background: ${colors.mainBlack};
    }
    ul, li, h1, h2, h3, h4, h5, p, button { margin: 0; padding: 0; }
    ul { list-style: none; }
    button { background: transparent; border: 0; outline: 0 }
`;