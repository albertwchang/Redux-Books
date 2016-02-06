import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let BookDetails = React.createClass({
  render: function() {
    return (
      <div>Title: Title Test</div>
    );
  }
});

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectBook: SelectBook }, dispatch);
// }

// function mapStateToProps(state) {
//   // whatever is returned within this functipon is added to the shell's props
//   // e.g. inside of BookList
//   return { activeBook: state.activeBook };
// }

// let bookDetailsProps = connect(mapStateToProps, mapDispatchToProps);
// export default bookDetailsProps(BookDetails);

export default BookDetails;