import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Reducer from '../Reducer/index'

const Store = createStore(Reducer, applyMiddleware(thunk))

export default Store