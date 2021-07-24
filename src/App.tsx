import { BrowserRouter, HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './page/Home/Main/Main';
import PlannerDetail from './page/PlannerDetail/PlannerDetail';
import Login from './page/User/Login/Login';
import PlannerEstimate from './page/PlannerEstimate/PlannerEstimate';
import UserPage from './page/User/MyPage/UserPage';
import PlannerPage from './page/User/MyPage/PlannerPage';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import Search from './page/Home/Search/Search';
import Profile from './page/Profile/Profile';
import Header from './component/Header';

const App = () => {
  return (
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
        </Router>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
