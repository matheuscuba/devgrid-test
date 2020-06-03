import {createStore, combineReducers, applyMiddleware} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import books from './reducers/books';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export const reducers = combineReducers({books});

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
    blacklist: ['books'],
};

const pReducer = persistReducer(persistConfig, reducers);

const client = axios.create({
    baseURL: 'https://openlibrary.org/',
    responseEncoding: 'utf8',
    responseType: 'json',
});

export const Store = createStore(
    pReducer,
    applyMiddleware(axiosMiddleware(client)),
);

export const persistor = persistStore(Store);
