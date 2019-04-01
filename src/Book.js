import React, { Component } from "react";
import BookshelfChanger from "./BookshelfChanger";

class Book extends Component {
  render() {
    const { book, onNewShelfSelected, shelf } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}
          />
          <BookshelfChanger
            bookId={book.id}
            shelf={shelf}
            onNewShelfSelected={onNewShelfSelected}
          />
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors.map(author => (
          <div key={author} className="book-authors">
            {author}
          </div>
        ))}
      </div>
    );
  }
}

export default Book;
