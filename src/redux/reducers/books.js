const initialState = {
  books: [
    { title: "Книга№1", author: "Достоевский", price: 0, like: 0, dizlike: 0, id: 1 },
    { title: "Книга№2", author: "Достоевский", price: 0, like: 0, dizlike: 0, id: 2 },
    { title: "Книга№3", author: "Достоевский", price: 0, like: 0, dizlike: 0, id: 3 },
    { title: "Книга№4", author: "Достоевский", price: 0, like: 0, dizlike: 0, id: 4 },
    { title: "Книга№5", author: "Достоевский", price: 0, like: 0, dizlike: 0, id: 5 },
    { title: "Книга№6", author: "Достоевский", price: 0, like: 0, dizlike: 0, id: 6 },
  ],
  uniqueId: 7,
  favIds: [4, 5],
}

function bookReducer(state = initialState, action) {
  // console.log("use reducer", state);

  let book;
  let books;
  let favIds;

  switch (action.type) {
    case "CREATE_BOOK":
      book = { ...action.payload, id: state.uniqueId, like: 0, dizlike: 0 };
      books = [...state.books, book];
      return {
        ...state,
        books: books,
        uniqueId: state.uniqueId + 1
      }

    case "DELETE_BOOK":
      books = state.books.filter(book => book.id !== action.payload);
      return {
        ...state,
        books: books
      }

    case "LIKE_BOOK":
      books = state.books.map(book => {
        if (book.id === action.payload) {
          return { ...book, like: book.like + 1 };
        }

        return book;
      });

      return {
        ...state,
        books: books
      }

    case "DIZ_BOOK":
      books = state.books.map(book => {
        if (book.id === action.payload) {
          return { ...book, dizlike: book.dizlike + 1 };
        }
        return book;
      });

      return {
        ...state,
        books: books
      }

    case "ADD_BOOK_TO_FAV":
      favIds = [...state.favIds];
      if (!favIds.includes(action.payload)) {
        favIds.push(action.payload);
      }

      return {
        ...state,
        favIds: favIds
      }

    case "Delete_Fav_Book":
      favIds = state.favIds.filter(favId => favId !== action.payload);
      return {
        ...state,
        favIds: favIds
      }

    case "UPDATE_BOOK":
      break;

    default:
      return state;
  }
}

export default bookReducer;