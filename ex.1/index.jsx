import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom'; //eslint-disable-line
import Field from './field';
import { combineReducers, createStore } from 'redux'; //eslint-disable-line
import { Provider } from 'react-redux';//eslint-disable-line

const reducers = combineReducers({
  field: () => ({ value: 'Opa2' }),
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field
      label="Counter"
      initialValue={0}
    />
  </Provider>,
  document.getElementById('app'),
);
