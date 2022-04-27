import './index.css';
import React from 'react';
import buttons from './button.json';
import ReactDOM from 'react-dom';

const
endsWithOperator = /[X+-/]$/,
endsWithNegativeSign = /\d[X/+-]{1}-$/;

/* Button 
 Three prop will be passed to button:
 1. buttonID
 2. buttonDisplayValue
 3. buttonStyle
*/
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.action(e.target.outerText);
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
  render() {
    return (
      <div id="result-section">
        <div className='Result' id="result">{this.props.formula}</div>
        <div className='Display' id="display">{this.props.result}</div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
      formula: ""
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }
  buttonHandler(value) {
    if (value === "AC") {
      this.setState({
        result: "0",
        formula: ""
      });
    } else if (!Number.isNaN(parseInt(value))) {
      this.setState((state) => {
        const currentFormula = state.formula;
        const currentResult = state.result;

        if (currentResult === "0" && value === "0")
        {
          return {
            result: currentResult,
            formula: currentFormula
          };;
        } else {
          return {
            result: (currentResult === "0" || (currentResult === "+" || currentResult === "X" || currentResult === "/")) ? value : currentResult + value,
            formula: currentFormula + value
          };
        }
      });
    } else if (value === "+" || value === "X" || value === "/" || value === "-" ) {
      this.setState((state) => {
        const currentFormula = state.formula;

        if(endsWithOperator.test(currentFormula)) {
          if (value === "-") {
            return {
              result: value,
              formula: currentFormula + value
            };
          } else if (endsWithNegativeSign.test(currentFormula)) {
            return {
              result: value,
              formula: currentFormula.substring(0, currentFormula.length - 2) + value
            };
          } else {
            return {
              result: value,
              formula: currentFormula.substring(0, currentFormula.length - 1) + value
            };
          }
        }
        else {
          return {
            result: value,
            formula: currentFormula + value
          };
        }
      });
    } else if (value === ".") {
      this.setState((state) => {
        const currentFormula = state.formula;
        const currentResult = state.result;

        if (currentResult.includes("."))
        {
          return {
            result: currentResult,
            formula: currentFormula
          };;
        } else {
          if (endsWithOperator.test(currentFormula)) {
            return {
              result: "0" + value,
              formula: currentFormula + "0" +  value
            };
          } else {
            return {
              result: currentResult + value,
              formula: currentFormula + value
            };
          }
        }
      });
    } else if (value === "=") {
        this.setState((state) => {
          const currentFormula = state.formula;
          const currentResult = state.result;
          if (currentFormula !== "")
          {
            let replaceFormula = currentFormula.replace(/X/g, "*");
            let calResult = eval(replaceFormula);
            console.log(replaceFormula,calResult)
            return {
              result: calResult.toString(),
              formula: calResult.toString()
            };
          } else {
            return {
              result: currentResult,
              formula: currentFormula
            };;
          }
        });
    }
  }
  render () {
    return (
      <div className="App">
          <div id="calculator">
              <Result formula={this.state.formula} result={this.state.result}/>
            <div id="pad-section">
              {buttons.map(s => <Button buttonStyle={s.buttonStyle} buttonDisplayValue={s.buttonDisplayValue} buttonID={s.buttonID} action={this.buttonHandler} />)}
            </div>
          </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))