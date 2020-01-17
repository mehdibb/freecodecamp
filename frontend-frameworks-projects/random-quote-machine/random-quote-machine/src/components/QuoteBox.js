import React from "react";
import { connect } from "react-redux";
import { fetchQuotes } from "../redux/actions";

class QuoteBox extends React.Component {
  componentDidMount() {
    this.props.fetchQuotes();
  }

  renderQuoteText(rnd) {
    return this.props.quotes[rnd].text;
  }

  renderAuthor(rnd) {
    return this.props.quotes[rnd].author;
  }

  renderQuote() {
    if (this.props.quotes.length === 1) {
      return {
        text: this.props.quotes[0].text,
        author: this.props.quotes[0].author
      };
    } else {
      let rnd = Math.floor(Math.random() * this.props.quotes.length) - 1;
      return {
        text: this.renderQuoteText(rnd),
        author: this.renderAuthor(rnd)
      };
    }
  }

  rerender = () => {
    this.forceUpdate();
  };

  render() {
    console.log(this.props.quotes);
    return (
      <>
        <div id="quote-box">
          <div id="text">
            <em>"{this.renderQuote().text}"</em>
          </div>
          <div id="author">
            -
            {this.renderQuote().author !== ""
              ? this.renderQuote().author
              : "Anonymous"}
          </div>
          <button id="new-quote" onClick={this.rerender}>
            New Quote
          </button>
          <br />
          <a
            id="tweet-quote"
            href="https://www.twitter.com/intent/tweet"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter"></i> Tweet Quote
          </a>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes };
};

export default connect(mapStateToProps, { fetchQuotes })(QuoteBox);
