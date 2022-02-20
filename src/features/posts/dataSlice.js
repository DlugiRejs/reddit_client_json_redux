import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../utils/http-request.js';

//thunk action creator
export const setData = createAsyncThunk(
    'data/setData',
    async (arg, thunkAPI) => {
        const dataObj = await getData(thunkAPI.getState().hobby);
        return dataObj.data.children;
    }
);
/*const loadData = () => {
    return async (dispatch, getState) => {
        const dataObj = await getData(getState().hobby);
        dispatch({ type: 'data/seData', payload: dataObj.data.children });
    }
};*/

const sliceOptions = {
    name: 'data',
    initialState: [],
    reducers: {
        //setData: (state, action) => action.payload
    },
    extraReducers: {
        //[setData.pending]: (state, action) => {},
        [setData.fulfilled]: (state, action) => action.payload,
        //[setData.rejected]: (state, action) => {},
    }
};

const dataSlice = createSlice(sliceOptions);

//export const { setData } = dataSlice.actions;

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