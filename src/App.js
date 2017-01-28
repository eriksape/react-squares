import React, { Component } from 'react';
import Square from './components/square'

import './App.css';

class App extends Component {
  render() {
      return (
          <div className="canvas">
              <Square>1</Square>
              <Square>2</Square>
              <Square>3</Square>
              <Square>4</Square>
              <Square>5</Square>
              <Square>6</Square>
              <Square>7</Square>
              <Square>8</Square>
              <Square>{null}</Square>
          </div>
      )
  }
}

export default App;
