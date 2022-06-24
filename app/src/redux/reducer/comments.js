const initialState = {
  comments: []
}

export const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COMMENTS':
      console.log(action.payload)
      return {
        ...state,
        comments: action.payload
      }

    default:
      return state;
  }
}