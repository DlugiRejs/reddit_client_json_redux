import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'hobby',
    initialState: 'sports',
    reducers: {
        setHobby: (state, action) => action.payload
    }
}

const hobbySlice = createSlice(options);

export const { setHobby } = hobbySlice.actions;

export default hobbySlice.reducer;

/* //action creators
export const setHobby = (nextHobby) => {
    return {
        type: 'hobby/setHobby',
        payload: nextHobby
    }
}

//reducer

const initialHobby = 'sports';

export const hobbyReducer = (hobby = initialHobby, action) => {
    switch (action.type) {
        case 'hobby/setHobby':
            return action.payload;
        default:
            return hobby;
    }
}; */

//selectors
export const selectHobby = (state) => state.hobby;