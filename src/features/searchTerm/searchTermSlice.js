import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => action.payload
    }
};

const searchTermSlice = createSlice(options);

export const { setSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;

/* //action creators
export const setSearchTerm = (newSearchTerm) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: newSearchTerm
    }
}

//reducer

const initialSearchTerm = '';

export const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload;
        default:
            return searchTerm;
    }
};
*/
//selectors
export const selectSearchTerm = (state) => state.searchTerm;
