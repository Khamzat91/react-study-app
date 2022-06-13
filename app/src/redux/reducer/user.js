const initialState = {
  isAuth: false
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_AUTH':
      return {
        ...state,
        isAuth: action.payload
      }

    default:
      return state;
  }
}