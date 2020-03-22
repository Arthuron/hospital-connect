import { FETCH_HOSPITALS_PENDING, FETCH_HOSPITALS_SUCCESS, FETCH_HOSPITALS_ERROR } from "./constants";

const initialState = {
    pending: false,
    hospitals: [],
    error: null
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_HOSPITALS_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_HOSPITALS_SUCCESS:
            console.log(action);
            return {
                ...state,
                pending: false,
                hospitals: action.hospitals
            };
        case FETCH_HOSPITALS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        default:
            return state;
    }
}
