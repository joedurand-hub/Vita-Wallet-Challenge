export const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
            ...state,
            user: action.payload,
            isAuthenticated: true,
          };
        case "LOGIN_FAIL":
            return { ...state, error: action.payload };
      default:
        return state;
    }
  };