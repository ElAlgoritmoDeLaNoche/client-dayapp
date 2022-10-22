const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_NOTES":
      return action.payload;
    case "CREATE_NOTE":
      return [...state, action.payload];
    case "UPDATE_NOTE":
      return state.map(note => note._id === action.payload._id ? action.payload : note);
    case "DELETE_NOTE":
      return state.filter(note => note._id !== action.payload);
    default:
      return state;
  }
}

export default noteReducer