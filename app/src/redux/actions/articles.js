import axios from "axios";


export const setArticles = (items) => ({
  type: 'SET_ARTICLES',
  payload: items
})

export const setShowArticle = (article) => ({
  type: 'SET_SHOW_ARTICLE',
  payload: article
})


export const createArticle = (data) => async () => {
  let token = await JSON.parse(localStorage.getItem('user')).token
  await axios.post(`http://localhost:5656/posts`, data, {headers: {Authorization: token}})
}


export const getArticles = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5656/posts')
  dispatch(setArticles(response.data.items))
}


export const searchArticles = (value) => async (dispatch) => {
  let response = await axios.get(`http://localhost:5656/posts?query=${value}`)
  dispatch(setArticles(response.data.items))
}

export const showArticle = (id) => async (dispatch) => {
  let response = await axios.get(`http://localhost:5656/posts/${id}`)
  dispatch(setShowArticle(response.data))
}

export const editArticle = (id, data) => async (dispatch) => {
  let token = await JSON.parse(localStorage.getItem('user')).token
  let response = await axios.patch(`http://localhost:5656/posts/${id}`, data, {headers: {Authorization: token}})
  dispatch(response.data)
}

export const editArticleDelete = (id) => async (dispatch) => {
  let token = await JSON.parse(localStorage.getItem('user')).token
  let response = await axios.delete(`http://localhost:5656/posts/${id}`, {headers: {Authorization: token}})
  dispatch(response.data)
}