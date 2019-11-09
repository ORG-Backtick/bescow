import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import Home from './routes/Home';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('home-container'),
);
