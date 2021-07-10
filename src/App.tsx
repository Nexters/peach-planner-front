import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './page/User/Login/Login';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
