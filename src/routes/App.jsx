import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutSite from '../pages/SiteContent/SiteContent';
import LayoutLanding from '../pages/LandingPage/LayoutLanding';

import Signin from '../containers/Signin';
import Register from '../containers/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LayoutLanding} />
        <Route exact path='/site' component={LayoutSite} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
