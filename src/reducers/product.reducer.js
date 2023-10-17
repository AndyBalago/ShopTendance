import { ADD_PRODUCTS, DELETE_PRODUCT, GET_PRODUCTS } from "../actions/product.action"

const initialState = {};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload;
        case ADD_PRODUCTS:
            return [...state, action.payload];
        case DELETE_PRODUCT:
            return state.filter((product) => product.id !== action.payload);
        default:
            return state;
    }
}