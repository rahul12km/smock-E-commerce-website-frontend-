import { createSlice } from "@reduxjs/toolkit";
import {
  fetchWishlist,
  removeWishlist,
  addWishlist,
} from "../Actions/WishlistAction";

const initialState = {
  data: [],
  loading: true,
  count: 0,
};

const wishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(addWishlist.fulfilled, (state, action) => {
        state.count += 1;
      })
      .addCase(removeWishlist.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (item) => item._id !== action.payload._id
        );
        state.count -= 1;
      });
  },
});

export default wishSlice.reducer;
