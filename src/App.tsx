import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './page/home/main';
import PlannerDetail from './page/planner-detail';
import PlannerEstimate from './page/planner-estimate/PlannerEstimate';
import UserPage from './page/user/mypage/UserPage';
import PlannerPage from './page/user/mypage/PlannerPage';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import Search from './page/home/search';
import Header from './component/Header';
import Footer from './component/Footer';
import Profile from './page/profile';
import Login from './page/user/login/Login';
import PlannerSignUp from './page/user/signup/PlannerSignUp';
import UserSignUp from './page/user/signup/UserSignUp';
import ChatContainer from './page/chat/Chat';
import { isBrowser } from 'react-device-detect';
import Mobile from './page/mobile';
import { RecoilRoot } from 'recoil';
import Kakao from './page/user/OAuth/Kakao';

import { setAxiosDefaults } from './api';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserPrivateRoute, PlannerPrivateRoute, PublicOnlyRoute } from './routes';
import CompanyDetail from './page/company-detail/CompanyDetail';
import ScrollToTop from './component/ScrollToTop';

const queryClient = new QueryClient();

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
                  <UserPage />
                </UserPrivateRoute>
                <PlannerPrivateRoute path="/plannerPage">
                  <PlannerPage />
                </PlannerPrivateRoute>
                <PlannerPrivateRoute path="/editProfile">
                  <Profile isUpdate={true} />
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
                <Route path="/api/auth/login/kakao">
                  <Kakao />
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
