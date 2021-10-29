import { Switch, Route } from 'react-router-dom';

import Cep from './pages/InputCep';
import LandingPage from './pages/LandingPage';

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Cep} />
      <Route path="/landingpage" component={LandingPage} />
    </Switch>
  );
};

