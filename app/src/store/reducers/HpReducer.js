const initialState = {
    house: "",
    isLoading: false,
    error: ""
};

export const HpReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_HOUSE_START":
            return {
                ...state,
                isLoading: true,
            }
        case "HOUSE_SUCCESS":
            return {
                ...state,
                isLoading: false,
                house: action.payload,
                error: ""
            }
        case "HOUSE_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;


    }
}