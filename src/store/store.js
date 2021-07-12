import Logger from "redux-logger"
import { createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import {rootReducer}  from "./root-reducer"

const persistConfig = {
    key : "root",
    storage
};

const middleware = [Logger]


const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware))
const persistor = persistStore(store);


export {store,persistor};



