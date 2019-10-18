import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import LandingPage from '../containers/LandingPage';
import SiteContent from '../containers/SiteContent';
// import Signin from '../containers/Signin';
// import Register from '../containers/Register';
import Layout from '../components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* <Route exact path='/' component={LandingPage} /> */}
          <Route exact path='/site' component={SiteContent} />
          {/* <Route exact path='/signin' component={Signin} />
          <Route exact path='/register' component={Register} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
