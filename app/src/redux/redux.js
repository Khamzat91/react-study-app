import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {user} from "./reducer/user";
import {articles} from "./reducer/articles";
import {comments} from "./reducer/comments";

const rootReducer = combineReducers({
  user,
  articles,
  comments
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;