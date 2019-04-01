import React, { Component } from "react";
import Bookshelf from "./Bookshelf";
import { getAll, update } from "./BooksAPI";
import { Link } from "react-router-dom";

class ListBooks extends Component {
  state = {
    allBooks: []
  };
  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    getAll().then(books => {
      this.setState({
        allBooks: this.groupByShelf(books)
      });
    });
  };

  groupByShelf(books) {
    var groupBy = function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
    //{read: [], currentlyReading: []}
    return groupBy(books, "shelf");
  }

  onNewShelfSelected = (newShelf, bookId) => {
    update({ id: bookId }, newShelf).then(response => {
      this.getAllBooks();
    });
  };

  render() {
    const { allBooks } = this.state;
    return (
      <section>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {Object.keys(allBooks).map(shelf => {
              return (
                <Bookshelf
                  key={shelf}
                  onNewShelfSelected={this.onNewShelfSelected}
                  books={allBooks[shelf]}
                  shelf={shelf}
                />
              );
            })}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default ListBooks;
