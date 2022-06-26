import axios from "axios";
import {articles} from "../reducer/articles";


export const setComments = (comments) => ({
  type: 'SET_COMMENTS',
  payload: comments
})

export const getComments = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:5656/comments/post/${id}` )
  dispatch(setComments(response.data))
}

export const createComment = (data) => async (dispatch) => {
  const token = await JSON.parse(localStorage.getItem('user')).token
  await axios.post(`http://localhost:5656/comments`, data, {headers: {Authorization: token}})
  dispatch(getComments(data.postId))
}

export const editComment = (id, text, article) => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem('user')).token
  await axios.patch(`http://localhost:5656/comments/${id}`, {text}, {headers: {Authorization: token}})
  dispatch(getComments(article))
}

export const deleteComment = (id, article) => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem('user')).token
  await axios.delete(`http://localhost:5656/comments/${id}`, {headers: {Authorization: token}})
  dispatch(getComments(article))
}