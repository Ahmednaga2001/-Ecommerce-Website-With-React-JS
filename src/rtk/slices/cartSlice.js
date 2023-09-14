import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSclice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id == action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteFromCart: (state, action) => {
      console.log(action.payload);
      const deletedProduct = state.find(
        (product) => product.id == action.payload.id
      );
      if (deletedProduct.quantity > 1) {
        deletedProduct.quantity -= 1;
      } else {
        return state.filter((product) => product.id !== action.payload.id);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});
export const { addToCart, deleteFromCart, removeFromCart, clear } =
  cartSlice.actions;
export default cartSlice.reducer;
