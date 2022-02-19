import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'data',
    initialState: [],
    reducers: {
        setData: (state, action) => action.payload
    }
};

const dataSlice = createSlice(options);

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;

/* //action creators
export const setData = (newData) => {
    return {
        type: 'data/setData',
        payload: newData
    }
}

//reducer

const initialData = [];

export const dataReducer = (data = initialData, action) => {
    switch (action.type) {
        case 'data/setData':
            return action.payload;
        default:
            return data;
    }
};
*/
//selectors
export const selectData = (state) => state.data;