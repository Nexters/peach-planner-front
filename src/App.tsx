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
import { setAxiosDefaults } from './api';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  setAxiosDefaults();

  return (
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
              <Route path="/detail">
                <PlannerDetail />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/estimate">
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
            </Switch>
            <Footer />
          </Router>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
