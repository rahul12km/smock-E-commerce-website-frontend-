import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendAPI } from "../API";
import Cookies from 'js-cookie';

const accessToken =Cookies.get('access_token');


export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await axios.get(`${backendAPI}/api/cart/all`,{   headers: {
    Authorization: `Bearer` + " " + accessToken,
  },});
  return response.data;
});

export const addCart = createAsyncThunk("cart/addToCart", async (item) => {
  const response = await axios.post(`${backendAPI}/api/cart/addcart`, item,{   headers: {
    Authorization: `Bearer` + " " + accessToken,
  },});
  return response.data;
});

export const removeCart = createAsyncThunk(
  "cart/removeFromCart",
  async (productId) => {
    const { data } = await axios.delete(
      `${backendAPI}/api/cart/removecart/${productId}`
    ,{   headers: {
      Authorization: `Bearer` + " " + accessToken,
    },});
    return data;
  }
);

export const updateCart = createAsyncThunk(  
  "cart/update",
  async ({ id, qty, size }) => {
    const obj = { id, qty, size };
    const { data } = await axios.put(`${backendAPI}/api/cart/updatecart`, obj,{   headers: {
      Authorization: `Bearer` + " " + accessToken,
    },});
    return data;
  }
);
