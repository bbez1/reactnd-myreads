import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search, update } from "./BooksAPI";
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
          console.log(book.id === element.id, book.id, element.id);
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
    search(query).then(response => {
      this.setState({
        books: this.shelfSelectedLogic(response)
      });
    });
  };

  render() {
    const { books } = this.state;
    const { onNewShelfSelected } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              onChange={this.onQueryChange}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book
                  onNewShelfSelected={onNewShelfSelected}
                  book={book}
                  shelf={book.shelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
