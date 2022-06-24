import axios from "axios";


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