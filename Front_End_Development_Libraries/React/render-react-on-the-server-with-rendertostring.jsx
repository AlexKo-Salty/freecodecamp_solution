class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
};

// Change code below this line
ReactDOMServer.renderToString(<App />)