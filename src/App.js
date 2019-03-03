import React, { Component } from 'react';
import Game from './containers/game'
import './App.css';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/';

let store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Game />
        </Provider>
      </div>
    );
  }
}

export default App;
