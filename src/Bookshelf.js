import React, { Component } from "react";
import Book from "./Book";

class Bookshelf extends Component {
  render() {
    const { shelf, books, onNewShelfSelected } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.title}>
                <Book
                  onNewShelfSelected={onNewShelfSelected}
                  shelf={shelf}
                  book={book}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
