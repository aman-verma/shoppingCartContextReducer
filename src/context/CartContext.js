import { createContext, useReducer } from 'react';
import cartReducer, { initialState } from './../reducer/cartReducer';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.cartList.concat(product);
    updatePrice(updatedCart);

    dispatch({ type: 'add', payload: updatedCart });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.cartList.filter(
      (currentProduct) => currentProduct.id !== product.id
    );
    updatePrice(updatedCart);
    dispatch({ type: 'remove', payload: updatedCart });
  };

  const updatePrice = (updatedCart) => {
    let total = 0;
    updatedCart.forEach((product) => {
      total += product.price;
    });
    dispatch({ type: 'updatePrice', payload: total });
  };

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
    updatePrice,
  };
  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
