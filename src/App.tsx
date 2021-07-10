import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './page/User/Login/Login';
import PrivateRoute from './routes/PrivateRoute';
import UserPage from './page/User/MyPage/UserPage';
import '../src/styles/reset.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/userPage">
          <UserPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
