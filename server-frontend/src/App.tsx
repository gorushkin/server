import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Files from './pages/Files';

const App = () => (
  <Router>
    <Switch>
      <Route path="/files">
        <Files />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  </Router>
);

export default App;
