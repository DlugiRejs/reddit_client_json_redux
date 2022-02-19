//action creators
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