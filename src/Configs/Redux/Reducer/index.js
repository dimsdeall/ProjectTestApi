import {combineReducers} from 'redux'
import GlobalReducer from './GlobalReducer'
import UnsplashReducer from './UnsplashReducer'

const Reducer = combineReducers({GlobalReducer, UnsplashReducer}) 

export default Reducer