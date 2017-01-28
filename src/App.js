import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import Application from './components/application'

import './App.css';

class App extends Component {
  render() {
      const store = configureStore();
      return (
          <Provider store={store}>
              <Application />
          </Provider>
      )
  }
}

export default App;
