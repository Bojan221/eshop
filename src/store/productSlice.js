import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],
    isLoading: false,
    selectCategory: '',
    searchProduct: '',
  },
  reducers: {
    saveAllProductsAction: (state, action) => {
      state.allProducts = action.payload;
      state.isLoading = true;
    },
    saveProductsByCategoryAction : (state, action) => {
        state.selectCategory = action.payload;
    },
    saveProductBySearchAction : (state, action) => {
        state.searchProduct = action.payload;
    }
  },

});

export const { saveAllProductsAction, saveProductsByCategoryAction,saveProductBySearchAction } = productSlice.actions;
export default productSlice.reducer;
