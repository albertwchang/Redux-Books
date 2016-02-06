import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions/index';

let BookList = React.createClass({
  renderList: function() {
    let { books, selectBook } = this.props;

    return books.map((book, key) => {
      return (
        <li
          key={key}
          className="list-group-item"
          onClick={() => selectBook(book)}>{book.title}
        </li>
      )
    });
  },

  render: function() {
    return ( <div>{this.renderList()}</div> );
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

function mapStateToProps(state) {
  // whatever is returned within this functipon is added to the shell's props
  // e.g. inside of BookList
  return { books: state.books };
}

let bookListProps = connect(mapStateToProps, mapDispatchToProps);
export default bookListProps(BookList); // returning a BookList bounded to reducer