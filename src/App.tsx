import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
