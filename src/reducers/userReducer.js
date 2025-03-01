export const userReducer = (state, action) => {
    switch (action.type) {
      case "USER_DATA":
        return {
            ...state,
            userData: action.payload,
          };
      case "USER_PRICES":
        return {
          ...state,
          userPrices: action.payload
        }
      default:
        return state;
    }
  };