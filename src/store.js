import { createStore, combineReducers } from 'redux';
import { searchTermReducer } from './features/searchTerm/searchTermSlice.js';
import { hobbyReducer } from './features/hobby/hobbySlice.js';
import { dataReducer } from './features/posts/dataSlice.js';


export const store = createStore(combineReducers({
    searchTerm: searchTermReducer,
    hobby: hobbyReducer,
    data: dataReducer
}));

