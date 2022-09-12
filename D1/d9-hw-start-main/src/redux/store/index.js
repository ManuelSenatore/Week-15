import { combineReducers, configureStore} from '@reduxjs/toolkit'
import  FavReducer from '../reducers/FavReducer'
import jobsReducer from '../reducers/JobsReducer'

const bigReducer = combineReducers({
    jobs: FavReducer,
    lists: jobsReducer,
})

const store = configureStore({
    reducer: bigReducer
})

export default store