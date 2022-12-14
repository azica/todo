import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import todoReducer from "./todoReducer";
import { composeWithDevTools } from 'redux-devtools-extension'

let rootReducer = combineReducers({
    todos: todoReducer
});


export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunkMiddleWare)))