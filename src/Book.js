import React, { Component } from "react";
import BookshelfChanger from "./BookshelfChanger";
import defaultCover from "./icons/default.png";

class Book extends Component {
  render() {
    const { book, onNewShelfSelected, shelf } = this.props;
    const coverImage =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : defaultCover;
    const title = book.title ? book.title : "No title available";

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${coverImage})`
            }}
          />
          <BookshelfChanger
            bookId={book.id}
            shelf={shelf}
            onNewShelfSelected={onNewShelfSelected}
          />
        </div>
        <div className="book-title">{title}</div>
        {book.authors
          ? book.authors.map(author => (
              <div key={author} className="book-authors">
                {author}
              </div>
            ))
          : "No Author"}
      </div>
    );
  }
}

export default Book;
