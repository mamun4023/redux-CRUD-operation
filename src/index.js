import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// css framework included
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import {createStore } from 'redux';
import contactReducer from './components/redux/reducers/contact_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const Store = createStore(contactReducer, composeWithDevTools());

ReactDOM.render(
<Provider store = {Store}> 
  <Router>
    <App />
  </Router>
</Provider>

  ,document.getElementById('root')
);
