//action creators
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
};

//selectors
export const selectHobby = (state) => state.hobby;