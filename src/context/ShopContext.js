import { createContext, useReducer } from 'react';
import { initialState } from './shopReducer';
import shopReducer from './shopReducer';
const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updateCart = state.product.concat(product);
    updatePrice(updateCart);

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product: updateCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updateCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );

    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        product: updateCart,
      },
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));

    dispatch({
      type: 'UPDATE_PRICE',
      payload: {
        total,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };
};
