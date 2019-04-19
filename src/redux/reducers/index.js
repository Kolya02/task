import { combineReducers } from 'redux';

import bookReducer from './books';
import videoReducer from './videos';
import weatherReducer from './weather';

const generalReducer = combineReducers({
  books: bookReducer,
  videos: videoReducer,
  weather: weatherReducer
});

export default generalReducer;