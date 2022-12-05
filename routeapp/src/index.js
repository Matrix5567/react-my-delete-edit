import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);
const store = createStore(reducer, applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
