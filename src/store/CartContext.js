import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.findIndex(
      (item) => item.id === action.item.id
    );

    if (existingItemIndex !== -1) {
        console.log("testing", state);
        return state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
      } else {
      return [...state, { ...action.item, quantity: 1 }];
    }
  }

  return state;
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
