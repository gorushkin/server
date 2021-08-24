import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRoutes } from './routes';

const App = () => {
  const user = useSelector((state) => state.user);
  const routes = getRoutes(user);

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
