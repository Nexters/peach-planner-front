import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Spoaq Han Sans Neo';
        src: url('../assets/fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'), 
        url('../assets/fonts/SpoqaHanSansNeo-Regular.woff') format('woff'), 
        url('../assets/fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Spoaq Han Sans Neo';
        src: url('../assets/fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'), 
        url('../assets/fonts/SpoqaHanSansNeo-Bold.woff') format('woff'), 
        url('../assets/fonts/SpoqaHanSansNeo-Bold.ttf') format('ttf');
        font-weight: bold;
    }

    * {
        font-family: 'Spoaq Han Sans Neo', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }

    html {
        font-family: 'Spoaq Han Sans Neo', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
`;

export default GlobalStyle;
