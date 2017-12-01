import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom'; //eslint-disable-line
import Field from './field';

ReactDOM.render(
  <Field
    label="Counter"
    initialValue={0}
  />,
  document.getElementById('app'),
);
