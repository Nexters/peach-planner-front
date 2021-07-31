import { BrowserRouter, HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './page/home/main/Main';
import PlannerDetail from './page/PlannerDetail/PlannerDetail';
import Login from './page/User/Login/Login';
import PlannerEstimate from './page/PlannerEstimate/PlannerEstimate';
import UserPage from './page/User/MyPage/UserPage';
import PlannerPage from './page/User/MyPage/PlannerPage';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import Search from './page/home/search/Search';
import Header from './component/Header';
import Footer from './component/Footer';
import Profile from './page/profile/Profile';

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
          <Footer />
        </Router>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
