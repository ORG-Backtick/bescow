import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { gettingProducts, getProductsError, getProductsSuccess } from '../actions';
import LandingPage from '../pages/LandingPage/LandingPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import PlaceDetailPage from '../pages/PlaceDetailPage/PlaceDetailPage';
import '../assets/styles/App.scss';

const Home = (props) => {
  useEffect(() => {
    props.gettingProducts();
    try {
      const fetchData = async () => {
        // const response = await fetch('https://bescowapi.afvalenciab.now.sh/api/coworking');
        const response = await fetch('http://localhost:3000/api/coworking');
        const { data } = await response.json();
        props.getProductsSuccess(data);
      };

      fetchData();
    } catch (error) {
      props.getProductsError(error.message);
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/cow' component={PlaceDetailPage} />
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  gettingProducts,
  getProductsSuccess,
  getProductsError,
};

export default connect(null, mapDispatchToProps)(Home);
