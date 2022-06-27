import axios from "axios";
import {comments} from "../reducer/comments";


export const setIsAuth = (isAuth) => ({
  type: 'SET_IS_AUTH',
  payload: isAuth
})

export const setUserArticles = (articles) => ({
  type: 'SET_USER_ARTICLES',
  payload: articles
})

export const setUserComments = (comments) => ({
  type: 'SET_USER_COMMENTS',
  payload: comments
})

export const setUserData = (data, url) => async (dispatch) => {
  const response = await axios.post(`http://localhost:5656/auth/${url}`, data)
  localStorage.setItem('user', JSON.stringify(response.data))
  dispatch(setIsAuth(true))
}


export const getProfileArticles = (id) => async (dispatch) => {
  let response = await axios.get(`http://localhost:5656/users/${id}`)
  dispatch(setUserArticles(response.data.posts.items))
  dispatch(setUserComments(response.data.comments.items))
}





