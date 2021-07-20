import { BrowserRouter, HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './page/Home/Main/Main';
import PlannerDetail from './page/PlannerDetail/PlannerDetail';
import Login from './page/User/Login/Login';
import PlannerEstimate from './page/PlannerEstimate/PlannerEstimate';
import PrivateRoute from './routes/PrivateRoute';
import UserPage from './page/User/MyPage/UserPage';
import PlannerPage from './page/User/MyPage/PlannerPage';
import '../src/styles/reset.css';
import Header from './component/Header';
import Search from './page/Home/Search/Search';

const App = () => {
  return (
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
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

export default App;
