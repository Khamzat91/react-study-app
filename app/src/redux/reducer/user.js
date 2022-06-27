const initialState = {
  isAuth: false,
  articles: []
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_AUTH':
      return {
        ...state,
        isAuth: action.payload
      }
    case 'SET_USER_ARTICLES':
      return {
        ...state,
        articles: action.payload
      }


    default:
      return state;
  }
}