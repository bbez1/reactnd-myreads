import React, { Component } from "react";

class BookshelfChanger extends Component {
  onShelfChange = evt => {
    const { onNewShelfSelected, bookId } = this.props;
    const selectedShelf = evt.target.value;
    onNewShelfSelected(selectedShelf, bookId);
  };
  render() {
    const { shelf = "move" } = this.props;
    console.log(shelf);
    return (
      <div className="book-shelf-changer">
        <select defaultValue={shelf} onChange={this.onShelfChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
