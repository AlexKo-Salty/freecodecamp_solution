import './App.css';
import quotes from "./quote.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faP,faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const firstRender = false;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentID: 0
    };
    this.randomQuote = this.randomQuote.bind(this);
  }
  randomQuote() {
    this.setState({
      currentID: Math.floor(Math.random() * 100)
    });
  }
  render() {
    return (
      <div className="App" id="quote-box">
        <header className="App-header">
          <div id="text" className='App-QuoteBox'>
            <h3>{quotes[this.state.currentID].quote}</h3>
            <h5 id="author" className='App-QuoteAuthor'>-{quotes[this.state.currentID].author}</h5>
            <div className="App-ButtonBox">
              <a id="tweet-quote" target="_blank" href={"https://twitter.com/intent/tweet?text=" + quotes[this.state.currentID].quote  + "-" + quotes[this.state.currentID].author + "&hashtags=quote"}><FontAwesomeIcon icon={faTwitter} /></a>
              <button className='Quote-Button' id="new-quote" onClick={this.randomQuote}><FontAwesomeIcon icon={faArrowsRotate} />  New Quote</button>
            </div>
          </div>   
        </header>
      </div>
    );
  }
}

export default App;
