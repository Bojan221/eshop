import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],
    isLoading: false,
  },
  reducers: {
    saveAllProductsAction: (state, action) => {
      state.allProducts = action.payload;
      state.isLoading = true;
    },
    saveProductsByCategoryAction : (state, action) => {
      state.allProducts = action.payload;
      state.isLoading = true;
    }
  },
});

export const { saveAllProductsAction, saveProductsByCategoryAction } = productSlice.actions;
export default productSlice.reducer;
