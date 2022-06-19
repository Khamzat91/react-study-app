const initialState = {
data: []
}



export const articles = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}