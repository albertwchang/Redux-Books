import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let BookDetails = React.createClass({
  render: function() {
    let { activeBook } = this.props;
    let BookDetails;

    if (activeBook) {
      let { title, author, pages } = activeBook;
      return (
        <div>
          <h4>Selected Book:</h4>
          <div>Title: {title}</div>
          <div>Author: {author}</div>
          <div>Pages: {pages}</div>
        </div>
      );
    } else
      return (<div>"Nothing selected yet"</div>);
  }
});

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectBook: SelectBook }, dispatch);
// }

function mapStateToProps(state) {
  // whatever is returned within this functipon is added to the shell's props
  // e.g. inside of BookList
  return { activeBook: state.activeBook };
}

let bookDetailProps = connect(mapStateToProps);
export default bookDetailProps(BookDetails);