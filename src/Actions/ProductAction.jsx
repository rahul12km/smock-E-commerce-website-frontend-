/* eslint-disable no-constant-condition */
import { backendAPI } from "../API";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      const response = await axios.get(`${backendAPI}/api/products/all`);

      // Return the data from the response
      return response.data;
    } catch (err) {
      console.error("Error fetching data:", err);
      throw err;
    }
  }
);
