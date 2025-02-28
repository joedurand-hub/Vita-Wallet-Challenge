export const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
            ...state,
            user: action.payload,
            isAuthenticated: true,
          };
      default:
        return state;
    }
  };