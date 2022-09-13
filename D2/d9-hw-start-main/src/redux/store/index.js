import { combineReducers, configureStore} from '@reduxjs/toolkit'
import  FavReducer from '../reducers/FavReducer'
import jobsReducer from '../reducers/JobsReducer'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {encryptTransform} from 'redux-persist-transform-encrypt'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['lists'],
    transforms:[
        encryptTransform({
            secretKey: process.env.REACT_APP_PERSIST_KEY,
        }),
    ],
}

const bigReducer = combineReducers({
    jobs: FavReducer,
    lists: jobsReducer,
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
    })
})

export const persistor = persistStore(store)