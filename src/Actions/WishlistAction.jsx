import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendAPI } from "../API";
import axios from "axios";
import Cookies from "js-cookie";

const accessToken = Cookies.get("access_token");

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    const response = await axios.get(`${backendAPI}/api/wishlist/all`, {
      headers: {
        Authorization: `Bearer` + " " + accessToken,
      },
    });
    return response.data;
  }
);

export const addWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (item) => {
    const response = await axios.post(
      `${backendAPI}/api/wishlist/addwishlist`,
      item,
      {
        headers: {
          Authorization: `Bearer` + " " + accessToken,
        },
      }
    );
    return response.data;
  }
);

export const removeWishlist = createAsyncThunk(
  "wishlist/removeFromWishlist",
  async (productId) => {
    const { data } = await axios.delete(
      `${backendAPI}/api/wishlist/removewishlist/${productId}`,
      {
        headers: {
          Authorization: `Bearer` + " " + accessToken,
        },
      }
    );

    return data;
  }
);
