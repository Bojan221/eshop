import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: JSON.parse(localStorage.getItem("cartProducts")) || [],
    countProducts: JSON.parse(localStorage.getItem("countProducts")) || 0,
    totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,
  },
  reducers: {
    addProductToCartAction: (state, action) => {
      let copyCartProducts = [...state.cartProducts];

      let findIndex = null;

      copyCartProducts.find((product, index) => {
        if (product.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

      if (findIndex === null) {
        copyCartProducts.push({
          ...action.payload,
          count: 1,
          total: action.payload.price,
        });
        state.countProducts++;
        state.totalPrice += action.payload.price;
      } else {
        copyCartProducts[findIndex].count++;
      }

      state.cartProducts = copyCartProducts;

      localStorage.setItem("cartProducts", JSON.stringify(copyCartProducts));
      localStorage.setItem(
        "countProducts",
        JSON.stringify(state.countProducts)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },

    deleteFromCartAction: (state, action) => {
      let copyCartProducts = [...state.cartProducts];

      let findIndex = null;

      copyCartProducts.find((product, index) => {
        if (product.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

      if (findIndex != null) {
        copyCartProducts.splice(findIndex, 1);
        state.countProducts--;
        state.totalPrice = subTotal(copyCartProducts);
      }

      state.cartProducts = copyCartProducts;

      localStorage.setItem("cartProducts", JSON.stringify(copyCartProducts));
      localStorage.setItem(
        "countProducts",
        JSON.stringify(state.countProducts)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    setHandlerPrice: (state, action) => {
      const { index, increment } = action.payload;
      let copyCartProducts = [...state.cartProducts];
      copyCartProducts[index].total +=
        copyCartProducts[index].price * increment;

      if (copyCartProducts[index].count === 1 && increment === -1) {
        copyCartProducts.splice(index, 1);
        state.countProducts--;
      } 
    
      copyCartProducts[index].count += increment;


      state.totalPrice = subTotal(copyCartProducts);

      state.cartProducts = copyCartProducts;

      localStorage.setItem("cartProducts", JSON.stringify(copyCartProducts));
      localStorage.setItem(
        "countProducts",
        JSON.stringify(state.countProducts)
      );
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
  },
});

function subTotal(productsArray) {
  return productsArray.reduce((acc, current) => {
    return acc + current.total;
  }, 0);
}

export const { addProductToCartAction, deleteFromCartAction, setHandlerPrice } =
  cartSlice.actions;
export default cartSlice.reducer;
