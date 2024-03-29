import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCart,
  addCart,
  removeCart,
  updateCart,
} from "../Actions/CartAction";

const updateFnc = (data, obj) => {
  try {
    const newdata = data.map((cartItem) => {
      if (cartItem._id === obj._id) {
        return obj;
      } else {
        return cartItem;
      }
    });

    return newdata;
  } catch (error) {
    console.error("Error in updateFnc:", error);
    return data;
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    loading: true,
    count: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.count += 1;
      })

      .addCase(removeCart.fulfilled, (state, action) => {
        console.log(action.payload);
        state.data = state.data.filter(
          (item) => item._id !== action.payload._id
        );
        state.count -= 1;
      })

      .addCase(updateCart.fulfilled, (state, action) => {
        state.data = updateFnc(state.data, action.payload);
      });
  },
});

export default cartSlice.reducer;
