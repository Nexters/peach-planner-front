import { BrowserRouter, HashRouter as Router, Route, Switch } from 'react-router-dom';
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

import { setAxiosDefaults } from './api';
import { QueryClient, QueryClientProvider } from 'react-query';
import CompanyDetail from './page/company-detail/CompanyDetail';

const queryClient = new QueryClient();

const App = () => {
  setAxiosDefaults();

  if (!isBrowser) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Mobile></Mobile>
      </ThemeProvider>
    );
  } else {
    return (
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Router>
                <Header />
                <Switch>
                  <Route exact path="/">
                    <Main />
                  </Route>
                  <Route path="/search">
                    <Search />
                  </Route>
                  <Route path="/planner/:id">
                    <PlannerDetail />
                  </Route>
                  <Route path="/company/:id">
                    <CompanyDetail />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/estimate/:id">
                    <PlannerEstimate />
                  </Route>
                  <Route path="/userPage">
                    <UserPage />
                  </Route>
                  <Route path="/plannerPage">
                    <PlannerPage />
                  </Route>
                  <Route path="/editProfile">
                    <Profile isUpdate={true} />
                  </Route>
                  <Route path="/chats">
                    <ChatContainer />
                  </Route>
                  <Route path="/plannerSignUp">
                    <PlannerSignUp></PlannerSignUp>
                  </Route>
                  <Route path="/signUp">
                    <UserSignUp></UserSignUp>
                  </Route>
                </Switch>
                <Footer />
              </Router>
            </BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    );
  }
};

export default App;
