import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let BookDetails = React.createClass({
  render: function() {
    let { activeBook } = this.props;
    let title = activeBook ? activeBook.title : "Nothing selected yet";
    return ( <div>{title}</div> );
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