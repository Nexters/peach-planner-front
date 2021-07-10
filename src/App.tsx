import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlannerDetail from './page/PlannerDetail/PlannerDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/detail">
          <PlannerDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
