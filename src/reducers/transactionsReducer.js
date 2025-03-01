export const transactionsReducer = (state, action) => {
    switch (action.type) {
      case "GET_TRANSACTIONS":
        return {
            ...state,
            transactionsData: action.payload,
          };
      default:
        return state;
    }
  };