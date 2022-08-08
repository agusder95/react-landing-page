import { createGlobalStyle } from 'styled-components';
import Colors from './colors.js'

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overscroll-behavior: none;
        font-family: 'Noto Sans JP', sans-serif;
        background-color: ${Colors.mainBlack};
    }
    ul, li, h1, h2, h3, h4, h5, p, button { margin: 0; padding: 0; }
    ul { list-style: none; }
    button { background: transparent; border: 0; outline: 0 }
`;