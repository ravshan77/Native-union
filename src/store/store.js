import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit'
import { persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"
import counterSlice from './item/rootReducer'



const persistConfig = {
    key: 'root',
    version:1,
    storage
}

const persistedReducer = persistReducer(persistConfig, counterSlice);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

export default store;

