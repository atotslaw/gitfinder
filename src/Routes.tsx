import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Gitfinder from 'pages/Gitfinder';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/gitsearch">
        <Gitfinder />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
