import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlannerDetail from './page/PlannerDetail/PlannerDetail';
import Login from './page/User/Login/Login';
import PlannerEstimate from './page/PlannerEstimate/PlannerEstimate';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/detail">
          <PlannerDetail />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/estimate">
          <PlannerEstimate />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
