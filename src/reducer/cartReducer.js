export const initialState = {
  cartList: [],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, cartList: action.payload };
    case 'remove':
      return { ...state, cartList: action.payload };
    case 'updatePrice':
      return { ...state, total: action.payload };
    default:
      throw Error('Can not match case');
  }
};

export default cartReducer;
