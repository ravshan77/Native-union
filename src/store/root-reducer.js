import { combineReducers } from "redux";
import StoreData from "./item/item-reducer"

export const rootReducer = combineReducers({
    StoreData: StoreData
})