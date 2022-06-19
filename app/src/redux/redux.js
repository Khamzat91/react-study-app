import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {user} from "./reducer/user";
import {articles} from "./reducer/articles";

const rootReducer = combineReducers({
  user,
  articles
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;