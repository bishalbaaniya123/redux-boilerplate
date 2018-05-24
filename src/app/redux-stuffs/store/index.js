import {applyMiddleware, createStore} from 'redux';
import reducer from '../reducers';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
import thunkMiddleware from 'redux-thunk';

const persistConfig = {
    key:'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer);
// if redux extension needed, uncomment the lines 14-20 and comment the lines 21-24
/*
export const store = createStore(
    persistedReducer,
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/
export const store = createStore(
    persistedReducer,
    applyMiddleware(thunkMiddleware)
);

export const persistor = persistStore(store);