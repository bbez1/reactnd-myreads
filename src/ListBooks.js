import React, { Component } from "react";
import Bookshelf from "./Bookshelf";

class ListBooks extends Component {
  render() {
    return (
      <section>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Bookshelf title="Currently Reading" />
            <Bookshelf title="Want to Read" />
            <Bookshelf title="Read" />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </section>
    );
  }
}

export default ListBooks;
