"use client";

import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.findIndex(
        (product) => product.id === action.product.id
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...state];
        updatedCart[existingProductIndex].count += action.count;
        return updatedCart;
      }

      return [...state, { ...action.product, count: action.count }];

    case 'INCREASE_QUANTITY':
      return state.map((product) =>
        product.id === action.id
          ? { ...product, count: product.count + 1 }
          : product
      );

    case 'DECREASE_QUANTITY':
      return state.map((product) =>
        product.id === action.id && product.count > 1
          ? { ...product, count: product.count - 1 }
          : product
      );

    case 'REMOVE_FROM_CART':
      return state.filter((product) => product.id !== action.id);

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
