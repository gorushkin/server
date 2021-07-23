import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Files from './pages/Files';
import UploadFile from './pages/UploadFile';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/files">
        <Files />
      </Route>
      <Route path="/upload">
        <UploadFile />
      </Route>
    </Switch>
  </Router>
);

export default App;
