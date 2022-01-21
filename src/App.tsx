import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './page/home/main';
import PlannerDetail from './page/planner-detail';
import PlannerEstimate from './page/planner-estimate/PlannerEstimate';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import Search from './page/home/search';
import Header from './component/Header';
import Footer from './component/Footer';
import Profile from './page/profile-edit';
import Login from './page/user/login/Login';
import PlannerSignUp from './page/user/signup/PlannerSignUp';
import UserSignUp from './page/user/signup/UserSignUp';
import ChatContainer from './page/chat/Chat';
import { isBrowser } from 'react-device-detect';
import Mobile from './page/mobile';
import { RecoilRoot } from 'recoil';
import Kakao from './page/user/OAuth/Kakao';
import FindEmail from './page/user/findUser/FindEmail';
import ResetPw from './page/user/findUser/ResetPw';

import { setAxiosDefaults } from './api';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserPrivateRoute, PlannerPrivateRoute, PublicOnlyRoute } from './routes';
import CompanyDetail from './page/company-detail/CompanyDetail';
import ScrollToTop from './component/ScrollToTop';
import { TermsOfUse } from './page/signup-detail/TermsOfUse';
import { PrivacyPolicy } from './page/signup-detail/PrivacyPolicy';
import MyPage from './page/planner-mypage';
import PlannerProfile from './page/planner-mypage/profile';
import PlannerSetting from './page/user-mypage/PlannerSetting';
import PlannerReview from './page/planner-review';
import PlannerMyEstimate from './page/planner-my-estimate';
import { UserMyPage } from './page/user-mypage';
import UserSetting from './page/user-mypage/UserSetting';
import PrivateRout from './routes/PrivateRoute';
import PrivateRoute from './routes/PrivateRoute';
import EstimateDetail from './page/estimate-detail';
import { PartnerDetail } from './page/partner-detail/PartnerDetail';
import { Helmet } from "react-helmet";
import backgroundImage from "./assets/img/img_background.png";

export const queryClient = new QueryClient();

const App = () => {
  setAxiosDefaults();

  if (!isBrowser) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Mobile />
      </ThemeProvider>
    );
  } else {
    return (
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>피치플래너</title>
                <meta name="description" content="한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요."/>
                <meta name="robots" content="ALL"/>
                <meta name="robots" content="웨딩플래너,웨딩업체,결혼준비,결혼,웨딩플래너업체" />
                <meta name="author" content="피치플래너"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="웨딩플래너 비교서비스, 피치플래너"/>
                <meta property="og:description" content="한번뿐인 결혼식, 믿을 수 있는 웨딩플래너를 피치플래너에서 찾아보세요."/>
                <meta property="og:image" content={backgroundImage}/>
                <meta property="og:url" content="http://peachplanner.com/"/>
                <meta charSet="utf-8" />
            </Helmet>
              <Header />
              <Switch>
                <Route exact path="/">
                  <ScrollToTop />
                  <Main />
                </Route>
                <Route path="/search">
                  <ScrollToTop />
                  <Search />
                </Route>
                <Route path="/planner/:id/detail">
                  <PlannerDetail />
                </Route>
                <UserPrivateRoute path="/planner/:id/estimate">
                  <PlannerEstimate />
                </UserPrivateRoute>
                <Route path="/company/:id">
                  <CompanyDetail />
                </Route>
                <Route path="/partner/:id">
                  <PartnerDetail />
                </Route>
                <PublicOnlyRoute path="/login">
                  <Login />
                </PublicOnlyRoute>
                <PrivateRoute path="/estimateDetail/:id">
                  <EstimateDetail />
                </PrivateRoute>
                <UserPrivateRoute path="/userPage">
                  <UserMyPage />
                </UserPrivateRoute>
                <UserPrivateRoute path="/userSetting">
                  <UserSetting />
                </UserPrivateRoute>
                <PlannerPrivateRoute path="/plannerPage">
                  <MyPage />
                </PlannerPrivateRoute>
                <PlannerPrivateRoute path="/plannerProfile">
                  <PlannerProfile />
                </PlannerPrivateRoute>
                <PlannerPrivateRoute path="/plannerSetting">
                  <PlannerSetting />
                </PlannerPrivateRoute>
                <PlannerPrivateRoute path="/registerProfile">
                  <Profile isUpdate={false} />
                </PlannerPrivateRoute>
                <PlannerPrivateRoute path="/editProfile">
                  <Profile isUpdate={true} />
                </PlannerPrivateRoute>
                <PlannerPrivateRoute path="/plannerReview">
                  <PlannerReview />
                </PlannerPrivateRoute>
                <PlannerPrivateRoute path="/plannerMyEstimate">
                  <PlannerMyEstimate />
                </PlannerPrivateRoute>
                <UserPrivateRoute path="/chats">
                  <ChatContainer />
                </UserPrivateRoute>
                <PublicOnlyRoute path="/plannerSignUp">
                  <PlannerSignUp />
                </PublicOnlyRoute>
                <PublicOnlyRoute path="/signUp">
                  <UserSignUp />
                </PublicOnlyRoute>
                <Route path="/termsOfUse">
                  <TermsOfUse />
                </Route>
                <Route path="/privacyPolicy">
                  <PrivacyPolicy />
                </Route>
                <Route path="/api/auth/login/kakao">
                  <Kakao />
                </Route>
                <Route path="/findEmail">
                  <FindEmail />
                </Route>
                <Route path="/resetPw">
                  <ResetPw />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
              <Footer />
            </Router>
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    );
  }
};

export default App;
