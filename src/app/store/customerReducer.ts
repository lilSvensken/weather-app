const defaultState: any = {
  customersValue: [],
};

// eslint-disable-next-line default-param-last
export const customerReducer = (state = defaultState, action: any) => {
  switch (action.type) {
  case 'ADD_MANY_CUSTOMERS':
    return {
      ...state,
      customersValue: [
        ...state.customersValue,
        ...action.payload.filter((item: any) => {
          return !state.customersValue.find((oldItem: any) => {
            return oldItem.id === item.id;
          });
        })],
    };
  case 'ADD_CUSTOMER':
    return {
      ...state,
      customersValue: [...state.customersValue, action.payload],
    };

  case 'REMOVE_CUSTOMER':
    return {
      ...state,
      customersValue: state.customersValue.filter((item: any) => item.id !== action.payload),
    };

  default:
    return state;
  }
};
