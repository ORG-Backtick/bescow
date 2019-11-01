import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import PlaceDetailPage from '../pages/PlaceDetailPage/PlaceDetailPage';
import '../assets/styles/App.scss';

const Home = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/cow/:id' component={PlaceDetailPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Home;
