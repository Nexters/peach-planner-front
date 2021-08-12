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
import Chat from './page/chat/Chat';
import { setAxiosDefaults } from './api';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserPrivateRoute, PlannerPrivateRoute, PublicOnlyRoute } from './routes';

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
              <PublicOnlyRoute path="/login">
                <Login />
              </PublicOnlyRoute>
              <UserPrivateRoute path="/estimate">
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
                <Chat />
              </UserPrivateRoute>
            </Switch>
            <Footer />
          </Router>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
