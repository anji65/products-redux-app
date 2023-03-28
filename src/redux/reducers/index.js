import { combineReducers } from "redux";
import { productReducer, selectedProduct } from "./productReducer";

const reducers = combineReducers({
    allProducts : productReducer,
    signleProduct: selectedProduct
})

export default reducers