import axios from "axios";


export const setIsAuth = (isAuth) => {
  return {
    type: 'SET_IS_AUTH',
    payload: isAuth
  }
}

export const setUserData = (data, url) => async (dispatch) => {
  const response = await axios.post(`http://localhost:5656/auth/${url}`, data)
  localStorage.setItem('user', JSON.stringify(response.data))
  dispatch(setIsAuth(true))
}

