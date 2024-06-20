const initialState = {
  currentUser: null,
  authLoading: true,
  authError: undefined,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: payload };
    case "SET_AUTH_LOADING":
      return { ...state, authLoading: payload };
    case "SET_AUTH_ERROR":
      return { ...state, authError: payload };
    default:
      return state;
  }
};

export default reducer;
