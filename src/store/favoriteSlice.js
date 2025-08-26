import { createSlice } from "@reduxjs/toolkit";


const favoriteSlice = createSlice({
    name: "favorite",
    initialState:{
        allFavorites: JSON.parse(localStorage.getItem("allFavorites")) || [],
        totalFavorites: JSON.parse(localStorage.getItem("totalFavorites")) || 0
    },
    reducers: {
        updateFavoriteAction: (state,action) => { 

            let copyFavorite = [...state.allFavorites];

            let findIndex = null; 

            copyFavorite.find((product, index) => {
                if(product.id === action.payload.id) { 
                  return findIndex = index;  
                } 
            })

            if(findIndex === null) { 
                copyFavorite.push(action.payload);
                state.totalFavorites++;
            } else {
                copyFavorite.splice(findIndex,1);
                state.totalFavorites--;
            }

            state.allFavorites = copyFavorite

            localStorage.setItem("allFavorites", JSON.stringify(copyFavorite));
            localStorage.setItem("totalFavorites", JSON.stringify(state.totalFavorites));
        }
    }
})


export const {updateFavoriteAction} =favoriteSlice.actions;
export default favoriteSlice.reducer;