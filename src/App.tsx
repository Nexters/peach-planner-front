import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './page/Home/Main/Main';
import Login from './page/User/Login/Login';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
