const defaultState = {
  cashValue: 0,
};

// eslint-disable-next-line default-param-last
export const cashReducer = (state = defaultState, action: any) => {
  switch (action.type) {
  case 'ADD_CASH':
    return { ...state, cashValue: state.cashValue + action.payload };

  case 'GET_CASH':
    return { ...state, cashValue: state.cashValue - action.payload };

  default:
    return state;
  }
};
