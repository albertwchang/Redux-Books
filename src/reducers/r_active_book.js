// 'state' is NOT application state.  Instead, it is the state that the reducer is responbile for
export default function(activeBookState = null, action) {
  // NEVER mutate the state!!!!
  switch(action.type) {
    // always return a fresh object, which will represent the new state of
    // the the reducer
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return activeBookState;
  }
}