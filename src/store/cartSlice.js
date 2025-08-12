import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartProducts: []
    },
    reducers: {
        addProductToCartAction: (state,action) => {
            
            let copyCartProducts = [...state.cartProducts];

            let findIndex = null;

            copyCartProducts.find((product, index) => {

                if(product.id === action.payload.id) { 
                    findIndex = index;
                    return;
                }
            })

            if (findIndex === null) { 
                copyCartProducts.push({...action.payload, count:1, totalPrice: action.payload.price});
            } else { 
                copyCartProducts[findIndex].count++;
            }

            state.cartProducts = copyCartProducts;
        }
    }
})

export const {addProductToCartAction} = cartSlice.actions;
export default cartSlice.reducer;