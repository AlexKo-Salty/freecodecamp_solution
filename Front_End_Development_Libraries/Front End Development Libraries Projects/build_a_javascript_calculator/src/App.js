import logo from './logo.svg';
import './App.css';
import React from 'react';

{/* Button 
 Three prop will be passed to button:
 1. buttonID
 2. buttonDisplayValue
 3. buttonStyle
*/}
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    //
  }
  render() {
    return (
      <button className={this.props.buttonStyle} id={this.props.buttonID} onClick={this.handleClick}>
        {this.props.buttonDisplayValue}
      </button>
    )
  }
}

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      formula: ""
    };
  }
  render() {
    return (
      <div>
        <p className='Display'>{this.state.formula}</p>
        <p className='Result'>{this.state.result}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
        <div id="calculator">
          <div id="result-section">
            <Result />
          </div>
        </div>
    </div>
  );
}

export default App;
