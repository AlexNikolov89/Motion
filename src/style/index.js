import {createGlobalStyle} from 'styled-components';


export const theme = {
    colorPurplePrimary: "#c468ff", /* #c468ff */
    colorPurplePrimaryDark: "#44384b",
    colorRedPrimary: "#FF3366",
    colorRedPrimaryDark: "#BA265D",
    colorGreyLight1: "#faf9f9",
    colorGreyLight2: "#f8f8f9",
    colorShadowDark: "#BFAFB2",

    linearGradient: "linear-gradient(102deg, #c468ff, #6e91f6)",
}


export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        color: #242323;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
`