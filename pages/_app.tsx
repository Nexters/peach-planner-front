import App, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from '../lib/styles/theme';
import { setAxiosDefaults } from '../lib/api';
import GlobalStyle from 'lib/styles/globalStyle';
import Mobile from 'lib/pages/mobile';

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  setAxiosDefaults();

  return (
    <RecoilRoot>
      <Head>
        <title>피치플래너</title>
      </Head>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        {
          pageProps.isMobile ? <Mobile /> :
            <>
              {/* <Header /> */}
              <Component { ...pageProps } />
            </>
        }
      </ThemeProvider>
    </RecoilRoot>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  //userAgent
  const userAgent = appContext.ctx.req ? appContext.ctx.req?.headers['user-agent'] : navigator.userAgent

  //Mobile
  const mobile = userAgent?.indexOf('Mobi')

  //Mobile in pageProps
  appProps.pageProps.isMobile = await (mobile !== -1) ? true : false;

  return { ...appProps }
}

export default MyApp;