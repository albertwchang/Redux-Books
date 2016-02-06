export default function selectBook(book) {
  // THIS IS AN ACTION CREATOR.  IT RETURNS AN ACTION OBJECT TO THE REDUCER
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}