import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutSearch from '../pages/SearchPage/LayoutSearch';
import LayoutLanding from '../pages/LandingPage/LayoutLanding';
import '../assets/styles/App.scss';

import Signin from '../containers/Signin';
import Register from '../containers/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LayoutLanding} />
        <Route exact path='/search' component={LayoutSearch} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
