import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import listReducer from './listReducer';
import authReducer from './authReducer';
export default combineReducers({
        simpleReducer,
        listReducer,
        authReducer
});