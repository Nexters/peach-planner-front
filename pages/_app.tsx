import App, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from '../lib/styles/theme';
import { setAxiosDefaults } from '../lib/api';
import GlobalStyle from 'lib/styles/globalStyle';
import Mobile from 'lib/pages/mobile';
import Header from 'lib/pages/components/Header';
import Footer from 'lib/pages/components/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from "../lib/utils/gtag";

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  setAxiosDefaults();
  const router = useRouter();

  useEffect(() => {
    if (pageProps.isMobile) {
      window.alert("피치플래너는 PC 환경에 최적화 되어있어요.")
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <RecoilRoot>
      <QueryClientProvider client={ queryClient }>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>피치플래너</title>
            <meta key="description" name="description" content="한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요." />
            <meta key="robots" name="robots" content="ALL" />
            <meta key="robots2" name="robots" content="웨딩플래너,웨딩업체,결혼준비,결혼,웨딩플래너업체" />
            <meta key="author" name="author" content="피치플래너" />
            <meta key="og:type" property="og:type" content="website" />
            <meta key="og:title" property="og:title" content="웨딩플래너 비교서비스, 피치플래너" />
            <meta key="og:description" property="og:description" content="한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요." />
            <meta key="og:image" property="og:image" content="/og_img.png" />
            <meta key="og:url" property="og:url" content="http://peachplanner.com/" />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={ theme }>
          {
            // pageProps.isMobile ? <Mobile /> :
              <>
                <Header />
                <Component { ...pageProps } />
                <Footer />
              </>
          }
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // https://github.com/vercel/next.js/discussions/16749#discussioncomment-1604423
  if (appContext.ctx?.res?.statusCode === 404) {
    appContext.ctx.res.writeHead(301, { Location: '/' })
    appContext.ctx.res.end()
    return;
  }

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