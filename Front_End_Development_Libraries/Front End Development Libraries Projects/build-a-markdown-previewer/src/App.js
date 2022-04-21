import './App.css';
import React from 'react';
import { marked } from 'marked';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function ex(firstLine, lastLine) {
  if (firstLine == '\`\`\`'  && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://img.stickers.cloud/packs/2b005c7f-3af7-421f-98b5-993e66d1b50a/png/108f2755-97c5-4f5c-be61-9f1768ba11fc.png)
`;

marked.setOptions({
  gfm: true,
  breaks: true
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownText: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdownText: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <div id="editorDiv">
          <span className="spanTitle">Marked Down</span>
          <textarea id="editor" onChange={this.handleChange} value={this.state.markdownText}></textarea>
        </div>
        <br />
        <div id="previewDiv">
          <span  className="spanTitle">Preview</span>
          <div dangerouslySetInnerHTML={{__html: marked.parse(this.state.markdownText)}} id="preview"></div>
        </div>
      </div>
    );
  }
}

export default App;
