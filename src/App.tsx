import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './page/Home/Main/Main';
import PlannerDetail from './page/PlannerDetail/PlannerDetail';
import Login from './page/User/Login/Login';
import PlannerEstimate from './page/PlannerEstimate/PlannerEstimate';
import UserPage from './page/User/MyPage/UserPage';
import PlannerPage from './page/User/MyPage/PlannerPage';
import '../src/styles/reset.css';
import Search from './page/Home/Search/Search';
import Profile from './page/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/search">
          <Search></Search>
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
          <Profile isUpdate={true}></Profile>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
