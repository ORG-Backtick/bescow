import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LayoutSearch from '../pages/SearchPage/LayoutSearch';
import LayoutLanding from '../pages/LandingPage/LayoutLanding';
import Reserve from '../containers/Reserve';
import '../assets/styles/App.scss';

const Home = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LayoutLanding} />
        <Route exact path='/search' component={LayoutSearch} />

        <Route exact path='/reserve' component={Reserve} />
      </Switch>
    </BrowserRouter>
  );
};
export default Home;
