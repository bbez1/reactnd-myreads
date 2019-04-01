import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import Book from "./Book";

class Search extends Component {
  state = {
    books: []
  };

  shelfSelectedLogic = books => {
    //getall books id from groupedbooks
    //run through all books from response
    //check if there's a match and then add the shelf to the books array;
    const { groupedBooks } = this.props;
    //gb id groupedBooks[gb].id
    const updateBookShelf = books.map(book => {
      Object.keys(groupedBooks).map(groupShelf => {
        groupedBooks[groupShelf].forEach(element => {
          // console.log(book.id === element.id, book.id, element.id);
          if (book.id === element.id) {
            book.shelf = groupShelf;
          }
        });
      });
      return book;
    });
    return updateBookShelf;
  };

  onQueryChange = evt => {
    const query = evt.target.value;
    if (query) {
      search(query).then(response => {
        this.setState({
          books: this.shelfSelectedLogic(response)
        });
      });
    } else {
      this.setState({
        books: []
      });
    }
  };

  render() {
    const { books } = this.state;
    console.log(books);
    const { onNewShelfSelected } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={this.onQueryChange}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Boolean(books.length) ? (
              books.map(book => (
                <li key={book.id}>
                  <Book
                    onNewShelfSelected={onNewShelfSelected}
                    book={book}
                    shelf={book.shelf}
                  />
                </li>
              ))
            ) : (
              <p>No results</p>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
