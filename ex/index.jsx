import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom'; //eslint-disable-line
import { combineReducers, createStore } from 'redux'; //eslint-disable-line
import { Provider } from 'react-redux';//eslint-disable-line
import counterReducer from './counterReducer';
import Counter from './counter';

const reducers = combineReducers({
  counter: counterReducer,
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counter />
  </Provider>,
  document.getElementById('app'),
);
