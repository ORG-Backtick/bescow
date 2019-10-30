import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import Reserve from '../components/Reserve';
import '../assets/styles/App.scss';

const Home = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/search' component={SearchPage} />

        <Route exact path='/reserve' component={Reserve} />
      </Switch>
    </BrowserRouter>
  );
};
export default Home;
