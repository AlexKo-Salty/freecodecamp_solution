class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  submitMessage() {
    const messagesArray = [...this.state.messages, this.state.input];
    this.setState({
      input: '',
      messages: messagesArray
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitMessage}>Add message</button>
        <ul>{this.state.messages.map(m => <li key={m}>{m}</li>)}</ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};