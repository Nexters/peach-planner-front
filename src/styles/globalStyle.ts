import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Spoaq Han Sans Neo';
        src: url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Spoaq Han Sans Neo';
        src: url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf') format('truetype');
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
