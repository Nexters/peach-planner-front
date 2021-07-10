import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './page/User/Login/Login';

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
