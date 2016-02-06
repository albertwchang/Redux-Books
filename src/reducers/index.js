import { combineReducers } from 'redux';
import BooksReducer from './r_books';
import ActiveBookReducer from './r_active_book';

let reducers = {
  books: BooksReducer,
  activeBook: ActiveBookReducer
};

let allReducers = combineReducers(reducers);
export default allReducers;