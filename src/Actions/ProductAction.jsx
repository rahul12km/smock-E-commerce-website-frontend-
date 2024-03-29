import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendAPI } from "../API";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      const { data } = await axios.get(`${backendAPI}/api/products/all`);

      return data;
    } catch (err) {
      console.error(err);
    }
  }
);
