import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
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
import UserMyPage from './page/user-mypage';
import UserSetting from './page/user-mypage/UserSetting';

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
                <Route path="/planner/:id">
                  <PlannerDetail />
                </Route>
                <Route path="/company/:id">
                  <CompanyDetail />
                </Route>
                <PublicOnlyRoute path="/login">
                  <Login />
                </PublicOnlyRoute>
                <UserPrivateRoute path="/estimate/:id">
                  <PlannerEstimate />
                </UserPrivateRoute>
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
