import React, { Component } from "react";
import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";

class ListBooks extends Component {
  render() {
    const { allBooks, onNewShelfSelected } = this.props;
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
                  onNewShelfSelected={onNewShelfSelected}
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
