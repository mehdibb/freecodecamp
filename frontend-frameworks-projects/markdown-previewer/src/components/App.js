import React from "react";
import "../style.scss";
import marked from "marked";

class App extends React.Component {
  state = {
    input:
      "# H1 Element\r\n" +
      "## H2 Element\r\n" +
      "[my github acc](https://www.github.com/mehdibb)\r\n\r\n" +
      '`ReactDOM.render(<App />, document.getElementById("root")) //this call rendered my React app`\r\n' +
      "```javascript\r\n" +
      "function returnCodeFromCodeblock() { return true; }\r\n" +
      "```\r\n" +
      "1. This is a list item\r\n" +
      ">Quote from w3schools.com on blockquote usage:<br/><br/>For 50 years, WWF has been protecting the future of nature. The world&apos;s leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.&apos;\r\n" +
      "![alt-text](https://www.animalfactsencyclopedia.com/images/315xNxserval-cat-portrait.jpg.pagespeed.ic.fLn0kKXiy1.jpg)\r\n" +
      "**This is a cat**"
  };

  componentDidMount() {
    document.getElementById("editor").addEventListener("keydown", e => {
      if (e.key === "Enter") {
        this.setState(prevState => {
          return {
            input: prevState.input + "<br>"
          };
        });
      }
    });
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    marked.setOptions({
      gfm: true,
      breaks: true
    });
    return (
      <div id="main-wrapper">
        <textarea
          id="editor"
          onChange={this.handleChange}
          value={this.state.input}
        ></textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}
        />
      </div>
    );
  }
}

export default App;
