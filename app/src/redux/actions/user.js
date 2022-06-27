import axios from "axios";


export const setIsAuth = (isAuth) => ({
  type: 'SET_IS_AUTH',
  payload: isAuth
})

export const setUserArticles = (articles) => ({
  type: 'SET_USER_ARTICLES',
  payload: articles
})


export const setUserData = (data, url) => async (dispatch) => {
  const response = await axios.post(`http://localhost:5656/auth/${url}`, data)
  localStorage.setItem('user', JSON.stringify(response.data))
  dispatch(setIsAuth(true))
}


export const getProfileArticles = (id) => async (dispatch) => {
  let response = await axios.get(`http://localhost:5656/users/${id}`)
  console.log(response)
  // dispatch(setUserArticles(response.data))
}


