import './App.css';
import React from 'react';
import sounds from "./sounds.json";

class DurmButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleClick(e) {
    document.getElementById(e.target.outerText).play();
    // Change state is not wokring for the test #7, switch to change the text by js.
    // this.props.action(e.target.outerText);
    document.getElementById("display").innerHTML = e.target.outerText;
  }
  handleKeyDown(e) {
    if (e.keyCode === this.props.keyvalue) {
      document.getElementById("drumpad-" + this.props.drumbuttonname).click();
    }
  }
  componentDidMount() {
    document.addEventListener("keydown",this.handleKeyDown);
  }
  render() {
    return (
        <button className="drum-pad" onClick={this.handleClick} id={"drumpad-" + this.props.drumbuttonname}>
          <audio className="clip" id={this.props.drumbuttonname} src={this.props.drumsound} type="audio/mpeg">
          </audio>
          {this.props.drumbuttonname}
        </button>
    )
  }
}

// Change state is not wokring for the test #7, switch to change the text by js.
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPlayed: ""
//     };
//     this.displayHandler = this.displayHandler.bind(this);
//   }
//   displayHandler(value) {
//     this.setState({
//       currentPlayed: value
//     });
//   }
//   render() {
//     return (
//       <div className="App">
//         {/* <DurmButton drumbuttonname="I" /> */}
//         <div id="drum-machine">         
//           {sounds.map(s => <DurmButton drumbuttonname={s.name} drumsound={s.src} desc={s.desc} action={this.displayHandler} keyvalue={s.keyvalue} />)}
//         </div>
//         <p id="display">{this.state.currentPlayed}</p>
//       </div>
//     );
//   }
// }

const App = function() {
  return (
    <div className="App">
      <div id="drum-machine">
        {sounds.map(s => <DurmButton drumbuttonname={s.name} drumsound={s.src} desc={s.desc} keyvalue={s.keyvalue} />)}
      </div>
      <p id="display"></p> 
    </div>
  );
}

export default App;
