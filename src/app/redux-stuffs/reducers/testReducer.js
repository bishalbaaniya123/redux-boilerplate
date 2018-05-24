function reducer(state = {}, action) {
    switch (action.type) {
        case "TEST_ACTION":
            console.log("TEST_REDUCER REACHED", action.payload);
            return {...state, data: action.payload};
        default:
            return {...state}
    }
}

export const test = reducer;