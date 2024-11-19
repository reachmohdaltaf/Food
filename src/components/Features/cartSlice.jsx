/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// Redux slice for cart management
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        toast.success('+1');
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        toast.success(`Added ${action.payload.name} to cart!`);

      }

      
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Exporting actions and reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;