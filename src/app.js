import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import BookList from './shells/sh_book_list';
import BookDetails from './shells/sh_book_details';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <BookList />
        <BookDetails />
      </div>
    );
  }
});


const createStoreWithMiddleware = applyMiddleware()(createStore);
var Comp = <Provider store={createStoreWithMiddleware(reducers)}><App /></Provider>;

ReactDOM.render(Comp, document.querySelector('#app'));