export const createBook    = (newBook) => ({ type: "CREATE_BOOK", payload: newBook });
export const deleteBook    = (bookId)  => ({ type: "DELETE_BOOK", payload: bookId });
export const likeBook      = (bookId)  => ({ type: "LIKE_BOOK", payload: bookId });
export const dizBook       = (bookId)  => ({ type: "DIZ_BOOK", payload: bookId });
export const addBookToFav  = (bookId)  => ({ type: "ADD_BOOK_TO_FAV", payload: bookId });
export const deleteFavBook = (bookId) => ({ type: "Delete_Fav_Book", payload: bookId });
export const updateBook    = (newData) => ({ type: "UPDATE_BOOK", payload: newData });