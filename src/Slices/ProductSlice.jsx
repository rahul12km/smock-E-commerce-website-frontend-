import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../Actions/ProductAction";
const initialState = {
  data: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  //This was used for handling the synchronous functions
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default productSlice.reducer;
