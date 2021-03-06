import 'babel-polyfill'
import './index.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'

// Components
import App from 'components/App';

// Create Store.
import configureStore from './store/configureStore'

const store = configureStore();

// JSS configuration.
const generateClassName = createGenerateClassName()
const jss = create(jssPreset())

render(
  <Provider store={store}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <App/>
    </JssProvider>
  </Provider>,
  document.getElementById('app')
);
