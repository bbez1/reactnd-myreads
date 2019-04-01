import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { getAll, update } from "./BooksAPI";
import ListBooks from "./ListBooks";
import Search from "./Search";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    groupedBooks: []
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    getAll().then(books => {
      this.setState({
        groupedBooks: this.groupByShelf(books)
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
    const { groupedBooks } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              onNewShelfSelected={this.onNewShelfSelected}
              allBooks={groupedBooks}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              onNewShelfSelected={this.onNewShelfSelected}
              groupedBooks={groupedBooks}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
