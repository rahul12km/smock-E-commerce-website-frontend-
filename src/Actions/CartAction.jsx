import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendAPI } from "../API";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await axios.get(`${backendAPI}/api/cart/all`);
  return response.data;
});

export const addCart = createAsyncThunk("cart/addToCart", async (item) => {
  const response = await axios.post(`${backendAPI}/api/cart/addcart`, item);
  return response.data;
});

export const removeCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productId) => {
    const { data } = await axios.delete(
      `${backendAPI}/api/cart/removecart/${productId}`
    );
    return data;
  }
);

export const updateCart = createAsyncThunk(
  "cart/update",
  async ({ id, qty, size }) => {
    const obj = { id, qty, size };
    const { data } = await axios.put(`${backendAPI}/api/cart/updatecart`, obj);
    return data;
  }
);
