import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return state
    }
}

export const selectedProduct = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                ...payload
            }
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {}
        default:
            return state
    }
}