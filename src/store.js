//import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from './features/searchTerm/searchTermSlice.js';
import hobbyReducer from './features/hobby/hobbySlice.js';
import dataReducer from './features/posts/dataSlice.js';


export const store = configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        hobby: hobbyReducer,
        data: dataReducer
    }
});

